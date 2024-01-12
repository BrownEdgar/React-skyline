import React, { useEffect, useState } from "react";
import "./comment.scss";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Error from "../Error/Error";
import ROUTES from "../../routes";

export default function Photo() {
  const { commentId } = useParams();
  const [comment, setComment] = useState({});

  useEffect(() => {
    if (commentId > 0 && commentId <= 25) {
      axios
        .get(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
        .then((res) => setComment(res.data));
    }
  }, [commentId]);

  console.log(comment);

  return (
    <div className="Comment">
      {comment ? (
        <div className="Comment__box">
          <Link to={"/" + ROUTES.COMMENTS}>
            <IoReturnUpBackOutline className="icon" />
          </Link>
          <img src="/images/user.png" alt="User" />
          <div className="info">
            <div className="title">
              <h2>Name:</h2>
              <h2>Email:</h2>
            </div>
            <div className="desc">
              <p>{comment.name}</p>
              <p>{comment.email}</p>
            </div>
          </div>

          <p className="comment">{comment.body}</p>
        </div>
      ) : (
        <>
          <Error />
        </>
      )}
    </div>
  );
}
