import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Posts.scss";
import { Link } from "react-router-dom";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts", {
        params: {
          _limit: 25,
        },
      })
      .then((res) => setPosts(res.data));
  }, []);

  return (
    <div className="Posts">
      <h1>Our Posts</h1>
      <div className="Posts__container">
        {posts.map((post) => (
          <Link to={`/posts/${post.id}`} className="Posts__box" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
