import React, { Component } from 'react'
import TextInput from '../components/TextInput'
import { __LoginUser } from '../services/UserServices'
import Nav from '../components/Nav'


export default class SignIn extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            formError: false
        }
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value, formError: false })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const loginData = await __LoginUser(this.state)
            this.props.toggleAuthenticated(true, loginData.user, () => 
                this.props.history.push('/profile')
            )
        } catch (error) {
            this.setState({ formError: true })
        }
    }
    render() {
        const { email, password } = this.state
        return (
            <div>
                <Nav />
                <form onSubmit={this.handleSubmit}>
                    <TextInput
                        placeholder="Your Email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={this.handleChange}
                    />
                <TextInput
                    placeholder="Password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={this.handleChange}
                />
                <div>
                <button>Sign In</button>
                </div>
                {this.state.formError ? <p>Error While Logging In</p> : <p></p>}
                </form>
            </div>
        )
    }
}