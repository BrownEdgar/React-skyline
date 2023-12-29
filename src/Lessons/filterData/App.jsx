import axios from 'axios';
import React, { useEffect, useState, useTransition } from 'react'
let count = 0;
export default function App() {
  console.log("app render")
  const [photos, setPhotos] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/photos')
      .then(res => setPhotos(res.data))
  }, [])

  const handleChange = (e) => {
    startTransition(() => setSearchValue(e.target.value.toLowerCase()))
  };

  const filteredData = () => {
    count++
    if (!searchValue) return photos;
    const result = photos.filter(elem => elem.title.includes(searchValue))
    return result
  }

  console.log(count)
  return (
    <div className='App'>

      <form>
        <h3>you search : {searchValue} </h3>
        <input type="search" placeholder='search' value={searchValue} onChange={handleChange} />
      </form>
      <div className="Photos">
        {
          isPending
            ? <h1>Loading...</h1>
            : filteredData().map(elem => <h2 key={elem.id}>{elem.title}</h2>)
        }
      </div>
    </div>
  )
}
