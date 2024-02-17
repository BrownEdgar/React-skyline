import React, { useEffect, useRef, useState } from 'react'
import './app.css'

const btn = ["black", "blue", "yellow"]

export default function App() {
  const [txt, setTxt] = useState(btn[0])
  // {current: div}
  const devRef = useRef(null);
  useEffect(() => {
    console.log(devRef)
    devRef?.current.classList.add('active')
  }, [])



  const handlechange = (name) => setTxt(name)

  return (
    <div ref={devRef}>
      <h1>background is <span>{txt}</span></h1>
      <div className='container' style={{
        background: `${txt}`,
        color: `${txt === 'yellow' ? '#000' : '#fff'}`
      }}>
        <h2><span>React events</span>(Change background)</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius minima tenetur maiores corrupti quia aut, recusandae dolorum dolor voluptates fugit?</p>
        {
          btn.map((name, id) => {
            return (
              <button
                key={id}
                className={name}
                onMouseEnter={() => handlechange(name)}>
                {name}
              </button>
            )
          })
        }

      </div>
    </div>
  )
}
