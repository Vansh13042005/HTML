import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function AxiosExample3() {
    const [comments,setComments] = useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response) => setComments(response.data));
    })
  return (
    <>
        {comments.map((element,index)=>{
            return <div style={{margin:"20px",border:"2px"}} key={element.id}>
                <h1>Name : {element.name}</h1>
                <h5>Email : {element.email}</h5>
                <p> Comment : {element.body}</p>
            </div>
        })}
    </>
    
  )
}
