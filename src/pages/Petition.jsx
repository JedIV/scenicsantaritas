import { useState } from 'react';
import { Hero } from '../components/common';
import { campaignsContent, petitionContent } from '../data/content';
import './Petition.css';
import { trackEvent } from '../analytics/ga';
import { getActiveCampaign } from '../utils/campaigns';

function Petition() {
  const [submitted, setSubmitted] = useState(false);
  const activeCampaign = getActiveCampaign(campaignsContent?.campaigns);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: integrate with backend/email service
    setSubmitted(true);
    trackEvent('petition_submit', {
      campaign_id: activeCampaign?.id,
      campaign_name: activeCampaign?.name,
      utm_source: activeCampaign?.utm_source,
      utm_medium: activeCampaign?.utm_medium,
      utm_campaign: activeCampaign?.utm_campaign,
    });
  };

  return (
    <div className="petition-page">
      <Hero
        title={petitionContent.heroTitle}
        backgroundImage="/images/hero-mountains.jpg"
        size="medium"
      />

      <section className="section">
        <div className="container">
          {activeCampaign && (
            <div className="petition-campaign">
              <p className="petition-campaign-label">Campaign:</p>
              <h3 className="petition-campaign-title">{activeCampaign.name}</h3>
              <a
                href={activeCampaign.cta_link}
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent('campaign_cta_click', {
                    campaign_id: activeCampaign.id,
                    campaign_name: activeCampaign.name,
                    utm_source: activeCampaign.utm_source,
                    utm_medium: activeCampaign.utm_medium,
                    utm_campaign: activeCampaign.utm_campaign,
                  })
                }
              >
                {activeCampaign.cta_text}
              </a>
            </div>
          )}
          <div className="petition-text">
            <h2>{petitionContent.headline}</h2>
            {petitionContent.intro.map((paragraph, index) => (
              <p key={`petition-intro-${index}`}>{paragraph}</p>
            ))}
          </div>

          {submitted ? (
            <div className="petition-form-section" style={{ textAlign: 'center' }}>
              <h2>Thank You for Signing!</h2>
              <p>
                Your signature has been recorded. Together we can protect our water
                and hold Hudbay accountable.
              </p>
            </div>
          ) : (
            <div className="petition-form-section">
              <h2>Add Your Signature</h2>
              <p>{petitionContent.formIntro}</p>

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" required />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                  <label htmlFor="address">Street Address (optional)</label>
                  <input type="text" id="address" name="address" />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" name="city" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="state">State</label>
                    <input type="text" id="state" name="state" defaultValue="AZ" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="zip">Zip Code</label>
                    <input type="text" id="zip" name="zip" required />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="comment">Comment (optional)</label>
                  <textarea
                    id="comment"
                    name="comment"
                    placeholder="Why is this issue important to you?"
                  />
                </div>

                <div className="form-submit">
                  <button type="submit" className="btn btn-primary">
                    Sign the Petition
                  </button>
                </div>

                <p className="form-note">
                  Your information will only be used to deliver this petition to the
                  Sahuarita Town Council. We will not share your information with
                  third parties.
                </p>
              </form>
            </div>
          )}
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="supporting-docs">
            <h2>Supporting Documentation</h2>
            {petitionContent.supportingDocs.map((paragraph, index) => (
              <p key={`petition-support-${index}`}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Petition;
