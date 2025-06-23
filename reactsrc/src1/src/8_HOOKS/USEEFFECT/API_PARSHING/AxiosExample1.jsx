import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function AxiosExample1() 
{
    const [data,setData] = useState(null);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => setData(response.data))
        .catch((error) => console.log(error))
    },[])

  return (
    <div>
        {
            data ? 
                <h5> {JSON.stringify(data,null,3)}</h5>
                :
                <h1>Loading ... </h1>
        }
    </div>
  )
}
