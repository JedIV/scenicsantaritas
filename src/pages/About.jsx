import { Hero } from '../components/common';
import './About.css';

const boardMembers = [
  { name: 'Gayle Hartmann', role: 'President' },
  { name: 'John Hartmann', role: 'Treasurer' },
  { name: 'Stu Williams', role: 'Secretary' },
  { name: 'Roger Pfeuffer', role: 'Board Member' },
  { name: 'Ron Pulliam', role: 'Board Member' },
  { name: 'Carolyn Campbell', role: 'Board Member' },
];

function About() {
  return (
    <div className="about-page">
      <Hero
        title="About Save the Scenic Santa Ritas"
        backgroundImage="/images/hero-mountains.jpg"
        size="medium"
      />

      <section className="mission-section section">
        <div className="container text-center">
          <h2>Mission statement:</h2>
          <p className="mission-text">
            We protect the scenic, aesthetic, recreational, environmental and wildlife values of the
            Santa Rita Mountains through education and outreach, including protection of these
            areas from degradation due to mining activities.
          </p>
          <a href="/story" className="btn btn-secondary">
            Our Story ❯
          </a>
        </div>
      </section>

      <section className="team-section section section-dark">
        <div className="container">
          <h2 className="text-center">Staff & Board Members</h2>
          <div className="team-grid">
            {boardMembers.map((member) => (
              <div key={member.name} className="team-member">
                <div className="member-photo">
                  <img src="/images/logo.png" alt={member.name} />
                </div>
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
