import React, { Component } from "react"
class Employee extends Component{
    render(){
        return <div>
            <h2> Employee Comp</h2>
            <pre>{JSON.stringify(this.props)}</pre>
            <h3>Emp name:{this.props.name}</h3>
            <h3>Emp loc:{this.props.loc}</h3>
            <h3>Emp sal:{this.props.sal}</h3>
        </div>
    }
}

export default Employee