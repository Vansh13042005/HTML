import React from 'react'

export default function ChildComponent5(props) {
  return (
    <div>
        <h1>{props.subjectList}</h1>

        <hr></hr>

        {
            props.subjectList.map((e,i)=>{
                return <h4>{e}</h4>
            })
        }
    </div>
  )
}
