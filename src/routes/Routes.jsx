import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/Home';
import NotFound from '../pages/NotFound';
import StyledVideoDetail from '../pages/VideoDetail';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/video-detail/:videoId">
        <StyledVideoDetail />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};
