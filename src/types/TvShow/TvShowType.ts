import { RouteComponentProps } from 'react-router';

export default interface TvShowType extends RouteComponentProps {
  id: number;
  name: string;
  overview: string | null;
  poster_path: string | null;
}
