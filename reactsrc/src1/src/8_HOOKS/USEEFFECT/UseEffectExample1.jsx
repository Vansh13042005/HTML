import React, { useEffect, useState } from 'react'

export default function UseEffectExample1() {

    // useEffect without depedencies 
    const [count , setCount] = useState(0);

    useEffect(()=>{
        console.log("block called");
    })

  return (

    <div>
        <button onClick={()=>setCount(count+1)}>Click Here</button>
    </div>
  )
}
