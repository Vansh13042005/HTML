import React, { useState } from 'react'

export default function Example4() {
    const [index,setIndex] = useState(0);

    const colorArray = ["pink","green","purple","blue","teal"];

    const handleArray = ()=>{
        const newIndex = Math.floor(Math.random() * colorArray.length)
        setIndex(newIndex);
    }
  return (
    <div>
        <div style={{height:"150px",width:"150px",backgroundColor:colorArray[index]}}>

        </div>

        <button onClick={handleArray}>Change</button>
    </div>
  )
}
