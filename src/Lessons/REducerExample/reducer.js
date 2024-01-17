import { ADD_POSTS, DELETE_POST_BY_ID } from './actionTypes';

export const initialState = {
  actions: 0,
  developers: [],
  posts: [],
  arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9]
}


const deletePost = (state, postsId) => {
  const result = state.posts.filter(post => post.id !== postsId);
  return {
    ...state,
    posts: result,
    actions: state.actions + 1
  }
}

const changePosts = (state, posts) => {
  const result = posts.map(function (post, index) {
    post.id = this[index];
    return post
  }, state.arr);
  return {
    ...state,
    posts: result,
    actions: state.actions + 1
  }
}


function reducer(state, action) {
  switch (action.type) {
    case ADD_POSTS: return changePosts(state, action.payload.posts)
    case DELETE_POST_BY_ID: return deletePost(state, action.payload)



    default: return state
  }
}

export default reducer;