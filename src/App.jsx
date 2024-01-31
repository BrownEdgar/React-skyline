import React, { useEffect } from 'react'
import COunter from './components/COunter';
import { useDispatch, useSelector } from 'react-redux'
import { actionForAll } from './features/actions/actions';
import { clearList, getUsersAsync, getUsersStatus, usersSelector } from './features/users/usersSlice';
import './App.css'

export default function App() {
  const users = useSelector(usersSelector);
  const loading = useSelector(getUsersStatus);
  const dispatch = useDispatch()

  useEffect(() => {
    // axios.get('https://jsonplaceholder.typicode.com/users')
    //   .then((res) => dispatch(pushUser(res.data)))
    dispatch(getUsersAsync())
  }, [])

  return (
    <div className='App'>
      <h1>hello redux</h1>
      <COunter />
      <pre>
        {loading ? <kbd>Loading...</kbd> : JSON.stringify(users, null, 1)}
      </pre>
      <button onClick={() => dispatch(clearList())}>Clear list</button>
      <button onClick={() => dispatch(actionForAll(8))}>actionForAll (delete user)</button>
    </div>
  )
}
