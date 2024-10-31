
import React from "react";

const Footer = () => {
  return (
    <section className="footer" style={{ backgroundColor: '#224459', color: '#dfe6e9', padding: '50px 20px', textAlign: 'center' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <div className="footer-section">
          <i className="fas fa-home" style={{ fontSize: '24px', color: '#51718C' }}></i>
          <p className="footer-other-text" style={{ marginTop: '20px', color: '#b2bec3' }}>
            Imobiliária Manduri - 2024.
          </p>
          <div className="footer-social" style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
            <div className="footer-social-item" style={{ backgroundColor: '#3b3c40' }}><i className="fab fa-facebook" style={{ color: 'white' }}></i></div>
            <div className="footer-social-item" style={{ backgroundColor: '#3b3c40' }}><i className="fab fa-twitter" style={{ color: 'white' }}></i></div>
            <div className="footer-social-item" style={{ backgroundColor: '#3b3c40' }}><i className="fab fa-instagram" style={{ color: 'white' }}></i></div>
          </div>
        </div>
        <div className="footer-section">
          <p className="footer-title" style={{ color: '#51718C', fontWeight: 'bold', marginTop: '20px' }}>Menu</p>
          <ul className="footer-ul" style={{ listStyle: 'none', padding: 0, color: '#dfe6e9' }}>
            <li>Home</li>
            <li>Propriedades</li>
            <li>Sobre</li>
            <li>Contato</li>
          </ul>
        </div>
        <div className="footer-section">
          <p className="footer-title" style={{ color: '#51718C', fontWeight: 'bold', marginTop: '20px' }}>Contato</p>
          <ul className="footer-ul" style={{ listStyle: 'none', padding: 0, color: '#dfe6e9' }}>
            <li><i className="fas fa-clock" style={{ color: '#51718C' }}></i> 08:00-18:00</li>
            <li><i className="fas fa-envelope" style={{ color: '#51718C' }}></i> info@imobiliaria.com</li>
            <li><i className="fas fa-map-marker-alt" style={{ color: '#51718C' }}></i> Main Office, City</li>
            <li><i className="fas fa-phone-alt" style={{ color: '#51718C' }}></i> (555) 123-4567</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
