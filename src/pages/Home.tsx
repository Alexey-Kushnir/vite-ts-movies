import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AxiosApiService } from '../services/services';

type FilmsData = { id: number; title: string };

const Home: React.FC = () => {
  const [items, setItems] = useState<FilmsData[]>();
  const location = useLocation();

  useEffect(() => {
    const abortController = new AbortController();
    const queryUrl = `trending/movie/day?`;

    const getItems = async (): Promise<void> => {
      try {
        const responseData = await AxiosApiService(queryUrl, abortController);
        setItems(responseData.results);
      } catch (error) {
        console.log(`IsError: ${error}`);
      }
    };
    getItems();

    return () => abortController.abort();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {items &&
          items.map(({ id, title }: FilmsData) => (
            <li key={id}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
