import { useState } from 'react';
import { Hero } from '../components/common';

const faqs = [
  {
    question: 'What is the Copper World Project?',
    answer: 'Copper World is a proposed open-pit copper mine in the Santa Rita Mountains, approximately 30 miles south of Tucson. It is being developed by Hudbay Minerals, a Canadian mining company.',
  },
  {
    question: 'How would the mine affect our water supply?',
    answer: 'The mine would pump large amounts of groundwater from the regional aquifer that supplies water to Sahuarita, Green Valley, and surrounding communities. This could lower water tables and affect well owners.',
  },
  {
    question: 'What are the air quality concerns?',
    answer: 'Mining operations generate dust from excavation, crushing, and transportation. Heavy truck traffic on unpaved roads adds to air pollution. These can cause respiratory issues and reduce quality of life.',
  },
  {
    question: 'How can I help stop the mine?',
    answer: 'You can write letters to decision makers, attend community meetings, volunteer with our organization, and spread awareness among your friends and neighbors. Every voice matters!',
  },
  {
    question: 'Is the mine already approved?',
    answer: 'The project is still in the permitting process. Various federal, state, and local agencies must approve permits before construction can begin. Public comment periods provide opportunities for community input.',
  },
  {
    question: 'How can I stay informed about developments?',
    answer: 'Subscribe to our newsletter, follow us on Facebook and YouTube, and check our website regularly for updates on the Copper World project.',
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <Hero
        title="Frequently Asked Questions"
        backgroundImage="/images/hero-mountains.jpg"
        size="medium"
      />

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                borderBottom: '1px solid #eee',
                paddingBottom: '1rem',
                marginBottom: '1rem',
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  padding: '1rem 0',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <h3 style={{ margin: 0, fontSize: '1.125rem', color: 'var(--color-primary)' }}>
                  {faq.question}
                </h3>
                <span style={{ fontSize: '1.5rem' }}>
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <p style={{ margin: '0.5rem 0 0', paddingLeft: '0', color: '#555' }}>
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default FAQ;
