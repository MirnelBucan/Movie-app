import React, { FunctionComponent } from 'react';

import NavBar from '../components/common/NavBar';
import TvShowsList from '../components/TvShow/TvShowsList';
import Container from '../components/common/Container';
import SearchInput from '../components/common/SearchInput';

const TvShowsPage: FunctionComponent = () => {
  return (
    <Container>
      <NavBar />
      <SearchInput />
      <TvShowsList />
    </Container>
  );
};

export default TvShowsPage;
