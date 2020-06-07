import React from 'react';

const NoResult = ({ name }: { name: string }) => (
  <div className="no-results">No {name} found matching search!</div>
);

export default NoResult;
