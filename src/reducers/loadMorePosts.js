const defaultStore = {
  processing: false,
  error: null,
  lastPage: 1,
  noMore: false,
};

export default function loadMorePosts(store = defaultStore, action) {
  switch (action.type) {
    case 'MORE_POSTS_LOADING':
      return Object.assign({}, store, {
        processing: true,
      });
    case 'MORE_POSTS_LOADING_FAILED':
      return Object.assign({}, store, {
        processing: false,
        error: action.error,
      });
    case 'MORE_POSTS_LOADED':
      return Object.assign({}, store, {
        lastPage: action.lastPage,
        processing: false,
      });
    case 'MORE_POSTS_NO_MORE':
      return Object.assign({}, store, {
        processing: false,
        noMore: true,
      });
    case 'POSTS_LOADED':
      return Object.assign({}, store, {
        lastPage: 1,
        noMore: false,
      });
    default:
      return store;
  }
}
