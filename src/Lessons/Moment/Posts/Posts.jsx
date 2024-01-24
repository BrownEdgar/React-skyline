import React from "react";
import moment from "moment";

export default function Posts({ posts, onArchive }) {
  return (
    <div className="Posts">
      {posts.map((post) => (
        <div className="Posts__item" key={post.id}>
          <div className="Posts__flex">
            <span>{moment(post.createDate).fromNow()}</span>
            <span onClick={() => onArchive(post.id)}>archive</span>
          </div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
