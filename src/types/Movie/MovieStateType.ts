import MovieType from './MovieType';

export default interface MovieStateType {
  isLoading: boolean | undefined;
  error?: object | null;
  movies: MovieType[];
}
