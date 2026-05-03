import { motion } from 'framer-motion'
import { asset } from '../utils/assetPath'

export default function Contact() {
  return (
    <section className="contact-section" id="contact" style={{ position: 'relative' }}>
      <div className="bg-element" style={{ top: '5%', right: '-60px', width: '150px', opacity: 0.08, margin: 0 }}>
        <img src={asset('images/elements/2.png')} alt="" style={{ margin: 0, display: 'block' }} />
      </div>

      <motion.div 
        className="contact-left"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Quick Order /<br />Contact</h2>
        <p>
          Whether you&rsquo;re placing a bulk order or just want to say hello, we&rsquo;d love to hear from you. Reach out through any of the channels below.
        </p>
        
        <div className="contact-details">
          <div className="contact-item">
            <div className="contact-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <span>+91 78160 28882</span>
          </div>
          <div className="contact-item">
            <div className="contact-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <span>hello@cocomunzzz.com</span>
          </div>
          <div className="contact-item">
            <div className="contact-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <span>Andhra Pradesh, India</span>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="contact-right"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <form className="contact-form" action="https://formsubmit.co/madhukuruva20@gmail.com" method="POST">
          {/* Honeypot field for spam prevention */}
          <input type="text" name="_honey" style={{ display: 'none' }} />
          {/* Disable Captcha to keep it clean, optional but helpful */}
          <input type="hidden" name="_captcha" value="false" />
          
          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <input type="text" name="subject" placeholder="Subject" required />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          </div>
          <motion.button 
            type="submit"
            className="submit-btn"
            whileHover={{ scale: 1.02, backgroundColor: "#5a5c39" }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  )
}
