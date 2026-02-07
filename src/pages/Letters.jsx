import { Hero } from '../components/common';

function Letters() {
  return (
    <div className="letters-page">
      <Hero
        title="Write Letters"
        backgroundImage="/images/hero-mountains.jpg"
        size="medium"
      />

      <section className="section">
        <div className="container">
          <h2>Take Action: Write to Decision Makers</h2>
          <p>
            Your voice matters! Writing letters to local, state, and federal officials is one of
            the most effective ways to protect the Santa Rita Mountains from industrial mining.
          </p>

          <h3>Who to Contact</h3>
          <ul>
            <li>Pima County Board of Supervisors</li>
            <li>Arizona Department of Environmental Quality</li>
            <li>U.S. Army Corps of Engineers</li>
            <li>Your Congressional Representatives</li>
          </ul>

          <h3>Key Points to Include</h3>
          <ul>
            <li>The threat to our water supply and aquifer</li>
            <li>Impact on wildlife and habitat</li>
            <li>Air quality concerns from dust and emissions</li>
            <li>Economic impact on local tourism and property values</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Letters;
