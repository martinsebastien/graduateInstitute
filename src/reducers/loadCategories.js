const defaultStore = {
  processing: false,
  error: null,
};

export default function loadCategories(store = defaultStore, action) {
  switch (action.type) {
    case 'CATEGORIES_LOADING':
      return Object.assign({}, store, {
        processing: true,
      });
    case 'CATEGORIES_LOADING_FAILED':
      return {
        processing: false,
        error: action.error,
      };
    case 'CATEGORIES_LOADED':
      return Object.assign({}, store, {
        processing: false,
      });
    default:
      return store;
  }
}

