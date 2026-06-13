import React from 'react'
import FloatingLines from './FloatingLines'
import styles from './ParticleFooter.module.css'

export default function ParticleFooter() {
  return (
    <section className={styles.section}>
      {/* Background Canvas Layer Wrapper Context */}
      <div className={styles.canvasContainer}>
        <FloatingLines
          // FIXED: Explicitly passing a deep, premium dark navy-to-slate gradient vector stops the white-out blowouts
          linesGradient={['#0d1527', '#16223f', '#1c2d54', '#0d1527']}
          enabledWaves={['top', 'middle', 'bottom']}
          // FIXED: Balanced line density metrics prevent pixel over-saturation loops
          lineCount={[6, 8, 10]}
          lineDistance={[6, 5, 4]}
          bendRadius={4.5}
          bendStrength={-0.35}
          interactive={true}
          parallax={true}
          animationSpeed={0.8} // Marginally slower speed gives a more subtle, premium feel
        />
        {/* Subtle radial inner vignette shade box keeps text perfectly legible */}
        <div className={styles.vignetteOverlay} />
      </div>

      <div className={styles.content}>
        <span className={styles.overline}>Start learning now</span>
        <h2>PeerPath</h2>
        <p>Discover the future of personalized learning</p>
        <a className={styles.cta} href="#signin">
          Get started
        </a>
      </div>
    </section>
  )
}