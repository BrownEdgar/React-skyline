import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { plus, minus } from '../features/count/countSlice'

export default function COunter() {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(plus())
    dispatch(plus())
  }
  const handleMinnus = () => {
    dispatch(minus())
  }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>plus</button>
      <button onClick={handleMinnus}>minus</button>
    </div>
  )
}
