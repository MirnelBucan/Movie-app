import TvShowType from './TvShowType';

export default interface TvShowActionType {
  type: string;
  error?: object;
  isLoading?: boolean | undefined;
  tvShows: TvShowType[];
}
