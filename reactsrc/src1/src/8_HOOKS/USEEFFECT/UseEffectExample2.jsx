import React, { useEffect, useState } from 'react'

export default function UseEffectExample2() {
     // useEffect with empty depedencies 
        const [count , setCount] = useState(0);
    
        useEffect(()=>{
            console.log("This is calling ");
            
        },[])  // it will render first only 
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Click here</button>

    </div>
  )
}
