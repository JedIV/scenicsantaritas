import { Link } from 'react-router-dom';
import { Hero } from '../components/common';
import { NewsSection, ResourcesSection, DonationCTA } from '../components/sections';
import './Home.css';

function Home() {
  return (
    <div className="home-page" id="top">
      {/* Hero Section */}
      <Hero
        title="STOP COPPER WORLD!"
        backgroundImage="/images/hero-mining.jpg"
        size="large"
      />

      {/* Mission Statement */}
      <section className="mission-section section">
        <div className="container text-center">
          <p className="mission-text">
            Since 1996 we have been fighting to protect the Santa Rita Mountains from the
            devastating effects of industrial, open-pit mining. We are 3,000 citizens united to defend
            the wild mountains we love.
          </p>
          <Link to="/updates" className="btn btn-primary">
            Current Status of Copper World Project
          </Link>
        </div>
      </section>

      {/* Act Now Section */}
      <section className="act-now-section section">
        <div className="container">
          <h2 className="text-center">Act Now!</h2>
          <p className="act-now-intro text-center">
            Protect the Santa Rita Mountains. Get involved today.
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
              <Link to="/letters" className="btn btn-secondary">Get Started</Link>
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

      {/* Town Hall Video Section */}
      <section className="townhall-section section section-light">
        <div className="container">
          <h2 className="townhall-title text-center">Watch the recording of our Town Hall on Jan. 31</h2>
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/nC0B2aEUZM4"
              title="Copper World Town Hall in Sahuarita"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="text-center" style={{ marginTop: 'var(--spacing-md)' }}>
            <Link to="/updates" className="btn btn-secondary">View the Slides</Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <NewsSection limit={5} />

      {/* Info Section */}
      <section className="info-section section section-dark">
        <div className="container text-center">
          <h2 className="info-title">
            Learn more about Copper World&apos;s threat<br />
            to the aquifer and future water bills
          </h2>
          <p className="info-text">
            The Copper World proposal would pump massive amounts of groundwater from the regional aquifer.
          </p>
          <Link to="/updates" className="btn btn-secondary info-cta">
            Learn More
          </Link>
        </div>
      </section>

      {/* Resources Section */}
      <ResourcesSection />

      {/* Donation CTA */}
      <DonationCTA />
    </div>
  );
}

export default Home;
