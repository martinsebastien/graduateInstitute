import generateCategory from '../models/category';

function categoriesLoading() {
  return {
    type: 'CATEGORIES_LOADING',
  };
}

function categoriesLoadingFailed(error) {
  return {
    type: 'CATEGORIES_LOADING_FAILED',
    error,
  };
}

function categoriesLoaded(categories) {
  return {
    type: 'CATEGORIES_LOADED',
    categories,
  };
}

export function loadCategories() {
  return async (dispach) => {
    await dispach(categoriesLoading());
    try {
      const res = await fetch('//graduateinstitute.blackpen.tv/wp-json/wp/v2/categories');
      const data = await res.json();
      const posts = data.map(generateCategory);
      return dispach(categoriesLoaded(posts));
    } catch (e) {
      return dispach(categoriesLoadingFailed(e));
    }
  };
}

export function toggleCategory(id) {
  return {
    type: 'TOGGLE_SELECT_CATEGORY',
    id,
  };
}
