import TvShowType from './TvShowType';null
import ErrorType from '../common/Error';

export default interface TvShowStateType {
  isLoading: boolean | undefined;
  error?: ErrorType | undefined;
  tvShows: TvShowType[];
}
