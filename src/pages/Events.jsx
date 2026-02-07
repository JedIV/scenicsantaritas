import { Hero } from '../components/common';
import { Link } from 'react-router-dom';
import { eventsContent } from '../data/content';

function Events() {
  const { upcoming, past } = eventsContent;

  return (
    <div className="events-page">
      <Hero
        title="Events"
        backgroundImage="/images/hero-mountains.jpg"
        size="medium"
      />

      <section className="section">
        <div className="container">
          <h2>Upcoming Events</h2>

          {upcoming.length === 0 ? (
            <p>No events at the moment. Please check back soon.</p>
          ) : (
            upcoming.map((event) => (
              <div
                key={event.id}
                style={{
                  padding: '1.5rem',
                  marginBottom: '1.5rem',
                  borderLeft: '4px solid var(--color-primary)',
                  backgroundColor: '#f9f9f9',
                }}
              >
                <h3 style={{ marginBottom: '0.5rem' }}>{event.title}</h3>
                <p style={{ margin: '0.25rem 0', fontWeight: 'bold' }}>
                  {event.date} at {event.time}
                </p>
                <p style={{ margin: '0.25rem 0', color: '#666' }}>
                  {event.location}
                </p>
                <p style={{ marginTop: '0.5rem' }}>{event.description}</p>
              </div>
            ))
          )}

          <h2 style={{ marginTop: '2.5rem' }}>Past Events</h2>

          {past.map((event) => (
            <div
              key={event.id}
              style={{
                padding: '1.5rem',
                marginBottom: '1.5rem',
                borderLeft: '4px solid var(--color-primary)',
                backgroundColor: '#f9f9f9',
              }}
            >
              <h3 style={{ marginBottom: '0.5rem' }}>{event.title}</h3>
              <p style={{ margin: '0.25rem 0', fontWeight: 'bold' }}>
                {event.date} at {event.time}
              </p>
              <p style={{ margin: '0.25rem 0', color: '#666' }}>
                {event.location}
              </p>
              <p style={{ marginTop: '0.5rem' }}>{event.description}</p>
            </div>
          ))}

          <p>
            <Link to="/subscribe">Subscribe to our newsletter</Link> for updates.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Events;
