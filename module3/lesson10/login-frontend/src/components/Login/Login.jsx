import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../../services/auth-service'
import './Login.css';

export default class Login extends Component {

    state = {
        username: '',
        password: '',
        service: new AuthService()
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const username = this.state.username;
        const password = this.state.password;
        this.state.service.login(username, password)
        .then( response => {
            this.setState({ username: "", password: "" });
            this.props.setUser(response)
        })
        .catch( error => console.log(error) )
      }
    
      handleChange = (event) => {  
        const {name, value} = event.target;
        this.setState({[name]: value});
      }

  render() {
    return (
      <divn>
        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
          <label>Password:</label>
          <input name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
          
          <input type="submit" value="Login" />
        </form>
        <p>Don't have account? 
            <Link to={"/signup"}> Signup</Link>
        </p>
      </divn>
    )
  }
}
