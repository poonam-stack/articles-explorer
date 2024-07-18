import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ArticleDetails from '../ArticleDetails';

describe('ArticleDetails component', () => {
  const article = {
    id: 1,
    title: 'Article 1',
    abstract: 'Content of Article 1',
    url: 'http://test.com',
    media: [{ 'media-metadata': [{ url: 'https://image.com/' }] }],
  };

  it('renders article details correctly', () => {
    render(<ArticleDetails article={article} />);

    const articleTitle = screen.getByText(article.title);
    const articleAbstract = screen.getByText(article.abstract);
    const readMoreLink = screen.getByText('Read more');
    const articleImage = screen.getByAltText('Article');
    expect(articleTitle).toBeInTheDocument();
    expect(articleAbstract).toBeInTheDocument();
    expect(readMoreLink).toBeInTheDocument();

    expect(articleImage).toBeInTheDocument();
    expect(articleImage.src).toBe('https://image.com/');
  });
});
