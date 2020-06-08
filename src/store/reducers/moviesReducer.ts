import {
  FETCH_MOVIES,
  FETCH_MOVIES_ERROR,
  FETCH_MOVIES_SUCCESS,
} from '../const';
import MovieStateType from '../../types/Movie/MovieStateType';
import MovieActionType from '../../types/Movie/MovieActionType';
import MovieType from '../../types/Movie/MovieType';

const initialState: MovieStateType = {
  movies: [],
  isLoading: undefined,
  error: undefined,
};

const moviesReducer = (
  state = initialState,
  action: MovieActionType
): MovieStateType => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        isLoading: action.isLoading,
        movies: [] as MovieType[],
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
        movies: action.movies,
      };
    case FETCH_MOVIES_ERROR:
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.error,
        movies: [] as MovieType[],
      };
    default:
      return state;
  }
};

export default moviesReducer;
