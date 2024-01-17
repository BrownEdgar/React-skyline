import React, { useState } from 'react'
import moment from 'moment'

export default function Test() {
  const [date, setDate] = useState(moment())

  const addTen = () => {
    // setDate(moment().add(100, 'days'))
    setDate(moment().subtract(100, 'days'))
  }
  return (
    <div>
      <h1>
        {date.format('MMM Do Y, hh')}
      </h1>

      <button onClick={addTen}>Add 10 days</button>
    </div>
  )
}
