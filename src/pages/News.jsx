import { Hero } from '../components/common';
import { Card } from '../components/common';
import { newsArticles } from '../data/newsArticles';

function News() {
  return (
    <div className="news-page">
      <Hero
        title="Copper World News"
        backgroundImage="/images/hero-mountains.jpg"
        size="medium"
      />

      <section className="section">
        <div className="container">
          <h2>Latest News & Updates</h2>

          {newsArticles.map((article) => (
            <Card
              key={article.id}
              title={article.title}
              description={article.excerpt}
              image={article.image}
              link={`/news/${article.slug}`}
              linkText="Read more"
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default News;
