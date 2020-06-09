import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';
import { AppStateType } from '../types/AppStateType';
import { log } from 'util';

const isDev = process.env.REACT_APP_ENV === 'development';

const initialState: AppStateType = {
  search: '',
  moviesState: {
    error: undefined,
    isLoading: undefined,
    movies: []
  },
  tvShowsState: {
    error: undefined,
    isLoading: undefined,
    tvShows: []
  }
};

const logger = createLogger();
let middleware = [];

if (isDev) {
  middleware = [thunk, logger];
} else {
  middleware = [thunk]
}

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
