import {useEffect, useState} from 'react';
import moviewDB from '../api/movieDB';
import {Movie, MovieDBResponse} from '../interfaces/movieInterfaces';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upComing: Movie[];
}
export const useMovies = () => {
  const [isLoading, setisLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upComing: [],
  });
  // const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([]);
  // const [peliculasPopulares, setPeliculasPopulares] = useState<Movie[]>([]);
  const getMovies = async () => {
    /*const respNowPlaying = await moviewDB.get<MovieDBMoviesResponse>( 
      'now_playing',
    );
    const respPopular = await moviewDB.get<MovieDBMoviesResponse>('popular');
    const respTopRated = await moviewDB.get<MovieDBMoviesResponse>('top_rated');
    const respUpComing = await moviewDB.get<MovieDBMoviesResponse>('upcoming'); */

    const nowPlayingPromise = moviewDB.get<MovieDBResponse>('now_playing');
    const popularPromise = moviewDB.get<MovieDBResponse>('popular');
    const topRatedPromise = moviewDB.get<MovieDBResponse>('top_rated');
    const upComingPromise = moviewDB.get<MovieDBResponse>('upcoming');

    const response = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upComingPromise,
    ]);

    // setPeliculasEnCine(respNowPlaying.data.results);
    // setPeliculasPopulares(respPopular.data.results);
    setMoviesState({
      nowPlaying: response[0].data.results,
      popular: response[1].data.results,
      topRated: response[2].data.results,
      upComing: response[3].data.results,
    });
    setisLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return {
    ...moviesState,
    isLoading,
  };
};
