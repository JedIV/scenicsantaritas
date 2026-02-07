import { Hero } from '../components/common';
import { externalLinks } from '../data/navigation';

function Volunteer() {
  return (
    <div className="volunteer-page">
      <Hero
        title="Volunteer With Us"
        backgroundImage="/images/hero-mountains.jpg"
        size="medium"
      />

      <section className="section">
        <div className="container">
          <h2>Join Our Team</h2>
          <p>
            We need dedicated volunteers to help protect the Santa Rita Mountains.
            Whether you have an hour or a day, there are many ways to get involved.
          </p>

          <h3>Volunteer Opportunities</h3>
          <ul>
            <li>Community outreach and education</li>
            <li>Event planning and support</li>
            <li>Social media and communications</li>
            <li>Research and documentation</li>
            <li>Tabling at local events</li>
          </ul>

          <p>
            Contact us at <a href="mailto:info@scenicsantaritas.org">info@scenicsantaritas.org</a> to learn more about volunteer opportunities.
          </p>

          <a
            href={externalLinks.volunteerSignup}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Volunteer Signup Form
          </a>
        </div>
      </section>
    </div>
  );
}

export default Volunteer;
