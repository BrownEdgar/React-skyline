import { useState } from 'react'
import './App.css'
import Modal from './Lessons/Modal/Modal'

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <h1>React repo</h1>
      <button onClick={toggleModal}>Open modal</button>
      {
        isOpen ? <Modal toggleModal={toggleModal} /> : null
      }
    </div>
  )
}
