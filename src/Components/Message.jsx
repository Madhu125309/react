import React, { Component } from "react";
class Message extends Component{
    state={msg:"hello"}
    gmHandler=()=>{
        this.setState({msg:"GM madhu"})
    }
    gnHandler=()=>{
        this.setState({msg:"GN sudha"})
    }
    render(){
        console.log("first")
        return <div>
            <h1>Message Component</h1>
            <h2>Message value:{this.state.msg}</h2>
            <button onClick={this.gmHandler}>GM</button>
            <button onClick={this.gnHandler}>GN</button>
        </div>
    }
}
export default Message