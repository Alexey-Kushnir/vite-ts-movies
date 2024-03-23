import React from 'react';
import { useEffect, useState } from 'react';
import { AxiosApiService } from '../../services/services';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { QueryForm } from '../../components/QueryForm/QueryForm';

type MovieData = { title: string; id: number };

type MoviesData = {
  page: number;
  results: MovieData[];
};

const Movies: React.FC = () => {
  const [items, setItems] = useState<MoviesData>();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }

    const abortController = new AbortController();
    const queryUrl = `search/movie?`;
    const wordSearchQuery = `&query=${query}&page=1`;

    const getItems = async (): Promise<void> => {
      try {
        const responseData = await AxiosApiService(
          queryUrl,
          abortController,
          wordSearchQuery
        );
        setItems(responseData);
      } catch (error) {
        console.log(`IsError: ${error}`);
      }
    };
    getItems();

    return () => abortController.abort();
  }, [query]);

  const updateQueryString = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();

    const queryValue = e.target[0].value.trim();

    queryValue === ''
      ? setSearchParams({})
      : setSearchParams({ query: queryValue });

    e.currentTarget.reset();
  };

  return (
    <div>
      <QueryForm updateQueryString={updateQueryString} />
      <>
        {items && items.results?.length > 0 && (
          <ul>
            {items.results.map(({ title, id }: MovieData) => (
              <li key={id}>
                <Link to={`${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        )}

        {items &&
        items.results?.length === 0 &&
        items.page === 1 &&
        query !== '' ? (
          <p>No movies found, please change your query.</p>
        ) : null}
      </>
    </div>
  );
};

export default Movies;
