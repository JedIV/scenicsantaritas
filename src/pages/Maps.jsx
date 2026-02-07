import { useEffect, useState } from 'react';
import './Maps.css';

const mapResources = [
  {
    id: 1,
    title: 'Pima County Interactive Map',
    description: 'Explore the proposed Rosemont and Copper World projects virtually using this interactive Pima County map.',
    image: '/images/maps/pima-county-interactive.png',
    link: 'https://gis.pima.gov/',
  },
  {
    id: 2,
    title: 'Copper World & Rosemont Mine Location',
    description: 'Overview map showing the location of the proposed Copper World and Rosemont mines in relation to Tucson and surrounding communities.',
    image: '/images/maps/copper-world-rosemont-tucson.jpg',
  },
  {
    id: 3,
    title: 'Tailings Proximity to Corona de Tucson',
    description: "Hudbay's Copper World project has bought private land where it plans to dump toxic tailings extremely close to Corona de Tucson community.",
    image: '/images/maps/parcels-corona-de-tucson.jpg',
  },
  {
    id: 4,
    title: 'Distance from Tailings to Copper Ridge Elementary',
    description: 'Copper World plans to put a massive tailings pile less than one and a half miles from the Copper Ridge Elementary School. The dust pile will be hundreds of feet tall.',
    image: '/images/maps/copper-ridge-school-distance.jpg',
  },
  {
    id: 5,
    title: 'Corona Foothills Middle School Proximity',
    description: 'Map showing the distance from the proposed mining operations to Corona Foothills Middle School.',
    image: '/images/maps/corona-foothills-middle-school.jpg',
  },
  {
    id: 6,
    title: 'Quail Creek to Tailings Distance',
    description: 'Map illustrating the proximity of the Quail Creek community to the proposed tailings facility.',
    image: '/images/maps/quail-creek-to-tailings.jpg',
  },
  {
    id: 7,
    title: 'Hudbay ASLD Parcels',
    description: 'Map showing Arizona State Land Department parcels associated with Hudbay mining operations.',
    image: '/images/maps/hudbay-asld-parcels.png',
  },
  {
    id: 8,
    title: 'Santa Rita Skyline - Before & After',
    description: 'Visual comparison showing how the Santa Rita mountain skyline would be affected by mining operations.',
    image: '/images/maps/santa-rita-skyline-after.jpg',
  },
  {
    id: 9,
    title: 'Visitor Base Map',
    description: 'Base map for visitors showing the Santa Rita Mountains region and key landmarks.',
    image: '/images/maps/basemap-visitor.jpg',
  },
];

function Maps() {
  const [selectedMap, setSelectedMap] = useState(null);

  useEffect(() => {
    if (selectedMap) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }

    document.body.style.overflow = '';
    return undefined;
  }, [selectedMap]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedMap(null);
      }
    };

    if (selectedMap) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedMap]);

  const openLightbox = (map) => {
    setSelectedMap(map);
  };

  const closeLightbox = () => {
    setSelectedMap(null);
  };

  return (
    <div className="maps-page">
      <section
        style={{
          background: 'linear-gradient(135deg, #f5f5f0 0%, #e8d5a3 50%, #d4a574 100%)',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-primary)' }}>
          Library: <span style={{ color: 'var(--color-primary-light)' }}>Maps Room</span>
        </h1>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ marginBottom: '1rem' }}>
            <select
              style={{
                padding: '0.75rem 1rem',
                borderRadius: '4px',
                border: '1px solid #ccc',
                fontSize: '1rem',
              }}
            >
              <option>Map types</option>
              <option>Mine Footprint</option>
              <option>Water Resources</option>
              <option>Wildlife Habitat</option>
              <option>Community Impact</option>
            </select>
          </div>

          <div className="maps-grid">
            {mapResources.map((resource) => (
              <div key={resource.id} className="map-card">
                <button
                  type="button"
                  className="map-card-image"
                  aria-label={`Open ${resource.title} map`}
                  onClick={() => openLightbox(resource)}
                >
                  <img src={resource.image} alt={resource.title} />
                  <div className="map-card-zoom">
                    <span>Click to enlarge</span>
                  </div>
                </button>
                <div className="map-card-content">
                  <h3 className="map-card-title">{resource.title}</h3>
                  <p className="map-card-description">{resource.description}</p>
                  {resource.link && (
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="map-card-link"
                    >
                      Open Interactive Map →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedMap && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              ×
            </button>
            <img src={selectedMap.image} alt={selectedMap.title} />
            <div className="lightbox-caption">
              <h3>{selectedMap.title}</h3>
              <p>{selectedMap.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Maps;
