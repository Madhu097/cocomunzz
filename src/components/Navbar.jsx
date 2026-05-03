import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.nav 
      className="navbar-ref"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="navbar-left">
        <div className="navbar-logo-ref">
          <div className="logo-icon-ref">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>
          </div>
          <span>Cocomunzzz</span>
        </div>
      </div>

      <ul className="navbar-links-ref">
        <li><a href="#home">Home</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#contact">Contact us</a></li>
      </ul>

      <div className="navbar-right">
        <motion.button 
          className="navbar-cta-ref"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Order online
        </motion.button>
      </div>
    </motion.nav>
  )
}
