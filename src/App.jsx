import { useState } from 'react'
import'./App.scss'
import { nanoid } from "nanoid";
import { FaRegEye } from "react-icons/fa6";
import { GiErlenmeyer } from "react-icons/gi";
import { FaRegEyeSlash } from "react-icons/fa6";

export default function App() {
  const [currentId, setcurrentId] = useState(null);
  const [users, setUsers] = useState([{
    id: 1,
    username: "sebstian",
    email: 'seb122.gmail.com',
    password: 'dasdasdas'
  }])
 
const saveCurrentId = (userid) => setcurrentId(userid)
 
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const { username, email } = e.target;
    const isUserExist = users.some((user) => user.name === username.value.trim())
    const newUser = {
      id: nanoid(),
      username: username.value.trim(),
      email: email.value.trim(),
      password: password.value
    };
    setUsers([...users, newUser])
    e.target.reset()
  }





  return (
    <>
      <div className="App">
        <form id="myForm" onSubmit={handleSubmit}>
          <label htmlFor="username" className="userns" required>
            Username
          </label>
          <input form="myForm" type="text" id="username" required />
          <label htmlFor="email">Email</label>
          <input form="myForm" type="email" id="email" required />
          <label htmlFor="password">Password</label>
          <input form="myForm" type="password" id="password" required />

          <span>
            Create account? <GiErlenmeyer />
          </span>
          <input
            form="myForm"
            onSubmit={handleSubmit}
            type="submit"
            value="Submit"
            className="button"
          />
        </form>
      </div>
      <div className="container">
        <ul>
          {users.map((user) => {
            return (
              <li key={user.id}>
                <span>Name: {user.username}</span>
                <span>Email: {user.email}</span>
                <span>
                  Password:{" "}
                  {user.id === currentId ? (
                    <>
                      {user.password}
                      <FaRegEyeSlash className='slashEye' onClick={() => setcurrentId(null)}/>
                    </>
                  ) : (
                    <>
                      {" "}
                      {"*".repeat(10)}
                      <button className="eye">
                        <FaRegEye onClick={() => saveCurrentId(user.id)} />
                      </button>
                    </>
                  )}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
