import React from 'react'

export default function Example5() {
   const dataList = ["C","C++","Java","Python","C"];

   const displayList = dataList.map((e,i)=> <li key={i}>{e}</li>)

   return (
     <div>
         <ul>
             {displayList}
         </ul>
     </div>
    )
}
