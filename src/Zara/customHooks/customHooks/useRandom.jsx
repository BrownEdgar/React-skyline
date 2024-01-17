// - ստեղծել սեփական (առանձին ֆայլով) `useRandom` customHook,որը պետք է մեզ վերադարձնի զանգված պատահական `number` || `string` էլեմենտներով՝ հետևյալ պայմաններով։ Ստանալու է 2 կամ 3 պարամետր,որոնցից առաջինը պատահական էլեմենտների քանակն, 2 -տիպը, 3- տառատեսակը։
// Օր․՝ `useRandom(4, 'number')` => պետք է վերադարձնի 4 պատահական թիվ 1-1000 միձակայքից։
// Օր․՝ `useRandom(4, 'string', "lower")` => պետք է վերադարձնի 4 պատահական լատինական փոքրատառ։
// Օր․՝ `useRandom(6, 'string', "upper")`=> պետք է վերադարձնի 6 պատահական լատինական Մեծատառ

import React, { useState } from 'react'
import { nanoid } from 'nanoid';

export default function useRandom(count, valu, state) {
    const [currentvalu, setRandom] = useState(valu)
    const randomstring = nanoid(200);
    const regexNumber = /[0-9]/g;
    const regex = /[a-z]/gi;
    const currentCount = count
    const stateofstring = state
    
    const valustring = (stateofstring)=> {
        return ((stateofstring === "lower") ? randomstring.match(regex).slice(0,currentCount).join('').toLowerCase() : randomstring.match(regex).slice(0,currentCount).join('').toUpperCase()) 
    }

    const valuNumber = ()=> {
        return randomstring.match(regexNumber).slice(0,currentCount).join('')
    }


    const valus = ()=> {
          return (currentvalu == Number ? valuNumber() : valustring())
    }

    
  return {
    currentvalu,
    randomNumber:()=>setRandom(valus()),
    }
  
}
