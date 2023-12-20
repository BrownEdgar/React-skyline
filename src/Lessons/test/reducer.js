import { ADD_POSTS } from "./actionTypes";

export const initialState = {
  actions: 0,
  developers: [],
  posts: [],
  arr: [1, 4, 6, 9, 129, 35, 23, 1272, 0, 452],
};

function reducer(state, action) {
  switch (action.type) {
    case ADD_POSTS:
      return {
        ...state,
        posts: action.payload.posts,
        actions: state.actions + 1,
      };
    default:
      return state;
  }
}
export default reducer;
