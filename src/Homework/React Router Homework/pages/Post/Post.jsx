import React, { useEffect, useState } from "react";
import "./Post.scss";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Error from "../Error/Error";
import ROUTES from "../../routes";

export default function Post() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (postId > 0 && postId <= 25) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((res) => setPost(res.data));
    }
  }, [postId]);

  return (
    <div className="Post">
      {post ? (
        <div className="Post__box">
          <Link to={ROUTES.POSTS}>
            <IoReturnUpBackOutline className="icon" />
          </Link>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ) : (
        <>
          <Error />
        </>
      )}
    </div>
  );
}
