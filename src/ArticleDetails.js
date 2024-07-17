import React from 'react';

const ArticleDetails = ({ article }) => {
  return (
    <div id={article.id} className="card mb-4">
      <div className="card-body">
        <h2>{article.title}</h2>
        <p>{article.content}</p>
      </div>
    </div>
  );
};

export default ArticleDetails;
