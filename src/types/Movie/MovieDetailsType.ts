import VideoType from '../VideoType';

export default interface MovieDetailsType {
  id: number;
  title: string;
  overview: string | null;
  poster_path: string | null;
  videos: VideoType[];
}
