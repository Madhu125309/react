import React from 'react';
import Mess from './Mess';
class Map extends React.Component {
    ename="madhu";
render() {
    return (
    <div>
        <h2>Map Comp</h2>
        <pre>name:{JSON.stringify(this.ename)}</pre>
        <hr/>
        <Mess name1={this.ename} />
        
    </div>
    )
}
}

export default Map
