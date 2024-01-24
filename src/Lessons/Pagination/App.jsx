import axios from 'axios'
import { useEffect, useState } from 'react'

import './App.scss'
import Pagination from './Pagination';
import Loader from './Loader';

export default function App() {
  const [posts, setPosts] = useState([])
  const [perpage] = useState(3);
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios('https://jsonplaceholder.typicode.com/posts', {
      params: {
        _limit: perpage,
        _start: ((page - 1) * perpage)
      }
    })
      .then(res => setPosts(res.data))
      .finally(() => setLoading(false))
  }, [perpage, page])




  const changePage = (n) => {
    setPage(n)
  }

  return (
    <div className="App">
      <div className="Posts">

        {
          loading
            ? <Loader />
            : (
              <>
                {
                  posts.map(post => {
                    return <p key={post.id}>{post.title}</p>
                  })
                }
              </>
            )
        }
      </div>
      <Pagination
        perpage={perpage}
        total={100}
        page={page}
        changePage={changePage}
      />
    </div>
  )
}
