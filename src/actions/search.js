import { loadPosts } from './posts';

function searchLoading() {
  return {
    type: 'SEARCH_LOADING',
  };
}

function searchLoaded() {
  return {
    type: 'SEARCH_LOADED',
  };
}

export function searchTermChange(term) {
  return {
    type: 'SEARCH_TERM_CHANGE',
    term,
  };
}

export function search() {
  return async (dispach) => {
    await dispach(searchLoading());
    await dispach(loadPosts());
    return dispach(searchLoaded());
  };
}
