import { useState } from 'react'
import { RiDeleteBack2Fill } from "react-icons/ri";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

import { nanoid } from 'nanoid'
import './App.scss'

export default function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'Sebastian',
      password: 'Sebastian382777'
    }
  ])
  const [currentId, setCurrentId] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = e.target;
    const isUserExist = users.some((user) => user.username === username.value.trim())
    if (isUserExist) {
      alert("error")
    } else {
      const newUser = {
        id: nanoid(),
        username: username.value.trim(),
        password: password.value.trim()
      }
      setUsers([...users, newUser])
      e.target.reset()
    }


  }

  const saveCurrentId = (userId) => setCurrentId(userId)

  const deleteItem = (userId) => {
    setUsers(
      (prevusers) => prevusers.filter(user => user.id !== userId)
    )
  }

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">username</label>
        <input type="text" placeholder='enter Name' required id='username' />
        <label htmlFor="password">password</label>
        <input type="password" placeholder='enter password' required id='password' />
        <input type="submit" value='add' />
      </form>
      <hr />
      <div className="info">
        <h3>We have <span> {users.length}</span> users</h3>
      </div>
      <ul>
        {
          users.map(user => {
            return (
              <li key={user.id}>
                <span className="username">{user.username}</span>
                <span className="password">
                  {(user.id === currentId) ? (
                    <>
                      {user.password}
                      <FaRegEyeSlash onClick={() => setCurrentId(null)} />
                    </>
                  ) : (
                    <>
                      {"*".repeat(10)}
                      <FaRegEye onClick={() => saveCurrentId(user.id)} />
                    </>
                  )}

                </span>
                <span className="icon" onClick={() => deleteItem(user.id)}> <RiDeleteBack2Fill />
                </span>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
