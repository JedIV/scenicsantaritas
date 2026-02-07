import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import { externalLinks } from '../../data/navigation';
import './Header.css';
import { trackEvent } from '../../analytics/ga';

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
            href={externalLinks.donate}
            className="btn btn-donate"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('donate_click', { location: 'header' })}
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
