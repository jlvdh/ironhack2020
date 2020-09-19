import React, { Component } from 'react'
import AuthService from '../../services/auth-service'

export default class Edit extends Component {

  state = {
    job: '',
    authService: new AuthService()
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.state.authService.editProfile({
      job: this.state.job
    })
    .then(() => {
      this.setState({job: ''})
    })
  }

  handleFileUpload = e => {
    const uploadData = new FormData();
    uploadData.append("profileimage", e.target.files[0]);
    this.state.authService.addProfileImage(uploadData)
  }

  render() {
    return (
      <div>
        job
        <form onSubmit={this.handleFormSubmit}>
        <input type="text" name="job" value={this.state.job} onChange={(e) => this.handleChange(e)}/>
        <input type="file" name="profileimage" id="" onChange={(e) => this.handleFileUpload(e)}/>
        <input type="submit" value="submit"/>

        </form>

      </div>
    )
  }
}
