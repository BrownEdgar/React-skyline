////////////////////////
// պետք է ինքնուրույն ստեղծել useArray hook-ը, բոլոր նշված մեթոդներով։
// Օրինակ update(1, 9) ֆունկցիան զանգվածի 2-րդ թիվը փոխարինելու է 9-ով => [1, 9, 3, 4, 5, 6,]
////////////////////////
import "./App.scss"
import useArray from "./customHooks/useArray"

export default function ArrayComponent() {
  const { array,join, set, push, remove, filter, clear,update} = useArray([
    1, 2, 3, 4, 5, 6,
  ])

  return (
    <div>
      <button onClick={join}>join</button>
      <button onClick={push } >Add 7</button>
      <button onClick={remove}>Remove Second Element</button>
      <button onClick={filter}>
        Keep Numbers Less Than 4
      </button>
      <button onClick={set} >Set To 1, 2</button>
      <button onClick={clear}>Clear</button>
      <button onClick={update}>update</button>
      <h1>{array}</h1>
    </div>
  )
}