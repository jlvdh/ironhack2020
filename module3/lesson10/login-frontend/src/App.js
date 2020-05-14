import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom'
import Login from './components/Login/Login.jsx'
import Signup from './components/Signup/Signup.jsx'

export default class App extends Component {

  state = {
    user: false
  }

  setUser = (user) => {
    this.setState({user})
  }

  render() {

    if(this.state.user) {
      return <h1>welcome {this.state.user.username}</h1>
    }

    return (
      <div>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>

        <Switch>
            <Route path='/login' render={() => <Login setUser={this.setUser} />} />
            <Route path='/signup' component={Signup} />
        </Switch> 
      </div>
    )
  }
}
