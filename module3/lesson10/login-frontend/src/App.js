import React, { Component } from 'react'
//import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom'
import Login from './components/Login/Login.jsx'
import Signup from './components/Signup/Signup.jsx'
import Profile from './components/Profile/Profile.jsx'
import AuthService from './services/auth-service.js'
import Edit from './components/Edit/Edit';

export default class App extends Component {

  state = {
    user: null,
    loading: true
  }

  service = new AuthService()

  checkAuthenticated = () => {
    if(this.state.user === null) {
      this.service.isAuthenticated()
      .then(response => {
        this.setState({
          user: response,
          loading: false
        })
        })
        .catch( err => {
          this.setState({
            user: false,
            loading: false
          })
      })
    }
  }

  setUser = (user) => {
    this.setState({user})
  }

  
  render() {
    this.checkAuthenticated()

    if(this.state.loading) {
      return <p>loading</p>
    }
    if(this.state.user) {
      return (
        <>
          <h1>welcome {this.state.user.username}</h1>
          <Link to="/profile">see Profile</Link>
          <Link to="/edit">Edit Profile</Link>

          <Switch>
              <Route path='/profile' render={() => <Profile setUser={this.setUser} />} />
              <Route path='/edit' render={() => <Edit setUser={this.setUser} />} />
          </Switch>
        </>
      )
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
