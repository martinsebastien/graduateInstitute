import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import 'reset-css';

import { store, history } from './store';

import App from './components/App';
import ArticlesPage from './components/ArticlesPage';
import ArticlePage from './components/ArticlePage';
import NoMatchPage from './components/NoMatchPage';

const Routing = (
  <Provider store={store} >
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={ArticlesPage} />
        <Route path="/article/:id" component={ArticlePage} />
      </Route>
      <Route path="*" component={NoMatchPage} />
    </Router>
  </Provider>
);

render(Routing, document.getElementById('app'));
