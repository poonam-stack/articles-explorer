import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ArticleList from '../ArticleList';

describe('ArticleList component', () => {
  const articles = [
    { id: 1, title: 'Article 1', content: 'Content of Article 1' },
    { id: 2, title: 'Article 2', content: 'Content of Article 2' },
  ];

  it('should not render any articles when there are no articles', () => {
    render(<ArticleList articles={[]} />);

    expect(screen.queryByTestId('article-list')).not.toBeInTheDocument();
  });
  it('renders article titles correctly', () => {
    render(<ArticleList articles={articles} />);

    articles.forEach((article) => {
      const articleTitle = screen.getByText(article.title);
      expect(articleTitle).toBeInTheDocument();
    });
  });

  it('calls onArticleClick when article is clicked', () => {
    const onArticleClick = jest.fn();
    render(<ArticleList articles={articles} onArticleClick={onArticleClick} />);

    fireEvent.click(screen.getByText('Article 1'));
    expect(onArticleClick).toHaveBeenCalledWith(articles[0]);

    fireEvent.click(screen.getByText('Article 2'));
    expect(onArticleClick).toHaveBeenCalledWith(articles[1]);
  });
});
