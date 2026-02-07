import { Link, useParams } from 'react-router-dom';
import { Hero } from '../components/common';
import { newsArticles } from '../data/content';
import './NewsDetail.css';

function NewsDetail() {
  const { slug } = useParams();
  const article = newsArticles.find((item) => item.slug === slug);

  if (!article) {
    return (
      <div className="news-detail-page">
        <Hero
          title="News"
          backgroundImage="/images/hero-mountains.jpg"
          size="medium"
        />
        <section className="section">
          <div className="container">
            <h2>Article not found</h2>
            <p>We couldn&apos;t find that article.</p>
            <Link to="/news" className="btn btn-secondary">
              Back to News
            </Link>
          </div>
        </section>
      </div>
    );
  }

  const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="news-detail-page">
      <Hero
        title="Copper World News"
        backgroundImage="/images/hero-mountains.jpg"
        size="medium"
      />

      <section className="section">
        <div className="container news-detail-container">
          <p className="news-detail-date">{formattedDate}</p>
          <h2 className="news-detail-title">{article.title}</h2>

          {article.image && (
            <div className="news-detail-image">
              <img src={article.image} alt={article.title} />
            </div>
          )}

          <div className="news-detail-body">
            {article.body?.map((paragraph, index) => (
              <p key={`${article.slug}-${index}`}>{paragraph}</p>
            ))}
          </div>

          <div className="news-detail-actions">
            <Link to="/news" className="btn btn-secondary">
              Back to News
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewsDetail;
