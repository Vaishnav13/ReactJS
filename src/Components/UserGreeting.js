import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    
  render() {
    return this.state.isLoggedIn && <div>Hello Vaishnav</div>
    // return this.state.isLoggedIn ?(
    //     <div>Hello Vaishnav</div>
    // ) : (
    //     <div>Hello Guest</div>
    // )
    
    // let message
    // if (this.state.isLoggedIn) {
    //     message = <div>Hello Vaishnav</div>
    // }else {
    //     message = <div>Hello Guest</div>
    // }
    // return <div>{message}</div>
    // // if(this.state.isLoggedIn){
    //     return(
    //         <div>Hello Vaishnav</div>
    //     )
    // } else {
    //     return(
    //         <div>Hello Guest</div>
    //     )
    // }
    // return (
    // <div>
    //     <div>Hello Vaishnav</div>
    // </div>
    // )
  }
}

export default UserGreeting
