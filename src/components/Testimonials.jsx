import { motion } from 'framer-motion'
import { asset } from '../utils/assetPath'

const reviews = [
  {
    name: 'Rahul M.',
    initial: 'R',
    stars: 5,
    text: '"The croissants here are incredible — crispy, flaky, and buttery. Coffee is consistently great. A cozy spot to start the day!"',
  },
  {
    name: 'Amira S.',
    initial: 'A',
    stars: 5,
    text: '"I drive 20 minutes just for their cupcakes — worth every single bite. The staff is kind and the vibe is so welcoming."',
  },
  {
    name: 'Kevin L.',
    initial: 'K',
    stars: 5,
    text: '"Top-notch, from the morning pastries to the evening treats. Everything is freshly baked and you can truly taste the difference."',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Moved elements to corners to avoid overlapping title */}
      <div className="bg-element" style={{ top: '10%', left: '-50px', width: '280px', opacity: 0.07 }}>
        <img src={asset('images/elements/3.png')} alt="" />
      </div>
      <div className="bg-element" style={{ bottom: '-40px', right: '-30px', width: '220px', opacity: 0.07, transform: 'rotate(10deg)' }}>
        <img src={asset('images/elements/5.png')} alt="" />
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
