import React, { useState } from 'react'
import styles from './LessonsPage.module.css'

type LessonCard = { id: string; title: string; duration: string; trackingXp: number; status: 'available' | 'locked' }
type CourseCategory = { subject: string; icon: string; modules: LessonCard[] }

export default function LessonsPage() {
  const [activeFilter, setActiveFilter] = useState('All Systems')

  const curriculum: CourseCategory[] = [
    {
      subject: 'Advanced Mathematics',
      icon: '∫',
      modules: [
        { id: 'math-1', title: 'Visual Derivatives & Rate Change Intuition', duration: '14 min', trackingXp: 40, status: 'available' },
        { id: 'math-2', title: 'The Geometry of Taylor Series Vectors', duration: '22 min', trackingXp: 60, status: 'available' },
        { id: 'math-3', title: 'Matrix Transformations and Linear Span Mapping', duration: '18 min', trackingXp: 50, status: 'locked' }
      ]
    },
    {
      subject: 'Kinetic Physics',
      icon: '⚛',
      modules: [
        { id: 'phys-1', title: 'Rotational Inertia and Conservation Matrices', duration: '19 min', trackingXp: 55, status: 'available' },
        { id: 'phys-2', title: 'Wave Interference Modulations & Harmonics', duration: '25 min', trackingXp: 75, status: 'locked' }
      ]
    },
    {
      subject: 'Engineering Systems',
      icon: '⎔',
      modules: [
        { id: 'eng-1', title: 'Autonomous Avionics Controls and PID Loops', duration: '30 min', trackingXp: 100, status: 'available' },
        { id: 'eng-2', title: 'Fluid Dynamics Across Mach 5 Boundary Layers', duration: '45 min', trackingXp: 150, status: 'locked' }
      ]
    }
  ]

  const categoriesList = ['All Systems', 'Advanced Mathematics', 'Kinetic Physics', 'Engineering Systems']

  return (
    <div className={styles.lessonsCanvas}>
      <header className={styles.pageHeader}>
        <div className={styles.headerText}>
          <h2>Animated Concept Lessons</h2>
          <p>Interact with concept animation loops built around motion, peer examples, and clear tracking paths.</p>
        </div>
        
        {/* Horizontal Navigation Categorization Links Container */}
        <div className={styles.tabFilterBar}>
          {categoriesList.map(cat => (
            <button 
              key={cat} 
              className={`${styles.filterTabBtn} ${activeFilter === cat ? styles.activeTab : ''}`}
              onClick={() => setActiveFilter(cat)}
              type="button"
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      <div className={styles.catalogGridGroup}>
        {curriculum
          .filter(course => activeFilter === 'All Systems' || course.subject === activeFilter)
          .map(course => (
            <section key={course.subject} className={styles.subjectBlock}>
              <div className={styles.subjectTitleBar}>
                <span className={styles.subjectIcon}>{course.icon}</span>
                <h3>{course.subject}</h3>
              </div>

              <div className={styles.modulesGrid}>
                {course.modules.map(lesson => (
                  <div key={lesson.id} className={`${styles.lessonCard} ${lesson.status === 'locked' ? styles.cardLocked : ''}`}>
                    <div className={styles.cardHeaderArea}>
                      <span className={styles.xpLabelBadge}>+{lesson.trackingXp} XP</span>
                      <span className={styles.durationMeta}>{lesson.duration}</span>
                    </div>
                    
                    <h4>{lesson.title}</h4>
                    
                    <div className={styles.interactivePreviewCanvas}>
                      {lesson.status === 'locked' ? (
                        <div className={styles.lockOverlay}>
                          <span className={styles.lockIcon}>🔒</span>
                          <p>Complete prior units to unlock</p>
                        </div>
                      ) : (
                        <div className={styles.motionIndicatorPulse}>
                          <span className={styles.playTriggerSymbol}>▶</span>
                        </div>
                      )}
                    </div>

                    <button 
                      className={styles.launchLessonBtn} 
                      onClick={() => lesson.status === 'available' ? alert(`Loading Lesson Space: ${lesson.title}`) : null}
                      disabled={lesson.status === 'locked'}
                      type="button"
                    >
                      {lesson.status === 'locked' ? 'Locked' : 'Initialize Animation'}
                    </button>
                  </div>
                ))}
              </div>
            </section>
          ))}
      </div>
    </div>
  )
}