import { useReducer, useEffect } from 'react'
import reducer, { initialState } from './reducer'
import axios from 'axios';
import { ADD_POSTS, DELETE_POST_BY_ID } from './actionTypes';
import { AiOutlineFieldNumber } from "react-icons/ai"
import { IoCloseCircleSharp } from "react-icons/io5";
import './Test.css'



export default function Test() {
  console.log("test render")
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios({
      baseURL: 'https://jsonplaceholder.typicode.com/',
      url: 'posts',
      params: {
        _limit: 10
      }
    }).then(res => {
      dispatch({ type: ADD_POSTS, payload: { posts: res.data } })
    })
  }, [])


  const deleteById = (postId) => {
    dispatch({ type: DELETE_POST_BY_ID, payload: postId })
  }

  return (
    <div>
      <div className="Posts">
        {
          state.posts.map((post, index) => {
            return (
              <div key={post.id}>

                <span className="icon">
                  <AiOutlineFieldNumber />
                  {" "}
                  {post.id}
                </span>
                <span className='btn-delete'>
                  <IoCloseCircleSharp onClick={() => deleteById(index)} />
                </span>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
