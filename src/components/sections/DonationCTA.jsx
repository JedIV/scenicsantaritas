import { externalLinks } from '../../data/navigation';
import './DonationCTA.css';

function DonationCTA() {
  return (
    <section className="donation-section section">
      <div className="container">
        <div className="donation-grid">
          <div className="donation-image">
            <img
              src="/images/santa-ritas-painting.jpg"
              alt="Watercolor painting of the Santa Rita Mountains"
            />
            <a
              href={externalLinks.donate}
              className="btn btn-donate donation-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate today <span aria-hidden="true">❯</span>
            </a>
          </div>

          <div className="donation-content">
            <h2 className="donation-title">
              Together, we can<br />stop Hudbay
            </h2>
            <p className="donation-text">
              <strong>The Santa Ritas belong to all of us,<br />
              not to a Canadian mining company.</strong>
            </p>
            <p className="donation-appeal">
              Help pay for outreach and lawyers.<br />
              Please give generously.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DonationCTA;
