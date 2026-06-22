import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import type { Session } from '@supabase/supabase-js'
import { supabase } from '../lib/supabaseClient'
import { curriculumData as calcABData } from '../data/calcABData'
import { curriculumData as calcBCData } from '../data/calcBCData' 
import { gsap } from 'gsap'
import styles from './DashboardHome.module.css' 

type Props = {
  session: Session
}

type Milestone = {
  id: string
  milestone_title: string
  target_days: number
  status: string
  sort_order: number
}

export default function PlannerPage({ session }: Props) {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [milestones, setMilestones] = useState<Milestone[]>([])
  const [editingId, setEditingId] = useState<string | null>(null)
  const [daysInput, setDaysInput] = useState<number>(0)
  
  // Track system context to auto-generate plans based on student enrollments
  const [enrolledCourse, setEnrolledCourse] = useState<string>('ap-calculus-ab')

  const containerRef = useRef<HTMLDivElement | null>(null)
  const headerRef = useRef<HTMLDivElement | null>(null)
  const listRef = useRef<HTMLDivElement | null>(null)

  // 1. FETCH DATABASE MILESTONES & ACTIVE ENROLLMENTS ON MOUNT
  useEffect(() => {
    async function fetchPlannerData() {
      if (!session?.user) return
      try {
        // Fetch existing custom timeline rows
        const { data: timeline, error } = await supabase
          .from('student_timelines')
          .select('*')
          .eq('user_id', session.user.id)
          .order('sort_order', { ascending: true })

        if (!error && timeline) {
          setMilestones(timeline)
        }

        // Fetch user context from global profiles database to check course pathways
        const { data: profile } = await supabase
          .from('profiles')
          .select('current_course')
          .eq('id', session.user.id)
          .maybeSingle()
        
        if (profile?.current_course) {
          setEnrolledCourse(profile.current_course.toLowerCase().trim())
        }
      } catch (err) {
        console.error('Error fetching planner milestones:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchPlannerData()
  }, [session])

  // 2. GSAP INTERFACE FLOW SEQUENCING
  useLayoutEffect(() => {
    if (loading || !containerRef.current) return

    const ctx = gsap.context(() => {
      gsap.set([headerRef.current, listRef.current?.children], { opacity: 0, y: 20 })

      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.5 } })
      tl.to(headerRef.current, { opacity: 1, y: 0 })
        .to(listRef.current?.children || [], { opacity: 1, y: 0, stagger: 0.05 }, '>-0.25')
    }, containerRef)

    return () => ctx.revert()
  }, [loading, milestones.length])

  // 3. AUTO-GENERATION ENGINE: READS LOCAL CURRICULUM FILES TO BULK INSERT TOWARD SUPABASE
  const handleAutoGenerateTimeline = async () => {
    if (!session?.user) return
    setLoading(true)

    // Determine target local dataset based on enrollment context
    const isBC = enrolledCourse.endsWith('bc')
    const localSource = isBC ? calcBCData : calcABData
    
    let generatedMilestones: Omit<Milestone, 'id'>[] = []

    if (localSource && typeof localSource === 'object') {
      // Pull actual key names (like "unit-1", "unit-2") out of the database file
      const unitKeys = Object.keys(localSource).filter(k => k.startsWith('unit-'))
      
      let dayAccumulator = 7 // Step default spacer interval spacing
      
      generatedMilestones = unitKeys.map((key, index) => {
        const unitData = (localSource as any)[key]
        const currentOrder = index + 1
        const targetDays = dayAccumulator
        
        // Spread standard tracking speeds
        dayAccumulator += 14 

        return {
          milestone_title: unitData?.title ? unitData.title.split(':')[0] + `: ${unitData.title.split(':')[1] || ''}` : `Unit ${currentOrder}`,
          target_days: targetDays,
          sort_order: currentOrder,
          status: currentOrder === 1 ? 'active' : 'pending' // Initialize first node as active
        }
      })
    }

    // Fallback blueprint if the local module array can't be resolved
    if (generatedMilestones.length === 0) {
      generatedMilestones = [
        { milestone_title: 'Unit 1: Limits & Continuity', target_days: 7, sort_order: 1, status: 'active' },
        { milestone_title: 'Unit 2: Differentiation Basics', target_days: 21, sort_order: 2, status: 'pending' },
        { milestone_title: 'Unit 3: Composite Chain Rules', target_days: 35, sort_order: 3, status: 'pending' },
        { milestone_title: 'Unit 6: Integration Accumulations', target_days: 56, sort_order: 4, status: 'pending' }
      ]
    }

    const insertions = generatedMilestones.map(row => ({ ...row, user_id: session.user.id }))

    // Bulk upload to database
    const { data, error } = await supabase
      .from('student_timelines')
      .insert(insertions)
      .select()

    if (!error && data) {
      setMilestones(data)
    }
    setLoading(false)
  }

  // 4. INLINE TARGET DAY MODIFICATION RUNNER
  const handleStartEdit = (e: React.MouseEvent, milestone: Milestone) => {
    e.stopPropagation() // Prevent row click from routing to lessons page
    setEditingId(milestone.id)
    setDaysInput(milestone.target_days)
  }

  const handleSaveDays = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation() // Prevent row click from routing to lessons page
    if (daysInput <= 0) return

    setMilestones(prev => prev.map(m => m.id === id ? { ...m, target_days: daysInput } : m))
    setEditingId(null)

    await supabase
      .from('student_timelines')
      .update({ target_days: daysInput })
      .eq('id', id)
  }

  // 5. INTERACTIVE STATUS TOGGLING
  const handleToggleStatus = async (e: React.MouseEvent, milestone: Milestone) => {
    e.stopPropagation() // Prevent row click from routing to lessons page
    const nextStatusMap: Record<string, string> = {
      'pending': 'active',
      'active': 'completed',
      'completed': 'pending'
    }
    const newStatus = nextStatusMap[milestone.status] || 'pending'

    setMilestones(prev => prev.map(m => m.id === milestone.id ? { ...m, status: newStatus } : m))

    await supabase
      .from('student_timelines')
      .update({ status: newStatus })
      .eq('id', milestone.id)
  }

  if (loading) {
    return (
      <div style={{ color: '#ffffff', padding: '3rem', fontFamily: 'sans-serif' }}>
        Syncing secure workspace timeline streams...
      </div>
    )
  }

  return (
    <div ref={containerRef} style={{ width: '100%', padding: '2rem', boxSizing: 'border-box' }}>
      
      {/* HEADER CONTROLS VIEW */}
      <div ref={headerRef} style={{ marginBottom: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', marginBottom: '0.5rem' }}>
            Sprint Study Planner
          </h2>
          <p style={{ color: '#8b949e', fontSize: '1rem', margin: 0 }}>
            Currently Tracking: <span style={{ color: '#58a6ff', fontWeight: 600 }}>{enrolledCourse.toUpperCase().replace(/-/g, ' ')}</span>
          </p>
        </div>

        {milestones.length === 0 && (
          <button 
            type="button"
            onClick={handleAutoGenerateTimeline}
            className={styles.primaryActionBtn}
            style={{ padding: '0.75rem 1.25rem', fontSize: '0.95rem' }}
          >
            ✦ Auto-Generate Curriculum Path
          </button>
        )}
      </div>

      {/* CORE TIMELINE ROADMAP ROW CARD */}
      <div style={{ background: '#0d1117', border: '1px solid #30363d', borderRadius: '16px', padding: '2rem' }}>
        <h3 style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 600, margin: '0 0 1.5rem 0' }}>
          Active Roadmap Metrics & Milestone Iterations
        </h3>

        {milestones.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 0', color: '#8b949e' }}>
            <p style={{ margin: '0 0 1.5rem 0', fontSize: '1.1rem' }}>No active milestones are tracking inside your profile yet.</p>
            <button 
              type="button" 
              onClick={handleAutoGenerateTimeline}
              style={{
                background: '#21262d',
                border: '1px solid #30363d',
                color: '#58a6ff',
                padding: '0.6rem 1.2',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 600
              }}
            >
              Initialize Smart Sync Path
            </button>
          </div>
        ) : (
          <div ref={listRef} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {milestones.map((milestone, idx) => {
              
              let computedStatus = milestone.status.toLowerCase().trim();
              if (computedStatus === 'pending' || computedStatus === 'active') {
                const isFirstStep = idx === 0;
                const isPreviousCompleted = idx > 0 && milestones[idx - 1].status.toLowerCase().trim() === 'completed';
                
                if (isFirstStep || isPreviousCompleted) {
                  computedStatus = 'active';
                } else {
                  computedStatus = 'pending';
                }
              }

              const isActive = computedStatus === 'active';
              const isCompleted = computedStatus === 'completed';

              return (
                <div 
                  key={milestone.id}
                  onClick={() => navigate(`/lessons/${enrolledCourse}/unit-${idx + 1}`)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1.25rem 1.5rem',
                    background: isActive ? 'rgba(56, 189, 248, 0.02)' : '#161b22',
                    border: `1px solid ${isActive ? '#38bdf8' : isCompleted ? '#2ea043' : '#30363d'}`,
                    borderRadius: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: isActive ? '0 0 20px rgba(56, 189, 248, 0.03)' : 'none',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = isActive ? '#38bdf8' : '#58a6ff' }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = isActive ? '#38bdf8' : isCompleted ? '#2ea043' : '#30363d' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flex: 1 }}>
                    <button
                      type="button"
                      onClick={(e) => handleToggleStatus(e, milestone)}
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        background: isCompleted ? '#2ea043' : isActive ? '#38bdf8' : 'transparent',
                        border: `2px solid ${isCompleted ? '#2ea043' : isActive ? '#38bdf8' : '#8b949e'}`,
                        cursor: 'pointer',
                        display: 'grid',
                        placeItems: 'center',
                        color: '#000',
                        fontWeight: 'bold',
                        fontSize: '0.75rem',
                        padding: 0,
                        zIndex: 10
                      }}
                    >
                      {isCompleted && '✓'}
                    </button>

                    <div>
                      <h4 style={{ color: '#fff', margin: '0 0 0.25rem 0', fontSize: '1.05rem', fontWeight: 600 }}>
                        {milestone.milestone_title}
                      </h4>
                      <span style={{ 
                        fontSize: '0.7rem', 
                        padding: '0.15rem 0.45rem', 
                        borderRadius: '6px', 
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        background: isCompleted ? 'rgba(46, 160, 67, 0.15)' : isActive ? 'rgba(56, 189, 248, 0.15)' : 'rgba(139, 148, 158, 0.15)',
                        color: isCompleted ? '#56d364' : isActive ? '#38bdf8' : '#8b949e'
                      }}>
                        {isCompleted ? 'completed' : isActive ? 'start now' : 'pending'}
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', zIndex: 10 }}>
                    {editingId === milestone.id ? (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <input 
                          type="number" 
                          value={daysInput}
                          onClick={(e) => e.stopPropagation()} 
                          onChange={(e) => setDaysInput(Number(e.target.value))}
                          style={{
                            width: '70px',
                            background: '#0d1117',
                            border: '1px solid #38bdf8',
                            color: '#fff',
                            padding: '0.4rem 0.6rem',
                            borderRadius: '6px',
                            textAlign: 'center',
                            fontSize: '0.95rem'
                          }}
                          min={1}
                        />
                        <span style={{ color: '#8b949e', fontSize: '0.9rem' }}>Days</span>
                        <button 
                          type="button"
                          onClick={(e) => handleSaveDays(e, milestone.id)}
                          style={{ background: '#2ea043', color: '#fff', border: 'none', padding: '0.4rem 0.8rem', borderRadius: '6px', cursor: 'pointer', fontWeight: 600 }}
                        >
                          Save
                        </button>
                      </div>
                    ) : (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ textAlign: 'right' }}>
                          <span style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', display: 'block' }}>
                            {milestone.target_days}
                          </span>
                          <span style={{ color: '#8b949e', fontSize: '0.8rem' }}>target milestone days</span>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => handleStartEdit(e, milestone)}
                          style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem', padding: '0.25rem' }}
                        >
                          ✏️
                        </button>
                      </div>
                    )}
                  </div>

                </div>
              )
            })}
          </div>
        )}
      </div>

    </div>
  )
}