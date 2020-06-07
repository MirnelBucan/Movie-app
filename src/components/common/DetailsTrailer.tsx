import React, { FunctionComponent } from 'react';
import { URL_YOUTUBE } from '../const';
import DetailsTrailerType from '../../types/common/DetailsTrailerType';

const DetailsTrailer: FunctionComponent<DetailsTrailerType> = ({ trailer }) => {
  return (
    <div className="details-media">
      <iframe
        className="details-media-content"
        title={URL_YOUTUBE + trailer}
        src={URL_YOUTUBE + trailer}
        allowFullScreen
      />
    </div>
  );
};

export default DetailsTrailer;
