import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import GlobalContext from '../../providers/Global/GlobalContext';

function Private({ ...rest }) {
  const {
    state: { user },
  } = useContext(GlobalContext);

  return user.authenticated ? <Route {...rest} /> : <Redirect to="/" />;
}

export default Private;
