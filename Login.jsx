import React from 'react';
class Login extends React.Component {
    state={email:"",
        password:""}
        emailHandler=(event)=>{
            this.setState({email:event.target.value})
        }
        passwordHandler=(event)=>{
            this.setState({password:event.target.value})
        }
        onsubmitHandler=(event)=>{
            Event.preventDefault();
            console.log(this.state)
        }
render() {
    return (
    <div>
        <h2>Login Comp</h2>
        <pre>{JSON.stringify(this.state)}</pre>
        <form>
            email:<input type='text' onChange={this.emailHandler}/> <br/>
            password:<input type='password' onChange={this.passwordHandler}/> <br/>
            <input type='button' onClick={this.onsubmitHandler} value="login"/>

        </form>
    </div>
    )
}
}

export default Login
