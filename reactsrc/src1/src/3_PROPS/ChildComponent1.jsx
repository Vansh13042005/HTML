import React from 'react'

export default function ChildComponent1(props) {
  return (
    <div>   
        
        <h1>Your name is {props.name}</h1>
        <h2>Your subject is {props.subject}</h2>
    </div>
  )
}
