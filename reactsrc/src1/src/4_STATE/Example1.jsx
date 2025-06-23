import React, { useState } from 'react'

export default function Example1() {
    const [count,setCount] = useState(0);

    function updateCount(){
        setCount(count+1)
    }
  return (
    <div>
        <h1>{count}</h1>

        <button onClick={updateCount}>Increment</button>
    </div>
  )
}
