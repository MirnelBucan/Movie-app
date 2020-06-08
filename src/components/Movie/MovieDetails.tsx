import React, { FunctionComponent, useEffect, useState } from 'react';

import Loading from '../common/Loading';
import DetailsTrailer from '../common/DetailsTrailer';
import DetailsPoster from '../common/DetailsPoster';
import movieDbApi from '../../utils/movieDbApi';
import MovieDetailsType from '../../types/Movie/MovieDetailsType';
import Error from '../common/Error';

const MovieDetails: FunctionComponent<{ movieId: string }> = ({ movieId }) => {
  const [movie, setMovie] = useState<MovieDetailsType | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    const getMovieDetails = async (id: string) => {
      try {
        const { data: movieResult } = await movieDbApi.get(`/movie/${id}`, {
          params: {
            append_to_response: 'videos',
          },
        });
        movieResult.videos = movieResult.videos.results;

        setMovie(movieResult);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    getMovieDetails(movieId);
  }, [loading]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  return (
    <div>
      {movie && movie.videos.length ? (
        <DetailsTrailer trailer={movie.videos[0].key} />
      ) : (
        <DetailsPoster
          imgUrl={movie ? movie.poster_path : undefined}
          title={movie ? movie.title : ''}
        />
      )}
      <h1>Title: {movie ? movie.title : ''}</h1>
      <p>Overview: </p>
      <p className="overview-text">
        {movie && movie.overview ? movie.overview : 'test'}
      </p>
    </div>
  );
};

export default MovieDetails;
