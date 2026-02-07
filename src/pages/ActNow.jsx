import { Link } from 'react-router-dom';
import { Hero } from '../components/common';
import './ActNow.css';

function ActNow() {
  return (
    <div className="act-now-page">
      <Hero
        title="Act Now!"
        backgroundImage="/images/hero-mountains.jpg"
        size="medium"
      />

      <section className="section">
        <div className="container">
          <h2>Take Action Today</h2>
          <p>
            Protect the Santa Rita Mountains by writing letters, volunteering,
            and adding your name to the petition. Every action helps.
          </p>

          <div className="act-now-grid">
            <div className="act-now-card">
              <h3>Sign the Petition</h3>
              <p>Ask the Sahuarita Town Council to hold a public hearing.</p>
              <Link to="/petition" className="btn btn-secondary">Sign Now</Link>
            </div>
            <div className="act-now-card">
              <h3>Write Letters</h3>
              <p>Contact decision makers and add your voice.</p>
              <Link to="/letters" className="btn btn-secondary">Write Letters</Link>
            </div>
            <div className="act-now-card">
              <h3>Volunteer</h3>
              <p>Join outreach, events, and research teams.</p>
              <Link to="/volunteer" className="btn btn-secondary">Volunteer</Link>
            </div>
            <div className="act-now-card">
              <h3>Stay Informed</h3>
              <p>Subscribe for updates and event alerts.</p>
              <Link to="/subscribe" className="btn btn-secondary">Subscribe</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ActNow;
