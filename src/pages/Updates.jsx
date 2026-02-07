import { Hero } from '../components/common';
import { Link } from 'react-router-dom';

function Updates() {
  return (
    <div className="updates-page">
      <Hero
        title="Copper World Updates"
        backgroundImage="/images/hero-mining.jpg"
        size="medium"
      />

      <section className="section">
        <div className="container">
          <h2>Current Status of the Copper World Project</h2>
          <p>
            Hudbay Minerals is proposing to build a large open-pit copper mine in the Santa Rita
            Mountains, just south of Tucson. The project threatens our water supply, air quality,
            wildlife habitat, and quality of life.
          </p>

          <h3>Key Issues</h3>

          <div style={{ marginBottom: '2rem' }}>
            <h4>Water</h4>
            <p>
              The mine would pump massive amounts of groundwater from the regional aquifer,
              threatening water supplies for Sahuarita, Green Valley, and surrounding communities.
            </p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4>Air Quality</h4>
            <p>
              Mining operations would generate significant dust and emissions, impacting air quality
              for thousands of residents and visitors.
            </p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h4>Wildlife</h4>
            <p>
              The Santa Rita Mountains are home to diverse wildlife, including jaguars, ocelots,
              and hundreds of bird species. The mine would destroy critical habitat.
            </p>
          </div>

          <h3>Learn More</h3>
          <ul>
            <li><Link to="/news">Copper World News</Link></li>
            <li><Link to="/faq">Frequently Asked Questions</Link></li>
            <li><Link to="/maps">Maps and Resources</Link></li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Updates;
