import React from 'react';

const ArticleDetails = ({
  article: { id, url, title, abstract, media } = {},
}) => {
  return (
    <div id={id} data-test-id="article-details" className="card mb-4">
      <div className="card-body">
        <h2>{title}</h2>
        <img
          src={media?.[0]?.['media-metadata']?.[0]?.url}
          alt="Article"
          className="w-full h-auto mb-4"
        />
        <p>{abstract}</p>
        <a href={url}>Read more</a>
      </div>
    </div>
  );
};

export default ArticleDetails;
