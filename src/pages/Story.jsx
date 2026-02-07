import { Hero } from '../components/common';

function Story() {
  return (
    <div className="story-page">
      <Hero
        title="Our Story"
        backgroundImage="/images/hero-mountains.jpg"
        size="medium"
      />

      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <h2>Protecting the Santa Ritas Since 1996</h2>
          <p>
            Save the Scenic Santa Ritas began as a community response to large-scale mining proposals
            in the Santa Rita Mountains. Our mission is to protect the scenic, recreational, and
            environmental values of these mountains through education, outreach, and advocacy.
          </p>
          <p>
            We are a volunteer-driven organization working with residents, local leaders, and partner
            organizations to ensure that our water, air quality, and wildlife habitat are protected for
            future generations.
          </p>
          <p>
            If you want to help, we welcome volunteers, letter writers, and community supporters. Every
            action adds strength to our shared effort to protect the Santa Rita Mountains.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Story;
