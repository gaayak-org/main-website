import styles from './ContentSection.module.css'

export default function Vision() {
  return (
    <>
      <div className="section-divider" />
      <section className={styles.section}>
        <h2>The Vision</h2>
        <p>
          Singing is not about one skill alone. It's a blend of many elements:
        </p>
        <ul>
          <li>Breathing</li>
          <li>Pitch accuracy</li>
          <li>Vocal tone</li>
          <li>Vocal range and fluidity</li>
          <li>Voice modulation</li>
          <li>Your unique style</li>
        </ul>
        <p>
          Excelling in just one while neglecting the others rarely works. But being reasonably
          good at most of them can already make you a strong singer.
        </p>
      </section>
    </>
  )
}