import React, { useState, useEffect } from 'react'
import type { Session } from '@supabase/supabase-js'
import { supabase } from '../lib/supabaseClient'
import { Link, Outlet, useLocation } from 'react-router-dom'
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
        console.error('Error fetching global layout headers:', err)
      } finally {
        setDbLoading(false)
      }
    }
    loadGlobalStats()
  }, [session, location]) // Refetches when you move pages to keep your points counters fresh!

  if (dbLoading) {
    return (
      <div style={{ background: '#05070f', height: '100vh', display: 'grid', placeItems: 'center', color: '#fff' }}>
        <p>Syncing secure workspace frame...</p>
      </div>
    )
  }

  return (
    <div className={`${styles.dashboardContainer} dashboardContainerGlobal`}>
      {/* SIDEBAR NAVIGATION PANEL */}
      <aside className={styles.sidebar}>
        <div className={styles.logoArea}>
          <span className={styles.logoText}>Peerpath</span>
          <span className={styles.platformBadge}>Workspace</span>
        </div>

        <nav className={styles.navGroup}>
          <div className={styles.sectionLabel}>Platform</div>
          <Link to="/home" className={`${styles.navLink} ${location.pathname === '/home' ? styles.active : ''}`}>
            <span className={styles.icon}>⌂</span> Home
          </Link>
          <Link to="/lessons" className={`${styles.navLink} ${location.pathname === '/lessons' ? styles.active : ''}`}>
            <span className={styles.icon}>▲</span> Animated Lessons
          </Link>
          <Link to="/planner" className={`${styles.navLink} ${location.pathname === '/planner' ? styles.active : ''}`}>
            <span className={styles.icon}>📅</span> Study Planner
          </Link>
          <Link to="/analytics" className={`${styles.navLink} ${location.pathname === '/analytics' ? styles.active : ''}`}>
            <span className={styles.icon}>📊</span> Analytics
          </Link>
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

      {/* CORE FRAME CONTENT HUB */}
      <main className={styles.mainContent}>
        <header className={styles.topBar}>
          <div className={styles.searchWrapper}>
            <span className={styles.searchIcon}>🔍</span>
            <input type="text" placeholder="Search lessons, formulas..." className={styles.searchInput} />
          </div>
          <div className={styles.headerStatus}>
            <div className={styles.statusBadge}>🔥 <span className={styles.streakValueDisplay}>{streakCount}</span></div>
            <div className={styles.statusBadge}>💎 <span className={styles.xpValueDisplay}>{xpPoints} XP</span></div>
          </div>
        </header>

        {/* DYNAMIC SCROLL CONTAINER CANVAS LINK OUTLET */}
        <div className={styles.scrollCanvas}>
          <Outlet />
        </div>
      </main>
    </div>
  )
}