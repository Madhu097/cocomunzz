import { motion } from 'framer-motion'

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

const ToastIcon = () => (
  <svg className="toast-decor" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 30C20 25 25 20 30 20H70C75 20 80 25 80 30V70C80 75 75 80 70 80H30C25 80 20 75 20 70V30Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M30 40C30 38 32 36 34 36H66C68 36 70 38 70 40V60C70 62 68 64 66 64H34C32 64 30 62 30 60V40Z" fill="currentColor" opacity="0.2"/>
  </svg>
)

export default function Testimonials() {
  return (
    <section className="testimonials">
      <ToastIcon />
      <div className="section-header">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          What Our Guests<br />Are Saying
        </motion.h2>
        <span style={{ fontSize: '5rem', color: 'var(--creama)', opacity: 0.5, fontFamily: 'serif' }}>“</span>
      </div>

      <div className="testimonial-grid">
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
              <span style={{ fontWeight: 700 }}>{r.name}</span>
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
