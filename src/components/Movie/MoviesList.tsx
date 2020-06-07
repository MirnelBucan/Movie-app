import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loading from '../common/Loading';
import CardList from '../common/CardList';
import MoviesCard from './MoviesCard';

import { loadMovies, searchMovies } from '../../store/actions/moviesActions';
import NoResult from '../common/NoResult';
import { AppStateType } from '../../types/AppStateType';

const MoviesList = () => {
  const searchInput = useSelector((state: AppStateType) => state.search);
  const { movies, isLoading } = useSelector(
    (state: AppStateType) => state.moviesState
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (searchInput.length > 2) {
      dispatch(searchMovies(searchInput));
    } else {
      dispatch(loadMovies());
    }
  }, [dispatch, searchInput]);

  if (isLoading) return <Loading />;
  return movies.length ? (
    <CardList>
      {movies.map((movie) => (
        <MoviesCard key={movie.id} movie={movie} />
      ))}
    </CardList>
  ) : (
    <NoResult name="movies" />
  );
};

export default MoviesList;
