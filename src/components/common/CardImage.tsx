import React from 'react';
import { BASE_IMG_URL } from '../const';

const CardImage = ({
  imgUrl,
  altText,
}: {
  imgUrl: string | null;
  altText: string;
}) => {
  const url = imgUrl ? BASE_IMG_URL + imgUrl : '/no-image.jpg';

  return (
    <div className="card-image-container">
      <img className="card-image" src={url} alt={altText} />
    </div>
  );
};

export default CardImage;
