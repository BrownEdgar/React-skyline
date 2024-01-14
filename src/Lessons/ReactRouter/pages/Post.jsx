import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaArrowAltCircleLeft } from "react-icons/fa";
import ROUTES from '../routes';

export default function Post() {
  const [post, setPost] = useState(null)
  const { postid } = useParams();

  useEffect(() => {
    if (Math.sign(postid) === 1) {
      axios({
        baseURL: import.meta.env.VITE_DB_URL,
        url: `posts/${postid}`
      }).then(res => setPost(res.data))
    }

  }, [postid])


  return (
    <div>

      {
        (post) ? (
          <>
            <h1>Welcome to the special Post N {postid}</h1>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </>
        ) : <h1 style={{ color: '#ccc', fontStyle: 'italic' }}>Sorry Post with id {postid} not found</h1>
      }
      <Link to={'/' + ROUTES.POSTS}>
        <FaArrowAltCircleLeft /> go back
      </Link>
    </div>
  )
}
