import React, { useState } from 'react'

const brands = ["Mersedes", "Audi", 'Ford', "Mazda", "Bmw", "Volga", "Infinity"]

export default function App() {
  const [car, setCar] = useState('')
  const [messageSymbols, setMessageSymbols] = useState('')

  const handleChange = (e) => {
    const { value } = e.target;
    setCar(value)
    console.log(e.target.value)
  }

  const handleTextChange = (e) => {
    setMessageSymbols(e.target.value)
  }

  return (
    <div>
      <select name="cars" id="cars" onChange={handleChange} defaultValue="">
        <option value="" disabled>select cars...</option>
        {
          brands.map(brand => {
            return <option value={brand} key={brand}>{brand}</option>
          })
        }
      </select>
      <p>mnac {messageSymbols.length}/250 symbols</p>
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        maxLength={250}
        minLength={20}
        onChange={handleTextChange}
      >
        Lorem ipsum dolor sit.
      </textarea>
      <h1>your car is: {car}</h1>
    </div>
  )
}
