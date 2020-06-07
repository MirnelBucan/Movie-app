import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import MoviesList from '../components/Movie/MoviesList';
import NavBar from '../components/common/NavBar';
import Container from '../components/common/Container';
import SearchInput from '../components/common/SearchInput';

const MoviesPage = () => {
  return (
    <Container>
      <NavBar />
      <SearchInput />
      <MoviesList />
    </Container>
  );
};

export default MoviesPage;
