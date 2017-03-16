const defaultStore = {
  processing: false,
  error: null,
};

export default function loadPosts(store = defaultStore, action) {
  switch (action.type) {
    case 'POST_LOADING':
      return Object.assign({}, store, {
        processing: true,
      });
    case 'POST_LOADING_FAILED':
      return {
        processing: false,
        error: action.error,
      };
    case 'POST_LOADED':
      return Object.assign({}, store, {
        processing: false,
      });
    default:
      return store;
  }
}
