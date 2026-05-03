import { motion } from 'framer-motion'
import { asset } from '../utils/assetPath'

import img1 from '../assets/products/vietnamese cold coffee.jpg'
import img2 from '../assets/products/coco almond cookies.jpg'
import img3 from '../assets/products/TENDER COCONUT KISS.jpg'
import img4 from '../assets/products/BISCOFF AFFAGATO copy.jpg'

const menuItems = [
  { img: img1, title: 'Vietnamese Coconut Coffee' },
  { img: img2, title: 'Coco Almond Cookies' },
  { img: img3, title: 'Tender Coconut Kiss Shake' },
  { img: img4, title: 'Coconut Affogato' },
]

export default function MenuHighlights() {
  return (
    <section className="menu-section" id="menu" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="bg-element" style={{ bottom: '-50px', right: '-60px', width: '300px', opacity: 0.1, margin: 0 }}>
        <img src={asset('images/elements/3.png')} alt="" style={{ margin: 0, display: 'block' }} />
      </div>

      <div className="section-header">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: '3rem', lineHeight: '1.2' }}
          >
            Menu Highlights
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            style={{ fontSize: '1.2rem', color: '#666', lineHeight: '1.6', fontFamily: 'var(--font-body)' }}
          >
            A few creations that have made cocomunzz impossible to forget.
          </motion.p>
        </div>
        <a href="#" className="view-all">View Full Menu →</a>
      </div>

      <div className="menu-grid">
        {menuItems.map((item, i) => (
          <motion.div 
            className="menu-item-card" 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <img src={item.img} alt={item.title} />
            <div className="menu-item-overlay">
              <motion.h3
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 + 0.3 }}
              >
                {item.title}
              </motion.h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
