import React, { useState } from 'react'

export default function Example5() {
    const [name,setName] = useState("");
    const [displayname,setDisplayName] = useState("");

    const handleDisplay=()=>{
        setDisplayName(name);
        setName("");
    }
  return (
    <div>
        <input
            type='text'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e?.target?.value)}/>


        <button onClick={handleDisplay}>Submit</button>

        <h3>{displayname}</h3>
    </div>
  )
}
