import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AxiosApiService } from './../../services/services';

type CastData = {
  cast_id: number;
  title: string;
  character: string;
  name: string;
  profile_path: string;
};

const Cast: React.FC = () => {
  const [castInfo, setCastInfo] = useState<CastData[]>();
  const { movieId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();
    const queryUrl = `movie/${movieId}/credits?`;

    const getCastInfo = async (): Promise<void> => {
      try {
        const responseData = await AxiosApiService(queryUrl, abortController);
        setCastInfo(responseData.cast);
      } catch (error) {
        console.log(`IsError: ${error}`);
      }
    };
    getCastInfo();

    return () => abortController.abort();
  }, [movieId]);

  return (
    <>
      {castInfo && (
        <ul>
          {castInfo.map(
            ({ cast_id, character, name, profile_path }: CastData) => {
              const photo = (profile_path: string) => {
                if (!profile_path) {
                  return 'https://developersushant.files.wordpress.com/2015/02/no-image-available.png';
                }
                return `https://image.tmdb.org/t/p/original/${profile_path}`;
              };

              return (
                <li key={cast_id}>
                  <img src={photo(profile_path)} alt="" height="150px" />
                  <p>{name}</p>
                  <p>Character: {character}</p>
                </li>
              );
            }
          )}
        </ul>
      )}
    </>
  );
};

export default Cast;
