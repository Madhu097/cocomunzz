import { motion } from 'framer-motion'
import { asset } from '../utils/assetPath'

const HaloSwash = () => (
  <svg className="hero-swash swash-halo" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 50C20 30 180 30 180 50C180 70 20 70 20 50Z" stroke="#99432B" strokeWidth="4" strokeDasharray="8 8" opacity="0.6" />
    <path d="M40 30C80 10 120 10 160 30" stroke="#E8CEA7" strokeWidth="3" strokeLinecap="round" />
    <line x1="100" y1="5" x2="100" y2="25" stroke="#99432B" strokeWidth="3" strokeLinecap="round" />
    <line x1="130" y1="10" x2="120" y2="25" stroke="#99432B" strokeWidth="3" strokeLinecap="round" />
    <line x1="70" y1="10" x2="80" y2="25" stroke="#99432B" strokeWidth="3" strokeLinecap="round" />
  </svg>
)

const WavySwash = () => (
  <svg className="hero-swash swash-wavy" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 20C30 10 50 30 70 20C90 10 110 30 130 20C150 10 170 30 190 20" stroke="#99432B" strokeWidth="6" strokeLinecap="round" />
  </svg>
)

export default function Hero() {
  return (
    <section className="hero" id="home">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="hero-title-wrapper">
          <h1 className="hero-title-main">
            Built Around One<br />
            <span className="title-highlight">Extraordinary<HaloSwash /></span><br />
            Fruit
            <WavySwash />
          </h1>
        </div>
        <p className="hero-desc">
          From the milk in our coffee to the sweetness in our desserts, from handcrafted gelatos to comforting plates—every creation at Cocomunzzz 
          begins with coconut, made to be shared, remembered, and returned to.
        </p>
        <motion.button 
          className="hero-btn-ref"
          whileHover={{ scale: 1.05, backgroundColor: "#D4B991" }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Cocomunzzz
        </motion.button>
      </motion.div>

      <motion.div 
        className="hero-images-ref"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="hero-img-container">
          <img src={asset('images/hero-bakery.png')} alt="Coconut Creations" className="hero-img-ref" />
          <div className="dots-pattern-ref">
            <svg width="150" height="150" viewBox="0 0 150 150">
              {Array.from({ length: 8 }).map((_, i) => 
                Array.from({ length: 8 }).map((_, j) => (
                  <circle key={`${i}-${j}`} cx={20 + i * 15} cy={20 + j * 15} r="2.5" fill="#E8CEA7" opacity="0.4" />
                ))
              )}
            </svg>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
