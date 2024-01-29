import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearList, pushUser } from './features/users/usersSlice';
import COunter from './components/COunter';

import './App.css'

export default function App() {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(pushUser(e.target.elements[0].value))
  }

  return (
    <div className='App'>
      <h1>hello redux</h1>
      <COunter />
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='username' />
        <input type="submit" value="save" />
      </form>
      <pre>
        {JSON.stringify(users, null, 1)}
      </pre>

      <button onClick={() => dispatch(clearList())}>Clear list </button>

    </div>
  )
}
