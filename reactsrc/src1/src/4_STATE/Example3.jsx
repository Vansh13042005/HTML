import React, { useState } from 'react'

export default function Example3() {
    const [color,setColor] = useState("blue");
    
    function change(){
        setColor(prevColor => prevColor === "blue" ? "yellow" : "green")
    }
  return (
    <div style={{backgroundColor:color,height:'250px'}}>
        <button onClick={()=> setColor("purple")}>Change Color</button>

        <button onClick={change}>Change Color</button>
    </div>
  )
}
