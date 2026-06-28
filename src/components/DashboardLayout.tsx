import React, { useState, useEffect } from 'react'
import type { Session } from '@supabase/supabase-js'
import { supabase } from '../lib/supabaseClient'
import { Link, Outlet, useLocation } from 'react-router-dom'
import SearchBar from './SearchBar' // Import your state-managed search bar component
import styles from './DashboardHome.module.css'

type Props = {
  session: Session
  onSignOut: () => void
}

export default function DashboardLayout({ session, onSignOut }: Props) {
  const location = useLocation()
  const [dbLoading, setDbLoading] = useState(true)
  
  const [username, setUsername] = useState('Learner')
  const [xpPoints, setXpPoints] = useState(0)
  const [streakCount, setStreakCount] = useState(0)

  const ARE_SUBPAGES_RELEASED = true 

  useEffect(() => {
    async function loadGlobalStats() {
      if (!session?.user) return
      try {
        const { data: profile } = await supabase
          .from('profiles')
          .select('username, xp_points, study_streak')
          .eq('id', session.user.id)
          .maybeSingle()

        if (profile) {
          setUsername(profile.username || 'Learner')
          setXpPoints(profile.xp_points ?? 0)
          setStreakCount(profile.study_streak ?? 0)
        }
      } catch (err) {
        console.error('Layout tracker loading break:', err)
      } finally {
        setDbLoading(false)
      }
    }
    loadGlobalStats()
  }, [session, location])

  if (dbLoading) {
    return (
      <div style={{ background: '#05070f', height: '100vh', display: 'grid', placeItems: 'center', color: '#fff' }}>
        <p>Syncing secure workspace frame...</p>
      </div>
    )
  }

  return (
    <div className={`${styles.dashboardContainer} dashboardContainerGlobal`}>
      <aside className={styles.sidebar}>
        <div className={styles.logoArea}>
          <img 
            src="/favicon.png" 
            alt="PeerPath Logo" 
            style={{ width: '28px', height: '28px', objectFit: 'contain' }} 
          />
          <span className={styles.logoText} style={{ marginLeft: '0.25rem' }}>PeerPath</span>
          <span className={styles.platformBadge}>Made for students</span>
        </div>

        <nav className={styles.navGroup}>
          <div className={styles.sectionLabel}>Menu</div>
          <Link to="/home" className={`${styles.navLink} ${location.pathname === '/home' ? styles.active : ''}`}>
            <span className={styles.icon}>⌂</span> Home
          </Link>

          {ARE_SUBPAGES_RELEASED ? (
            <>
              <Link to="/lessons" className={`${styles.navLink} ${location.pathname === '/lessons' ? styles.active : ''}`}>
                <span className={styles.icon}>🎓</span> Classes & Lessons
              </Link>
              <Link to="/planner" className={`${styles.navLink} ${location.pathname === '/planner' ? styles.active : ''}`}>
                <span className={styles.icon}>🗓️</span> Study Planner
              </Link>
            </>
          ) : (
            <>
              <div className={styles.navLink} style={{ opacity: 0.25, cursor: 'not-allowed' }}>
                <span className={styles.icon}>🎓</span> Animated Lessons (Lock)
              </div>
              <div className={styles.navLink} style={{ opacity: 0.25, cursor: 'not-allowed' }}>
                <span className={styles.icon}>🗓️</span> Study Planner (Lock)
              </div>
            </>
          )}
        </nav>

        <div className={styles.sidebarFooter}>
          <div className={styles.userInfo}>
            <div className={styles.userAvatar}>{username.charAt(0).toUpperCase()}</div>
            <div className={styles.userMeta}>
              <span className={styles.userEmail}>{session.user.email}</span>
              <span className={styles.userStatus}>Student Tier</span>
            </div>
          </div>
          <button onClick={onSignOut} className={styles.signOutBtn} type="button">Sign out</button>
        </div>
      </aside>

      <main className={styles.mainContent}>
        <header className={styles.topBar}>
          {/* MOVED: Injected the full fluid animated search bar into the layout shell directly */}
          <div className={styles.searchWrapper} style={{ width: '100%', maxWidth: '400px', position: 'relative' }}>
            <SearchBar />
          </div>
          
          <div className={styles.headerStatus}>
            <div className={styles.statusBadge}>🔥 <span className={styles.streakValueDisplay}>{streakCount}</span></div>
            <div className={styles.statusBadge}>💎 <span className={styles.xpValueDisplay}>{xpPoints} XP</span></div>
          </div>
        </header>

        <div key={location.pathname} className={styles.scrollCanvas}>
          <Outlet />
        </div>
      </main>
    </div>
  )
}