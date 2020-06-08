import React, { FunctionComponent, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { loadTvShows, searchTvShows } from '../../store/actions/tvShowsActions';

import Loading from '../common/Loading';
import CardList from '../common/CardList';
import TvShowsCard from './TvShowsCard';
import NoResult from '../common/NoResult';
import Error from '../common/Error';

import { AppStateType } from '../../types/AppStateType';

const TvShowsList: FunctionComponent = () => {
  const searchInput = useSelector((state: AppStateType) => state.search);
  const { tvShows, isLoading, error } = useSelector(
    (state: AppStateType) => state.tvShowsState
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (searchInput.length > 2) {
      dispatch(searchTvShows(searchInput));
    } else {
      dispatch(loadTvShows());
    }
  }, [dispatch, searchInput]);

  if (isLoading) return <Loading />;
  if (error) return <Error error={error} />;

  return tvShows.length ? (
    <CardList>
      {tvShows.map((tvShow) => (
        <TvShowsCard key={tvShow.id} tvShow={tvShow} />
      ))}
    </CardList>
  ) : (
    <NoResult name="tv shows" />
  );
};

export default TvShowsList;
