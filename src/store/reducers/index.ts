import { combineReducers } from 'redux';
import tvShowsReducer from './tvShowsReducer';
import moviesReducer from './moviesReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  tvShowsState: tvShowsReducer,
  moviesState: moviesReducer,
  search: searchReducer,
});

export default rootReducer;
