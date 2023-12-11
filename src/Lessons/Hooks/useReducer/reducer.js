// import { ADD_COUNT, MINUS_COUNT, RANDOM } from './actionTypes';

import { ADD_ELEMENT, DELETE_ELEMENT, SORTED_ARRAY } from './actionTypes';

// function reducer(state, action) {
//   switch (action.type) {
//     c∏te + 1;
//     case MINUS_COUNT: return state - 1;
//     case RANDOM: return state + action.payload; //4

//     default: return state;
//   }
// }


const sortedArray = (state) => {
  return state.toSorted()
}
const addElement = (state, username) => {
  if (!state.includes(username)) {
    return [...state, username]
  }
  console.log("user is alredy exist")
  return state;
}


function reducer(state, action) {
  switch (action.type) {
    case SORTED_ARRAY: return sortedArray(state)
    case ADD_ELEMENT: return addElement(state, action.payload);
    case DELETE_ELEMENT: return state.filter(user => user !== action.payload)
    default: return state;
  }
}



export default reducer