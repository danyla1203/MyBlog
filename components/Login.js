import React, { Component } from 'react';

class Login extends Component {

    constructor() {
        super();

        this.state = {
            name: "",
            password: ""
        }
        this.handleName = this.handleName.bind(this);
        this.handlePass = this.handlePass.bind(this);
    }

    handleName(event) {
        this.setState({ name: event.target.value })
    }

    handlePass(event) {
        this.setState({ password: event.target.value })
    }

    render() {
        let name = this.state.name;
        let pass = this.state.password;
        return (
            <form>
                <input type="text" name="name" onChange={ this.handleName }></input>
                <input type="password" name="password" onChange={ this.handlePass }></input>
                <button type="button" onClick={ () => this.props.check(name, pass) }>Let's do it!</button>
            </form>
        )
    }
}

export default Login;
