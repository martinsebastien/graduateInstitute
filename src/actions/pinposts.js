/* eslint import/prefer-default-export: "off" */

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
      // TODO: find correct endpoints for pinned article
      // const res = await fetch('//graduateinstitute.blackpen.tv/wp-json/wp/v2/posts?_embed');
      // const data = await res.json();
      const posts = []; // data.map(generatePost);
      return dispach(pinpostsLoaded(posts));
    } catch (e) {
      return dispach(pinpostsLoadingFailed(e));
    }
  };
}
