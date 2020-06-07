import { RouteComponentProps } from 'react-router-dom';

interface MatchParamsType {
  id: string;
}

export default interface MatchParamsProps
  extends RouteComponentProps<MatchParamsType> {}
