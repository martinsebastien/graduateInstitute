export default function pinposts(store = [], action) {
  switch (action.type) {
    case 'PINPOSTS_LOADED':
      return action.posts;
    default:
      return store;
  }
}
