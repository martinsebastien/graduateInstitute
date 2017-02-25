import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import 'reset-css';
import './app.scss';

import App from './components/App';
import ArticlesPage from './components/ArticlesPage';
import ArticlePage from './components/ArticlePage';
import NoMatchPage from './components/NoMatchPage';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={ArticlesPage} />
      <Route path="/article/:slug" component={ArticlePage} />
    </Route>
    <Route path="*" component={NoMatchPage} />
  </Router>
), document.getElementById('app'));
