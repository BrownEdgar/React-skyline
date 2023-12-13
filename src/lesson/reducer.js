import { ADD_POSTS } from "./actionTypes";

export const initialState = {
    actions: 0,
    developers: [],
    posts: [],
    arr: [154, 3, 21, 54, 87, 61, 2, 5, 10]
}


function reducer(state, action) {
    switch (action) {
        case ADD_POSTS: return {
            ...state,
            posts: action.payload.posts,
            action: state.actions + 1
        }
            
    
        default: return state;
    }
}

export default reducer