import React, { useEffect, useState } from 'react'

export default function App() {
  const [color, setColor] = useState(JSON.parse(localStorage.getItem("arr")) ?? [])


  const handleChange = () => {
    // const randomColor = "#" + Math.random().toString(16).slice(2, 8)
    // localStorage.setItem('color', randomColor)
    // setColor(localStorage.getItem("color"))

    const arr = ['html', 'css', 'Java Script', 'React.js', 'Node.js', 'Python'];
    localStorage.setItem('arr', JSON.stringify(arr))
    setColor(JSON.parse(localStorage.getItem("arr")) ?? [])
  }

  useEffect(() => {
    document.body.style.backgroundColor = color
  }, [color])

  return (
    <div>
      <h1>color</h1>
      {
        color.map(elem => <h2 key={elem}>{elem}</h2>)
      }
      <button onClick={handleChange}>change color</button>
    </div>
  )
}
