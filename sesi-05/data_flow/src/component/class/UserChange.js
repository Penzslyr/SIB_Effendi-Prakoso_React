import React from 'react'

class UsersChange extends React.Component{
    constructor(){
      super()
      this.state = {
        username: 'Ini belum di klik'
      }
    }

    getUsername(){
        return this.state.username
    }

    setUsername = () =>{
        if(this.state!==this.getUsername())
        this.setState({
            username: 'Ini setelah di klik'
        })
        else 
        this.setState({
            username: 'Ini belum di klik'
        })
    }


    render(){
        return(
            <>
                <h1>Ini {this.state.username}</h1>
                <br/>
                <button onClick={this.setUsername}>Set Username</button>
               
            </>
        )
    }
  }

 
export default UsersChange