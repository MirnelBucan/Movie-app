import React, { FunctionComponent } from 'react';
import Container from '../components/common/Container';
import TvShowDetails from '../components/TvShow/TvShowDetails';
import DetailsContainer from '../components/common/DetailsContainer';
import BackButton from '../components/common/BackButton';
import MatchParamsProps from '../types/common/MatchParamsType';

const TvShowDetailsPage: FunctionComponent<MatchParamsProps> = (props) => {
  return (
    <Container>
      <DetailsContainer>
        <BackButton />
        <TvShowDetails tvShowId={props.match.params.id} />
      </DetailsContainer>
    </Container>
  );
};

export default TvShowDetailsPage;
