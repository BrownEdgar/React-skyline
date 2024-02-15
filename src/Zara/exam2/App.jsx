import React from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'
import "./App.css"


export default function App() {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({
    id:"" ,
    "name": "",
    "username": "",
    "email": "",
    "address": {
        "street": "",
        "suite": "",
        "city": "",
        "zipcode": "",
        "geo": {
            "lat": "",
            "lng": ""
        }
    },
    "phone": "",
    "website": "",
    "company": {
        "name": "",
        "catchPhrase": "",
        "bs": ""
    }

  })
  useEffect(() => { 
    axios({
            baseURL: 'https://jsonplaceholder.typicode.com/',
            url: 'users',
            params: {
              _limit: 10,
            }
          })
          .then(res =>setUsers(res.data))
          .catch(err => console.log(err))
  }, [])

  const handleclic = (id,e)=>{
    // e.target.className ="active"
    console.dir(e.target);
    setUser(users[id])
    
  }
  
  return (
    <div className='container'>
      <h1>User List</h1>
      <ul>
      {
        users.map((user)=>{
          return (
            <li key={user.id} onClick={(e)=>handleclic(user.id,e)}>
              {user.name}
            </li>
          )  
        })
      }
      </ul>
      <div className='contacts'>
        <p>Email: {user.email}</p>
        <p>address: {user.address.city},{user.address.street},{user.address.zipcode}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
        <p>Catch Phrase: {user.company.catchPhrase}</p>
        <p>Bs: {user.company.bs}</p>

      </div>
      
    </div>
  )
}
