import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import TvShowsPage from './pages/TvShowsPage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';

import store from './store';
import TvShowDetailsPage from './pages/TvShowDetailsPage';
import Page404 from './pages/Page404';

function app() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={TvShowsPage} />
          <Route path="/tv-shows/:id" component={TvShowDetailsPage} />
          <Route exact path="/movies" component={MoviesPage} />
          <Route path="/movies/:id" component={MovieDetailsPage} />
          <Route component={Page404} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default app;
