export default function post(store = null, action) {
  switch (action.type) {
    case 'POST_LOADED':
      return action.post;
    default:
      return store;
  }
}
