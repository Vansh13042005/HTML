import React, { useState } from 'react'

export default function DynamicStyle() {
    const [isActive,setIsActive] = useState(false);

    const handleDiv=()=>
    {    
        setIsActive(!isActive)
    }
  return (
    <div>
        <div style={{backgroundColor:"blue",height:"200px",width:"200px",visibility:isActive ? "visible" : "hidden"}}>

        </div>

        <button onClick={handleDiv}>Hide / Unhide</button>
    </div>
  )
}
