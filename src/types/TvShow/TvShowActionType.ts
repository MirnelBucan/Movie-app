import TvShowType from './TvShowType';
import ErrorType from '../common/Error';

export default interface TvShowActionType {
  type: string;
  error?: ErrorType;
  isLoading?: boolean | undefined;
  tvShows: TvShowType[];
}
