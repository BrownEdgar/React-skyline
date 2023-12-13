import React from "react";
import { useReducer } from "react";
import reducer from "./reducer";
import { CLEAR, SORT_NUMS, RANDOM_NUMBER, NUMBERS } from "./actionTypes";
import "./App.scss";

export default function App() {
  const [state, dispatch] = useReducer(reducer, [3, 2, 1]);

  const handleSort = () => {
    dispatch({ type: SORT_NUMS });
  };

  const handleClear = () => {
    dispatch({ type: CLEAR });
  };


  const handleClick = () => {
    dispatch({type: RANDOM_NUMBER, payload: Math.round(Math.random() * 100)})
  }

  const addNums = () => {
    dispatch({type: NUMBERS})
  }



  return (
    <div>
      {state.map((el) => {
        return (
          <div className="box" key={el.id}>
            {el}
          </div>
        );
      })}


      <button onClick={addNums}>Add 10 </button>
      <button onClick={handleClick}>Add Number</button>
      <button onClick={handleSort}>Sort numbers</button>
      <button onClick={handleClear}>Clear all</button>
    </div>
  );
}
