import { useEffect, useReducer } from "react";
import axios from "axios";
// reducers
import reducer, { initialState } from "./reducer";
// constants
import { ACTION_TYPES } from "./actionTypes";

const BASE_URL = "https://jsonplaceholder.typicode.com/";

export const useRequest = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: ACTION_TYPES.LOADING });
    axios({
      baseURL: BASE_URL,
      url: "posts",
      params: {
        _limit: 10,
      },
    })
      .then((res) => {
        dispatch({ type: ACTION_TYPES.SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: ACTION_TYPES.ERROR, payload: err });
      });
  }, []);

  return { queryState: state };
};
