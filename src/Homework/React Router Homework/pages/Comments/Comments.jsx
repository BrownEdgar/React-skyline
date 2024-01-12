import axios from "axios";
import "./Comments.scss";
import { Link, useLoaderData } from "react-router-dom";

export default function Comments() {
  const comments = useLoaderData();

  return (
    <div className="Comments">
      <h1>Comments</h1>
      <div className="Comments__container">
        {comments.map((comment) => (
          <Link
            to={`/comments/${comment.id}`}
            className="Comments__box"
            key={comment.id}
          >
            <img src="./images/user.png" alt="User" />
            <div className="Comments__text">
              <h2>{comment.email}</h2>
              <p>{comment.body}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export const commentsLoader = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/comments", {
    params: {
      _limit: 25,
    },
  });

  return res.data;
};
