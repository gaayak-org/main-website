'use client'

import { FormEvent, useState } from 'react'
import styles from './EmailForm.module.css'

interface EmailFormProps {
  variant?: 'hero' | 'cta'
}

export default function EmailForm({ variant = 'hero' }: EmailFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    // TODO: Integrate with Formspree or your email service
    // For now, just log to console
    console.log('Form submission (not connected):', { name, email })

    alert('Email signup is not yet connected. This is a placeholder for development.')

    // Reset form
    setName('')
    setEmail('')
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.fieldGroup}>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          aria-label="Your name"
          className={styles.input}
        />
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-label="Your email address"
          className={styles.input}
        />
      </div>
      <button type="submit" className={styles.button}>
        {variant === 'hero' ? 'Be the first to know' : 'Sign up for updates'}
      </button>
      <p className={styles.privacy}>No spam. Occasional progress updates.</p>
    </form>
  )
}