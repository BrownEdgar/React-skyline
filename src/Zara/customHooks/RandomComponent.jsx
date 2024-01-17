import "./App.scss"
import React from 'react'
import useRandom from './customHooks/useRandom'

export default function RandomComponent() {
    const {currentvalu, randomNumber}=useRandom(7, "kkuv64654GFSGBGR","lower")
  return (
   <div>
    <button onClick={randomNumber}>clik to change</button>
    <br />
    <h1>{currentvalu}</h1> 
    </div>
  )
}
