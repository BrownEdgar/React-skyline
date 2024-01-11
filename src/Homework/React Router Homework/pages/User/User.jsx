import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Error from "../Error/Error";
import "./User.scss";
import { IoReturnUpBackOutline } from "react-icons/io5";
import ROUTES from "../../routes";

export default function User() {
  const { userId } = useParams();
  const [user, setUser] = useState({});

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
            city: res.data.address.city,
            image: `/images/Users/user_${userId}.jpg`,
          };
          setUser(userData);
        });
    }
  }, [userId]);
  console.log(user);
  return (
    <div className="User">
      {user ? (
        <div className="User__box">
          <Link to={"/" + ROUTES.USERS}>
            <IoReturnUpBackOutline className="icon" />
          </Link>
          <img src={user.image} alt={user.name} />
          <div className="info">
            <div className="title">
              <h2>Full Name:</h2>
              <h2>Username:</h2>
              <h2>Email:</h2>
              <h2>City:</h2>
            </div>
            <div className="desc">
              <p>{user.name}</p>
              <p>{user.username}</p>
              <p>{user.email}</p>
              <p>{user.city}</p>
            </div>
          </div>
        </div>
      ) : (
        <>
          <Error />
        </>
      )}
    </div>
  );
}
