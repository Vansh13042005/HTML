import React from 'react'
import ChildComponent1 from './ChildComponent1'

export default function ParentComponent1() {
  return (
    <div>
        <h1>Props</h1>
        <ChildComponent1 name="aaa" subject="react" />
    </div>
  )
}
