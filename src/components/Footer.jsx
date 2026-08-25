import { asset } from '../utils/assetPath'
const logoImg = asset('images/Logo.png')
import firstlookLogo from '../assets/logo f1.png'

export default function Footer() {
  return (
    <footer className="footer" style={{ marginTop: 0 }}>
      <div className="footer-top" style={{ marginBottom: '30px' }}>
        <div className="footer-info">
          <div className="footer-logo" style={{ display: 'flex', alignItems: 'center' }}>
            <a href="#home">
              <img src={logoImg} alt="Cocomunzzz Logo" style={{ height: '120px', width: 'auto', filter: 'brightness(0) invert(1)' }} />
            </a>
          </div>
          <p style={{ fontSize: '0.85rem', marginBottom: '8px' }}>India&rsquo;s First Coconut Café | Crafted with Love</p>
          <div className="footer-contact-info" style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)' }}>
            <span>+91 78160 28882</span>
            <span style={{ margin: '0 10px' }}>•</span>
            <span>business@cocomunzzz.com</span>
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
        <div className="footer-copyright" style={{ fontSize: '0.8rem', color: '#FFFDD0' }}>
          &copy; 2026 Cocomunzzz. All rights reserved.
        </div>
        <div className="footer-credit" style={{ fontSize: '0.8rem', color: '#FFFDD0', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          Designed and Developed by
          <a href="https://f1rstlook.in" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <img src={firstlookLogo} alt="Firstlook" style={{ height: '40px' }} />
          </a>
        </div>
      </div>
    </footer>
  )
}
