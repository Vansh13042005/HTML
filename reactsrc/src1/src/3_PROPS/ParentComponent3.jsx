import React from 'react'
import ChildComponent3 from './ChildComponent3'
import ChildComponent4 from './ChildComponent4'

export default function ParentComponent3() {
  return (
    <div>
        <ChildComponent4/>
        <ChildComponent4 name="aaaaaa" subject="jjjj"/>
        {/* <ChildComponent3 name="aaa" subject="react js"/> */}
    </div>
  )
}
