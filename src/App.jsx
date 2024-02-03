import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { clearList, pushUser } from "./features/usersSlice/usersSlice";

export default function App() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(pushUser(e.target.elements[0].value));
    e.target.reset();
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Username">Username</label>
          <input type="text" />
        </div>
        <input type="submit" value="Add" />
        <h3>{users.join(" ")}</h3>
        <button onClick={() => dispatch(clearList())}>Clear</button>
        <h4>Count: {users.length}</h4>
      </form>
    </div>
  );
}
