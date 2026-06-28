import React, { useEffect, useState, useRef } from 'react';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import RotatingText from './RotatingText';

export default function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const inputRef = useRef<HTMLInputElement | null>(null);
  
  const currentQuery = searchParams.get('search') || '';
  const [localValue, setLocalValue] = useState(currentQuery);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setLocalValue(currentQuery);
  }, [currentQuery]);

  // Global Keyboard Shortcut Listener (Cmd+K / Ctrl+K) to trigger search
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsFocused(true);
        setTimeout(() => inputRef.current?.focus(), 50);
      }
      if (e.key === 'Escape') {
        setIsFocused(false);
        inputRef.current?.blur();
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  const handleSearchChange = (val: string) => {
    setLocalValue(val);
    if (location.pathname !== '/lessons') {
      navigate(`/lessons?category=all&subcategory=all-ap&search=${encodeURIComponent(val)}`);
    } else {
      const currentCat = searchParams.get('category') || 'all';
      const currentSub = searchParams.get('subcategory') || 'all-ap';
      setSearchParams({ category: currentCat, subcategory: currentSub, search: val });
    }
  };

  const handleCourseSelect = (coursePath: string) => {
    setIsFocused(false);
    navigate(`/lessons?category=all&subcategory=${coursePath}&search=`);
  };

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }}>
      
      {/* 1. THE REDESIGNED INACTIVE TRIGGER PILL */}
      <div 
        onClick={() => {
          setIsFocused(true);
          setTimeout(() => inputRef.current?.focus(), 50);
        }}
        style={{ 
          width: '100%', 
          maxWidth: '360px', 
          height: '2.8rem',
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 1rem',
          cursor: 'pointer',
          boxShadow: 'inset 0 1px 0px rgba(255,255,255,0.02), 0 4px 12px rgba(0,0,0,0.1)',
          transition: 'all 0.2s ease',
          position: 'relative',
          overflow: 'hidden'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
        }}
      >
        {/* Subtle left border accent glow */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '2px', background: '#58a6ff', opacity: 0.4 }} />
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', display: 'flex', alignItems: 'center' }}>🔍</span>
          <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.88rem', fontWeight: 500 }}>Search Classes...</span>
        </div>
        
        {/* Sleek inline Hotkey Indicator */}
        <kbd style={{
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '6px',
          padding: '0.15rem 0.4rem',
          fontSize: '0.7rem',
          fontWeight: 600,
          color: 'rgba(255, 255, 255, 0.4)',
          fontFamily: 'monospace',
          letterSpacing: '0.05em'
        }}>
          {navigator.platform.includes('Mac') ? '⌘ K' : 'Ctrl K'}
        </kbd>
      </div>

      {/* 2. THE COMMAND PLUG TAKEOVER CENTER (Full Screen Portal View) */}
      <div 
        style={{
          position: 'fixed',
          inset: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(3, 5, 11, 0.92)',
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
          opacity: isFocused ? 1 : 0,
          pointerEvents: isFocused ? 'auto' : 'none',
          transition: 'opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          zIndex: 9999
        }}
        onClick={() => setIsFocused(false)}
      >
        {/* Command Box Capsule floating centered in upper viewport */}
        <div 
          onClick={(e) => e.stopPropagation()}
          style={{
            position: 'absolute',
            top: '12vh',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'calc(100vw - 40px)',
            maxWidth: '840px',
            background: '#070a14',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '24px',
            boxShadow: '0 50px 100px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.02)',
            overflow: 'hidden',
            boxSizing: 'border-box',
            opacity: isFocused ? 1 : 0,
            transform: isFocused ? 'translate(	-50%, 0)' : 'translate(-50%, -20px)',
            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {/* Main Elevated Header Row */}
          <div style={{ position: 'relative', width: '100%', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <span style={{ 
              position: 'absolute', 
              left: '24px', 
              top: '50%', 
              transform: 'translateY(-50%)', 
              color: '#58a6ff', 
              fontSize: '1.25rem' 
            }}>
              🔍
            </span>
            <input
              ref={inputRef}
              type="text"
              placeholder="What do you want to learn today?"
              value={localValue}
              onChange={(e) => handleSearchChange(e.target.value)}
              style={{
                width: '100%',
                height: '4.8rem',
                background: 'transparent',
                border: 'none',
                paddingLeft: '4.5rem',
                paddingRight: '5.5rem',
                color: '#ffffff',
                fontSize: '1.2rem',
                fontWeight: 500,
                outline: 'none'
              }}
            />
            <span style={{
              position: 'absolute',
              right: '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)',
              padding: '0.35rem 0.65rem',
              borderRadius: '6px',
              fontSize: '0.7rem',
              fontWeight: 700,
              color: 'rgba(255,255,255,0.4)',
              letterSpacing: '0.05em'
            }}>
              ESC
            </span>
          </div>

          {/* Integrated Lower Results Panel Area */}
          <div style={{ padding: '2rem' }}>
            <div style={{ 
              fontSize: '0.8rem', 
              fontWeight: 700, 
              color: 'rgba(255,255,255,0.3)', 
              textTransform: 'uppercase', 
              letterSpacing: '0.12em', 
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span>Curriculum Tracks Available for</span>
              <RotatingText
                texts={['Limits', 'Derivatives', 'Integrals', 'Series Layouts']}
                mainClassName="px-2 py-0.5 bg-rgba(88,166,255,0.08) text-[#58a6ff] font-bold overflow-hidden rounded"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.02}
                splitLevelClassName="overflow-hidden pb-0.5"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
                style={{ display: 'inline-flex', color: '#58a6ff' }}
              />
            </div>

            {/* Premium Dual-Card Grid Layout */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '1rem' }}>
              
              {/* AP Calculus AB Command Module */}
              <div 
                onClick={() => handleCourseSelect('ap-calc-ab')}
                style={{ 
                  padding: '1.5rem', 
                  borderRadius: '16px', 
                  background: 'rgba(255,255,255,0.01)', 
                  border: '1px solid rgba(255,255,255,0.03)', 
                  cursor: 'pointer', 
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)' 
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(88,166,255,0.4)';
                  e.currentTarget.style.background = 'rgba(88,166,255,0.02)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.03)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.01)';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: 600, color: '#ffffff', fontSize: '1.15rem' }}>AP Calculus AB</span>
                  <span style={{ fontSize: '0.7rem', color: '#58a6ff', background: 'rgba(88,166,255,0.1)', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: 700 }}>CORE</span>
                </div>
                <p style={{ margin: '0 0 1rem 0', color: 'rgba(255,255,255,0.4)', fontSize: '0.88rem', lineHeight: '1.5' }}>
                  Explore limits, core derivatives, basic integrals, and graphing models.
                </p>
                <div style={{ fontSize: '0.82rem', color: '#58a6ff', fontWeight: 600 }}>Open Pathway →</div>
              </div>

              {/* AP Calculus BC Command Module */}
              <div 
                onClick={() => handleCourseSelect('ap-calc-bc')}
                style={{ 
                  padding: '1.5rem', 
                  borderRadius: '16px', 
                  background: 'rgba(255,255,255,0.01)', 
                  border: '1px solid rgba(255,255,255,0.03)', 
                  cursor: 'pointer', 
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)' 
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(163,247,191,0.4)';
                  e.currentTarget.style.background = 'rgba(163,247,191,0.02)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.03)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.01)';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: 600, color: '#ffffff', fontSize: '1.15rem' }}>AP Calculus BC</span>
                  <span style={{ fontSize: '0.7rem', color: '#a3f7bf', background: 'rgba(163,247,191,0.1)', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: 700 }}>ADVANCED</span>
                </div>
                <p style={{ margin: '0 0 1rem 0', color: 'rgba(255,255,255,0.4)', fontSize: '0.88rem', lineHeight: '1.5' }}>
                  AB content plus advanced integration, infinite series, polar, and parametric math.
                </p>
                <div style={{ fontSize: '0.82rem', color: '#a3f7bf', fontWeight: 600 }}>Open Pathway →</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}