import { Dispatch } from 'redux';
import movieDbApi from '../../utils/movieDbApi';
import { limitNumOfElements } from '../../utils/helpers';
import TvShowType from '../../types/TvShow/TvShowType';
import TvShowActionType from '../../types/TvShow/TvShowActionType';

import {
  FETCH_TV_SHOWS,
  FETCH_TV_SHOWS_ERROR,
  FETCH_TV_SHOWS_SUCCESS,
} from '../const';
import ErrorType from '../../types/common/Error';

export const fetchTvShows = () => ({
  type: FETCH_TV_SHOWS,
  isLoading: true,
});

export const fetchTvShowsSuccess = (
  tvShows: TvShowType[]
): TvShowActionType => ({
  type: FETCH_TV_SHOWS_SUCCESS,
  isLoading: false,
  tvShows,
});

export const fetchTvShowsError = (error: ErrorType): TvShowActionType => ({
  type: FETCH_TV_SHOWS_ERROR,
  isLoading: false,
  error,
  tvShows: [],
});

export const loadTvShows = () => async (dispatch: Dispatch) => {
  dispatch(fetchTvShows());
  try {
    const {
      data: { results: tvShowsResult },
    } = await movieDbApi.get('/tv/top_rated');
    dispatch(fetchTvShowsSuccess(limitNumOfElements(tvShowsResult, 10)));
  } catch (err) {
    dispatch(fetchTvShowsError(err.response.data));
  }
};

export const searchTvShows = (query: string) => async (dispatch: Dispatch) => {
  dispatch(fetchTvShows());
  try {
    const {
      data: { results: tvShowsResult },
    } = await movieDbApi.get('/search/tv', {
      params: {
        query,
      },
    });
    dispatch(fetchTvShowsSuccess(tvShowsResult));
  } catch (err) {
    dispatch(fetchTvShowsError(err.response.data));
  }
};
