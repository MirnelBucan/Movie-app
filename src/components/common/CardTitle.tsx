import React, { FunctionComponent } from 'react';

const CardTitle: FunctionComponent<{ title: string }> = ({ title }) => {
  return (
    <div className="card-title">
      <h3>{title}</h3>
    </div>
  );
};

export default CardTitle;
