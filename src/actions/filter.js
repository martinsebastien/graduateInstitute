import { loadPosts } from './posts';

function filterLoading() {
  return {
    type: 'FILTER_LOADING',
  };
}

function filterLoaded() {
  return {
    type: 'FILTER_LOADED',
  };
}

export function filterCategoryToggle(id) {
  return {
    type: 'FILTER_CATEGORY_TOGGLE',
    id,
  };
}

export function filterSubmenuOpen() {
  return {
    type: 'FILTER_SUBMENU_OPEN',
  };
}

export function filterSubmenuClose() {
  return {
    type: 'FILTER_SUBMENU_CLOSE',
  };
}

export function filterSubmenuToggle() {
  return {
    type: 'FILTER_SUBMENU_TOGGLE',
  };
}

export function filter() {
  return async (dispach) => {
    await dispach(filterLoading());
    await dispach(loadPosts());
    return dispach(filterLoaded());
  };
}
