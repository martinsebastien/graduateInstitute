export default function posts(store = [], action) {
  switch (action.type) {
    case 'POSTS_LOADED':
      return action.posts;
    case 'MORE_POSTS_LOADED':
      return Object.assign({}, store, action.posts);
    default:
      return store;
  }
}
