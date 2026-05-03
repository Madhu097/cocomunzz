import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import MenuHighlights from './components/MenuHighlights'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="app">
      <motion.div className="progress-bar" style={{ 
        scaleX, 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        height: '4px', 
        background: '#99432B', 
        transformOrigin: '0%', 
        zIndex: 2000 
      }} />
      
      <Navbar />
      <Hero />
      <Features />
      <MenuHighlights />
      <About />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />

      <motion.div 
        className="fab"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, backgroundColor: '#99432B' }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </motion.div>
    </div>
  )
}

export default App
