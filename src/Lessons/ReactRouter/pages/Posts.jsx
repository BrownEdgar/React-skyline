import axios from 'axios';
import { Link, useLoaderData } from 'react-router-dom';

export default function Posts() {
  const posts = useLoaderData();
  return (
    <div className='Posts'>
      <h1>Our Posts</h1>
      <div className="Posts__wrapper">
        {
          posts.map(elem => {
            return (
              <Link key={elem.id} to={`/posts/${elem.id}`} >
                <h2>{elem.title}</h2>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}


// eslint-disable-next-line react-refresh/only-export-components
export const postsLoader = async () => {
  const posts = await axios(import.meta.env.VITE_DB_URL + 'posts')
  const data = posts.data;
  return data
}
