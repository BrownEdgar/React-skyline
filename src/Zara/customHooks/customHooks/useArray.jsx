import { useState } from "react"

export default function useArray(arr) {
    const ar = arr
    const [array, setarray] = useState(arr)
    

  return { 
    array, 
    join:()=>setarray(array.join(", ")),
    set:()=>setarray([1,2]), 
    push:()=>setarray([...array, 7]), 
    remove:() =>setarray(array.filter((elem) => elem !== array[1])),
    filter:() =>setarray(array.filter(n => n < 4)), 
    update:()=>setarray(ar), 
    clear: ()=>setarray([]),
  
}
}
