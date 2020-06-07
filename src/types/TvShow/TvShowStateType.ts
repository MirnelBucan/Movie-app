import TvShowType from './TvShowType';

export default interface TvShowStateType {
  isLoading: boolean | undefined;
  error?: object | null;
  tvShows: TvShowType[];
}
