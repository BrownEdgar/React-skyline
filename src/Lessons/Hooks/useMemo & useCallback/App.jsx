import './App.scss'

import React, { useCallback, useEffect, useMemo, useState } from 'react'
import BigComponent from './BigComponent'

export default function App() {
  const [count, setCount] = useState(0);
  const [summa, setSumma] = useState(1e7);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
    setSumma(10)
  }

  useEffect(() => {
    console.log('count changed!')
  }, [])




  const total = useCallback(
    () => {
      console.log('BigComponent run...')
      let sum = 0;
      for (let i = 0; i <= summa; i++) {
        sum += i
      }
      return sum
    }, [summa])

  const BigComponentMemo = useMemo(() => <BigComponent total={total} />, [total])
  return (
    <div>
      <h2
        style={{ border: '2px solid royalblue' }}
        onClick={handleClick}
      >
        Count: {count}
      </h2>
      {BigComponentMemo}
    </div>
  )
}
