import axios from 'axios';
import { useState, useEffect } from 'react';
import { FaWindowClose } from "react-icons/fa";

import './App.scss'

export default function App() {
  const [data, setData] = useState([]);
  const [currentId, setCurrentId] = useState(false)

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3333/quotes/${id}`)
      .then(() => setCurrentId(!currentId))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    axios('http://localhost:3333/quotes')
      .then(res => setData(res.data))
  }, [currentId])

  const addNewQuotes = () => {
    const data = {
      "id": new Date().getTime().toString(),
      "quote": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente maxime alias saepe, ea rerum officia esse aliquid facilis veniam animi id, quos neque laudantium. Nam eum repellendus facere et dolorum.",
      "author": "Albert Einstein"
    }
    axios.post('http://localhost:3333/quotes', data)
      .then(() => {
        setCurrentId(!currentId)
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <h1>JSON server example</h1>
      <button onClick={addNewQuotes}>add new quotes</button>
      <div className="flex">
        {
          data.map(quote => {
            return <p key={quote.id}>
              {quote.quote}
              <span onClick={() => handleDelete(quote.id)}>
                <FaWindowClose />
              </span>
            </p>
          })
        }
      </div>
    </div>
  )
}
