import EmailForm from './EmailForm'
import styles from './FinalCTA.module.css'

export default function FinalCTA() {
  return (
    <>
      <div className="section-divider" />
      <section className={styles.cta}>
        <h2 className="text-center">Want to follow our journey?</h2>
        <p className={styles.description}>
          Sign up to get updates as we build gaayak.org.
        </p>
        <EmailForm variant="cta" />
        <div className={styles.secondary}>
          <p className="text-muted">
            Have thoughts to share?{' '}
            <a href="mailto:hello@gaayak.org" className="accent">
              We'd love to hear from you
            </a>
          </p>
        </div>
      </section>
    </>
  )
}