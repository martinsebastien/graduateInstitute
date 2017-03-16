import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import pinposts from './pinposts';
import post from './post';
import categories from './categories';
import search from './search';
import filter from './filter';
import loadPosts from './loadPosts';
import loadMorePosts from './loadMorePosts';
import loadPinposts from './loadPinposts';
import loadPost from './loadPost';
import loadCategories from './loadCategories';

export default combineReducers({
  posts,
  pinposts,
  post,
  categories,
  search,
  filter,
  loadPosts,
  loadMorePosts,
  loadPinposts,
  loadPost,
  loadCategories,
  routing: routerReducer,
});
