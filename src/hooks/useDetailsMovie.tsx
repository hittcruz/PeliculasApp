import {useEffect, useState} from 'react';
import moviewDB from '../api/movieDB';
import {MovieFull} from '../interfaces/movieInterfaces';
import {Cast, CreditsResponse} from '../interfaces/creditsInterface';

interface MovieDetails {
  isLoading: boolean;
  movieFull?: MovieFull;
  cast: Cast[];
}
export const useDetailsMovie = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    const movieDetailPromise = moviewDB.get<MovieFull>(`/${movieId}`);
    const castPromise = moviewDB.get<CreditsResponse>(`/${movieId}/credits`);

    const [movieDetailsResp, castResp] = await Promise.all([
      movieDetailPromise,
      castPromise,
    ]);

    setState({
      isLoading: false,
      movieFull: movieDetailsResp.data,
      cast: castResp.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {
    ...state,
  };
};
