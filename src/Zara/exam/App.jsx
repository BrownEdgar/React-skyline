import React, { useState } from 'react'
import './app.css'
import classNames from 'classnames';


export default function App() {
    const [txt, setTxt] = useState("yellow")
   
    const handlechange1 =()=>{
        setTxt("black")

    }
    const handlechange2 =()=>{
        setTxt("blue")

    }
    const handlechange3 =()=>{
        setTxt("yellow")

    }


  return (
    <div>
        <h1>background is <span>{txt}</span></h1>
        <div className='container' style={{backgroundColor:`${txt}`}}>
            <h2><span>React events</span>(Change background)</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius minima tenetur maiores corrupti quia aut, recusandae dolorum dolor voluptates fugit?</p>
            <button className='black' onMouseMove={handlechange1}>blak</button>
            <button className='blue' onMouseMove={handlechange2}>blue</button>
            <button className='yellow' onMouseMove={handlechange3}>yellow</button>
        </div>
    </div>
  )
}
