import { asset } from '../utils/assetPath'
import logoImg from '../assets/Logo.png'

export default function Footer() {
  return (
    <footer className="footer" style={{ marginTop: 0 }}>
      <div className="footer-top" style={{ marginBottom: '30px' }}>
        <div className="footer-info">
          <div className="footer-logo" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logoImg} alt="Cocomunzz Logo" style={{ height: '65px', width: 'auto', filter: 'brightness(0) invert(1)' }} />
          </div>
          <p style={{ fontSize: '0.85rem', marginBottom: '8px' }}>India&rsquo;s First Coconut Café | Crafted with Love</p>
          <div className="footer-contact-info" style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)' }}>
            <span>+91 78160 28882</span>
            <span style={{ margin: '0 10px' }}>•</span>
            <span>hello@cocomunzz.com</span>
          </div>
        </div>
        <div className="footer-links">
          <ul style={{ listStyle: 'none', display: 'flex', gap: '30px' }}>
            <li><a href="#home" style={{ color: 'inherit', textDecoration: 'none', fontSize: '0.85rem' }}>Home</a></li>
            <li><a href="#menu" style={{ color: 'inherit', textDecoration: 'none', fontSize: '0.85rem' }}>Menu</a></li>
            <li><a href="#about" style={{ color: 'inherit', textDecoration: 'none', fontSize: '0.85rem' }}>About</a></li>
            <li><a href="#contact" style={{ color: 'inherit', textDecoration: 'none', fontSize: '0.85rem' }}>Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom" style={{ paddingTop: '20px', alignItems: 'center' }}>
        <div className="footer-copyright" style={{ fontSize: '0.8rem' }}>
          &copy; 2026 Cocomunzz. All rights reserved.
        </div>
        <div className="footer-credit" style={{ fontSize: '0.8rem' }}>
          Designed and Developed by{' '}
          <a href="https://firstlook.digital/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', fontWeight: 'bold' }}>
            <span style={{ color: '#FFA500' }}>F</span>
            <span style={{ color: '#000000' }}>1</span>
            <span style={{ color: '#FFA500' }}>rst</span>
            <span style={{ color: '#000000' }}>look</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
