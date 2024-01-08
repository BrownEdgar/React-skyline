import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Comments.scss";

export default function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments", {
        params: {
          _limit: 30,
        },
      })
      .then((res) => setComments(res.data));
  }, []);

  return (
    <div className="Comments">
      <h1>Comments</h1>
      <div className="Comments__container">
        {comments.map((comment) => (
          <div className="Comments__box" key={comment.id}>
            <img src="./images/user.png" alt="User" />
            <div className="Comments__text">
              <h2>{comment.email}</h2>
              <p>{comment.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
