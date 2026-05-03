export default function Footer() {
  return (
    <footer className="footer" style={{ marginTop: 0 }}>
      <div className="footer-top" style={{ marginBottom: '30px' }}>
        <div className="footer-info">
          <div className="footer-logo">Cocomunzzz</div>
          <p style={{ fontSize: '0.85rem' }}>India&rsquo;s First Coconut Café | Crafted with Love</p>
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
      <div className="footer-bottom" style={{ paddingTop: '20px' }}>
        <div className="footer-contact-info">
          <span>+91 78160 28882</span>
          <span style={{ margin: '0 15px' }}>•</span>
          <span>hello@cocomunzzz.com</span>
        </div>
        <div className="footer-copyright" style={{ fontSize: '0.75rem' }}>
          &copy; 2026 Cocomunzzz. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
