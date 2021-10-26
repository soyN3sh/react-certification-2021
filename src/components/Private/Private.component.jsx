import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';

function Private({ ...rest }) {
  const { authenticated } = useAuth();

  return authenticated ? <Route {...rest} /> : <Redirect to="/" />;
}

export default Private;
