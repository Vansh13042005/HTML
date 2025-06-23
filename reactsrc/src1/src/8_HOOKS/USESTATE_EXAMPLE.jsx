import React, { useState } from 'react'
export default function USESTATE_EXAMPLE() {
    const [count,setCount] = useState(0);

    const handleIncrement = ()=>{
        setCount(count+1)
    }
    const handleDecrement = ()=>{
        setCount(count-1)
    }

  return (
    <>
        
        <button onClick={handleIncrement}>Increment + </button>
        <button onClick={handleDecrement}>Decrement - </button>

        <h3 style={{margin:"20px"}}>{count}</h3>
    </>
  )
}
