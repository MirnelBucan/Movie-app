import React, { FunctionComponent } from 'react';

const CardList: FunctionComponent = ({ children }) => {
  return <div className="card-container">{children}</div>;
};

export default CardList;
