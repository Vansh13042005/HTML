import React from 'react'

export default function Example1() {
    const subject = "React js";
    const score = 89
  return (
    <div>
        <h3>Your subject is {subject}</h3>
        <h3>Your score is {score}</h3>

        <button onClick={()=> alert("Welcome to react js ")}>Click Here</button>
    </div>
  )
}
