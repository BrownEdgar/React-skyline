import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import './Test.scss'

const searchPostbyFilter = (posts, value) => {
  return posts.filter(post => post.title.includes(value.toLowerCase()))
}

export default function Test() {
  const [posts, setposts] = useState([])
  const [searchValue, setSetsearchValue] = useState('')

  const inputRef = useRef(null)

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/posts')
      .then(res => setposts(res.data))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSetsearchValue(inputRef.current.value)
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <input type="text" name="message" id="message" ref={inputRef} />
        <input type="submit" value="search" />
      </form>
      {searchPostbyFilter(posts, searchValue).map(post => {
        return (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        )
      })}
    </div>
  )
}
