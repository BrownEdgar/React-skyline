// reducer.js
import {
  REMOVE_ONE_NUMBER,
  ADD_ONE_NUMBER,
  ADD_RANDOM_NUMBERS,
  SORT_ORDER,
  CLEAR,
} from "./actionTypes";

function reducer(state, action) {
  const getRandomNumber = () => Math.floor(Math.random() * 191) + 10;
  switch (action.type) {
    case ADD_RANDOM_NUMBERS:
      const newNumbers = [];
      for (let i = 0; i < 10; i++) {
        let randomNumber = getRandomNumber();
        if (!state.includes(randomNumber)) {
          newNumbers.push(randomNumber + " ");
        } else {
          i--;
        }
      }

      return [...state, ...newNumbers];

    case REMOVE_ONE_NUMBER:
      return state.slice(0, -1);

    case ADD_ONE_NUMBER:
      return [...state, getRandomNumber() + " "];

    case SORT_ORDER:
      return [...state].toSorted((a, b) => a - b);
    case CLEAR: {
      return [];
    }

    default:
      return state;
  }
}

export default reducer;
