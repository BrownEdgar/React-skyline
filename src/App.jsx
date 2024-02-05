// App.js

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUsers, clearList } from "./features/usersSlice/usersSlice"; // Import getUsers action

export default function App() {
  const users = useSelector((state) => state.users.data);
  const loading = useSelector((state) => state.users.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="App">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h3>Users:</h3>
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
          <button onClick={() => dispatch(clearList())}>Clear</button>
        </>
      )}
    </div>
  );
}
