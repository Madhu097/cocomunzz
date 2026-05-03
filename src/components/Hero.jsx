import { motion } from 'framer-motion'
import { asset } from '../utils/assetPath'

export default function Hero() {
  return (
    <section className="hero" id="home" style={{ position: 'relative' }}>
      <div className="bg-element" style={{ bottom: '-50px', left: '-60px', width: '400px', opacity: 0.15, margin: 0 }}>
        <img src={asset('images/elements/1.png')} alt="" style={{ margin: 0, display: 'block' }} />
      </div>
      <div className="bg-element" style={{ top: '-50px', right: '-60px', width: '300px', opacity: 0.15, margin: 0 }}>
        <img src={asset('images/elements/2.png')} alt="" style={{ margin: 0, display: 'block' }} />
      </div>
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
            <span className="title-highlight">Extraordinary</span><br />
            Fruit
          </h1>
        </div>
        <p className="hero-desc">
          From the milk in our coffee to the sweetness in our desserts, from handcrafted gelatos to comforting plates—every creation at Cocomunzz 
          begins with coconut, made to be shared, remembered, and returned to.
        </p>
        <motion.button 
          className="hero-btn-ref"
          whileHover={{ scale: 1.05, backgroundColor: "#D4B991" }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Cocomunzz
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
                  <circle key={`${i}-${j}`} cx={20 + i * 15} cy={20 + j * 15} r="2.5" fill="#FBF3E0" opacity="0.4" />
                ))
              )}
            </svg>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
