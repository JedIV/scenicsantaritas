import { Hero } from '../components/common';
import { externalLinks } from '../data/navigation';

function Rosemont() {
  return (
    <div className="rosemont-page">
      <Hero
        title="Rosemont Mine Truth"
        backgroundImage="/images/hero-mountains.jpg"
        size="medium"
      />

      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <h2>Learn the Facts</h2>
          <p>
            The Rosemont Mine Truth project documents the history, impacts, and legal status of the
            Rosemont mine proposal. It includes reports, maps, and timelines that help residents and
            decision makers understand what is at stake.
          </p>
          <p>
            Visit the Rosemont Mine Truth site for detailed resources and updates.
          </p>
          <a
            href={externalLinks.mineTruth}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Rosemont Mine Truth
          </a>
        </div>
      </section>
    </div>
  );
}

export default Rosemont;
