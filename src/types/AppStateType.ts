import MovieStateType from './Movie/MovieStateType';
import TvShowStateType from './TvShow/TvShowStateType';

export interface AppStateType {
  search: string;
  moviesState: MovieStateType;
  tvShowsState: TvShowStateType;
}
