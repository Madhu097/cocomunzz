import { motion } from 'framer-motion'
import { asset } from '../utils/assetPath'

const images = [
  asset('images/about-bakery-1.png'),
  asset('images/about-bakery-2.png'),
  asset('images/about-bakery-3.png'),
  asset('images/espresso-creations.png'),
  asset('images/signature-cupcakes.png')
]

export default function Gallery() {
  return (
    <section className="gallery-section">
      <motion.div 
        className="gallery-grid"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="gallery-item"
          style={{ gridColumn: 'span 2', gridRow: 'span 2' }}
          whileHover={{ scale: 1.02 }}
        >
          <img src={images[0]} alt="Bakery Scene 1" />
        </motion.div>
        
        <motion.div className="gallery-item" whileHover={{ scale: 1.05 }}>
          <img src={images[1]} alt="Bakery Scene 2" />
        </motion.div>
        
        <motion.div className="gallery-item" whileHover={{ scale: 1.05 }}>
          <img src={images[2]} alt="Bakery Scene 3" />
        </motion.div>
        
        <motion.div className="gallery-item" whileHover={{ scale: 1.05 }}>
          <img src={images[3]} alt="Bakery Scene 4" />
        </motion.div>

        <motion.div className="gallery-item" whileHover={{ scale: 1.05 }}>
          <img src={images[4]} alt="Bakery Scene 5" />
        </motion.div>
      </motion.div>
    </section>
  )
}
