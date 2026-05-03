import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(prev => !prev)
  const closeMenu = () => setMenuOpen(false)

  const menuVariants = {
    hidden: { opacity: 0, y: -20, scaleY: 0.95, transformOrigin: 'top' },
    visible: {
      opacity: 1, y: 0, scaleY: 1,
      transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
    },
    exit: {
      opacity: 0, y: -10, scaleY: 0.95,
      transition: { duration: 0.25, ease: 'easeIn' }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: i => ({
      opacity: 1, x: 0,
      transition: { delay: i * 0.07, duration: 0.3 }
    })
  }

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'About', href: '#about' },
    { label: 'Contact us', href: '#contact' },
  ]

  return (
    <>
      <motion.nav
        className="navbar-ref"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Logo */}
        <a href="#home" className="navbar-logo-ref" onClick={closeMenu}>
          <div className="logo-icon-ref">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="10" opacity="0.15"/>
              <path d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 4a3 3 0 110 6 3 3 0 010-6zm0 12.2a6.5 6.5 0 01-5-2.35C7.03 15.8 9.33 15 12 15s4.97.8 5 1.85A6.5 6.5 0 0112 19.2z"/>
            </svg>
          </div>
          <span>Cocomunzzz</span>
        </a>

        {/* Desktop Links */}
        <ul className="navbar-links-ref desktop-only">
          {links.map(l => (
            <li key={l.label}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>

        {/* Right side */}
        <div className="navbar-right-ref">
          <motion.a
            href="#contact"
            className="navbar-cta-ref desktop-only"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Order online
          </motion.a>

          {/* Hamburger */}
          <motion.button
            className="hamburger-btn"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.85 }}
          >
            <motion.span
              className="bar"
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            />
            <motion.span
              className="bar"
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="bar"
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                className="mobile-link"
                custom={i}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                onClick={closeMenu}
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className="mobile-cta"
              custom={links.length}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              onClick={closeMenu}
            >
              Order online
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
