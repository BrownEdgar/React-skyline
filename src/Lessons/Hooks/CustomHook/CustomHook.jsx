import { useState } from 'react'

export default function CustomHook(initialValue) {

  const [count, setCount] = useState(initialValue);

  const plus = () => setCount(count + 1)
  const minus = () => setCount(count - 1)

  return [count, { plus, minus }]
}
