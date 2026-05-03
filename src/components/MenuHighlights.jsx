import { motion } from 'framer-motion'

const menuItems = [
  { img: '/images/espresso-creations.png', title: 'Coconut Coffee Range' },
  { img: '/images/signature-cupcakes.png', title: 'Coconut Pudding' },
  { img: '/images/brunch-treats.png', title: 'Coconut Gelato' },
]

export default function MenuHighlights() {
  return (
    <section className="menu-section" id="menu">
      <div className="section-header">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: '2.5rem', lineHeight: '1.2' }}
        >
          A few creations that have made<br />
          Cocomunzzz impossible to forget.
        </motion.h2>
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
