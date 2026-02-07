import { Link } from 'react-router-dom';
import { resourceLinks } from '../../data/newsArticles';
import './ResourcesSection.css';

function ResourcesSection() {
  return (
    <section className="resources-section section section-light">
      <div className="container">
        <h2 className="resources-title">More opportunities to learn</h2>

        <div className="resources-grid">
          {resourceLinks.map((resource) => (
            <Link
              key={resource.id}
              to={resource.path}
              className="resource-circle"
            >
              <span className="resource-label">{resource.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResourcesSection;
