import styles from './ContentSection.module.css'

export default function Problem() {
  return (
    <>
      <div className="section-divider" />
      <section className={styles.section}>
        <h2>The Problem</h2>
        <p>
          In the Indian education system, one recurring problem has been the lack of focus on
          the <em className="accent">why</em> behind concepts.
        </p>
        <ul>
          <li>We were given log tables to perform multiplications, but rarely told why adding logs replaces multiplication.</li>
          <li>We were told the area of a circle is πr², but not how it's derived, or where π actually comes from.</li>
        </ul>
        <p>
          Indian singing education often feels the same. For instance, we're taught to memorize{' '}
          <em className="accent">Sa Re Ga Ma Pa Dha Ni Sa</em> without being told:
        </p>
        <ul>
          <li>What it really means</li>
          <li>Why it matters in Indian music</li>
          <li>Whether mastering it is essential, or if one can still be a good singer without it</li>
        </ul>
      </section>
    </>
  )
}