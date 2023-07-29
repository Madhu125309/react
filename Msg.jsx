import React from 'react';

const Msg=()=>{
    let [Msg,setMsg]=React.useState("hello");
    return<div className='container'>
    <h2>Msg comp</h2>
    <pre>Message:{Msg}</pre>
    <button onClick={()=>{setMsg("Good Morning")}}>GM</button>
    <button onClick={()=>{setMsg("Good Evening")}}>GE</button>
    </div>
}

export default Msg