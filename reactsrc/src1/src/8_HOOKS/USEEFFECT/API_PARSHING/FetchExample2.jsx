import React, { useEffect, useState } from 'react'

export default function FetchExample2() {
    const [data,setData] = useState(null);

    useEffect(()=>{
        const fetchRecord= async()=>{
            try {
                var response = await fetch("https://jsonplaceholder.typicode.com/posts/1")

                var jsonData = await response.json();
                setData(jsonData)
            } catch (error) {
                console.log(error);
            }
        }
        fetchRecord();
    })
  return (
    <div>
        {
            data ? 
                <h4>
                    {JSON.stringify(data,null,3)}
                </h4>
                :
                <h2>Loading....</h2>
        }
    </div>
  )
}
