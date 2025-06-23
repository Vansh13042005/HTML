import React from 'react'
import Example3 from './Example3';
import Example8 from './Example8';

export default function Example9() {
    let status = true;
  return (
    <div>
        if(status)
        {
            <Example3/>
        }
        else
        {
            <Example8/>
        }
    </div>
  )
}
