import { Link } from 'react-router-dom';
import { Card } from '../common';
import { newsArticles } from '../../data/newsArticles';
import './NewsSection.css';

function NewsSection({ limit = 5 }) {
  const articles = [...newsArticles].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  ).slice(0, limit);

  return (
    <section className="news-section section">
      <div className="container">
        {articles.map((article) => (
          <Card
            key={article.id}
            title={article.title}
            description={article.excerpt}
            image={article.image}
            link={`/news/${article.slug}`}
            linkText="Read more"
          />
        ))}

        <div className="news-section-footer">
          <Link to="/news" className="news-archive-link">
            Read past news articles
          </Link>
        </div>

        <div className="back-to-top">
          <a href="#top">
            <span className="back-to-top-icon">△</span>
            To top menu
          </a>
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
