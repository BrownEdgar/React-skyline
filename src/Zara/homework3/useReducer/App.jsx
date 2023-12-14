import { useReducer, useState } from 'react'
import reducer, { STR } from './reducer';
import { ADD_ELEMENT, DELETE_ELEMENTS, SORTED_ARRAY, FIND, RANDOM } from './actionTypes';



function App() {
  const [state, dispatch] = useReducer(reducer, [37,15,78,89,597,621,784,264]);


  const handleSort = () => {
    dispatch({ type: SORTED_ARRAY })
  }
  const clear = () => {
    dispatch({ type: DELETE_ELEMENTS })
  }
  const addNumber = () => {
    dispatch({ type: ADD_ELEMENT })
  }
  const addNumbers = () => {
    dispatch({ type: RANDOM, payload1: 10 })
  }

  const handlefind = () => {
    dispatch({ type: FIND, payload2: 7 })
  }

  return (
    <div>
       <button onClick={handleSort}>Sort</button>
      <button onClick={clear}>Delete</button>
      <button onClick={addNumber}>Add number</button>
      <button onClick={addNumbers}>Add numbers</button>
      <button onClick={handlefind}>Find 7</button>

      <div>{ state.join(" ") }</div>
      <div>{ STR}</div>
        
     

  

    </div>
  )
}

export default App