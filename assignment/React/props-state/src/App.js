import React from 'react'
import Usercard from './Usercard';
import Counter from './Counter';
function App()  {

    return (
      <div>
        <Usercard name="vansh" age={20} location="ahmedabad"/>
        <Counter/>
      </div>
    )
  }
export default App;