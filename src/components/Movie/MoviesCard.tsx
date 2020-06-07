import React from 'react';
import { Link } from 'react-router-dom';
import CardImage from '../common/CardImage';
import CardTitle from '../common/CardTitle';
import MovieCardPropsType from '../../types/Movie/MovieCardPropsType';

const MoviesCard = ({ movie }: MovieCardPropsType) => {
  return (
    <div className="card">
      <Link to={`/movies/${movie.id}`}>
        <CardImage imgUrl={movie.poster_path} altText={movie.title} />
        <CardTitle title={movie.title} />
      </Link>
    </div>
  );
};

export default MoviesCard;
