import EmailForm from './EmailForm'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.tagline}>
          <span className="accent">Clear, Balanced, and Accessible</span>
          <br />
          Indian Singing Education
        </h1>
        <h3 className={styles.subtitle}>
          Because learning to sing shouldn’t mean lessons that reward memorization over usable skill, or leave you without clear feedback.
        </h3>
        <EmailForm variant="hero" />
      </div>
    </section>
  )
}