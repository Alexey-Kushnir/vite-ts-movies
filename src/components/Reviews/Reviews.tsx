import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AxiosApiService } from './../../services/services';

type ReviewsData = {
  author: string;
  content: string;
  id: string;
};

const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewsData[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { movieId } = useParams<string>();

  useEffect(() => {
    const abortController = new AbortController();
    const queryUrl = `movie/${movieId}/reviews?`;

    (async (): Promise<void> => {
      try {
        const responseData = await AxiosApiService(queryUrl, abortController);
        setReviews(responseData.results);
      } catch (error) {
        console.log(`IsError: ${error}`);
      } finally {
        setIsLoading(false);
      }
    })();

    return () => abortController.abort();
  }, [movieId]);

  return (
    <>
      {reviews && reviews.length !== 0 ? (
        <ul>
          {reviews.map(({ author, content, id }: ReviewsData) => (
            <li key={id}>
              <h4>Author: {author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : isLoading ? (
        <p> Loading results...</p>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </>
  );
};

export default Reviews;
