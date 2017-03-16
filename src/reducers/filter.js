const defaultStore = {
  categories: [],
  processing: false,
  filteredBy: [],
  submenuOpen: false,
};

function filterCategoryToggle(store, action) {
  const index = store.indexOf(action.id);
  return index < 0 ? [
    ...store,
    action.id,
  ] : [
    ...store.slice(0, index),
    ...store.slice(index + 1),
  ];
}

export default function filter(store = defaultStore, action) {
  switch (action.type) {
    case 'FILTER_CATEGORY_TOGGLE':
      return Object.assign({}, store, {
        categories: filterCategoryToggle(store.categories, action),
      });
    case 'FILTER_LOADING':
      return Object.assign({}, store, {
        processing: true,
      });
    case 'FILTER_LOADED':
      return Object.assign({}, store, {
        processing: false,
        submenuOpen: false,
        filteredBy: store.categories,
      });
    case 'FILTER_SUBMENU_OPEN':
      return Object.assign({}, store, {
        submenuOpen: true,
      });
    case 'FILTER_SUBMENU_CLOSE':
      return Object.assign({}, store, {
        submenuOpen: false,
      });
    case 'FILTER_SUBMENU_TOGGLE':
      return Object.assign({}, store, {
        submenuOpen: !store.submenuOpen,
      });
    default:
      return store;
  }
}
