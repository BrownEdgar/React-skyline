import React from 'react'
import { useSelector } from 'react-redux'

export default function App() {
  const state = useSelector(state => state.users);
  console.log(state)
  return (
    <div>
      <h1>hello redux</h1>
    </div>
  )
}
