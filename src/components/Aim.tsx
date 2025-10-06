import styles from './ContentSection.module.css'

export default function Aim() {
  return (
    <>
      <div className="section-divider" />
      <section className={styles.section}>
        <h2>
          <span className="accent">gaayak.org's</span> Aim
        </h2>
        <p>Our mission is simple:</p>
        <ul>
          <li>Provide a structured, balanced, and practical approach to Indian singing training</li>
          <li>Make these resources accessible to everyone, leveling the playing field</li>
        </ul>
      </section>
    </>
  )
}