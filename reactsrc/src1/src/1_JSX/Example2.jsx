import React from 'react'

export default function Example2() {

    const dataList = ["C","C++","Java","Python","C"];

  return (
            <>
                {
                    dataList.map((e,i)=>{
                            return <h3 key={i}>{e}</h3>
                    })  
                }
            </>
  )
}
