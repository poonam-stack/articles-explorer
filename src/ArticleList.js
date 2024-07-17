import React from 'react';

const ArticleList = ({ articles, onSelectArticle }) => {
  return (
    <div className="list-group">
      {articles.map((article) => (
        <a
          key={article.id}
          href={`#${article.id}`}
          className="list-group-item list-group-item-action"
          onClick={() => onSelectArticle(article.id)}
        >
          {article.title}
        </a>
      ))}
    </div>
  );
};

export default ArticleList;
