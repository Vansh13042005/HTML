import React, { useEffect, useState } from 'react'

export default function UseEffectExample3() {
    const [count,setCount] = useState(0);
    const [counter ,setCounter ] = useState(100);

    useEffect(()=>{
        console.log("Change");
        alert("Change");
        
    },[count])

  return (
    <div style={{margin:"30px"}}>

        <h3>{count}</h3>
        <button onClick={()=> setCount(count+1)}>Count + </button>      
        <h3>{counter}</h3>
        <button onClick={()=> setCounter(counter+1)}> Counter + </button>

    </div>
  )
}
