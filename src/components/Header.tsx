'use client'

import { useState, useEffect } from 'react'
import styles from './Header.module.css'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <button onClick={() => scrollToSection('hero')} className={styles.logoButton}>
            gaayak.org
          </button>
        </div>
        <nav className={styles.nav}>
          <button onClick={() => scrollToSection('problem')} className={styles.navLink}>
            Problem
          </button>
          <button onClick={() => scrollToSection('vision')} className={styles.navLink}>
            Vision
          </button>
          <button onClick={() => scrollToSection('gap')} className={styles.navLink}>
            Gap
          </button>
          <button onClick={() => scrollToSection('aim')} className={styles.navLink}>
            Aim
          </button>
          <button onClick={() => scrollToSection('signup')} className={styles.navLink}>
            Sign Up
          </button>
        </nav>
      </div>
    </header>
  )
}