import { useReducer } from "react";
import reducer from "./reducer";
import {
  REMOVE_ONE_NUMBER,
  ADD_ONE_NUMBER,
  ADD_RANDOM_NUMBERS,
  SORT_ORDER,
  CLEAR,
} from "./actionTypes";
import "./App.scss";

function App() {
  const [state, dispatch] = useReducer(reducer, []);
  const addRandomNumbers = () => {
    dispatch({ type: ADD_RANDOM_NUMBERS });
  };
  const removeOneNumber = () => {
    dispatch({ type: REMOVE_ONE_NUMBER });
  };

  const addOneNumber = () => {
    dispatch({ type: ADD_ONE_NUMBER });
  };
  const sort = () => {
    dispatch({ type: SORT_ORDER });
  };
  const clear = () => {
    dispatch({ type: CLEAR });
  };

  return (
    <div className="NumberContainer">
      <div className="NumberContainer__button-container">
        <button onClick={addRandomNumbers}>Add 10 Random Numbers</button>
        <button onClick={removeOneNumber}>Remove Last Number</button>
        <button onClick={addOneNumber}>Add One Number</button>
        <button onClick={sort}>Sorting</button>
        <button onClick={clear}>Reset</button>
      </div>
      <h1>
        <span>Numbers</span> {state}
      </h1>
    </div>
  );
}

export default App;
