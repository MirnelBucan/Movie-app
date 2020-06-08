import MovieType from './MovieType';
import ErrorType from '../common/Error';

export default interface MovieActionType {
  type: string;
  error?: ErrorType;
  isLoading?: boolean | undefined;
  movies: MovieType[];
}
