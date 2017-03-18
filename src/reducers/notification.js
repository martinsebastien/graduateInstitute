const defaultStore = {
  available: false,
  subscribed: false,
  processing: false,
  error: null,
};

export default function notification(store = defaultStore, action) {
  switch (action.type) {
    case 'NOTIFICATION_IS_AVAILABLE':
      return Object.assign({}, store, {
        available: true,
      });
    case 'NOTIFICATION_SUBSCRIBE_PROCESSING':
      return Object.assign({}, store, {
        processing: true,
      });
    case 'NOTIFICATION_SUBSCRIBE_FAILED':
      return Object.assign({}, store, {
        error: action.error,
        processing: false,
      });
    case 'NOTIFICATION_SUBSCRIBED':
      return Object.assign({}, store, {
        subscribed: true,
        processing: false,
      });
    case 'NOTIFICATION_UNSUBSCRIBED':
      return Object.assign({}, store, {
        subscribed: false,
        processing: false,
      });
    default:
      return store;
  }
}
