import React, { useEffect, useState } from 'react'
import type { Session } from '@supabase/supabase-js'
import { supabase } from '../lib/supabaseClient'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import 'katex/dist/katex.min.css';

// Public landing layout blocks
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import StudentFlow from '../components/StudentFlow'
import SignInSection from '../components/SignInSection'
import ParticleFooter from '../components/ParticleFooter'

// Private workspace panels
import DashboardLayout from '../components/DashboardLayout'
import DashboardHome from '../components/DashboardHome'

// --- PLATFORM CORE TRACK PAGES ---
import LessonsTab from '../components/LessonsTab'
import PlannerPage from '../components/PlannerPage'
import AnalyticsPage from '../components/AnalyticsPage'

// --- DYNAMIC INTUITION PLATFORM MULTI-PAGES ---
import CourseOverview from '../components/CourseOverview'
import LessonsPage from '../components/LessonsPage'

export default function Home() {
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  // --- STAGED RELEASE FEATURE FLAGS ---
  const IS_DASHBOARD_RELEASED = true  
  const ARE_SUBPAGES_RELEASED = true  

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

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    setSession(null)
  }

  const LandingPageLayout = () => (
    <>
      <Navbar session={session} onSignOut={handleSignOut} />
      <main>
        <Hero />
        <HowItWorks />
        <StudentFlow />
        <SignInSection session={session} onSignOut={handleSignOut} />
      </main>
      <ParticleFooter />
    </>
  )

  if (loading) {
    return (
      <div style={{ background: '#03050a', height: '100vh', display: 'grid', placeItems: 'center', color: '#fff' }}>
        <p>Loading Peerpath...</p>
      </div>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Landing Routing Strategy */}
        {!session || !IS_DASHBOARD_RELEASED ? (
          <Route path="*" element={<LandingPageLayout />} />
        ) : (
          /* --- AUTHENTICATED PLATFORM CORE SYSTEM --- */
          <Route element={<DashboardLayout session={session} onSignOut={handleSignOut} />}>
            <Route path="/home" element={<DashboardHome session={session} />} />
            
            {/* The main dashboard list layout frame view */}
            <Route path="/lessons" element={
              ARE_SUBPAGES_RELEASED ? <LessonsTab /> : <Navigate to="/home" replace />
            } />
            
            {/* COURSE OVERVIEW COMPONENT ROUTE: Handles Unit 1, Unit 2 accordion listing */}
            <Route path="/overview/:courseSlug" element={
              ARE_SUBPAGES_RELEASED ? <CourseOverview /> : <Navigate to="/home" replace />
            } />
            
            {/* FIXED DYNAMIC LINK HUB: Catch unique course slug url parameters and subpage route views */}
            <Route path="/lessons/:courseSlug/:unitId/:lessonId?" element={
              ARE_SUBPAGES_RELEASED ? <LessonsPage /> : <Navigate to="/home" replace />
            } />
            
            {/* 🌟 FIXED: Passes down the session prop to securely pull milestone roadmaps */}
            <Route path="/planner" element={
              ARE_SUBPAGES_RELEASED ? <PlannerPage session={session} /> : <Navigate to="/home" replace />
            } />
            
            <Route path="/analytics" element={
              ARE_SUBPAGES_RELEASED ? <AnalyticsPage /> : <Navigate to="/home" replace />
            } />

            {/* General fallback catches loose ends and routes them safely home */}
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  )
}