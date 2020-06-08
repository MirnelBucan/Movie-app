import {
  FETCH_TV_SHOWS,
  FETCH_TV_SHOWS_ERROR,
  FETCH_TV_SHOWS_SUCCESS,
} from '../const';
import TvShowStateType from '../../types/TvShow/TvShowStateType';
import TvShowActionType from '../../types/TvShow/TvShowActionType';
import TvShowType from '../../types/TvShow/TvShowType';

const initialState: TvShowStateType = {
  tvShows: [] as TvShowType[],
  isLoading: undefined,
  error: undefined,
};
const tvShowsReducer = (
  state: TvShowStateType = initialState,
  action: TvShowActionType
): TvShowStateType => {
  switch (action.type) {
    case FETCH_TV_SHOWS:
      return {
        ...state,
        isLoading: action.isLoading,
        tvShows: [] as TvShowType[],
      };
    case FETCH_TV_SHOWS_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
        tvShows: action.tvShows,
      };
    case FETCH_TV_SHOWS_ERROR:
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.error,
        tvShows: [] as TvShowType[],
      };
    default:
      return state;
  }
};

export default tvShowsReducer;
