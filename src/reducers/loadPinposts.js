const defaultStore = {
  processing: false,
  error: null,
};

export default function loadPinposts(store = defaultStore, action) {
  switch (action.type) {
    case 'PINPOSTS_LOADING':
      return Object.assign({}, store, {
        processing: true,
      });
    case 'PINPOSTS_LOADING_FAILED':
      return {
        processing: false,
        error: action.error,
      };
    case 'PINPOSTS_LOADED':
      return Object.assign({}, store, {
        processing: false,
      });
    default:
      return store;
  }
}
