import React, { useEffect } from 'react'
import COunter  from './components/COunter';
import { useDispatch, useSelector } from 'react-redux'
import { actionForAll } from './features/actions/actions';
import { clearList,  pushUser,  usersSelector } from './features/users/usersSlice';
import './App.css'
import { nanoid } from '@reduxjs/toolkit';


export default function App() {
  const users = useSelector(usersSelector);
  // const loading = useSelector(getUsersStatus);
  const dispatch = useDispatch()

  // useEffect(() => {
  //   // axios.get('https://jsonplaceholder.typicode.com/users')
  //   //   .then((res) => dispatch(pushUser(res.data)))
  //   dispatch(getUsersAsync())
  // }, [])

  const handleSubmit = (e)=>{
    e.preventDefault();
    const username = e.target[0].value;
    const email = e.target[1].value;
    // const x = [username,email]
    // console.log();
    // const prepare =()=> {
    //   return {
    //     payload: {
    //       email,
    //       username
    //     },
    //   }
    // }
    dispatch(pushUser({id:nanoid(5), email: email,username: username}))
    e.currentTarget.reset()
  }

 

  return (
    <div className='App'>
      <h1>hello redux</h1>
      <COunter />
      {/* <pre>
        {loading ? <kbd>Loading...</kbd> : JSON.stringify(users, null, 1)}
      </pre> */}
      {/* <addUser /> */}
      <hr />
      <form onSubmit={handleSubmit}>
        
            <label htmlFor="username">user name</label>
            <input type="text" id='username' placeholder='enter your name' required/>

            <label htmlFor="email">email</label>
            <input type="email" id='email' placeholder='enter your email' required/>

            <input type="submit" value='save' className='submit'/>
      </form>
      <hr />

      <ul>
        {
          users.map(user =>{
            return (
              <li key={user.id} >
               <h3>name: {user.name}</h3>
               <p>email: {user.email}</p>
               <button onClick={() => dispatch(actionForAll(user.id))}> delete user</button>
              </li>
            )
          })
        }
      </ul>
      <button onClick={() => dispatch(clearList())}>Clear list</button>
      {/* <button onClick={() => dispatch(actionForAll(8))}>actionForAll (delete user)</button> */}
    </div>
  )
}
