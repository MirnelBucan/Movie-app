import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';
import { AppStateType } from '../types/AppStateType';

const initialState: AppStateType = {
  search: '',
  moviesState: {
    error: undefined,
    isLoading: undefined,
    movies: [],
  },
  tvShowsState: {
    error: undefined,
    isLoading: undefined,
    tvShows: [],
  },
};
const logger = createLogger();
const middleware = [thunk, logger];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
