import React, { useState, useEffect } from "react";
import "./Users.scss";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users").then((res) => {
      const updatedUsers = res.data.map(({ id, name, username, email }) => ({
        id,
        name,
        username,
        email,
        image: `./images/Users/user_${id}.jpg`,
      }));
      setUsers(updatedUsers);
    });
  }, []);

  return (
    <div className="Users">
      <h1>Our Users</h1>
      <div className="Users__container">
        {users.map((user) => (
          <div className="Users__box" key={user.id}>
            <img src={user.image} alt={user.name} />
            <h2>{user.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
