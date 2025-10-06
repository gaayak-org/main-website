import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>Made with care in Toronto</p>
        <p>
          <a href="mailto:hello@gaayak.org">hello@gaayak.org</a>
        </p>
        <p className="text-muted" style={{ marginTop: '1rem', fontSize: '0.85rem' }}>
          © {new Date().getFullYear()} gaayak.org. All rights reserved.
        </p>
      </div>
    </footer>
  )
}