import React, { useEffect, useMemo, useState, useLayoutEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { curriculumData as calcABData } from '../data/calcABData';
import { curriculumData as calcBCData } from '../data/calcBCData'; 
import QuizEngine from './QuizEngine';
import { gsap } from 'gsap';
import { supabase } from '../lib/supabaseClient';
import './LessonsPage.css'; 

function RateOfChangeAnimation() {
  return <div style={{ padding: '1rem', background: '#1e293b', borderRadius: '8px', margin: '1rem 0', color: '#38bdf8' }}>📊 Interactive Rate of Change Workspace Active</div>;
}

export default function LessonsPage() {
  const { courseSlug, unitId, lessonId } = useParams();
  const navigate = useNavigate();
  
  const [isReady, setIsReady] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  const [aiQuestions, setAiQuestions] = useState<any[]>([]);
  const [isGeneratingAiQuestion, setIsGeneratingAiQuestion] = useState(false);

  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const currentCurriculum = useMemo(() => {
    const slug = (courseSlug || "").toLowerCase().trim();
    return (slug.endsWith('ab')) ? calcABData : calcBCData;
  }, [courseSlug]);

  const course = useMemo(() => {
    if (!currentCurriculum) return {};
    if (Object.keys(currentCurriculum).some(key => key.toLowerCase().startsWith('unit-'))) {
      return currentCurriculum;
    }
    const firstKey = Object.keys(currentCurriculum)[0];
    return firstKey ? currentCurriculum[firstKey] : currentCurriculum;
  }, [currentCurriculum]);

  const unit = useMemo(() => {
    if (!course || !unitId) return null;
    
    const targetKey = unitId.toLowerCase().trim();
    if (course[unitId]) return course[unitId];
    if (course[targetKey]) return course[targetKey];
    
    const foundKey = Object.keys(course).find(
      k => k.toLowerCase().trim() === targetKey || k.toLowerCase().replace(' ', '-') === targetKey
    );
    
    return foundKey ? course[foundKey] : null;
  }, [course, unitId]);

  useEffect(() => {
    setAiQuestions([]);
  }, [lessonId]);

  useEffect(() => {
    if (!unit || !unit.lessons || unit.lessons.length === 0) {
      setIsReady(true);
      return;
    }
    
    if (!lessonId) {
      navigate(`/lessons/${courseSlug}/${unitId}/${unit.lessons[0].id}`, { replace: true });
    } else {
      const t = setTimeout(() => setIsReady(true), 50);
      return () => clearTimeout(t);
    }
  }, [lessonId, unit, courseSlug, unitId, navigate]);

  const current = useMemo(() => {
    if (!unit || !unit.lessons || unit.lessons.length === 0 || !lessonId) return null;
    
    const normalizedParamId = lessonId.replace('-', '.').trim(); 
    
    return unit.lessons.find((l: any) => {
      const targetId = String(l.id).toLowerCase().trim();
      return targetId === lessonId.toLowerCase().trim() || targetId === normalizedParamId;
    }) || unit.lessons[0];
  }, [unit, lessonId]);

  useLayoutEffect(() => {
    if (!isReady || hasMounted || !sidebarRef.current) return;

    const ctx = gsap.context(() => {
      if (sidebarRef.current && sidebarRef.current.children.length > 0) {
        gsap.fromTo(sidebarRef.current.children, 
          { opacity: 0, x: -25 },
          { opacity: 1, x: 0, stagger: 0.04, ease: 'power4.out', duration: 0.5, onComplete: () => setHasMounted(true) }
        );
      }
    });

    return () => ctx.revert();
  }, [isReady, hasMounted]); 

  useLayoutEffect(() => {
    if (!isReady || !current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(['.calc-header', '.calc-video-wrapper', '.calc-quiz-container', '.infinite-practice-pane'], 
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, stagger: 0.05, ease: 'power3.out', duration: 0.4 }
      );
    });

    return () => ctx.revert();
  }, [isReady, lessonId, current]); 

  // 🌟 FIX: Calls your backend function to bypass the CORS proxy block
  const fetchInfiniteAiQuestion = async () => {
    if (isGeneratingAiQuestion || !current) return;
    setIsGeneratingAiQuestion(true);

    try {
      // Secure execution call straight into your backend server function layer
      const { data, error } = await supabase.functions.invoke('generate-practice-question', {
        body: { topic: current.topic }
      });

      if (error) throw error;

      // Handle both pure strings and auto-parsed response dictionaries safely
      const rawText = (typeof data === 'string' ? data : JSON.stringify(data)).trim();
      
      const firstCurly = rawText.indexOf('{');
      const lastCurly = rawText.lastIndexOf('}');
      
      if (firstCurly === -1 || lastCurly === -1) {
        throw new Error("Missing structured JSON payload maps inside system response text.");
      }

      const cleanJsonString = rawText.substring(firstCurly, lastCurly + 1);
      const rawParsedObj = JSON.parse(cleanJsonString);

      const normalizedQuestion = {
        question: rawParsedObj.question || rawParsedObj.text || "Concept evaluation query:",
        options: Array.isArray(rawParsedObj.options) && rawParsedObj.options.length > 0 ? rawParsedObj.options : ["Option A", "Option B", "Option C", "Option D"],
        correctAnswer: typeof rawParsedObj.correctAnswer === 'number' ? rawParsedObj.correctAnswer :
                       typeof rawParsedObj.correct_answer === 'number' ? rawParsedObj.correct_answer : 0
      };

      setAiQuestions(prev => [...prev, normalizedQuestion]);
    } catch (err) {
      console.error("AI composition parser error details:", err);
      alert(`Error compiling question: ${err instanceof Error ? err.message : 'Check configuration logs.'}`);
    } finally {
      setIsGeneratingAiQuestion(false);
    }
  };

  return (
    <div className="calc-page-container" style={{ opacity: isReady ? 1 : 0, transition: 'opacity 0.2s ease-in-out' }}>
      
      <aside ref={sidebarRef} className="calc-sidebar">
        <h3>{unit?.title || "Curriculum Path"}</h3>
        {unit?.lessons && unit.lessons.length > 0 ? (
          unit.lessons.map((lesson: any) => {
            const isLessonActive = current && (current.id === lesson.id || String(lesson.id) === lessonId?.replace('-', '.'));
            return (
              <button 
                key={lesson.id} 
                type="button"
                className={`calc-lesson-btn ${isLessonActive ? 'active' : ''}`}
                onClick={() => navigate(`/lessons/${courseSlug}/${unitId}/${lesson.id}`)}
              >
                {lesson.topic}
              </button>
            )
          })
        ) : (
          <div style={{ color: '#475569', fontSize: '0.85rem', padding: '1rem' }}>No lessons found.</div>
        )}
      </aside>

      <main className="calc-workspace">
        {!unit || !unit.lessons || unit.lessons.length === 0 ? (
          <div style={{ padding: '4rem', textAlign: 'center', color: '#8b949e' }}>
            <h3>Curriculum Block Unreachable</h3>
            <p style={{ fontSize: '0.9rem', color: '#475569', marginBottom: '1.5rem' }}>Lessons are currently being populated for this track.</p>
            <button onClick={() => navigate(`/overview/${courseSlug}`)} className="calc-back-btn">← Return to Overview</button>
          </div>
        ) : !current ? (
          <div style={{ color: 'white', padding: '2rem', textAlign: 'center' }}>Resolving workspace coordinates...</div>
        ) : (
          <>
            <div className="calc-header">
              <button onClick={() => navigate(`/overview/${courseSlug}`)} className="calc-back-btn">← Unit Overview</button>
              <h2>{current.topic}</h2>
            </div>
            
            <div className="calc-video-wrapper">
               {current.videoId ? (
                 <iframe
                   key={current.videoId}
                   src={`https://www.youtube.com/embed/${current.videoId}?rel=0`}
                   title={current.topic}
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                   allowFullScreen
                   className="calc-iframe"
                 />
               ) : (
                 <div style={{ padding: '4rem', textAlign: 'center', color: 'gray' }}>No video available for this lesson.</div>
               )}
            </div>

            {current.id === "1.1" && <RateOfChangeAnimation />}

            {current.quiz && current.quiz.length > 0 && (
              <div className="calc-quiz-container" style={{ marginTop: '2rem' }}>
                <h3 className="calc-quiz-title">Intuition Check</h3>
                <QuizEngine 
                  questions={current.quiz} 
                  onQuizComplete={async (finalScore: number, totalQuestions: number) => {
                    const { data: sessionData } = await supabase.auth.getSession();
                    if (!sessionData?.session?.user) return;
                    const userId = sessionData.session.user.id;

                    const accuracyPercentage = Math.round((finalScore / totalQuestions) * 100);
                    const { data: profile } = await supabase.from('profiles').select('xp_points, study_streak').eq('id', userId).maybeSingle();
                    
                    await supabase.from('profiles').update({ 
                      xp_points: (profile?.xp_points || 0) + 45, 
                      study_streak: (profile?.study_streak || 0) === 0 ? 1 : profile?.study_streak || 1 
                    }).eq('id', userId);
                    
                    await supabase.from('student_stats').upsert({ 
                      user_id: userId,
                      current_accuracy: accuracyPercentage,
                      lessons_completed: 1,
                      days_until_review: 3
                    }, { onConflict: 'user_id' });

                    const exactUnitIndex = parseInt(unitId?.replace(/^\D+/g, '') || '1', 10);
                    await supabase.from('student_timelines').update({ status: 'completed' }).eq('user_id', userId).eq('sort_order', exactUnitIndex);
                  }}
                />
              </div>
            )}

            <div className="infinite-practice-pane" style={{ marginTop: '2.5rem', borderTop: '1px dashed #30363d', paddingTop: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', background: '#0c0f17', border: '1px solid #1f293d', padding: '1.5rem', borderRadius: '14px' }}>
                <div>
                  <h4 style={{ margin: 0, color: '#ffffff', fontSize: '1.15rem', fontWeight: 700 }}>Endless Concept Training Arena</h4>
                  <p style={{ margin: '0.35rem 0 0 0', color: '#8b949e', fontSize: '0.85rem' }}>Finished your assignment standard loops? Compile endless dynamic validation checks on the fly.</p>
                </div>
                
                <button
                  type="button"
                  onClick={fetchInfiniteAiQuestion}
                  disabled={isGeneratingAiQuestion}
                  style={{
                    background: 'linear-gradient(135deg, #38bdf8, #8b5cf6)',
                    color: '#fff',
                    border: 'none',
                    padding: '0.65rem 1.25rem',
                    borderRadius: '8px',
                    fontWeight: 600,
                    cursor: isGeneratingAiQuestion ? 'not-allowed' : 'pointer'
                  }}
                >
                  {isGeneratingAiQuestion ? 'Manufacturing Task...' : '🪄 Generate AI Practice Check'}
                </button>
              </div>

              {aiQuestions.length > 0 && (
                <div className="calc-quiz-container" style={{ border: '1px solid #ec4899', background: 'rgba(236,72,153,0.01)', padding: '2rem', borderRadius: '16px' }}>
                  <span style={{ color: '#ec4899', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', display: 'block', marginBottom: '1rem', letterSpacing: '0.05em' }}>
                    ✦ Active Infinite AI Module Array Block
                  </span>
                  <QuizEngine questions={aiQuestions} />
                </div>
              )}
            </div>
          </>
        )}
      </main>
    </div>
  );
}