import React from 'react'
import Example2 from './Example2';
import Example1 from './Example1';

export default function Example6() {
    let isLogging = false;

  return (
        <>
            {
                isLogging 
                ?
                    <Example1/>
                :
                    <Example2/>
            }
        </>
  )
}
