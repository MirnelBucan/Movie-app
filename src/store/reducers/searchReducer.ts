import { SET_SEARCH } from '../actions/searchActions';
import SearchType from '../../types/Search/SearchType';

const searchReducer = (state: string = '', action: SearchType) => {
  switch (action.type) {
    case SET_SEARCH:
      return action.search;
    default:
      return state;
  }
};

export default searchReducer;
