import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function AxiosExample2() {

    const [post,setPost] = useState({});
    
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => {
            setPost(response.data)
            console.log("---->>>>> ",response.data);
        })
        .catch((error) => console.log(error))


        
    },[])

  return (
    <div>
        <h3>USER ID : {post.userId}</h3>
        <h3>TITLE : {post.title}</h3>
        <p>BODY : {post.body}</p>
    </div>
  )
}
