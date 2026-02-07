import { Link } from 'react-router-dom';
import './Hero.css';

function Hero({
  title,
  subtitle,
  backgroundImage,
  ctaText,
  ctaLink,
  ctaExternal = false,
  overlay = true,
  size = 'large',
}) {
  return (
    <section
      className={`hero hero--${size}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {overlay && <div className="hero-overlay" />}
      <div className="hero-content">
        {title && <h1 className="hero-title">{title}</h1>}
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        {ctaText && ctaLink && (
          ctaExternal ? (
            <a
              href={ctaLink}
              className="btn btn-primary hero-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              {ctaText}
            </a>
          ) : (
            <Link to={ctaLink} className="btn btn-primary hero-cta">
              {ctaText}
            </Link>
          )
        )}
      </div>
    </section>
  );
}

export default Hero;
