import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Private from '../components/Private/Private.component';
import routesList from './routesList';

export const Routes = () => {
  return (
    <Switch>
      {routesList.map((route) => {
        return route.private ? (
          <Private
            key={route.path}
            component={route.component}
            exact={route.exact}
            path={route.path}
          />
        ) : (
          <Route
            key={route.path}
            component={route.component}
            exact={route.exact}
            path={route.path}
          />
        );
      })}
    </Switch>
  );
};
