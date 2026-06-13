import React from 'react'
import AnimatedWrapper from './AnimatedWrapper'
import Parallax from './Parallax'
import styles from './Features.module.css'

const features = [
  {
    title: 'Motion-led learning',
    description: 'Concepts come to life through animated explanations instead of static notes.'
  },
  {
    title: 'Peer-style teaching',
    description: 'Instructions are presented in a friendly, relatable way that feels like a classmate explaining it.'
  },
  {
    title: 'Built for speed',
    description: 'Fast scroll-triggered reveals keep learners engaged and moving forward.'
  }
]

export default function Features() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {features.map((feature) => (
          <AnimatedWrapper key={feature.title} animation="slide-in-left">
            <Parallax speed={0.05}>
              <article className={styles.card}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            </Parallax>
          </AnimatedWrapper>
        ))}
      </div>
    </section>
  )
}
