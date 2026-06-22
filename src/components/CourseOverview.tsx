import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { curriculumData as calcABData } from '../data/calcABData';
import { curriculumData as calcBCData } from '../data/calcBCData'; 
import { supabase } from '../lib/supabaseClient';
import gsap from 'gsap';
import styles from './CourseOverview.module.css';

export default function CourseOverview() {
  const { courseSlug } = useParams();
  const navigate = useNavigate();
  const [expandedUnit, setExpandedUnit] = useState<string | null>(null);
  
  // AI Onboarding Modal States
  const [showAiModal, setShowAiModal] = useState(false);
  const [targetDate, setTargetDate] = useState('');
  const [thoroughness, setThoroughness] = useState('standard'); 
  const [studyGoal, setStudyGoal] = useState('ap-test'); 
  const [isGenerating, setIsAiGenerating] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);

  // Stable data reference loader
  const course = useMemo(() => {
    if (!courseSlug) return null;
    const normalizedSlug = courseSlug.toLowerCase().trim();
    let rawData = normalizedSlug.endsWith('ab') ? calcABData : calcBCData;
    if (!rawData) return null;

    if (Object.keys(rawData).some(key => key.toLowerCase().startsWith('unit-'))) {
      return rawData;
    }
    const firstKey = Object.keys(rawData)[0];
    return firstKey ? rawData[firstKey] : rawData;
  }, [courseSlug]);

  // Fluid GSAP Entry Animations
  useEffect(() => {
    if (!course) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo('.anim-header', { opacity: 0, y: -15 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out', stagger: 0.08 })
        .fromTo('.anim-unit-card', { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.05 }, '-=0.2');
    }, containerRef);
    return () => ctx.revert();
  }, [course]);

  // LOCAL BLUEPRINT FALLBACK GENERATOR ENGINE
  const generateLocalFallbackPlan = (unitKeys: string[], targetDaysTotal: number) => {
    const totalUnits = unitKeys.length || 1;
    const daysPerUnit = Math.max(Math.floor(targetDaysTotal / totalUnits), 4);
    
    let dayAccumulator = Math.min(daysPerUnit, 7);

    return unitKeys.map((key, index) => {
      const unitData = (course as any)[key];
      const currentOrder = index + 1;
      const currentDays = dayAccumulator;
      
      // Scale out the intervals evenly based on user preference adjustments
      if (thoroughness === 'deep-dive') dayAccumulator += Math.floor(daysPerUnit * 1.2);
      else if (thoroughness === 'speed-run') dayAccumulator += Math.floor(daysPerUnit * 0.8);
      else dayAccumulator += daysPerUnit;

      return {
        milestone_title: unitData?.title ? unitData.title.split(':')[0] + `: ${unitData.title.split(':')[1] || ''}` : `Unit ${currentOrder}`,
        target_days: currentDays,
        sort_order: currentOrder,
        status: currentOrder === 1 ? 'active' : 'pending'
      };
    });
  };

  // MAIN RUNNER METHOD
  const handleGenerateAiPlan = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!targetDate || isGenerating) return;
    setIsAiGenerating(true);

    let finalMilestonesArray: any[] = [];
    const unitKeys = Object.keys(course || {}).filter(k => k.startsWith('unit-'));

    // Calculate overall time offset target span between now and selected deadline day
    const dayDelta = Math.max(Math.ceil((new Date(targetDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)), 14);

    try {
      const unitsList = Object.values(course || {}).map((u: any) => u.title).join(', ');

      const systemPrompt = `Return a JSON array of chronological timeline objects matching these exact units: ${unitsList}.
      Target Completion Day Offset from today: ${dayDelta} days. Thoroughness modifier: "${thoroughness}". Goal context: "${studyGoal}".
      
      CRITICAL: You must return ONLY raw valid JSON text syntax enclosed in square brackets. Do not write text wrappers or backticks.
      Template:
      [
        {"milestone_title": "Unit 1: Name", "target_days": 10, "sort_order": 1, "status": "active"}
      ]
      Increment target_days progressively up to a max around ${dayDelta}. The first item is "active", all others are "pending".`;

      const response = await fetch('https://ai.hackclub.com/proxy/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_HACKCLUB_AI_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'openai/gpt-4o-mini',
          messages: [{ role: 'user', content: systemPrompt }],
          temperature: 0.0
        })
      });

      if (!response.ok) throw new Error("API Route unreachable.");

      const resData = await response.json();
      const rawText = resData?.choices?.[0]?.message?.content?.trim() || "";
      
      const firstBracket = rawText.indexOf('[');
      const lastBracket = rawText.lastIndexOf(']');
      
      if (firstBracket === -1 || lastBracket === -1) {
        throw new Error("No array brackets found. Falling back to local calculator.");
      }

      const cleanJsonString = rawText.substring(firstBracket, lastBracket + 1);
      finalMilestonesArray = JSON.parse(cleanJsonString);

    } catch (err) {
      console.warn('AI compilation failed or timed out. Initiating programmatic local fallback matrix calculations:', err);
      // Fallback kicks in smoothly behind the scenes
      finalMilestonesArray = generateLocalFallbackPlan(unitKeys, dayDelta);
    }

    try {
      const { data: sessionData } = await supabase.auth.getSession();
      if (sessionData?.session?.user?.id) {
        const userId = sessionData.session.user.id;
        
        // Wipe old records from DB
        await supabase.from('student_timelines').delete().eq('user_id', userId);

        const finalInsertions = finalMilestonesArray.map((m: any, index: number) => ({
          milestone_title: m.milestone_title || `Unit ${index + 1}`,
          target_days: Number(m.target_days) || (index + 1) * 14,
          sort_order: Number(m.sort_order) || index + 1,
          status: m.status || (index === 0 ? "active" : "pending"),
          user_id: userId
        }));

        await supabase.from('student_timelines').insert(finalInsertions);
        
        // Lock user profile record target tracker updated
        await supabase.from('profiles').update({ current_course: courseSlug }).eq('id', userId);
        
        navigate('/planner');
      }
    } catch (dbErr) {
      console.error('Supabase write pipeline execution block breakdown:', dbErr);
    } finally {
      setIsAiGenerating(false);
      setShowAiModal(false);
    }
  };

  if (!course) {
    return (
      <div className={styles.container}>
        <button onClick={() => navigate('/lessons')} className={styles.backBtn}>← Back to Catalog</button>
        <h2>Course curriculum data not found.</h2>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={styles.container}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <button onClick={() => navigate('/lessons')} className={`${styles.backBtn} anim-header`}>← Back to Catalog</button>
        
        <button 
          type="button"
          onClick={() => setShowAiModal(true)} 
          className="anim-header"
          style={{
            background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
            color: '#fff',
            border: 'none',
            padding: '0.65rem 1.25rem',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 600,
            boxShadow: '0 4px 12px rgba(236, 72, 153, 0.25)'
          }}
        >
          🪄 Create Custom Study Plan
        </button>
      </div>
      
      <h1 className={`${styles.courseTitle} anim-header`}>
        {(courseSlug || "").split('-').map(w => w.toUpperCase()).join(' ')}
      </h1>
      <p className={`${styles.subtitle} anim-header`}>Select a unit to view its lessons or click above to build an AI timeline roadmap.</p>

      <div className={styles.unitList}>
        {Object.entries(course).map(([unitKey, unitData]: [string, any]) => {
          const isExpanded = expandedUnit === unitKey;
          return (
            <div key={unitKey} className={`${styles.unitCard} anim-unit-card`}>
              <button 
                type="button"
                className={`${styles.unitHeader} ${isExpanded ? styles.headerActive : ''}`} 
                onClick={() => setExpandedUnit(isExpanded ? null : unitKey)}
              >
                <h3>{unitData.title}</h3>
                <span className={styles.icon} style={{ transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }}>▶</span>
              </button>
              <div className={styles.accordionContent} style={{ maxHeight: isExpanded ? `${unitData.lessons.length * 70 + 40}px` : '0px', opacity: isExpanded ? 1 : 0, transition: 'max-height 0.3s ease, opacity 0.3s ease', overflow: 'hidden' }}>
                <div className={styles.lessonList}>
                  {unitData.lessons.map((lesson: any) => (
                    <button key={lesson.id} type="button" className={styles.lessonItem} onClick={() => navigate(`/lessons/${courseSlug}/${unitKey}/${lesson.id}`)}>
                      <span className={styles.lessonId}>{lesson.id}</span>
                      <span className={styles.lessonTopic}>{lesson.topic}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* QUESTIONNAIRE OVERLAY MODAL */}
      {showAiModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(5, 7, 15, 0.85)', backdropFilter: 'blur(8px)', display: 'grid', placeItems: 'center', zIndex: 1000, padding: '2rem', boxSizing: 'border-box' }}>
          <form onSubmit={handleGenerateAiPlan} style={{ background: '#0d1117', border: '1px solid #30363d', borderRadius: '16px', padding: '2.5rem', width: '100%', maxWidth: '480px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#fff', fontSize: '1.5rem', fontWeight: 700 }}>🪄 Customize Your Path</h3>
              <p style={{ color: '#8b949e', fontSize: '0.9rem', margin: 0 }}>Answer a few quick questions to generate your pacing schedule.</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ color: '#c9d1d9', fontSize: '0.85rem', fontWeight: 600 }}>When do you want to finish the course?</label>
              <input type="date" required value={targetDate} onChange={e => setTargetDate(e.target.value)} style={{ background: '#161b22', border: '1px solid #30363d', color: '#fff', padding: '0.6rem', borderRadius: '8px', fontSize: '0.95rem' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ color: '#c9d1d9', fontSize: '0.85rem', fontWeight: 600 }}>What pace do you prefer?</label>
              <select value={thoroughness} onChange={e => setThoroughness(e.target.value)} style={{ background: '#161b22', border: '1px solid #30363d', color: '#fff', padding: '0.6rem', borderRadius: '8px', fontSize: '0.95rem' }}>
                <option value="standard">Balanced Pace (Thorough Review)</option>
                <option value="speed-run">Speed Run (Accelerated Core Concepts)</option>
                <option value="deep-dive">Deep Dive (Comprehensive Mastery)</option>
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ color: '#c9d1d9', fontSize: '0.85rem', fontWeight: 600 }}>What are you preparing for?</label>
              <select value={studyGoal} onChange={e => setStudyGoal(e.target.value)} style={{ background: '#161b22', border: '1px solid #30363d', color: '#fff', padding: '0.6rem', borderRadius: '8px', fontSize: '0.95rem' }}>
                <option value="ap-test">The Official AP Exam</option>
                <option value="unit-test">Upcoming School Unit Tests</option>
                <option value="quiz">Quick Chapter Quiz Prep</option>
                <option value="self-study">Self-Paced Conceptual Exploration</option>
              </select>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <button type="button" onClick={() => setShowAiModal(false)} className={styles.backBtn} style={{ flex: 1, margin: 0, padding: '0.6rem' }} disabled={isGenerating}>
                Cancel
              </button>
              <button type="submit" style={{ flex: 2, background: 'linear-gradient(135deg, #ec4899, #8b5cf6)', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: isGenerating ? 'not-allowed' : 'pointer', padding: '0.6rem' }} disabled={isGenerating}>
                {isGenerating ? '🪄 Compiling Plan...' : 'Compile Roadmap'}
              </button>
            </div>
          </form>
        </div>
      )}

    </div>
  );
}