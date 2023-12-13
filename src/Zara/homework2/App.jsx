import { useState ,useEffect } from 'react'
import './App.scss'
import axios from 'axios'
import Modal from '../homework2/Modal/Modal';




export default function App() {
   const [posts, setPosts] = useState([])
   const [isOpen, setIsOpen] = useState(false);
   const [isOpen2, setIsOpen2] = useState(false);
   const [id, setId] = useState(null)
   const [sort, setSort] = useState(true)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts',{
            params: {
                _limit: 10,
                _start: 5
            }
        }).then(rec => {
            const post = rec.data.map(({id,title}) => ({id,title}))
            setPosts(post)
        })
    },[])

    function deleteSec() {
         setPosts(prev => prev.filter(elem => elem.id !== id))
        
    }
    const toggleModal = () => {
        setIsOpen(!isOpen)
      }
    const toggleModal2 = () => {
        setIsOpen2(!isOpen2)
      }

    const sortedPosts = () => {
                setPosts(prevPosts => {
                    return (
                      sort
                        ? prevPosts.toSorted((a, b) => a.title > b.title ? 1 : -1)
                        : prevPosts.toSorted((a, b) => a.title > b.title ? -1 : 1)
                    )
                  })
                  setSort(!sort)
    }

  return (
        <div>
            <button className='sort' onClick={toggleModal2}> Sort Posts</button>
            {
                isOpen2 ? (<Modal toggleModal={toggleModal2}>
                     <h2>Are you sure?</h2>
                    <button onClick={toggleModal2}>No</button>
                    <button className='btn__delete' onClick={() => {
                        toggleModal2();
                        sortedPosts()
                        }}>
                        Yes
                    </button>
                </Modal>)  : null
            }
            {
                isOpen ? (<Modal toggleModal={toggleModal}>
                     <h2>Are you sure?</h2>
                    <button onClick={toggleModal}>cancel</button>
                    <button className='btn__delete' onClick={() => {
                        toggleModal();
                        deleteSec()
                        }}>
                        delete
                    </button>
                </Modal>)  : null
            }

            <div className='App'>
                {
                    posts.map((elem, index )=>{
                        return (
                            <div className='App__section' key={elem.id} onClick={(event)=>{
                                if(event.target.className == "App__delete"){
                                    toggleModal()
                                    setId(elem.id)
                                }
                    
                                }}>
                                <div>
                                    <p>{index + 1}</p>
                                    <h3>{elem.title}</h3>
                                </div>
                                <button className='App__delete'>Delete</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
