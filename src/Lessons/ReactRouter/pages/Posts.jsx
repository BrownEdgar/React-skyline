import axios from 'axios';
import { useState, useEffect } from 'react';



export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios(import.meta.env.VITE_DB_URL + 'posts')
      .then(res => setPosts(res.data))
  }, [])

  return (
    <div className='Posts'>
      <h1>Our Posts</h1>
      <div className="Posts__wrapper">
        {
          posts.map(elem => {
            return (
              <div key={elem.id}>
                <h2>{elem.title}</h2>
                <p>{elem.body}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
