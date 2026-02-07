import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img src="/images/logo.avif" alt="Save The Scenic Santa Ritas Association" className="logo-image" />
        </Link>

        <div className="header-right">
          <div className="search-box">
            <input type="search" placeholder="Search..." aria-label="Search" />
          </div>
          <a
            href="https://www.paypal.com/donate/?hosted_button_id=XXXXXXX"
            className="btn btn-donate"
            target="_blank"
            rel="noopener noreferrer"
          >
            Donate Now
          </a>
        </div>
      </div>
      <Navigation />
    </header>
  );
}

export default Header;
