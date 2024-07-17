import React, { useState } from 'react';
import ArticleList from '../components/Article/ArticleList';
import ArticleDetails from '../components/Article/ArticleDetails';
import useMostPopularArticles from '../hooks/useMostPopularArticles';

const ArticlesContainer = () => {
  const { mostPopularArticles } = useMostPopularArticles();
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleArticleClick = (article) => {
    console.log('handleArticleClick', { article });
    setSelectedArticle(article);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <h1>Most Popular Article List</h1>
          <ArticleList
            articles={mostPopularArticles}
            onArticleClick={handleArticleClick}
          />
        </div>
        <div className="col-md-8">
          <h2>Article Details</h2>
          {selectedArticle && <ArticleDetails article={selectedArticle} />}
        </div>
      </div>
    </div>
  );
};

export default ArticlesContainer;
