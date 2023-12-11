import { useEffect, useState } from "react";
import Modal from "./Modal/Modal";
import './App.scss'
import axios from 'axios'; 


export default function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [users, setUsers] = useState([])
  const [currentIndex, setCurrentIndex] = useState(null)
  const toggleModal = () => {
    setIsOpen(!isOpen)
  }
  
  const toggleDelete = (prevArr) => {
    setUsers((prevArr) => {
      return prevArr.filter(post => post.id !== currentIndex)
    })
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users", {
        params: {
          _limit: 10,
        },
      })
      .then((res) => {
        const posts = res.data.map((el) => el);
        setUsers(posts);
      });
     
  }, [])
  


  return (
    <div>
      {
        isOpen ? <Modal toggleModal={toggleModal} toggleDelete = {toggleDelete} /> : null
      }
      <div className="flex">
        {users.map((el) => {
          return (
            <div key={el.id} className="box">
              <img
                src="https://cdn.onlinewebfonts.com/svg/img_568657.png"
                alt=""
              />
              <h1>{el.username}</h1>
              <p>{el.name}</p>
              <button className="delete" onClick={toggleModal}>Delete</button>
            </div>
          );
        })}
        </div>
      </div>
  );
}
