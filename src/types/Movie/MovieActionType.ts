import MovieType from './MovieType';

export default interface MovieActionType {
  type: string;
  error?: object;
  isLoading?: boolean | undefined;
  movies: MovieType[];
}
