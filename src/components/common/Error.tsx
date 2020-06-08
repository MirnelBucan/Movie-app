import React from 'react';
import ErrorType from '../../types/common/Error';

const Error = ({error}: { error: ErrorType | undefined }) => (
  <div className="loading">
    <h1>Error: {error ? error.status_message : 'unknown'}</h1>
  </div>
);

export default Error;
