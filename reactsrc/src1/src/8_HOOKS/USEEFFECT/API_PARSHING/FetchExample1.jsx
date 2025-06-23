import React, { useEffect, useState } from 'react'

export default function FetchExample1() 
{
    const [data,setData] = useState(null);

    useEffect(()=>{
            fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((jsondata) => setData(jsondata))
            .catch((error) => console.log(error))
    },[])
  return (

    <div>Fetch Example1
        {
        data ?  
            <p>{JSON.stringify(data,null,3)}</p>
            :
            <h1>Loading... </h1>
        }
    </div>
  )
}
