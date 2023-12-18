import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { nanoid } from "nanoid";
import "./App.scss";

export default function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      email: "example@gmail.com",
      username: "Eleonor",
      password: "gomogomono",
    },
  ]);
  const [currentId, setCurrentId] = useState(null);
  const [userExists, setUserExists] = useState("");

  const submitFnc = (e) => {
    e.preventDefault();
    const { email, username, password } = e.target;

    const isUserExist = users.some((user) => user.email === email.value.trim());

    if (isUserExist) {
      setUserExists("User already exists");
    } else {
      const newUser = {
        id: nanoid(),
        email: email.value.trim(),
        username: username.value.trim(),
        password: password.value.trim(),
      };
      setUsers([...users, newUser]);
      e.target.reset();
    }
  };

  const saveCurrentId = (userId) => setCurrentId(userId);

  return (
    <div className="App">
      <form onSubmit={submitFnc}>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Enter email" required id="email" />
        <p>{userExists}</p>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Enter name" required id="username" />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter password"
          required
          id="password"
        />
        <input type="submit" value="Create User" />
      </form>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <span className="ulSpan">Email:</span>
            <span className="email">{user.email}</span>
            <span className="ulSpan">Username:</span>
            <span className="username">{user.username}</span>
            <span className="ulSpan">Password:</span>
            <span className="password">
              {user.id === currentId ? (
                <>
                  {user.password}
                  <FaRegEyeSlash onClick={() => setCurrentId(null)} />
                </>
              ) : (
                <>
                  {"*".repeat(10)}
                  <FaRegEye onClick={() => saveCurrentId(user.id)} />
                </>
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
