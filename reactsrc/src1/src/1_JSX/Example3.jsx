import React from 'react'
import Example4 from './Example4';

export default function Example3() {
    const dataList = ["C","C++","Java","Python","C"];
  return (
    <div>
        <ul>
            {
                // dataList.map((e,i)=>{ return <li>{e}</li>})
                dataList.map((e,i)=>{
                    return <Example4/>}
                )
            }
        </ul>
    </div>
  )
}
