/* eslint import/prefer-default-export: "off" */
import generatePost from '../models/post';

function postLoading() {
  return {
    type: 'POST_LOADING',
  };
}

function postLoadingFailed(error) {
  return {
    type: 'POST_LOADING_FAILED',
    error,
  };
}

function postLoaded(post) {
  return {
    type: 'POST_LOADED',
    post,
  };
}

export function loadPost(id) {
  return async (dispach) => {
    await dispach(postLoading());
    try {
      const res = await fetch(`//graduateinstitute.blackpen.tv/wp-json/wp/v2/posts/${id}?_embed`);
      const data = await res.json();
      const post = generatePost(data);
      return dispach(postLoaded(post));
    } catch (e) {
      return dispach(postLoadingFailed());
    }
  };
}
