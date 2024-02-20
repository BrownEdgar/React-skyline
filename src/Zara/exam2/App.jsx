import React from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'
import "./App.css"
import classNames from 'classnames'


export default function App() {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState(null)
  useEffect(() => {
    axios({
      baseURL: 'https://jsonplaceholder.typicode.com/',
      url: 'users'
    })
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }, [])

  const handleclic = (id,e)=>{
    // let y =[]
    //  users.map((li,index)=>{
    //   if(index!=id){
    //     li.className='',
    //      y.push(li)
    //     }else{
    //       li.className='activ'
    //       y.push(li)
    //     }
    //   })
    //   setUsers(y)
    // console.log(y);
    // console.dir(e.target);
    setUser(users[id])
    
  }

  return (
    <div className='container'>
      <h1>User List</h1>
      <ul>
        {
          users.map((elem) => {
            return (
              <li
                className={classNames({
                  active: elem.id === user?.id
                })}
                key={elem.id}
                onClick={() => handleclic(elem.id)}>
                {elem.name}
              </li>
            )
          })
        }
      </ul>
      {
        user ? (
          <div className='contacts'>
            <p>Email: {user.email}</p>
            <p>address: {user.address.city},{user.address.street},{user.address.zipcode}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <p>Catch Phrase: {user.company.catchPhrase}</p>
            <p>Bs: {user.company.bs}</p>
          </div>
        ) : null
      }

    </div>
  )
}
