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
        for (let i = 0; i < 10; i++) {
             const rand = Math.round(Math.random() * 10);
             if (!state.includes(rand)) {
               state.toSpliced(state.length + 1, 0, rand);
             }

        }
       return state

}
        
         
  
   

export default reducer;
