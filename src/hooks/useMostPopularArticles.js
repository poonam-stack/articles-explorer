import { useEffect, useState } from 'react';
import { MOST_POPULAR_ARTICLES_URL, ERROR_MSG } from '../constants';

const useMostPopularArticles = () => {
  const [mostPopularArticles, setMostPopularArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const getMostPopularArticles = async () => {
    try {
      const data = await fetch(
        `${MOST_POPULAR_ARTICLES_URL}${process.env.REACT_APP_API_SECRET_KEY}`,
      );
      const response = await data.json();
      const articles = response.results;
      console.log({ articles });
      setMostPopularArticles(articles);
    } catch (e) {
      setError(ERROR_MSG);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    getMostPopularArticles();
  }, []);
  return { mostPopularArticles, error, isLoading };
};
export default useMostPopularArticles;
