import React from 'react'

import { useDispatch, useSelector } from "react-redux";
import { actionForAll, addUser, getUsersAsync, usersSelector } from './features/usersSlice/usersSlice';
import { useEffect } from 'react';
import { addCount, minusCount } from './features/counSlice/countSlise';




export default function App() {
  
const users = useSelector(usersSelector)
const count =useSelector(state => state.count)
const dispatch = useDispatch()

useEffect(() => {
  
  dispatch(getUsersAsync())

}, [])


const adduser =()=>{
  dispatch(addUser())
}
const popuser =()=>{
  dispatch(actionForAll())
}
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={()=>dispatch(addCount())}> + count</button>
      <button onClick={()=>dispatch(minusCount())}> - count</button>
      <h1>{JSON.stringify(users,null,1)}</h1>
      <button onClick={adduser}>add user</button>
      <button onClick={popuser}>pop user</button>
    </div>
  )
}
