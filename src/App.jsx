import { useEffect, useState } from "react";
import Modal from "./Modal/Modal";
import './App.scss'

export default function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [users, setUsers] = useState([])

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }
  
  const toggleDelete = () => {
    setLanguages(languages.toSpliced(0, 1))
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users", {
      params: {
        _limit: 10
      }
    }).then(res => {
      const posts = res.data.map(({ id }) => { id })
      setUsers(posts)
    })
     
  }, [])
  


  return (
    <div>
      {
        isOpen ? <Modal toggleModal={toggleModal} toggleDelete = {toggleDelete} /> : null
      }
      <div className="flex">
        {
          users.map((el) => {
        return (
          <div key={el.id}>
            <h1>o</h1>
            <button className="delete" onClick={toggleModal}>
              Delete
            </button>
          </div>
        );
          })
        }</div>
      </div>
  );
}
