
import React from 'react'
import Message from './Components/Message'
import Order from './Components/Order'
class App extends React.Component{
render(){
  return<div>
    <h2>App comp</h2>
    <hr/>
    <Message/>
    <hr/>
    <Order/>
  
  </div>
}
}
export default App