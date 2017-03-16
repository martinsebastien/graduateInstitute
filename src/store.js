import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';

import reducers from './reducers';

export const store = createStore(reducers, applyMiddleware(thunk));
export const history = syncHistoryWithStore(browserHistory, store);
