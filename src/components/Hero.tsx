import React from 'react'
import styles from './Hero.module.css'
import TextPressure from './TextPressure'
import Parallax from './Parallax'
import ScrollFloat from './ScrollFloat'
import Waves from './Waves'

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.backdrop} />
      <div className={styles.wavesLayer}>
        <Waves
          lineColor="#fff"
          backgroundColor="rgba(255, 255, 255, 0.02)"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
          className="pointer-events-none"
        />
      </div>
      <div className={styles.headline}>
        <Parallax speed={0}>
          <div className={styles.pressureWrapper}>
            {/* CHANGED: Increased minFontSize to 180 for a larger, premium brand presence */}
            <TextPressure
              text="PeerPath."
              textColor="#ffffff"
              stroke={false}
              minFontSize={180}
            />
          </div>
        </Parallax>
        <div className={styles.taglineGroup}>
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            stagger={0.03}
            containerClassName="w-full text-center overflow-hidden"
            textClassName={`${styles.tagline}`}
          >
            the only learning tool you&apos;ll ever need.
          </ScrollFloat>
        </div>

        {/* CHANGED: Buttons remain mounted, starting with zero opacity. 
            GSAP controls them cleanly to prevent layout snaps. */}
        <div className={`${styles.ctaGroup} heroCtaGroup opacity-0 pointer-events-none`}>
          <a className={styles.primaryButton} href="#signin">
            Start Learning Now
          </a>
          <a className={styles.secondaryButton} href="#how-it-works">
            Explore how it works
          </a>
        </div>
      </div>
    </section>
  )
}