import axios from 'axios'
import { useEffect } from 'react'


export default function Test() {
  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/todos')
      .then(res => console.log(res.data))
  }, [])

  return (
    <div>

    </div>
  )
}
