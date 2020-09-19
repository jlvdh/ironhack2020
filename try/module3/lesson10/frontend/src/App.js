// App.js
import React, { Component } from 'react';
import AuthService from './services/auth-service';
import Signup from './components/Signup/Signup'
import Login from './components/Login/Login'
import {Switch, Route} from 'react-router-dom'
import Edit from './components/Edit/Edit';
 
class App extends Component {
  constructor(props){
    super(props)
    this.state = { 
      loggedInUser: null,
      loading: true
    };
    this.service = new AuthService();
  }
 
  fetchUser(){
    if( this.state.loggedInUser === null ){
      this.service.loggedin()
      .then(response =>{
        this.setState({
          loggedInUser:  response,
          loading: false
        }) 
      })
      .catch( err =>{
        this.setState({
          loggedInUser:  false,
          loading: false
        }) 
      })
    }
  }
 
  getTheUser= (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }
 
  render() {
    this.fetchUser()

    if(this.state.loading) {
      return <p>loading</p>
    }
    if(this.state.loggedInUser){
      return (
        <div className="App">
          welcome loggedin user {this.state.loggedInUser.username}
          <img src={`http://localhost:4000/uploads/${this.state.loggedInUser.image}`} alt="user"/>
         
          {JSON.stringify(this.state.loggedInUser)}
          {/* // <Navbar userInSession={this.state.loggedInUser} /> */}
          <Switch>
          <Route exact path='/edit' render={() => <Edit getUser={this.getTheUser}/>}/>

            {/* <Route exact path="/projects" component={ProjectList}/>
            <Route exact path="/projects/:id" component={ProjectDetails} /> */}
          </Switch>
        </div>
      );
    } else {
      return (
        <div className="App">
          {/* // <Navbar userInSession={this.state.loggedInUser} /> */}
          <Switch>
            <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser}/>}/>
            <Route path='/' render={() => <Login getUser={this.getTheUser}/>}/>

            {/* <Route exact path="/projects" component={ProjectList}/>
            <Route exact path="/projects/:id" component={ProjectDetails} /> */}
          </Switch>
        </div>
      );
    }
  }
}
export default App;
