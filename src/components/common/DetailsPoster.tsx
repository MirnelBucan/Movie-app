import React from 'react';
import { BASE_IMG_URL } from '../../const';
import DetailsPosterType from '../../types/common/DetailsPosterType';

const DetailsPoster = ({ title, imgUrl }: DetailsPosterType) => {
  const url = imgUrl ? BASE_IMG_URL + imgUrl : '/no-image.jpg';
  return (
    <div className="details-media">
      <img className="details-media-content" src={url} alt={title} />
    </div>
  );
};

export default DetailsPoster;
