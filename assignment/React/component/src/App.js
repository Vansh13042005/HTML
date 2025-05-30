import React from 'react'
function Greeting({name}){
  return <h1>hello,{name}</h1>
}
class Welcomemessage extends React.Component{
  render(){
    return<h2>welcome to react!</h2>
  }
}
 function App() {
  return (
    <div>
      <Greeting name="Vansh"/>
      <Welcomemessage/>
    </div>
  )
}
export default  App;