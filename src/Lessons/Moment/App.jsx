import { useState, useEffect } from 'react';
import AddProduct from './AddProduct/AddProduct';
import axios from 'axios';
import Posts from './Posts/Posts';
const DB_URL = import.meta.env.VITE_DB_URL;
const DB_URL_ARCHIVE = import.meta.env.VITE_DB_URL_ARCHIVE;

import './App.scss'

export default function App() {
  const [posts, setPosts] = useState([]);

  const archivePost = (postId) => {
    axios(DB_URL + `/${postId}`)
      .then(res => {
        axios.post(DB_URL_ARCHIVE, res.data)
          .then(() => {
            console.log("DB_URL_ARCHIVE done")
            axios.delete(DB_URL + `/${postId}`)
          })
      })
  }

  useEffect(() => {
    axios(DB_URL)
      .then(res => setPosts(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='grid'>
      <div className="grid__form">
        <AddProduct />
      </div>
      <div className="grid__products">
        <Posts posts={posts} archivePost={archivePost} />
      </div>
      <div className='grid__archive'>
        <button>show archive</button>
      </div>
    </div>
  )
}
