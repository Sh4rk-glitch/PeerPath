import React, { useState, useLayoutEffect, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import type { Session } from '@supabase/supabase-js'
import { supabase } from '../lib/supabaseClient'
import { gsap } from 'gsap'
import styles from './DashboardHome.module.css'

type Props = {
  session: Session
}

type Milestone = { id: string; milestone_title: string; target_days: number; status: string; created_at?: string }

export default function DashboardHome({ session }: Props) {
  const navigate = useNavigate()
  const [dbLoading, setDbLoading] = useState(true)
  const [isReady, setIsReady] = useState(false) 

  const [username, setUsername] = useState('Learner')
  const [isEditingUsername, setIsEditingUsername] = useState(false)
  const [usernameInput, setUsernameInput] = useState('')
  
  const [xpPoints, setXpPoints] = useState(0)
  const [streakCount, setStreakCount] = useState(0)
  const [masteryPoints, setMasteryPoints] = useState(0)
  
  const [lessonsCount, setLessonsCount] = useState(0)
  const [accuracyRating, setAccuracyRating] = useState(0)
  const [savedConcepts, setSavedConcepts] = useState(0)
  const [daysUntilReview, setDaysUntilReview] = useState(0)
  const [isPlanCreated, setIsPlanCreated] = useState(false)

  const [timelineMilestones, setTimelineMilestones] = useState<Milestone[]>([])
  const [isTimelineInitialized, setIsTimelineInitialized] = useState(false)
  const [activeCourseSlug, setActiveCourseSlug] = useState<string>('ap-calculus-ab')

  // --- ANIMATION REFERENCE NODES ---
  const containerRef = useRef<HTMLDivElement | null>(null)
  const bannerRef = useRef<HTMLDivElement | null>(null)
  const countdownRef = useRef<HTMLDivElement | null>(null)
  const statsGridRef = useRef<HTMLDivElement | null>(null)
  const mainPlanRef = useRef<HTMLDivElement | null>(null)
  const sideColRef = useRef<HTMLDivElement | null>(null)
  const cardsContainerRef = useRef<HTMLDivElement | null>(null)

  // 1. DATA INITIALIZATION & SYNC
  useEffect(() => {
    async function loadDashboardData() {
      if (!session?.user) return
      try {
        const user = session.user
        const defaultName = user.email ? user.email.split('@')[0] : 'Learner'

        const { data: profile } = await supabase.from('profiles').select('*').eq('id', user.id).maybeSingle()
        const { data: statsData } = await supabase.from('student_stats').select('*').eq('user_id', user.id).maybeSingle()
        const { data: timelineData } = await supabase.from('student_timelines').select('*').eq('user_id', user.id).order('sort_order', { ascending: true })

        if (profile) {
          setUsername(profile.username || defaultName)
          setUsernameInput(profile.username || defaultName)
          setXpPoints(profile.xp_points ?? 0)
          setStreakCount(profile.study_streak ?? 0)
          setMasteryPoints(profile.current_rating ?? 0)
          if (profile.current_course) {
            setActiveCourseSlug(profile.current_course.toLowerCase().trim())
          }
        }

        if (statsData) {
          setLessonsCount(statsData.lessons_completed ?? 0)
          setAccuracyRating(statsData.current_accuracy ?? 0)
          setSavedConcepts(statsData.saved_concepts_count ?? 0)
          setDaysUntilReview(statsData.days_until_review ?? 0)
        }

        if (timelineData && timelineData.length > 0) {
          const calculatedMilestones = timelineData.map((milestone) => {
            const createdDate = milestone.created_at ? new Date(milestone.created_at) : new Date()
            const targetDeadline = new Date(createdDate.getTime())
            targetDeadline.setDate(targetDeadline.getDate() + (milestone.target_days || 4))
            const timeDifference = targetDeadline.getTime() - new Date().getTime()
            const remainingDays = Math.max(Math.ceil(timeDifference / (1000 * 60 * 60 * 24)), 0)

            return { ...milestone, target_days: remainingDays }
          })
          setTimelineMilestones(calculatedMilestones)
          setIsTimelineInitialized(true)
        }
      } catch (err) {
        console.error('Error syncing layout metrics:', err)
      } finally {
        setDbLoading(false)
        setIsReady(true) 
      }
    }
    loadDashboardData()
  }, [session])

  // 2. KINETIC CINEMATIC ENTRANCE SEQUENCING
  useLayoutEffect(() => {
    if (!isReady || dbLoading || !containerRef.current) return

    const ctx = gsap.context(() => {
      gsap.set([bannerRef.current, countdownRef.current, mainPlanRef.current], { opacity: 0, y: 50, rotateX: -10, transformOrigin: "top center" })
      if (statsGridRef.current) gsap.set(statsGridRef.current.children, { opacity: 0, scale: 0.9, y: 40, transformOrigin: "center center" })
      if (sideColRef.current) gsap.set(sideColRef.current.children, { opacity: 0, x: 40, skewX: -5 })

      const tl = gsap.timeline({ defaults: { ease: 'elastic.out(1, 0.75)', duration: 0.9 } })
      
      tl.to(bannerRef.current, { opacity: 1, y: 0, rotateX: 0 })
        .to(countdownRef.current, { opacity: 1, y: 0, rotateX: 0 }, '>-0.65')
        .to(statsGridRef.current!.children, { opacity: 1, scale: 1, y: 0, stagger: 0.06 }, '>-0.5')
        .to(mainPlanRef.current, { opacity: 1, y: 0, rotateX: 0 }, '>-0.55')
        .to(sideColRef.current!.children, { opacity: 1, x: 0, skewX: 0, stagger: 0.06 }, '>-0.45')

      animateCounter(document.getElementById('home-grid-accuracy'), accuracyRating, 1.5, '%')
      animateCounter(document.getElementById('home-grid-mastery'), masteryPoints, 1.8, '')

      if (isTimelineInitialized && cardsContainerRef.current) {
        tl.fromTo(cardsContainerRef.current.children, 
          { opacity: 0, scale: 0.85, x: 80, rotateY: 25 },
          { opacity: 1, scale: 1, x: 0, rotateY: 0, stagger: 0.06, ease: 'power3.out', duration: 0.55 },
          '>-0.25' 
        )
      }
    }, containerRef)

    return () => ctx.revert()
  }, [isReady, dbLoading, isTimelineInitialized])

  const animateCounter = (el: HTMLElement | null, targetValue: number, duration: number, suffix: string) => {
    if (!el) return 
    const obj = { value: 0 }
    gsap.to(obj, {
      value: targetValue,
      duration: duration,
      ease: 'power3.out',
      onUpdate: () => { el.textContent = Math.floor(obj.value) + suffix }
    })
  }

  // 3. 3D CARD ROTATION HANDLERS
  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    
    gsap.to(card, {
      rotateX: -y * 0.12,
      rotateY: x * 0.12,
      transformPerspective: 600,
      ease: 'power1.out',
      duration: 0.2
    })
  }

  const handleCardMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, { rotateX: 0, rotateY: 0, ease: 'power2.out', duration: 0.4 })
  }

  const handleUpdateUsername = async () => {
    if (!usernameInput.trim() || usernameInput === username) {
      setIsEditingUsername(false)
      return
    }
    const { error } = await supabase.from('profiles').update({ username: usernameInput }).eq('id', session.user.id)
    if (!error) {
      setUsername(usernameInput)
      setIsEditingUsername(false)
    }
  }

  const handleCreatePlan = async () => {
    const newXp = xpPoints + 50
    const newLessons = lessonsCount + 1
    const newAccuracy = 100
    const newMastery = Math.floor((newLessons * 15) + (newAccuracy * 1.2))

    await supabase.from('profiles').update({ xp_points: newXp, current_rating: newMastery }).eq('id', session.user.id)
    await supabase.from('student_stats').update({ lessons_completed: newLessons, current_accuracy: newAccuracy }).eq('user_id', session.user.id)

    setXpPoints(newXp)
    setLessonsCount(newLessons)
    setAccuracyRating(newAccuracy)
    setMasteryPoints(newMastery)
    setIsPlanCreated(true)
  }

  const handleInitializeTimeline = async () => {
    const mockRoadmap = [
      { milestone_title: 'Unit 1: Limits', target_days: 4, sort_order: 1, status: 'completed' },
      { milestone_title: 'Unit 2: Differentiation', target_days: 8, sort_order: 2, status: 'pending' },
      { milestone_title: 'Unit 6: Integration', target_days: 12, sort_order: 3, status: 'pending' },
      { milestone_title: 'Unit 10: Sequences & Series', target_days: 16, sort_order: 4, status: 'pending' }
    ]
    const insertions = mockRoadmap.map(row => ({ ...row, user_id: session.user.id }))
    const { data, error = null } = await supabase.from('student_timelines').insert(insertions).select()

    if (!error && data) {
      setXpPoints(prev => prev + 100)
      setTimelineMilestones(data)
      setIsTimelineInitialized(true)
    }
  }

  if (dbLoading || !isReady) {
    return (
      <div style={{ 
        background: '#05070f', 
        height: '100vh', 
        width: '100%',
        display: 'flex', 
        flexDirection: 'column',
        gap: '1.5rem',
        placeItems: 'center', 
        justifyContent: 'center',
        color: '#fff',
        fontFamily: 'sans-serif'
      }}>
        <style>{`
          @keyframes peerPathPulse {
            0% { transform: scale(0.96); opacity: 0.4; filter: drop-shadow(0 0 8px rgba(255,255,255,0.05)); }
            50% { transform: scale(1.02); opacity: 0.95; filter: drop-shadow(0 0 25px rgba(255,255,255,0.15)); }
            100% { transform: scale(0.96); opacity: 0.4; filter: drop-shadow(0 0 8px rgba(255,255,255,0.05)); }
          }
          .logo-pulse-engine {
            animation: peerPathPulse 2s infinite cubic-bezier(0.4, 0, 0.2, 1);
          }
        `}</style>

        <svg 
          className="logo-pulse-engine"
          width="90" 
          height="90" 
          viewBox="0 0 412 370" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M 72 350 L 72 45 C 72 45, 170 30, 240 60 C 310 90, 260 175, 190 180 C 120 185, 75 220, 52 280 M 52 295 C 75 235, 130 210, 210 205 C 290 200, 350 140, 280 65 C 210 -10, 36 -2, 36 45 L 36 366 L 90 366 L 90 350 Z" 
            fill="url(#silverGradient)" 
          />
          <path 
            d="M 52 290 C 85 225, 160 190, 260 145 C 320 118, 335 105, 375 75 L 335 60 L 400 40 L 375 115 L 355 86 C 315 115, 290 135, 245 158 C 150 202, 80 240, 48 310 Z" 
            fill="url(#silverGradient)" 
          />
          <defs>
            <linearGradient id="silverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f3f4f6" />
              <stop offset="35%" stopColor="#d1d5db" />
              <stop offset="70%" stopColor="#9ca3af" />
              <stop offset="100%" stopColor="#e5e7eb" />
            </linearGradient>
          </defs>
        </svg>

        <span style={{ fontSize: '0.85rem', fontWeight: 500, color: '#475569', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          Syncing Workspace Paths...
        </span>
      </div>
    )
  }

  return (
    <div ref={containerRef} style={{ width: '100%', minHeight: '100%', opacity: isReady ? 1 : 0, transition: 'opacity 0.15s ease' }}>
      
      {/* 1. HERO BANNER */}
      <section className={styles.welcomeBanner}>
        <div ref={bannerRef} className={styles.bannerLeft}>
          <div className={styles.usernameEditorWrapper}>
            {isEditingUsername ? (
              <div className={styles.editInputGroup}>
                <input type="text" value={usernameInput} onChange={(e) => setUsernameInput(e.target.value)} className={styles.usernameInputField} maxLength={18} autoFocus />
                <button onClick={handleUpdateUsername} className={styles.saveUsernameBtn}>Save</button>
              </div>
            ) : (
              <h1 className={styles.welcomeHeading}>
                Good afternoon, <span className={styles.highlightName}>{username}</span>
                <button onClick={() => setIsEditingUsername(true)} className={styles.editUsernamePenIcon}>✏️</button>
              </h1>
            )}
          </div>
          <p>Ready to master your next path? Let's start by building today's custom layout path.</p>
          <button className={styles.primaryActionBtn} onClick={handleCreatePlan} disabled={isPlanCreated}>
            {isPlanCreated ? 'Plan Compiled ✓' : "Create today's lesson plan"}
          </button>
        </div>
        <div ref={countdownRef} className={styles.countdownCard}>
          <span className={styles.cardLabel}>Next Target Milestone</span>
          <div className={styles.countdownDigits}>69 <span className={styles.unit}>days</span></div>
          <p className={styles.countdownSub}>Saturday, August 22</p>
        </div>
      </section>

      {/* 2. STATS SUMMARIES GRID */}
      <section className={styles.analyticsSection}>
        <h3 className={styles.gridHeading}>Your Performance Summary</h3>
        <div ref={statsGridRef} className={styles.analyticsGrid}>
          {[
            { label: 'Lessons Completed', val: lessonsCount, sub: 'Real-time DB synced', id: null },
            { label: 'Current Accuracy', val: `${accuracyRating}%`, sub: 'Intuition checks', id: 'home-grid-accuracy' },
            { label: 'Saved Concepts', val: savedConcepts, sub: 'Review paths', id: null },
            { label: 'Study Streak', val: `${streakCount} days`, sub: 'Keep momentum!', id: null }
          ].map((item, idx) => (
            <div key={idx} className={styles.statCard} style={{ background: 'rgba(13, 17, 23, 0.65)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.04)' }}>
              <span className={styles.statLabel}>{item.label}</span>
              <div id={item.id || undefined} className={styles.statValue}>{item.val}</div>
              <span className={styles.statDetail}>{item.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CAROUSEL DECK MODULE */}
      <section className={styles.studyPlanRow}>
        <div ref={mainPlanRef} style={{ flex: 1, background: '#060911', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '24px', padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', minHeight: '390px', overflow: 'hidden' }}>
          {isTimelineInitialized ? (
            <>
              <h4 style={{ margin: 0, color: '#ffffff', fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#ec4899', textShadow: '0 0 12px #ec4899' }}>✦</span> Your Personalized Curriculum Path
              </h4>
              
              <div 
                ref={cardsContainerRef}
                style={{ 
                  display: 'flex', 
                  gap: '1.75rem', 
                  overflowX: 'auto', 
                  padding: '1.5rem 0.5rem 2rem 0.5rem', 
                  width: '100%',
                  boxSizing: 'border-box',
                  perspective: '1200px',
                  justifyContent: timelineMilestones.length <= 3 ? 'center' : 'flex-start'
                }}
              >
                {timelineMilestones.map((milestone, idx) => {
                  // 🌟 LIFE-CYCLE LOGIC CALCULATION: Override pending states sequentially
                  let computedStatus = milestone.status.toLowerCase().trim();
                  
                  if (computedStatus === 'pending' || computedStatus === 'active') {
                    const isFirstStep = idx === 0;
                    const isPreviousCompleted = idx > 0 && timelineMilestones[idx - 1].status.toLowerCase().trim() === 'completed';
                    
                    if (isFirstStep || isPreviousCompleted) {
                      computedStatus = 'active';
                    } else {
                      computedStatus = 'pending';
                    }
                  }

                  const isCompleted = computedStatus === 'completed';
                  const isActive = computedStatus === 'active';

                  return (
                    <div
                      key={milestone.id || idx}
                      onMouseMove={handleCardMouseMove}
                      onMouseLeave={handleCardMouseLeave}
                      onClick={() => navigate(`/lessons/${activeCourseSlug}/unit-${idx + 1}`)}
                      style={{
                        flex: '0 0 270px',
                        background: isActive ? 'linear-gradient(135deg, #131a2a, #090d16)' : '#0a0d14',
                        // Applying the targeted glow-borders cleanly based on the computed calculations
                        border: `1px solid ${isActive ? '#38bdf8' : isCompleted ? '#2ea043' : 'rgba(255,255,255,0.03)'}`,
                        borderRadius: '18px',
                        padding: '1.75rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: '210px',
                        cursor: 'pointer',
                        boxSizing: 'border-box',
                        transformStyle: 'preserve-3d',
                        boxShadow: isActive ? '0 0 25px rgba(56, 189, 248, 0.06)' : 'none',
                        transition: 'box-shadow 0.3s ease, border-color 0.3s ease'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', transform: 'translateZ(20px)' }}>
                        <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                          Step 0{idx + 1}
                        </span>
                        <span style={{
                          fontSize: '0.65rem',
                          padding: '0.35rem 0.75rem',
                          borderRadius: '20px',
                          fontWeight: 800,
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          background: isCompleted ? 'rgba(46,160,67,0.12)' : isActive ? 'rgba(56,189,248,0.15)' : 'rgba(255,255,255,0.04)',
                          color: isCompleted ? '#56d364' : isActive ? '#38bdf8' : '#475569',
                          border: isActive ? '1px solid rgba(56, 189, 248, 0.2)' : '1px solid transparent'
                        }}>
                          {isCompleted ? '✓ completed' : isActive ? '✦ start now' : 'pending'}
                        </span>
                      </div>

                      <p style={{ margin: '1.25rem 0 auto 0', color: '#ffffff', fontSize: '14px', fontWeight: 600, lineHeight: '1.5', transform: 'translateZ(30px)' }}>
                        {milestone.milestone_title}
                      </p>

                      <div style={{ transform: 'translateZ(20px)', borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: '0.85rem', marginTop: '0.5rem', display: 'flex', alignItems: 'baseline', gap: '5px' }}>
                        <span style={{ color: isActive ? '#38bdf8' : isCompleted ? '#2ea043' : '#ffffff', fontSize: '1.5rem', fontWeight: 800 }}>
                          {milestone.target_days}
                        </span>
                        <span style={{ color: '#475569', fontSize: '0.75rem', fontWeight: 600 }}>
                          days remaining
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </>
          ) : (
            <div className={styles.emptyPlanContent}>
              <div className={styles.illustrationPlaceholder}><span>✦</span><span>▲</span><span>●</span></div>
              <h3>Generate your master timeline path</h3>
              <p>Get a highly custom progression roadmap built strictly around your concept strengths and accuracy speeds.</p>
              <button className={styles.secondaryActionBtn} onClick={handleInitializeTimeline}>Initialize tracking map</button>
            </div>
          )}
        </div>

        <div ref={sideColRef} className={styles.sideMetricCol}>
          <div className={styles.metricCard}>
            <span className={styles.statLabel}>Concept Mastery Velocity</span>
            <div id="home-grid-mastery" className={styles.metricValue}>{masteryPoints}</div>
            <span className={styles.statDetail}>Compound conceptual momentum</span>
          </div>
          <div className={styles.metricCard}>
            <span className={styles.statLabel}>Days Until Review</span>
            <div className={styles.metricValue} style={{ color: '#ffb0b0' }}>{daysUntilReview}</div>
            <span className={styles.statDetail}>Concepts requiring maintenance</span>
          </div>
        </div>
      </section>
    </div>
  )
}