import React, { useState } from 'react'

export default function CRUD() {
    const [name,setName] = useState("");
    const [subject,setSubject] = useState("");

    const [records,setRecords] = useState([]);
    const [editIndex,setEditIndex] = useState(null);


    const handleSubmit=(e)=>{
        e.preventDefault();

        if(editIndex!= null)
        {
            const updateRecords = [...records];
            updateRecords[editIndex] = {name,subject};
            setRecords(updateRecords);
            setEditIndex(null);
        }
        else
        {        
            setRecords([...records,{name,subject}])
            console.log(records);
        }
        setName("");
        setSubject("");
        
    }

    const handleDelete=(index)=>{
        //alert(`${index}`)

        let newRecords = records.filter((record,i) => i!==index)

        setRecords([...newRecords])
    }

    const handleEdit=(index)=>{
        setEditIndex(index);

        setName(records[index].name);
        setSubject(records[index].subject);


    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Enter name'
                value={name}
                onChange={(e)=> setName(e?.target?.value)}
                />  
            
            <input
                type='text'
                placeholder='Enter subject'
                value={subject}
                onChange={(e)=> setSubject(e?.target?.value)}
                />

            {editIndex !== null ? <button type='submit'>Update</button> : <button type='submit'>Submit</button>}
            
            
        </form>

        <table style={{border:"2px solid black",borderCollapse:"collapse",width:"300px",padding:"20px"}}>
                <thead>
                    <tr>
                        <th style={{border:"2px solid black"}} rowSpan={2}>ID</th>
                        <th style={{border:"2px solid black"}} rowSpan={2}>Name</th>
                        <th style={{border:"2px solid black"}} rowSpan={2}>Subject</th>
                        <th style={{border:"2px solid black"}} colSpan={2}>Action</th>
                    </tr>
                </thead>

                <tbody style={{border:"2px solid black"}}>
                    {
                        records.map((e,i)=>{
                            return <tr key={i} >
                                <td style={{border:"2px solid black"}}>{i+1}</td>
                                <td style={{border:"2px solid black"}}>{e.name}</td>
                                <td style={{border:"2px solid black"}}>{e.subject}</td>

                                <td style={{border:"2px solid black"}}>
                                    <button onClick={()=>handleEdit(i)}>Edit</button>
                                </td>
                                <td style={{border:"2px solid black"}}>
                                    <button onClick={()=>handleDelete(i)}>Delete</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
        </table>
    </div>
  )
}
