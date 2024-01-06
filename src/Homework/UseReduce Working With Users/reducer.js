// reducer.js

// Ստեղծել կոճակներ որոնք կանեն հետևյալ գործողությունները

// - https://jsonplaceholder.typicode.com/ սաըտից ստանալ բոլոր ւusers-ին և միայն անունները պահել  `developers` զանգվածի մեջ
// - Խառնել arr զանգվածը(shuffle) դասի օրինակով։
// - arr զանգվածի մեյ ավելացնել պատահական եռանիշ թիվ
// - փոխել user օբյեկտի name հատկությունը
// - arr զանգվածը սորտավորել

// - Ամեն մի գործողությունից հետո(click) `actions` թվային հատկությունը ավելացնել 1 - ով։

import { ADD_USERS } from "./actionTypes";

export const initialState = {
  actions: 0,
  developers: [],
  user: {
    id: 1,
    name: "Armen",
  },
  arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9],
};

function reducer(state, action) {
  switch (action.type) {
    case ADD_USERS:
      return {
        ...state,
        developers: action.payload.users,
        actions: state.actions + 1,
      };
  }
}

export default reducer;
