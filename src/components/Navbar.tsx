import type { Session } from '@supabase/supabase-js'
import React, { useEffect, useState } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
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

  const handleSignInClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    
    // Finds the track parent element across the document footprint
    const trackElement = document.querySelector('.signin-track-container')
    
    if (trackElement) {
      const trigger = ScrollTrigger.getById('signin-trigger')
      
      if (trigger) {
        // Direct jump to end coordinates to complete scrubbing animation cycles instantly
        window.scrollTo({
          top: trigger.end,
          behavior: 'smooth'
        })
      } else {
        // Safe structural layout fallback
        trackElement.scrollIntoView({ behavior: 'smooth', block: 'end' })
      }
    }
  }

  return (
    <header className={`${styles.navbar} ${(mounted || scrolled) ? styles.visible : ''}`}>
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
        <a href="#signin" onClick={handleSignInClick}>Sign in</a>
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
          <a className={styles.buttonPrimary} href="#signin" onClick={handleSignInClick}>
            Sign in
          </a>
        )}
      </div>
    </header>
  )
}