import { Hero } from '../components/common';
import { externalLinks } from '../data/navigation';
import { trackEvent } from '../analytics/ga';

function Subscribe() {
  return (
    <div className="subscribe-page">
      <Hero
        title="Subscribe to Our Newsletter"
        backgroundImage="/images/hero-mountains.jpg"
        size="medium"
      />

      <section className="section">
        <div className="container" style={{ maxWidth: '720px' }}>
          <h2>Stay Informed</h2>
          <p>
            Sign up to receive updates on the Copper World project, community events,
            and ways to take action.
          </p>

          <div style={{
            marginTop: '2rem',
            padding: '1.5rem',
            borderRadius: '8px',
            border: '1px solid #e0e0e0',
            background: '#fafafa',
          }}>
            <p style={{ marginBottom: '1rem' }}>
              We use a secure signup form to protect your information.
            </p>
            <a
              href={externalLinks.subscribe}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('subscribe_click')}
            >
              Open the Signup Form
            </a>
            <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#666' }}>
              You will receive an email asking you to confirm your subscription.
              If you don\'t see it right away, please check your junk folder.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Subscribe;
