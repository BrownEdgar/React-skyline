import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Error from "../Error/Error";
import "./User.scss";

export default function User() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (userId > 0 && userId <= 10) {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((res) => {
          const userData = {
            id: res.data.id,
            name: res.data.name,
            username: res.data.username,
            email: res.data.email,
            image: `./images/Users/user_${userId}.jpg`,
          };
          setUser(userData);
        });
    }
  }, [userId]);

  return (
    <div className="User">
      {user ? (
        <div className="User__box">
          <img src={user.image} alt={user.name} />
          <p>{user.email}</p>
        </div>
      ) : (
        <>
          <Error />
        </>
      )}
    </div>
  );
}
