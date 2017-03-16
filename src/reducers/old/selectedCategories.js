function toggleSelectCategory(store, action) {
  const index = store.indexOf(action.id);
  return index < 0 ? [
    ...store,
    action.id,
  ] : [
    ...store.slice(0, index),
    ...store.slice(index + 1),
  ];
}

export default function selectedCategories(store = [], action) {
  switch (action.type) {
    case 'TOGGLE_SELECT_CATEGORY':
      return toggleSelectCategory(store, action);
    default:
      return store;
  }
}
