import React from 'react';
import ErrorType from '../../types/common/Error';

const Error = ({ error }: { error: ErrorType | undefined }) => (
  <div className="error">
    <h1>{error ? error.status_message : 'unknown'}</h1>
  </div>
);

export default Error;
