const defaultStore = {
  term: '',
  processing: false,
  searchedBy: '',
};

export default function search(store = defaultStore, action) {
  switch (action.type) {
    case 'SEARCH_TERM_CHANGE':
      return Object.assign({}, store, {
        term: action.term,
      });
    case 'SEARCH_LOADING':
      return Object.assign({}, store, {
        processing: true,
      });
    case 'SEARCH_LOADED':
      return Object.assign({}, store, {
        processing: false,
        searchedBy: store.term,
      });
    default:
      return store;
  }
}
