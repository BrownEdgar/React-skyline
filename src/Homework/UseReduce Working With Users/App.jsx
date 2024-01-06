import { useReducer, useEffect } from "react";
import reducer, { initialState } from "./reducer";
import axios from "axios";
import { ADD_USERS } from "./actionTypes";

import "./App.scss";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios({
      baseURL: "https://jsonplaceholder.typicode.com/",
      url: "users",
    }).then((res) => {
      dispatch({ type: ADD_USERS, payload: { users: res.data } });
    });
  }, []);

  return (
    <div>
      <div className="users">
        {state.developers.map((user) => {
          return (
            <div key={user.id}>
              <h1>{user.name}</h1>
              <h2>{user.email}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
