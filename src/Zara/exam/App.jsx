import React, { useState } from 'react'
import './app.css'
import classNames from 'classnames';


export default function App() {
    const [txt, setTxt] = useState("yellow")
    const btn=["black","blue","yellow"]

    const div = document.getElementById("container")

    const handlechange =(e)=>{
        for (let i = 0; i < btn.length; i++) {
            console.dir(div);
            if (e.target.className===btn[i]){

                div.className = "container " + btn[i]
                setTxt(btn[i])
            }
        }
    }
    


  return (
    <div>
        <h1>background is <span>{txt}</span></h1>
        <div className='container' id="container">
            <h2><span>React events</span>(Change background)</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius minima tenetur maiores corrupti quia aut, recusandae dolorum dolor voluptates fugit?</p>
            {
                btn.map((name,id)=>{
                    return(
                        <button key={id} className={name} onMouseEnter={(e)=>handlechange(e)}>{name}</button>
                    )
                })
            }
            
        </div>
    </div>
  )
}
