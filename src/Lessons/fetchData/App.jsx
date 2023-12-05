import { useState, useEffect } from 'react';
import axios from './axios';

import './App.scss'

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // axios.get('https://jsonplaceholder.typicode.com/posts')
    // axios('https://jsonplaceholder.typicode.com/posts')
    // axios({
    //   baseURL: 'https://jsonplaceholder.typicode.com/',
    //   url: 'posts'
    // })
    // axios({
    //   baseURL: 'https://jsonplaceholder.typicode.com/',
    //   url: 'posts',
    //   params: {
    //     _limit: 10,
    //     _start: 56
    //   }
    // })
    // axios.all([
    //   axios.get('https://jsonplaceholder.typicode.com/posts'),
    //   axios.get('https://jsonplaceholder.typicode.com/users'),
    //   axios.get('https://jsonplaceholder.typicode.com/todos'),
    // ])
    //   .then(([posts, users, todos]) => {
    //     console.log('posts:', posts.data)
    //     console.log('users:', users.data)
    //     console.log('todos:', todos.data)
    //   })
    axios('posts')
      .then(res => setPosts(res.data))
      .catch(err => console.log(err))
  }, [])


  return (
    <div className='App'>
      <h1>Fetch data with axios is React</h1>
      <div className="Posts">
        {posts.map(post => {
          return <p key={post.id}>{post.title}</p>
        })}
      </div>
    </div>
  )
}
