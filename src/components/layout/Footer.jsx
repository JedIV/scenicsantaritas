import { Link } from 'react-router-dom';
import { contactInfo, externalLinks } from '../../data/navigation';
import './Footer.css';
import { trackEvent } from '../../analytics/ga';

function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (event) => {
    event.preventDefault();
    trackEvent('newsletter_signup_click', { location: 'footer' });
    window.open(externalLinks.subscribe, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container footer-grid">
          {/* Newsletter Section */}
          <div className="footer-section">
            <h3 className="footer-title">Newsletter</h3>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
                aria-label="Email for newsletter"
              />
              <button type="submit" className="btn btn-secondary newsletter-btn">
                Sign Up <span aria-hidden="true">→</span>
              </button>
            </form>
            <p className="newsletter-note">
              You will not be added unless you confirm your subscription by email.
            </p>
          </div>

          {/* Contact Section */}
          <div className="footer-section">
            <h3 className="footer-title">Contact us:</h3>
            <address className="contact-info">
              <p>{contactInfo.address}</p>
              <p>{contactInfo.city}</p>
              <p>Phone: {contactInfo.phone}</p>
              <p>
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </p>
            </address>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p className="copyright">
            &copy;{currentYear} by{' '}
            <a href="https://scenicsantaritas.org">ScenicSantaRitas.org</a>
          </p>

          <div className="footer-logo">
            <img src="/images/logo.png" alt="Save The Scenic Santa Ritas Association" />
            <span className="footer-logo-text">
              Save The Scenic<br />Santa Ritas<br />Association
            </span>
          </div>

          <div className="social-links">
            <a
              href="https://www.facebook.com/ScenicSantaRitas/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="social-link"
            >
              <svg viewBox="0 0 24 24" width="32" height="32" fill="#4267B2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@scenicsantaritas"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="social-link"
            >
              <svg viewBox="0 0 24 24" width="32" height="32" fill="#FF0000">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
