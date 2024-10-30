
import React from "react";

const Footer = () => {
  return (
    <section className="footer" style={{ backgroundColor: '#2A2B2E', color: '#dfe6e9', padding: '50px 20px', textAlign: 'center' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <div className="footer-section">
          <i className="fas fa-home" style={{ fontSize: '24px', color: '#F39C12' }}></i>
          <p className="footer-other-text" style={{ marginTop: '20px', color: '#b2bec3' }}>
            Your trusted real estate agency. We provide the best properties tailored to your needs.
          </p>
          <div className="footer-social" style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
            <div className="footer-social-item" style={{ backgroundColor: '#3b3c40' }}><i className="fab fa-facebook" style={{ color: 'white' }}></i></div>
            <div className="footer-social-item" style={{ backgroundColor: '#3b3c40' }}><i className="fab fa-twitter" style={{ color: 'white' }}></i></div>
            <div className="footer-social-item" style={{ backgroundColor: '#3b3c40' }}><i className="fab fa-instagram" style={{ color: 'white' }}></i></div>
          </div>
        </div>
        <div className="footer-section">
          <p className="footer-title" style={{ color: '#F39C12', fontWeight: 'bold', marginTop: '20px' }}>Menu</p>
          <ul className="footer-ul" style={{ listStyle: 'none', padding: 0, color: '#dfe6e9' }}>
            <li>Home</li>
            <li>Blog</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-section">
          <p className="footer-title" style={{ color: '#F39C12', fontWeight: 'bold', marginTop: '20px' }}>Categories</p>
          <ul className="footer-ul" style={{ listStyle: 'none', padding: 0, color: '#dfe6e9' }}>
            <li>Residential</li>
            <li>Commercial</li>
            <li>Luxury</li>
            <li>Affordable</li>
          </ul>
        </div>
        <div className="footer-section">
          <p className="footer-title" style={{ color: '#F39C12', fontWeight: 'bold', marginTop: '20px' }}>Contact</p>
          <ul className="footer-ul" style={{ listStyle: 'none', padding: 0, color: '#dfe6e9' }}>
            <li><i className="fas fa-clock" style={{ color: '#F39C12' }}></i> 08:00-18:00</li>
            <li><i className="fas fa-envelope" style={{ color: '#F39C12' }}></i> info@imobiliaria.com</li>
            <li><i className="fas fa-map-marker-alt" style={{ color: '#F39C12' }}></i> Main Office, City</li>
            <li><i className="fas fa-phone-alt" style={{ color: '#F39C12' }}></i> (555) 123-4567</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
