import { Hero } from '../components/common';
import { Card } from '../components/common';
import { newsArticles } from '../data/content';

function News() {
  const articles = [...newsArticles].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

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

          {articles.map((article) => (
            <Card
              key={article.slug}
              title={article.title}
              description={`${new Date(article.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })} — ${article.excerpt}`}
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
