import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.scss'
import Pagination from './Pagination'

export default function App() {
    const [posts, setPosts] = useState([])
    const [perpage, setPerpage] = useState(10)
    const [page, setPage] = useState(1)
    useEffect(() => {
      axios( 'https://jsonplaceholder.typicode.com/posts' )
        .then(res => setPosts(res.data))
    }, [])
const x = (page * perpage)
const currentPostsSlice = posts.slice(x - perpage, x)
    const changePage = (n) => {
    setPage(n)
}
  return (
      <div className='App'>
          <div className='posts'>
              {currentPostsSlice.map(post => {
                  return <p key={post.id}>{post.title}</p>
              })}
          </div>
          <Pagination perpage={perpage} total={posts.length} page={page} changePage={changePage} />
    </div>
  )
}
