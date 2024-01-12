import axios from "axios";
import "./Posts.scss";
import { Link, useLoaderData } from "react-router-dom";

export default function Posts() {
  const posts = useLoaderData();

  return (
    <div className="Posts">
      <h1>Our Posts</h1>
      <div className="Posts__container">
        {posts.map((post) => (
          <Link to={`/posts/${post.id}`} className="Posts__box" key={post.id}>
            <h2>
              {post.title.length > 35
                ? `${post.title.slice(0, 35)}...`
                : post.title}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
export const postsLoader = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts", {
    params: {
      _limit: 25,
    },
  });
  return res.data;
};
