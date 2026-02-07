import { Link } from 'react-router-dom';
import './Card.css';

function Card({
  title,
  description,
  image,
  imageAlt,
  link,
  linkText = 'Read more',
  external = false,
}) {
  const LinkComponent = external ? 'a' : Link;
  const linkProps = external
    ? { href: link, target: '_blank', rel: 'noopener noreferrer' }
    : { to: link };

  return (
    <article className="card">
      {image && (
        <div className="card-image">
          <img src={image} alt={imageAlt || title} />
        </div>
      )}
      <div className="card-content">
        <h3 className="card-title">
          {link ? (
            <LinkComponent {...linkProps}>{title}</LinkComponent>
          ) : (
            title
          )}
        </h3>
        {description && <p className="card-description">{description}</p>}
        {link && (
          <LinkComponent {...linkProps} className="card-link">
            {linkText} <span aria-hidden="true">→</span>
          </LinkComponent>
        )}
      </div>
    </article>
  );
}

export default Card;
