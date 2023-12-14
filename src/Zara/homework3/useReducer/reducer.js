
import { ADD_ELEMENT, DELETE_ELEMENTS, SORTED_ARRAY, FIND, RANDOM } from './actionTypes';


const sortedArray = (state) => {
  return state.toSorted((a,b) => (a-b))
}
const deleteElements = (state) => {
  return []
}

function randCount() {
  return Math.floor(Math.random()*1000)
}

const addNumber = (state) => {
//  for (let i = 0; i < 1; i++) {
//   const randcount = randCount()
//   if (!state.includes(randcount)) {
//     return [...state, randcount]
//   }else {
//     i--
//   }
//  }
while (true) {
  const randcount = randCount()
  if (!state.includes(randcount)) {
    return [...state, randcount]
  }
}
}

const addNumbers = (state,action) => {
 
  let arr = []
  // arr.push(randCount())
 
  for (let i = 0; i < 10; i++) {
    console.log(arr);
      const randcount = randCount()
      if (!state.includes(randcount) && !arr.includes(randcount)) {
        arr.push(randcount)
      }else {
        i--
      }
     }

    return [...state, arr]
}
let str = ''
function find(state, action) {
  str = state.join('')
  str = str.match(/7/g)
  console.log(str);
  return state
  
}

function reducer(state, action) {
  switch (action.type) {
    case SORTED_ARRAY: return sortedArray(state);
    case ADD_ELEMENT: return addNumber(state);
    case RANDOM: return addNumbers(state,action.payload1);
    case DELETE_ELEMENTS: return deleteElements(state);
    case FIND: return find(state,action.payload2)
    default: return state;
  }
}


export const STR = str.length ;
export default reducer;