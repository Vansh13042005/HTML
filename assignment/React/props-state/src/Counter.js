import React, { useState } from 'react'

export default function Counter() {
    const [count,setcount]=useState(0)
  return (
    <div>
      <h2>Counter:{count}</h2>
      <button onClick={()=>setcount(count+1)}>increment</button>
    </div>
  )
}
