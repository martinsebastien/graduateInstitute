const defaultStore = {
  processing: false,
  error: null,
};

export default function loadPosts(store = defaultStore, action) {
  switch (action.type) {
    case 'POSTS_LOADING':
      return Object.assign({}, store, {
        processing: true,
      });
    case 'POSTS_LOADING_FAILED':
      return {
        processing: false,
        error: action.error,
      };
    case 'POSTS_LOADED':
      return Object.assign({}, store, {
        processing: false,
      });
    default:
      return store;
  }
}
