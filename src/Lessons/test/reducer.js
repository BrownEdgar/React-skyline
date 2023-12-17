import { ACTION_TYPES } from "./actionTypes";

export const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: null,
      };

    case ACTION_TYPES.ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case ACTION_TYPES.LOADING:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    default:
      return state;
  }
}

export default reducer;
