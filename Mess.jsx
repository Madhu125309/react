import React from 'react'
import Base from './Base'
class Mess extends React.Component {
render() {
    return (
    <div>
        <h2>Mess Comp</h2>
        <pre>{JSON.stringify(this.props)}</pre>
        <hr/>
        <Base name2={this.props.name1}/>
        
    </div>
    )
}
}

export default Mess