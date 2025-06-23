import React from 'react'

export default function ChildComponent4(props) {
  return (
    <div>
        <h1>{props.name}</h1>
        <h1>{props.subject}</h1>
    </div>
  )
}

ChildComponent4.defaultProps = {
    name : "aaaa",
    subject : "react"
}
