import React, { Component } from 'react'
import UserService from '../../services/user-service'
import {Redirect} from 'react-router-dom'

export default class Edit extends Component {
    
    state = {
        job: '',
        service: new UserService(),
        isSubmitted: false
    }
    
    handleSubmit = (e) => {
    e.preventDefault();
    this.state.service
      .edit(this.state.job)
      .then(this.setState({isSubmitted: true}));
  };

    handleInput = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };
  
  render() {
      if (this.state.isSubmitted) {
        return <Redirect to="/profile" />
      }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <label name="job">Job </label>
            <input type="text"
                   value={this.state.job}
                   name="job"
                   onChange={(e) => this.handleInput(e)}
            />
            <input type="submit" value="Submit"></input>
        </form>
      </div>
    )
  }
}