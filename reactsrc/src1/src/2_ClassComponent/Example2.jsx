import React, { Component } from 'react'

export default class Example2 extends Component {
    constructor(){
        super();
        this.state={
            number : 100,
            subject : "react"
        }
    }
  render() {
    return (
      <div>
        Class Component Example : 
        {this.state.number} - {this.state.subject}
      </div>
    )
  }
}
