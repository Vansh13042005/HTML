import React from 'react'

export default function Example1() {
    const mydiv = {
        height : "250px",
        width  : "250px",
        backgroundColor : "blue",
        padding : "20px",
    }
  return (
    <div style={mydiv}>
        <h1 style={{color:"white"}}>Hello</h1>
    </div>
  )
}
