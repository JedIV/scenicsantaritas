import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { mainNavigation } from '../../data/navigation';
import './Navigation.css';

function Navigation() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDropdownEnter = (index) => {
    setOpenDropdown(index);
  };

  const handleDropdownLeave = () => {
    setOpenDropdown(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="main-nav">
      <div className="nav-container">
        <button
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger"></span>
        </button>

        <ul className={`nav-list ${mobileMenuOpen ? 'nav-list--open' : ''}`}>
          {mainNavigation.map((item, index) => (
            <li
              key={item.path}
              className={`nav-item ${item.children ? 'has-dropdown' : ''}`}
              onMouseEnter={() => item.children && handleDropdownEnter(index)}
              onMouseLeave={handleDropdownLeave}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'nav-link--active' : ''}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </NavLink>

              {item.children && (
                <ul className={`dropdown ${openDropdown === index ? 'dropdown--open' : ''}`}>
                  {item.children.map((child) => (
                    <li key={child.path} className="dropdown-item">
                      {child.external ? (
                        <a
                          href={child.path}
                          className="dropdown-link"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.label}
                        </a>
                      ) : (
                        <Link
                          to={child.path}
                          className="dropdown-link"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
