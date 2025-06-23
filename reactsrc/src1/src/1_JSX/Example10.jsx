import React from 'react'
import Example1 from './Example1';
import Example2 from './Example2';

export default function Example10() {
    let menuChoice = 2;
    let element = "";
    switch (menuChoice)
    {
        case 1:
        element = <Example1/>
        break;

        case 2:
            element = <Example2/>
            break;
    }
  return (
    <div>
            {element}
    </div>
  )
}
