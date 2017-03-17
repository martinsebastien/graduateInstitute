/* eslint import/prefer-default-export: "off" */
import generatePost from '../models/post';

function pinpostsLoading() {
  return {
    type: 'PINPOSTS_LOADING',
  };
}

function pinpostsLoadingFailed(error) {
  return {
    type: 'PINPOSTS_LOADING_FAILED',
    error,
  };
}

function pinpostsLoaded(posts) {
  return {
    type: 'PINPOSTS_LOADED',
    posts,
  };
}

export function loadPinposts() {
  return async (dispach) => {
    await dispach(pinpostsLoading());
    try {
      const res = await fetch('//graduateinstitute.blackpen.tv/wp-json/wp/v2/posts?_embed&sticky=true');
      const data = await res.json();
      const posts = data.map(generatePost);
      return dispach(pinpostsLoaded(posts));
    } catch (e) {
      return dispach(pinpostsLoadingFailed(e));
    }
  };
}
