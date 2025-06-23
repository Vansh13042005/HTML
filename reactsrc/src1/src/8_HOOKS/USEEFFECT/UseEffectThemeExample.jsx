import React, { useEffect, useState } from 'react'

export default function UseEffectThemeExample() {
    const [theme,setTheme] = useState("light");

    useEffect(()=>{
        document.body.style.backgroundColor = theme === "light" ? "white" : "black";
        document.body.style.color = theme === "light" ? "black" : "white";

    },[theme])
  return (
    <div style={{margin:"20px",textAlign:"center"}}>
        <h1>Current Theme Is {theme} </h1>
        <button onClick={()=>setTheme(theme == "light" ? "dark" : "light")}>Change Theme</button>
    </div>
  )
}
