import { useEffect, useState } from 'react';
import { MOST_POPULAR_ARTICLES_URL, API_KEY } from '../utils/constants';

const useMostPopularArticles = () => {
  const [mostPopularArticles, setMostPopularArticles] = useState([]);
  const getMostPopularArticles = async () => {
    const data = await fetch(`${MOST_POPULAR_ARTICLES_URL}${API_KEY}`);
    const response = await data.json();
    const articles = response.results;
    console.log({ articles });
    setMostPopularArticles(articles);
  };
  useEffect(() => {
    getMostPopularArticles();
  }, []);
  return { mostPopularArticles };
};
export default useMostPopularArticles;
