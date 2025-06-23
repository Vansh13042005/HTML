import React, { useState } from 'react'

export default function Example2() {
    const [name,setName] = useState("");
    const [subject,setSubject] = useState("");


    function display(e){
        e.preventDefault()
        alert(`${name} your subject is ${subject}`)
    }

  return (
    <div>
        <form onSubmit={display}>
            <input
                type='text'
                value={name}
                placeholder='Enter your name '
                onChange={(e)=> setName(e.target.value)}
                />
            
            <input 
                type='text'
                value={subject}
                placeholder='Enter your subject'
                onChange={(e)=>setSubject(e.target.value)}
                />

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
