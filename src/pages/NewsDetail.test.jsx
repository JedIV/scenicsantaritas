import { Routes, Route } from 'react-router-dom';
import { renderWithRouter } from '../test/test-utils';
import NewsDetail from './NewsDetail';
import { newsArticles } from '../data/content';

describe('NewsDetail', () => {
  it('renders a matching article', () => {
    const article = newsArticles[0];
    const { getByText } = renderWithRouter(
      <Routes>
        <Route path="/news/:slug" element={<NewsDetail />} />
      </Routes>,
      { route: `/news/${article.slug}` }
    );

    expect(getByText(article.title)).toBeInTheDocument();
    expect(getByText(article.body[0])).toBeInTheDocument();
  });

  it('renders a not found state for unknown slugs', () => {
    const { getByText } = renderWithRouter(
      <Routes>
        <Route path="/news/:slug" element={<NewsDetail />} />
      </Routes>,
      { route: '/news/not-a-real-article' }
    );

    expect(getByText('Article not found')).toBeInTheDocument();
  });
});
