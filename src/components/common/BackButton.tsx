import React, { FunctionComponent } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

const BackButton: FunctionComponent<RouteComponentProps> = ({ history }) => {
  return (
    <div className={'nav-bar'}>
      <a className="nav-btn back" onClick={() => history.goBack()}>
        Back
      </a>
    </div>
  );
};

export default withRouter(BackButton);
