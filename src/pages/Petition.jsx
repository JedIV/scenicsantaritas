import { useState } from 'react';
import { Hero } from '../components/common';
import './Petition.css';

function Petition() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: integrate with backend/email service
    setSubmitted(true);
  };

  return (
    <div className="petition-page">
      <Hero
        title="Sign the Petition"
        backgroundImage="/images/hero-mountains.jpg"
        size="medium"
      />

      <section className="section">
        <div className="container">
          <div className="petition-text">
            <h2>
              Petition to the Sahuarita Town Council: Hold a Public Hearing on
              the 2013 Right of Way Encroachment Agreement with Hudbay Minerals
            </h2>
            <p>
              <strong>We, the undersigned residents and concerned citizens,</strong>{' '}
              urge the Sahuarita Town Council to take immediate action to protect
              our community's water supply.
            </p>
            <p>
              In 2013, the Town of Sahuarita entered into an agreement granting
              Hudbay Minerals a Right of Way along Santa Rita Road to install a
              water pipeline connecting the company's groundwater well field to
              the Copper World mine site. In exchange, Hudbay pledged to
              replenish 105% of the groundwater it withdraws with Central Arizona
              Project (CAP) water in the Sahuarita/Green Valley area.
            </p>
            <p>
              There is now overwhelming evidence that Hudbay cannot fulfill this
              obligation. The ongoing drought is drastically reducing CAP water
              allocations, and Hudbay has stored only a fraction of the water the
              mine will require. If the company cannot replenish the groundwater
              it pumps, this pipeline will drain the aquifer that tens of
              thousands of residents depend on.
            </p>
            <p>
              <strong>Therefore, we call on the Sahuarita Town Council to hold a
              formal public hearing</strong> to determine whether Hudbay Minerals
              can meet the terms of the 2013 agreement — and if it cannot, to
              void the agreement and deny the Right of Way before irreversible
              harm is done to our water supply.
            </p>
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
              <p>
                Sign below to ask the Sahuarita Town Council to hold a public
                hearing on the Hudbay Right of Way agreement.
              </p>

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
            <p>
              The Town of Sahuarita's agreement with Hudbay Minerals threatens to
              deplete more than 500,000 acre-feet of groundwater beneath
              Sahuarita and Green Valley. (An acre-foot equals 325,851 gallons.)
            </p>
            <p>
              The 2013 agreement requires the town to provide a Right of Way for
              the installation of a water pipeline along Santa Rita Road
              connecting Hudbay's groundwater well field to the mine site. In
              exchange, Hudbay pledged to replenish 105% of the groundwater it
              withdraws in the immediate area with Central Arizona Project (CAP)
              water.
            </p>
            <p>
              Hudbay is planning to construct the Copper World mine on the
              northwest flank of the Santa Rita Mountains. According to a 2022
              Hudbay technical report, the mine will require 188,000 acre-feet of
              water over the first 20 years of phase one and more than 526,000
              acre-feet by the time mining is completed in 44 years.
            </p>
            <p>
              Hudbay has stored only 1,683 acre-feet of water at the Pima Mine
              Road Recharge project north of Sahuarita. The company has a 10-year
              agreement with the CAP, beginning in 2021, to purchase just 1,124
              acre-feet of low-priority CAP water per year.
            </p>
            <p>
              Hudbay's CAP water allocation has already been reduced to 843
              acre-feet in 2024 and 2025. Future allocations are in serious doubt
              because of the severe drought and anticipated further reductions in
              CAP water from the Colorado River.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Petition;
