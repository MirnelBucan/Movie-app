import React, { FunctionComponent, useEffect, useState } from 'react';

import Loading from '../common/Loading';
import DetailsTrailer from '../common/DetailsTrailer';
import DetailsPoster from '../common/DetailsPoster';
import movieDbApi from '../../utils/movieDbApi';
import TvShowDetailsType from '../../types/TvShow/TvShowDetailsType';
import Error from '../common/Error';

const TvShowDetails: FunctionComponent<{ tvShowId: string }> = ({
  tvShowId,
}) => {
  const [tvShow, setTvShow] = useState<TvShowDetailsType | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    const getTvShowDetails = async (id: string) => {
      try {
        const { data: tvShowResult } = await movieDbApi.get(`/tv/${id}`, {
          params: {
            append_to_response: 'videos',
          },
        });
        tvShowResult.videos = tvShowResult.videos.results;
        setTvShow(tvShowResult);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    getTvShowDetails(tvShowId);
  }, [loading]);

  if (loading) return <Loading />;
  if (error) return <Error error={error}/>;
  return (
    <div>
      {tvShow && tvShow.videos.length ? (
        <DetailsTrailer trailer={tvShow.videos[0].key} />
      ) : (
        <DetailsPoster
          imgUrl={tvShow ? tvShow.poster_path : undefined}
          title={tvShow ? tvShow.name : ''}
        />
      )}
      <h1>Title: {tvShow ? tvShow.name : ''}</h1>
      <p>Overview: </p>
      <p className="overview-text">{tvShow ? tvShow.overview : ''}</p>
    </div>
  );
};

export default TvShowDetails;
