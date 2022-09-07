import React from 'react'

class Users extends React.Component{
    constructor(){
      super()
      this.state = {
        username: 'user101'
      }
    }

    getUsername(){
        return this.state.username
    }

    render(){
        return(
            <>
                <h1>Menggunakan this.state : {this.state.username}</h1>
                <h1>Menggunakan fungsi get username : {this.getUsername()}</h1>
            </>
        )
    }
  }

 
export default Users