export default function categories(store = [], action) {
  switch (action.type) {
    case 'CATEGORIES_LOADED':
      return action.categories;
    default:
      return store;
  }
}
