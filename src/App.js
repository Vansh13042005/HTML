import React, { Component } from 'react'
import About from './About';


export default class App extends Component {
                  
               constructor(){

                 super();
 
                  this.state={

                        car:"red",
                        carname:"swift"
                        
                  }
                 
               }
               

                     display =   ()=>{

                           this.setState({
                            car:"blue",
                            carname:"thar"
                          })
                        }
                        
                       
  // state  - object - key and value login  // anti clockwise 
// constructor // setstate //current context 
  render() {
    return (
      <div>
            <About swift=" swift engine 1197cc"></About>
            <p>{this.state.car}</p>
            <p>{this.state.carname}</p>
            <button onClick={this.display}>ok</button>
      </div>
    )
  }
}