import { Hero } from '../components/common';

const upcomingEvents = [
  {
    id: 1,
    title: 'Town Hall: Copper World Hidden Impacts',
    date: 'Saturday, January 31, 2025',
    time: '1:00 PM',
    location: 'Sahuarita Unified School District Auditorium',
    description: 'Free event presenting information on the impacts of the proposed Copper World mine.',
  },
  {
    id: 2,
    title: 'Community Meeting',
    date: 'February 15, 2025',
    time: '10:00 AM',
    location: 'Green Valley Recreation Center',
    description: 'Join us to discuss the latest developments and plan community action.',
  },
];

function Events() {
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

          {upcomingEvents.map((event) => (
            <div key={event.id} style={{
              padding: '1.5rem',
              marginBottom: '1.5rem',
              borderLeft: '4px solid var(--color-primary)',
              backgroundColor: '#f9f9f9'
            }}>
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
            Check back regularly for new events, or{' '}
            <a href="/subscribe">subscribe to our newsletter</a> to stay informed.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Events;
