import React, { Component } from 'react'
import './Signup.css'
import AuthService from '../../services/auth-service'
import {Redirect} from 'react-router-dom'
export default class Signup extends Component {

    state = {
            username: '',
            password: '',
            service: new AuthService(),
            submitted: false
    }

     handleSubmit = (e) => {
        e.preventDefault();
        this.state.service.signup(this.state.username, this.state.password)
        .then(user => {
          this.setState({submitted: true})
        })
    }

    handleInput = (e) => {
        let {name, value} = e.target;
        this.setState({[name]: value})
    }

    render() {

      if(this.state.submitted) {
        return <Redirect to='/login' />
      }
        return (
          <div>
            <div className="signup-container">
              <form
                className="signup-form"
                onSubmit={(e) => this.handleSubmit(e)}
              >
                <label htmlFor="name">Username</label>
                <input
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={(e) => this.handleInput(e)}
                />
                <label htmlFor="tagline">Password</label>
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={(e) => this.handleInput(e)}
                />
                <button className="signup-button" type="submit">Signup!</button>
              </form>
            </div>
          </div>
        );
    }
}
