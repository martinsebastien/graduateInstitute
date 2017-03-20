import generatePost from '../models/post';

const POSTS_PER_PAGE = 10;
const POSTS_ENDPOINT = `//graduateinstitute.blackpen.tv/wp-json/wp/v2/posts?_embed&per_page=${POSTS_PER_PAGE}`;

function postsLoading() {
  return {
    type: 'POSTS_LOADING',
  };
}

function postsLoadingFailed(error) {
  return {
    type: 'POSTS_LOADING_FAILED',
    error,
  };
}

function postsLoaded(posts) {
  return {
    type: 'POSTS_LOADED',
    posts,
  };
}

export function loadPosts() {
  return async (dispach, getState) => {
    await dispach(postsLoading());
    try {
      const { filter: { categories }, search: { term } } = getState();
      let api = POSTS_ENDPOINT;
      if (categories.length) api += `&categories=${categories.join(',')}`;
      if (term) api += `&search=${term}`;

      const res = await fetch(api);
      const data = await res.json();
      const posts = data.map(generatePost);
      return dispach(postsLoaded(posts));
    } catch (e) {
      return dispach(postsLoadingFailed(e));
    }
  };
}

function morePostsLoading() {
  return {
    type: 'MORE_POSTS_LOADING',
  };
}

function morePostsLoadingFailed(error) {
  return {
    type: 'MORE_POSTS_LOADING_FAILED',
    error,
  };
}

function morePostsLoaded(posts, lastPage) {
  return {
    type: 'MORE_POSTS_LOADED',
    posts,
    lastPage,
  };
}

function morePostsNoMore() {
  return {
    type: 'MORE_POSTS_NO_MORE',
  };
}

export function loadMorePosts() {
  return async (dispach, getState) => {
    await dispach(morePostsLoading());
    try {
      const {
        filter: { categories },
        search: { term },
        loadMorePosts: { lastPage },
      } = getState();

      const nextPage = lastPage + 1;

      let api = `${POSTS_ENDPOINT}&page=${nextPage}`;
      if (categories.length) api += `&categories=${categories.join(',')}`;
      if (term) api += `&search=${term}`;

      const res = await fetch(api);
      const data = await res.json();
      const posts = data.map(generatePost);

      if (posts.length < POSTS_PER_PAGE) return dispach(morePostsNoMore());

      return dispach(morePostsLoaded(posts, nextPage));
    } catch (e) {
      return dispach(morePostsLoadingFailed(e));
    }
  };
}
