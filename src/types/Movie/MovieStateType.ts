import MovieType from './MovieType';
import ErrorType from '../common/Error';

export default interface MovieStateType {
  isLoading: boolean | undefined;
  error?: ErrorType | undefined;
  movies: MovieType[];
}
