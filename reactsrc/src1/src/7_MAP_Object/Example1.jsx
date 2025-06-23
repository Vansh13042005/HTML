import React, { useState } from 'react'

export default function Example1() 
{
    const [student,setStudent] = useState({
        name : "aaa",
        subject : "react"
    })

    const updateDetails=()=>{
        setStudent({...student,subject : "Flutter"})
    }
  return (
    <div>
        <h1>Name : {student.name}</h1>
        <h1>Subject : {student.subject}</h1>
        
        <button onClick={updateDetails}>
            Update Subject
        </button>

    </div>
  )
}
