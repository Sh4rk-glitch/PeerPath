import React, { useState, useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { supabase } from '../lib/supabaseClient'
import type { Session } from '@supabase/supabase-js'
import styles from './SignInSection.module.css'

gsap.registerPlugin(ScrollTrigger)

type Props = {
  session: Session | null
  onSignOut: () => void
}

export default function SignInSection({ session, onSignOut }: Props) {
  const [isSignUp, setIsSignUp] = useState(false) // Dynamic switch tracking sign-in vs sign-up mode
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const trackRef = useRef<HTMLDivElement | null>(null)
  const cardRef = useRef<HTMLDivElement | null>(null)
  const layerRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    if (!trackRef.current || !cardRef.current || !layerRef.current) return

    const ctx = gsap.context(() => {
      const masterTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: trackRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          invalidateOnRefresh: true
        }
      })

      masterTimeline
        .to(layerRef.current, { opacity: 1, scale: 1, ease: 'none' })
        .fromTo(cardRef.current,
          { opacity: 0, y: 100, scale: 0.88, rotateX: 25, transformPerspective: 1000 },
          { opacity: 1, y: 0, scale: 1, rotateX: 0, ease: 'back.out(1.5)' },
          '>-0.5'
        )

      // --- 3D MOUSE TRACKING ---
      const card = cardRef.current!
      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        const rotateX = -(y / (rect.height / 2)) * 10
        const rotateY = (x / (rect.width / 2)) * 10

        gsap.to(card, {
          rotateX,
          rotateY,
          transformPerspective: 1200,
          duration: 0.3,
          ease: 'power2.out',
          overwrite: 'auto'
        })
      }

      const handleMouseLeave = () => {
        gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.8, ease: 'back.out(2)', overwrite: 'auto' })
      }

      card.addEventListener('mousemove', handleMouseMove)
      card.addEventListener('mouseleave', handleMouseLeave)

    }, trackRef)

    return () => ctx.revert()
  }, [])

  // Clear states when toggling between sign up and sign in modes
  const handleModeToggle = () => {
    setIsSignUp(!isSignUp)
    setStatus('')
    setPassword('')
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!email || !password) {
      setStatus('Please enter both your email and password.')
      return
    }

    setLoading(true)
    setStatus(isSignUp ? 'Creating your account...' : 'Authenticating credentials...')

    if (isSignUp) {
      // --- SUPABASE SIGN UP PROTOCOL ---
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: window.location.origin, // Sends user back to home page upon confirmation click
        }
      })

      if (error) {
        setStatus(error.message)
      } else if (data.user && data.session === null) {
        // If email confirmation is enabled in Supabase dashboard, session will be null initially
        setStatus('Account created! Check your inbox for a verification link.')
        setEmail('')
        setPassword('')
      } else {
        setStatus('Successfully signed up and logged in!')
      }
    } else {
      // --- SUPABASE SIGN IN PROTOCOL ---
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        setStatus(error.message)
      } else {
        setStatus('Successfully signed in!')
        setEmail('')
        setPassword('')
      }
    }

    setLoading(false)
  }

  return (
    <div ref={trackRef} className={styles.track}>
      <section className={styles.section} id="signin">
        <div ref={layerRef} className={styles.glowingAtmosphere} />

        <div ref={cardRef} className={styles.card}>
          <div className={styles.header}>
            <span className={styles.label}>Start learning with Peerpath</span>
            <h2>{isSignUp ? 'Create your account' : 'Sign in to your account'}</h2>
            <p>
              {isSignUp 
                ? 'Join the community to track concept paths and save learning progress.' 
                : 'Welcome back! Enter your login credentials below to continue.'}
            </p>
          </div>

          {session ? (
            <div className={styles.signedIn}>
              <p>
                Signed in as <strong>{session.user.email}</strong>. You can explore the home page and return anytime.
              </p>
              <button className={styles.signOutButton} onClick={onSignOut} type="button">
                Sign out
              </button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <label className={styles.field} htmlFor="email">
                Email address
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@school.edu"
                  required
                />
              </label>

              <label className={styles.field} htmlFor="password">
                Password
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="••••••••"
                  required
                />
              </label>

              <button className={styles.submitButton} type="submit" disabled={loading}>
                {loading ? (isSignUp ? 'Creating...' : 'Signing in...') : (isSignUp ? 'Sign up' : 'Sign in')}
              </button>

              {status && (
                <p className={`${styles.status} ${status.includes('Check your inbox') || status.includes('Successfully') ? styles.success : styles.error}`}>
                  {status}
                </p>
              )}

              {/* Dynamic Toggle Footer Links */}
              <div className={styles.toggleFooter}>
                <span>
                  {isSignUp ? 'Already have an account?' : "Don't have an account yet?"}
                </span>
                <button type="button" onClick={handleModeToggle} className={styles.toggleBtn}>
                  {isSignUp ? 'Sign in instead' : 'Create an account'}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}