import React, { useState, useLayoutEffect, useEffect, useRef } from 'react'
import type { Session } from '@supabase/supabase-js'
import { supabase } from '../lib/supabaseClient'
import { gsap } from 'gsap'
import styles from './DashboardHome.module.css'

type Props = {
  session: Session
}

type Milestone = { id: string; milestone_title: string; target_days: number; status: string }

export default function DashboardHome({ session }: Props) {
  const [dbLoading, setDbLoading] = useState(true)
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
  
  // Array holding calculated coordinates for node placement
  const [nodePositions, setNodePositions] = useState<{ x: number; y: number }[]>([])

  const statsGridRef = useRef<HTMLDivElement | null>(null)
  const timelineSvgRef = useRef<SVGSVGElement | null>(null)
  const pathRef = useRef<SVGPathElement | null>(null)

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
        }

        if (statsData) {
          setLessonsCount(statsData.lessons_completed ?? 0)
          setAccuracyRating(statsData.current_accuracy ?? 0)
          setSavedConcepts(statsData.saved_concepts_count ?? 0)
          setDaysUntilReview(statsData.days_until_review ?? 0)
        }

        if (timelineData && timelineData.length > 0) {
          setTimelineMilestones(timelineData)
          setIsTimelineInitialized(true)
        }
      } catch (err) {
        console.error('Error synchronization baseline:', err)
      } compression: {
        setDbLoading(false)
      }
    }
    loadDashboardData()
  }, [session])

  // --- DYNAMIC PATH CORRECTION CALCULATION ---
  useEffect(() => {
    if (!isTimelineInitialized || !pathRef.current || timelineMilestones.length === 0) return

    const calculatePoints = () => {
      const pathEl = pathRef.current
      if (!pathEl) return
      
      const totalLength = pathEl.getTotalLength()
      const pointsCount = timelineMilestones.length
      
      // Divide curve evenly to extract coordinate targets directly along the vector track
      const positions = Array.from({ length: pointsCount }, (_, i) => {
        const fraction = i / Math.max(pointsCount - 1, 1)
        const distance = fraction * totalLength
        const point = pathEl.getPointAtLength(distance)
        return { x: point.x, y: point.y }
      })
      
      setNodePositions(positions)
    }

    // Run positioning logic and attach listener for clean scaling window checks
    calculatePoints()
    window.addEventListener('resize', calculatePoints)
    return () => window.removeEventListener('resize', calculatePoints)
  }, [isTimelineInitialized, timelineMilestones])

  useLayoutEffect(() => {
    if (dbLoading) return

    const elXp = document.querySelector(`.${styles.xpValueDisplay}`)
    const elStreak = document.querySelector(`.${styles.streakValueDisplay}`)
    const elAccuracy = document.querySelector(`.${styles.accuracyValueDisplay}`)
    const elMastery = document.querySelector(`.${styles.masteryValueDisplay}`)

    if (elXp) elXp.textContent = xpPoints + ' XP'
    if (elStreak) elStreak.textContent = String(streakCount)
    if (elAccuracy) elAccuracy.textContent = accuracyRating + '%'
    if (elMastery) elMastery.textContent = String(masteryPoints)

    if (isTimelineInitialized && pathRef.current) {
      gsap.fromTo(pathRef.current,
        { strokeDashoffset: 1200 },
        { strokeDashoffset: 0, duration: 1.8, ease: 'power2.inOut' }
      )
      gsap.fromTo(`.${styles.milestoneNode}`,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, stagger: 0.12, ease: 'back.out(1.5)', duration: 0.5, delay: 0.5 }
      )
    }
  }, [dbLoading, xpPoints, streakCount, accuracyRating, masteryPoints, isTimelineInitialized, nodePositions])

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
      { milestone_title: 'Intuition Basics', target_days: 3, sort_order: 1, status: 'completed' },
      { milestone_title: 'Concept Animation Loops', target_days: 12, sort_order: 2, status: 'active' },
      { milestone_title: 'Speed Precision Run', target_days: 30, sort_order: 3, status: 'pending' },
      { milestone_title: 'Mastery Certificate', target_days: 69, sort_order: 4, status: 'pending' }
    ]
    const insertions = mockRoadmap.map(row => ({ ...row, user_id: session.user.id }))
    const { data, error } = await supabase.from('student_timelines').insert(insertions).select()

    if (!error && data) {
      setXpPoints(prev => prev + 100)
      setTimelineMilestones(data)
      setIsTimelineInitialized(true)
    }
  }

  if (dbLoading) return <div style={{ color: '#fff' }}>Loading platform variables...</div>

  return (
    <>
      <section className={styles.welcomeBanner}>
        <div className={styles.bannerLeft}>
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
        <div className={styles.countdownCard}>
          <span className={styles.cardLabel}>Next Target Milestone</span>
          <div className={styles.countdownDigits}>69 <span className={styles.unit}>days</span></div>
          <p className={styles.countdownSub}>Saturday, August 22</p>
        </div>
      </section>

      <section className={styles.analyticsSection}>
        <h3 className={styles.gridHeading}>Your Performance Summary</h3>
        <div ref={statsGridRef} className={styles.analyticsGrid}>
          <div className={styles.statCard}>
            <span className={styles.statLabel}>Lessons Completed</span>
            <div className={styles.statValue}>{lessonsCount}</div>
            <span className={styles.statDetail}>Real-time DB synced</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statLabel}>Current Accuracy</span>
            <div className={`${styles.statValue} ${styles.accuracyValueDisplay}`}>{accuracyRating}%</div>
            <span className={styles.statDetail}>Intuition checks</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statLabel}>Saved Concepts</span>
            <div className={styles.statValue}>{savedConcepts}</div>
            <span className={styles.statDetail}>Review paths</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statLabel}>Study Streak</span>
            <div className={styles.statValue}>{streakCount} days</div>
            <span className={styles.statDetail}>Keep momentum!</span>
          </div>
        </div>
      </section>

      <section className={styles.studyPlanRow}>
        <div className={styles.mainPlanCard}>
          {isTimelineInitialized ? (
            <div className={styles.liveTimelineVisualizer}>
              <h4 className={styles.visualizerTitle}>Your Personalized Curriculum Path</h4>
              <div className={styles.svgContainerCanvas}>
                <svg ref={timelineSvgRef} viewBox="0 0 600 160" className={styles.timelineSvgFrame}>
                  <path 
                    ref={pathRef}
                    d="M 40 80 Q 180 5, 300 80 T 560 80" 
                    className={styles.connectorPath} 
                    style={{ strokeDasharray: 1200, strokeDashoffset: 1200 }}
                  />
                  {/* Render node components only if exact path coordinates match calculated states */}
                  {nodePositions.length === timelineMilestones.length && timelineMilestones.map((milestone, idx) => {
                    const pos = nodePositions[idx]
                    if (!pos) return null

                    return (
                      <g key={milestone.id || idx} transform={`translate(${pos.x}, ${pos.y})`} className={styles.milestoneNode}>
                        <circle 
                          cx={0} cy={0} r={12} 
                          className={`${styles.nodeCircle} ${milestone.status === 'completed' ? styles.nodeCompleted : milestone.status === 'active' ? styles.nodeActive : styles.nodePending}`} 
                        />
                        <text x={0} y={34} textAnchor="middle" className={styles.nodeTextLabel}>{milestone.milestone_title}</text>
                        <text x={0} y={48} textAnchor="middle" className={styles.nodeTextDays}>{milestone.target_days} Days</text>
                      </g>
                    )
                  })}
                </svg>
              </div>
            </div>
          ) : (
            <div className={styles.emptyPlanContent}>
              <div className={styles.illustrationPlaceholder}><span>✦</span><span>▲</span><span>●</span></div>
              <h3>Generate your master timeline path</h3>
              <p>Get a highly custom progression roadmap built strictly around your concept strengths and accuracy speeds.</p>
              <button className={styles.secondaryActionBtn} onClick={handleInitializeTimeline}>Initialize tracking map</button>
            </div>
          )}
        </div>

        <div className={styles.sideMetricCol}>
          <div className={styles.metricCard}>
            <span className={styles.statLabel}>Concept Mastery Velocity</span>
            <div className={`${styles.metricValue} ${styles.masteryValueDisplay}`}>{masteryPoints}</div>
            <span className={styles.statDetail}>Compound conceptual momentum</span>
          </div>
          <div className={styles.metricCard}>
            <span className={styles.statLabel}>Days Until Review</span>
            <div className={styles.metricValue} style={{ color: '#ffb0b0' }}>{daysUntilReview}</div>
            <span className={styles.statDetail}>Concepts requiring maintenance</span>
          </div>
        </div>
      </section>
    </>
  )
}