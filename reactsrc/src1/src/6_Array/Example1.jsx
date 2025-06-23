import React from 'react'

export default function Example1() {
    const fruitList = ["Apple","Mango","Banana"];
  return (
    <div>
        {fruitList.map((e,i)=>{
            return <li key={i}>{e}</li>
        })}
    </div>
  )
}
