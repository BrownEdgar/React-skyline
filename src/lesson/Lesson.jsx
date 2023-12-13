import React, { useEffect, useReducer } from 'react'
import reducer, {initialState} from './reducer'
import { ADD_POSTS } from './actionTypes'


export default function Lesson() {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  useEffect(() => {
    return () => {
        axios({
            baseURL: 'https://jsonplaceholder.typicode.com/',
            url: 'posts',
            params: {
                _limit: 10
            }
        }).then(res => {
            dispatch({ type: ADD_POSTS, payload: { res.data } })
        })
    }
  })
  
    return (
        <div>
            
    </div>
  )
}
