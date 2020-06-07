import React, { FunctionComponent } from 'react';
import Container from '../components/common/Container';
import MovieDetails from '../components/Movie/MovieDetails';
import BackButton from '../components/common/BackButton';
import DetailsContainer from '../components/common/DetailsContainer';
import MatchParams from '../types/common/MatchParamsType';

const MovieDetailsPage: FunctionComponent<MatchParams> = (props) => {
  return (
    <Container>
      <DetailsContainer>
        <BackButton />
        <MovieDetails movieId={props.match.params.id} />
      </DetailsContainer>
    </Container>
  );
};

export default MovieDetailsPage;
