import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ArticlesContainer from '../ArticlesContainer';
import * as hooks from '../../hooks/useMostPopularArticles';

describe('ArticlesContainer', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  const mockLoadingSpinner = () => {
    return <div>Loading</div>;
  };

  jest.mock('../../components/Loading/LoadingSpinner', () => ({
    default: mockLoadingSpinner,
  }));

  const mockArticleDetails = ({ article }) => {
    return <div>{article.title}</div>;
  };

  jest.mock('../../components/Article/ArticleDetails', () => ({
    default: mockArticleDetails,
  }));

  const mockArticleList = ({ articles, onArticleClick }) => {
    return (
      <div onClick={onArticleClick}>
        {articles.map(({ title, id }) => (
          <div key={id}>{title}</div>
        ))}
      </div>
    );
  };

  jest.mock('../../components/Article/ArticleList', () => ({
    default: mockArticleList,
  }));

  test('should render Loading Spinner component when loading of API data is in progress', () => {
    jest.spyOn(hooks, 'default').mockImplementation(() => ({
      mostPopularArticles: [
        { id: 1, title: 'Title 1', description: 'Content 1' },
        { id: 2, title: 'Title 2', description: 'Content 2' },
      ],
      error: '',
      isLoading: true,
    }));

    render(<ArticlesContainer />);

    expect(screen.queryByText(/Article Details/)).not.toBeInTheDocument();
    expect(
      screen.queryByText(/Most Popular Article List/),
    ).not.toBeInTheDocument();
    expect(screen.getByText('Loading')).toBeInTheDocument();
  });

  test('should return error when error is returned from hook useMostPopularArticles', () => {
    jest.spyOn(hooks, 'default').mockImplementation(() => ({
      mostPopularArticles: [
        { id: 1, title: 'Title 1', description: 'Content 1' },
        { id: 2, title: 'Title 2', description: 'Content 2' },
      ],
      error: 'Error',
      isLoading: false,
    }));
    render(<ArticlesContainer />);

    expect(screen.queryByText(/Article Details/)).not.toBeInTheDocument();
    expect(
      screen.queryByText(/Most Popular Article List/),
    ).not.toBeInTheDocument();
    expect(screen.getByText('Error')).toBeInTheDocument();
  });

  test('should return article list', () => {
    jest.spyOn(hooks, 'default').mockImplementation(() => ({
      mostPopularArticles: [
        { id: 1, title: 'Title 1', description: 'Content 1' },
        { id: 2, title: 'Title 2', description: 'Content 2' },
      ],
      error: null,
      isLoading: false,
    }));
    render(<ArticlesContainer />);
    expect(screen.getByText(/Article Details/)).toBeInTheDocument();
    expect(screen.getByText(/Most Popular Article List/)).toBeInTheDocument();
    expect(screen.getByText('Title 1')).toBeInTheDocument();
    expect(screen.getByText('Title 2')).toBeInTheDocument();
  });
});
