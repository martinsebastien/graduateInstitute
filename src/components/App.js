import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as postsActions from '../actions/posts';
import * as postActions from '../actions/post';
import * as pinpostsActions from '../actions/pinposts';
import * as categoriesActions from '../actions/categories';
import * as searchActions from '../actions/search';
import * as filterActions from '../actions/filter';

import Main from './Main';

const actions = Object.assign({},
  postsActions,
  pinpostsActions,
  postActions,
  categoriesActions,
  searchActions,
  filterActions,
);

export default connect(
  store => ({ store }),
  dispatch => bindActionCreators(actions, dispatch),
)(Main);
