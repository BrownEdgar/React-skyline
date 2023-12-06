import { useState } from 'react'
import List from './List/List'

import './App.scss'
import Child from './Child'

export default function App() {
  const [stories, setStories] = useState([
    {
      id: 1,
      image: './images/house_1.jpg',
      title: 'Private  Villa',
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      id: 2,
      image: './images/house_2.jpg',
      title: 'Private  Villa',
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: 3,
      image: './images/house_3.jpg',
      title: 'Private  Villa',
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
  ])

  const deleteStorybyId = (id) => {
    setStories((prevStories) => prevStories.filter(elem => elem.id !== id))
  }

  return (
    <div className='App'>
      <h3 className='App__title'>Our Story</h3>
      <p className='App__desc'>Rerum morbi wisi purus illum, dolor consectetuer nulla, iusto eveniet? Fuga rem inventore scelerisque, wisi, hac illo wisi iste platea natus ante anim augue convallis. Lacinia laoreet mus quisque repellat, libero fusce, ullamco molestie taciti doloremq Iste quae possimus recusandae curae repellat.</p>
      <List list={stories} size="xs" deleteItem={deleteStorybyId} />
    </div>
  )
}

