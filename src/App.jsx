import { useEffect, useState } from 'react'
import './App.css'
import Modal from './Lessons/Modal/Modal'
import axios from 'axios';
// descending and ascending
export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [languages, setLanguages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [sortedOption, setSortedOption] = useState(true)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts', {
      params: {
        _limit: 15,
        _start: 34
      }
    }).then(res => {
      const posts = res.data.map(({ id, title }) => ({ id, title }))
      setLanguages(posts)
    })
  }, [])


  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  const deleteItemByIndex = () => {
    setLanguages((prevArr) => {
      return prevArr.filter(post => post.id !== currentIndex)
    })
  }

  const sortedPosts = () => {
    setLanguages(prevPosts => {
      return (
        sortedOption
          ? prevPosts.toSorted((a, b) => a.title > b.title ? 1 : -1)
          : prevPosts.toSorted((a, b) => a.title > b.title ? -1 : 1)
      )
    })
    setSortedOption(!sortedOption)
  }

  return (
    <div>
      <h1>React repo</h1>
      <button onClick={sortedPosts}>Sort Posts</button>
      {
        isOpen ? (
          <Modal
            toggleModal={toggleModal}
          >
            <h2>Are you sure?</h2>
            <button onClick={toggleModal}>cancel</button>
            <button className='btn__delete' onClick={() => {
              toggleModal();
              deleteItemByIndex()
            }}>
              delete
            </button>
          </Modal>
        ) : null
      }
      <div className="flex">
        {languages.map((elem) => {
          return (
            <div key={elem.id}>
              <h2>{elem.title}</h2>
              <button onClick={() => {
                toggleModal();
                setCurrentIndex(elem.id)
              }}>Delete</button>
            </div>
          )
        })}
      </div>

    </div>
  )
}
