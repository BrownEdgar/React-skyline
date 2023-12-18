import React from 'react'
// import { nanoid } from 'nanoid'
import { useState } from 'react'
import { RiDeleteBack2Fill } from "react-icons/ri";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import './App.scss'


export default function App() {

    const [user,setUser] = useState([{
      id: 1,
      email: 'fhbv@gmail.com',
      username: 'username',
      password: 'password',
    }])

    const [message , setMessage] =useState('')


  const handleSubmit =(e)=>{
      // const name = e.target.elements[0].value;
      e.preventDefault();
      setMessage('')
      const { email, username, password } = e.target;
      const isUserExist = user.some((user) => user.email === email.value.trim())
      if (isUserExist){
        setMessage('Already exists !')
        console.log(message);
        
      } else {
        const newUser = {
          id: Math.floor(Math.random() * 1000000 ),
          email: email.value.trim(),
          username: username.value.trim(),
          password: password.value.trim()
        }
        setUser([...user, newUser])
        e.target.reset()
      }
     
  }

  const deleteUser =(id)=>{
    setUser((prevuser) => prevuser.filter(user => user.id!== id))

  }

  return (
    <div className='App'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">email</label>
            <input type="email" id='email' placeholder='enter your email' required/>
            <p>{message}</p>

            <label htmlFor="username">user name</label>
            <input type="text" id='username' placeholder='enter your name' required/>
            

            <label htmlFor="password">user name</label>
            <input type="password" id='password' placeholder='enter your password' required/>
            <input type="submit" value='save' className='submit'/>
        </form>
        <hr />
        <div className='userSection'>
          {
            user.map(user =>{
              return (
                <div key={user.id}>
                 <span className='delete' onClick={()=>{deleteUser(user.id)}}>X</span>
                 <p><span>Email:</span> {user.email} </p>
                 <p><span>User name:</span> {user.username} </p>
                 <p><span>Password name:</span> {user.password} </p>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}
