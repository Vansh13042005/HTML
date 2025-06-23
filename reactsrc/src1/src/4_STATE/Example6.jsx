import React, { useState } from 'react'

export default function Example6() 
{
    const [subjectList,setSubjectList] = useState([]);
    const [subject,setSubject] = useState("");

    const handleDisplay=()=>{
        setSubjectList([...subjectList,subject]);
        setSubject("");
    }

  return (
    <div>
         <input
            type='text'
            placeholder='Enter name'
            value={subject}
            onChange={(e) => setSubject(e?.target?.value)}/>


        <button onClick={handleDisplay}>Submit</button>

        <ul>
            {subjectList.map((e,i)=>{
                   return  <li key={i}>{e}</li>
            })}
        </ul>

    </div>
  )
}
