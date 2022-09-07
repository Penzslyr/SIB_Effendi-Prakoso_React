import React from 'react'

class Counter extends React.Component{
    constructor(){
      super()
      this.state = {
        counter: 0
      }
    }

    getCounter(){
        return this.state.counter
    }

    increment = () =>{
        this.setState({
            counter: this.state.counter+1
        })
    }

    decrement = () =>{
        this.setState({
            counter: this.state.counter-1
        })
    }

    render(){
        return(
            <>
                <h1>Counter: {this.state.counter}</h1>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </>
        )
    }
  }

 
export default Counter