import React from 'react';

const ArticleList = ({ articles = [], onArticleClick = () => {} }) => {
  if (!articles.length) return;
  return (
    <div data-test-id="articles-list" className="list-group">
      {articles.map((article) => (
        <div
          key={article.id}
          className="list-group-item list-group-item-action"
          style={{ cursor: 'pointer' }}
          onClick={() => onArticleClick(article)}
        >
          {article.title}
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
