import React, {Component} from 'react'

export default class Login extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            userName: '',
            password: ''

        }
    }

    saveUserName(input) {
        this.setState({
            userName: input
        })
        console.log(this.state.userName)

    }

    savePassword(input) {
        this.setState({
            password: input
        })
        console.log(this.state.password)
    }

    loginUser() {
        alert(`Username: ${this.state.userName} Password: ${this.state.password}`)
    }

    render() {
        return(
            <div>

                <input placeholder="Username" onChange={event => this.saveUserName(event.target.value)} />

                <input placeholder="Password" onChange={event => this.savePassword(event.target.value)}/>

                <button onClick={() => this.loginUser()}>Login</button>

            </div>
        )
    }
}