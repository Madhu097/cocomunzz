import { motion } from 'framer-motion'
import { asset } from '../utils/assetPath'

export default function About() {
  return (
    <section className="about-section" id="about" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="bg-element" style={{ top: '10%', right: '-50px', width: '350px', opacity: 0.12 }}>
        <img src={asset('images/elements/5.png')} alt="" />
      </div>
      <div className="bg-element" style={{ bottom: '10%', left: '5%', width: '120px', opacity: 0.1 }}>
        <img src={asset('images/elements/6.png')} alt="" />
      </div>

      <motion.div 
        className="about-img-wrapper"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img src={asset('images/about-bakery-1.png')} alt="Cocomunzzz Cafe" className="about-img" />
      </motion.div>

      <motion.div 
        className="about-content"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>About Cocomunzzz</h2>
        <p>
          Cocomunzzz - India&rsquo;s first coconut café is reimagining the products you love through the endless possibilities of coconut. What started with curiosity, purpose, and a love for coconut continues to grow into something people can taste, share, and connect with.
        </p>
        <ul className="about-features">
          <motion.li initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Familiar products, reimagined
          </motion.li>
          <motion.li initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Rooted in culture &amp; curiosity
          </motion.li>
          <motion.li initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
            <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Made to connect people
          </motion.li>
        </ul>
        <motion.button 
          className="navbar-cta-ref"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ padding: '16px 40px', fontSize: '1rem' }}
        >
          Discover More
        </motion.button>
      </motion.div>
    </section>
  )
}
