"use client"

import { useState } from "react"

function Counter() {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(prev => prev + 1);
  }

  const decrement = () => {
    setCount(prev => prev - 1);
  }

  return (
    <div>
      <h1>Counter</h1>
      <h2>Count: {count}</h2>
      <br />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter