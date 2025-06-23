import React from 'react'
import ChildComponent5 from './ChildComponent5';

export default function ParentComponent5() {
  let mySubjectList = ["C","C++","java","React"];
  return (
    <div>
          <ChildComponent5 subjectList = {mySubjectList} />
    </div>
  )
}
