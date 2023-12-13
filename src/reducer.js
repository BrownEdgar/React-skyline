import { CLEAR, SORT_NUMS, RANDOM_NUMBER, NUMBERS } from "./actionTypes";

function reducer(state, action) {
  switch (action.type) {
    case SORT_NUMS:
      return state.toSorted((a, b) =>  a > b ? 1 : -1);
    case CLEAR:
          return [];
      case RANDOM_NUMBER: return state.toSpliced(state.length + 1,0,action.payload)
   
      case NUMBERS: return addNums(state);
      default:
      return state;
  }
}

const addNums = (state) => {
  const rand = Math.round(Math.random() * 100);
  if (!state.includes(rand)) {
    return [...state, rand];
  } else {
    return addNums(state);
  }
};



        
         
  
   

export default reducer;
