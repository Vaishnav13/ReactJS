import React, { Component } from "react"

class Message extends Component {
    constructor(){
        super()
        this.state = {
            message: 'Welcome Visitor'
        }
    }
    changeMessage () {
        this.setState({
            message: 'Thank you for Subscribing'
        })
    }
    render(){
        return(
        <div>
            <h1>{this.state.message}</h1>
            <button onClick={() => this.changeMessage()}>Subcribe</button>
            <button onClick={() => this.changeMessage()}>Subcribe</button>
        </div>
        ) 
    }
}
export default Message