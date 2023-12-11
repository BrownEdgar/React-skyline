import { useReducer, useState } from 'react'
import reducer from './reducer';
import { ADD_ELEMENT, DELETE_ELEMENT, SORTED_ARRAY } from './actionTypes';
// import { ADD_COUNT, MINUS_COUNT, RANDOM } from './actionTypes';


function App() {
  const [state, dispatch] = useReducer(reducer, ["Sebastian", "John", "Eleonor", "Kate", "Brian", "Arthur"]);

  // const handleClick = () => {
  //   dispatch({ type: ADD_COUNT });
  // }

  // const handleMinus = () => {
  //   dispatch({ type: MINUS_COUNT })
  // }

  // const handleRandom = () => {
  //   dispatch({ type: RANDOM, payload: 10 })
  // }

  const handleSort = () => {
    dispatch({ type: SORTED_ARRAY })
  }
  const addUser = () => {
    dispatch({ type: ADD_ELEMENT, payload: "valod" })
  }

  const deleteUser = (userName) => {
    dispatch({ type: DELETE_ELEMENT, payload: userName })
  }

  return (
    <div>
      <ul>
        {
          state.map(user => {
            return <li key={user} onClick={() => deleteUser(user)}>{user}</li>
          })
        }
      </ul>

      <button onClick={handleSort}>minus count</button>
      <button onClick={addUser}>add User</button>

    </div>
  )
}

export default App