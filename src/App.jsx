import React from 'react'

import { useDispatch, useSelector } from "react-redux";
import { addUser } from './features/usersSlice/usersSlice';



export default function App() {
const users = useSelector(state => state.users)
const dispatch = useDispatch()

const adduser =()=>{
  dispatch(addUser('jvn kcj'))
}


  return (
    <div>
      <h1>{JSON.stringify(users,null,1)}</h1>
      <button onClick={adduser}>add user</button>
    </div>
  )
}
