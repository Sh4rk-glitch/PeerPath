import type { Session } from '@supabase/supabase-js'
import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

type Props = {
  session: Session | null
  onSignOut: () => void
}

export default function Navbar({ session, onSignOut }: Props) {
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.navbar} ${(mounted || scrolled) ? styles.visible : ''}`}>
      
      {/* FIXED: Added your clean favicon logo asset directly alongside the title text */}
      <div className={styles.brandContainer}>
        <img 
          src="/favicon.png" 
          alt="PeerPath Logo" 
          className={styles.logoIcon}
        />
        <div className={styles.brand}>PeerPath</div>
      </div>

      <nav className={styles.menu}>
        <a href="#hero">Home</a>
        <a href="#how-it-works">How it works</a>
        <a href="#flow">Learning path</a>
        <a href="#signin">Sign in</a>
      </nav>
      <div className={styles.actions}>
        {session ? (
          <>
            <span className={styles.badge}>{session.user.email}</span>
            <button className={styles.button} onClick={onSignOut} type="button">
              Sign out
            </button>
          </>
        ) : (
          <a className={styles.buttonPrimary} href="#signin">
            Sign in
          </a>
        )}
      </div>
    </header>
  )
}