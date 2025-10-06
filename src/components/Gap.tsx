import styles from './ContentSection.module.css'

export default function Gap() {
  return (
    <>
      <div className="section-divider" />
      <section className={styles.section}>
        <h2>The Gap Today</h2>
        <p>
          Most resources for learning Indian singing — especially for mainstream Hindi music — fall short. They often:
        </p>
        <ul>
          <li>Fail to explain what these elements are</li>
          <li>Fail to show how to improve in each</li>
          <li>Fail to define what "good enough" looks like</li>
          <li>Fail to give clear, detailed feedback</li>
        </ul>
        <p>
          Even highly skilled classical <em>gurus</em> tend to emphasize some elements while neglecting others,
          which may not suit every learner's goals. And when high-quality, balanced training <em>is</em> available,
          it's usually accessible only to a privileged few.
        </p>
      </section>
    </>
  )
}