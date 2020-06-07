import VideoType from '../VideoType';

export default interface TvShowDetailsType {
  id: number;
  name: string;
  overview: string | null;
  poster_path: string | null;
  videos: VideoType[];
}
