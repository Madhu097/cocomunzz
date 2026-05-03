import { motion } from 'framer-motion'
import { asset } from '../utils/assetPath'

const reviews = [
  {
    name: 'Kiranendra Vivek Kolli',
    initial: 'K',
    stars: 5,
    text: '"I loved the food and it\'s quality and of course it\'s authenticity. It was awesome 👌. I recommend people to try out at this place."',
  },
  {
    name: 'Abhi Frank',
    initial: 'A',
    stars: 5,
    text: '"A Hidden Gem for Coconut Lovers & Minimalist Aesthetics!. From the moment I stepped in, I was impressed by the calming ambiance and clean, minimalistic design. The coconut-based offerings are the real highlight here—delicious, natural, and beautifully presented. If you’re looking for a chill spot with great vibes and even better coconut treats, this café is a must-visit!"',
  },
  {
    name: 'Aishwarya Nagula',
    initial: 'A',
    stars: 5,
    text: '"You must try everything here. What a fun way to hero coconut which is so readily available and accessible to us here in Andhra! There has not been one thing here that I’ve tried and not liked. The gelato is out of this world!!!!! Also, COCONUTS about the Vietnamese iced coffee! 🤌🏾🤌🏾🤌🏾🤌🏾✨✨✨✨⚡️⚡️⚡️⚡️"',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials" style={{ position: 'relative' }}>
      {/* Moved elements to corners to avoid overlapping title */}
      <div className="bg-element" style={{ top: '10%', left: '-60px', width: '280px', opacity: 0.07, margin: 0 }}>
        <img src={asset('images/elements/5.png')} alt="" style={{ margin: 0, display: 'block' }} />
      </div>
      <div className="bg-element" style={{ bottom: '-40px', right: '-60px', width: '220px', opacity: 0.07, margin: 0 }}>
        <img src={asset('images/elements/3.png')} alt="" style={{ margin: 0, display: 'block' }} />
      </div>

      <div className="section-header" style={{ position: 'relative', zIndex: 2 }}>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          What Our Guests<br />Are Saying
        </motion.h2>
        <span style={{ fontSize: '5rem', color: '#e8cea7', opacity: 0.2, fontFamily: 'serif' }}>“</span>
      </div>

      <div className="testimonial-grid" style={{ position: 'relative', zIndex: 2 }}>
        {reviews.map((r, i) => (
          <motion.div 
            className="testimonial-card" 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className="testimonial-header">
              <div className="avatar">{r.initial}</div>
              <span style={{ fontWeight: 400 }}>{r.name}</span>
            </div>
            <div className="stars">
              {'★'.repeat(r.stars)}
            </div>
            <p className="testimonial-text">{r.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
