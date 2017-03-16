export default function search(store = '', action) {
  switch (action.type) {
    case 'SET_SEARCH':
      return action.term;
    default:
      return store;
  }
}
