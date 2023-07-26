import React, { Component } from 'react'

class Base extends Component {
render() {
    return (
    <div>
        <h2>Base Comp</h2>
        <pre>{JSON.stringify(this.props)}</pre>
        <h2>emp name:{this.props.name2}</h2>
        
    </div>
    )
}
}

export default Base