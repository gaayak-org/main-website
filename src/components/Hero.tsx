import EmailForm from './EmailForm'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.brand}>gaayak.org</div>
        <h1 className={styles.tagline}>
          Making Indian Singing Education{' '}
          <span className="accent">Clear, Balanced, and Accessible</span>
        </h1>
        <h3 className={styles.subtitle}>
          Because learning to sing shouldn't mean memorizing without understanding.
        </h3>
        <EmailForm variant="hero" />
      </div>
    </section>
  )
}