import { motion } from 'framer-motion'
import { asset } from '../utils/assetPath'

const images = [
  asset('images/gallery_main_1777830656429.png'),
  asset('images/gallery_drink_1777830707204.png'),
  asset('images/gallery_cookies_1777830723782.png'),
  asset('images/gallery_dessert_1777830670974.png'),
  asset('images/gallery_barista_1777830687114.png')
]

export default function Gallery() {
  return (
    <section className="gallery-section">
      <div className="section-header">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: '3rem', lineHeight: '1.2' }}
        >
          Our Gallery
        </motion.h2>
      </div>
      <motion.div 
        className="gallery-bento"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="bento-left">
          <div className="bento-img-container bento-main-img">
            <img className="bento-img" src={images[0]} alt="Bakery Scene 1" />
          </div>
          <div className="bento-bottom-row">
            <div className="bento-img-container bento-small-img">
              <img className="bento-img" src={images[1]} alt="Bakery Scene 2" />
            </div>
            <div className="bento-img-container bento-small-img">
              <img className="bento-img" src={images[2]} alt="Bakery Scene 3" />
            </div>
          </div>
        </div>
        <div className="bento-right">
          <div className="bento-img-container bento-top-right">
            <img className="bento-img" src={images[3]} alt="Bakery Scene 4" />
          </div>
          <div className="bento-img-container bento-bottom-right">
            <img className="bento-img" src={images[4]} alt="Bakery Scene 5" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
