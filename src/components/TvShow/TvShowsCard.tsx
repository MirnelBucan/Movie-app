import React from 'react';
import { Link } from 'react-router-dom';
import CardImage from '../common/CardImage';
import CardTitle from '../common/CardTitle';
import TvShowCardPropsType from '../../types/TvShow/TvShowCardPropsType';

const TvShowsCard = ({ tvShow }: TvShowCardPropsType) => {
  return (
    <div className="card">
      <Link to={`/tv-shows/${tvShow.id}`}>
        <CardImage imgUrl={tvShow.poster_path} altText={tvShow.name} />
        <CardTitle title={tvShow.name} />
      </Link>
    </div>
  );
};

export default TvShowsCard;
