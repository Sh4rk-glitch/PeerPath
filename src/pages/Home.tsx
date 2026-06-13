import React, { useEffect, useState } from 'react'
import type { Session } from '@supabase/supabase-js'
import { supabase } from '../lib/supabaseClient'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// Public landing layout blocks
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import StudentFlow from '../components/StudentFlow'
import SignInSection from '../components/SignInSection'
import CTA from '../components/CTA'
import ParticleFooter from '../components/ParticleFooter'

// Private workspace panels
import DashboardLayout from '../components/DashboardLayout'
import DashboardHome from '../components/DashboardHome'
import LessonsPage from '../components/LessonsPage'
import PlannerPage from '../components/PlannerPage'
import AnalyticsPage from '../components/AnalyticsPage'

export default function Home() {
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  // --- THE FEATURE FLAG ---
  // Change this to true when you are ready to open up the platform dashboard to the public web!
  const IS_DASHBOARD_RELEASED = false 

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setLoading(false)
    })

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      setLoading(false)
    })

    return () => {
      authListener?.subscription?.unsubscribe()
    }
  }, [])

  if (loading) {
    return (
      <div style={{ background: '#03050a', height: '100vh', display: 'grid', placeItems: 'center', color: '#fff' }}>
        <p>Loading Peerpath...</p>
      </div>
    )
  }

  // Pure Landing Page Layout Matrix Composition
  const LandingPageLayout = () => (
    <>
      <Navbar session={session} onSignOut={handleSignOut} />
      <main>
        <Hero />
        <HowItWorks />
        <StudentFlow />
        {/* If dashboard isn't ready for production, hide the sign-in section form fields */}
        {IS_DASHBOARD_RELEASED && <SignInSection session={session} onSignOut={handleSignOut} />}
        <CTA />
      </main>
      <ParticleFooter />
    </>
  )

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    setSession(null)
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* If the dashboard isn't released and a user is signed in, we still keep them on the home landing page */}
        {!session || !IS_DASHBOARD_RELEASED ? (
          <Route path="*" element={<LandingPageLayout />} />
        ) : (
          /* --- INTERNAL SYSTEM APPLICATION CORE (DEV ONLY) --- */
          <Route element={<DashboardLayout session={session} onSignOut={handleSignOut} />}>
            <Route path="*" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<DashboardHome session={session} />} />
            <Route path="/lessons" element={<LessonsPage />} />
            <Route path="/planner" element={<PlannerPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  )
}