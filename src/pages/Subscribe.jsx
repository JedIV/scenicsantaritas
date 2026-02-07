import { Hero } from '../components/common';

function Subscribe() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing! Please check your email to confirm your subscription.');
  };

  return (
    <div className="subscribe-page">
      <Hero
        title="Subscribe to Our Newsletter"
        backgroundImage="/images/hero-mountains.jpg"
        size="medium"
      />

      <section className="section">
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2>Stay Informed</h2>
          <p>
            Sign up for our newsletter to receive updates on the Copper World project,
            upcoming events, and ways to take action.
          </p>

          <form onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem' }}>Name</label>
              <input
                type="text"
                id="name"
                required
                style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }}
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
              <input
                type="email"
                id="email"
                required
                style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </form>

          <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#666' }}>
            You will receive an email asking you to confirm your subscription.
            If you don't see the email right away in your inbox, please check the junk folder.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Subscribe;
