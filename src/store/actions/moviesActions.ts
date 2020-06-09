import { Dispatch } from 'redux';
import movieDbApi from '../../utils/movieDbApi';
import { limitNumOfElements } from '../../utils/helpers';
import MovieType from '../../types/Movie/MovieType';
import {
  FETCH_MOVIES,
  FETCH_MOVIES_ERROR,
  FETCH_MOVIES_SUCCESS,
} from '../const';
import MovieActionType from '../../types/Movie/MovieActionType';
import ErrorType from '../../types/common/Error';

export const fetchMovies = (): MovieActionType => ({
  type: FETCH_MOVIES,
  isLoading: true,
  movies: [],
});

export const fetchMoviesSuccess = (movies: MovieType[]): MovieActionType => ({
  type: FETCH_MOVIES_SUCCESS,
  isLoading: false,
  movies,
});

export const fetchMoviesError = (error: ErrorType): MovieActionType => ({
  type: FETCH_MOVIES_ERROR,
  isLoading: false,
  error,
  movies: [] as MovieType[],
});

export const loadMovies = () => async (dispatch: Dispatch) => {
  dispatch(fetchMovies());
  try {
    const {
      data: { results: moviesResult },
    } = await movieDbApi.get('/movie/top_rated');
    dispatch(fetchMoviesSuccess(limitNumOfElements(moviesResult, 10)));
  } catch (err) {
    dispatch(fetchMoviesError(err.response.data));
  }
};
export const searchMovies = (query: string) => async (dispatch: Dispatch) => {
  dispatch(fetchMovies());
  try {
    const {
      data: { results: moviesResult },
    } = await movieDbApi.get('/search/movie', {
      params: {
        query,
      },
    });
    dispatch(fetchMoviesSuccess(moviesResult));
  } catch (err) {
    dispatch(fetchMoviesError(err.response.data));
  }
};
