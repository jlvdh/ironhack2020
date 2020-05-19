import React, { Component } from 'react'
import UserService from '../../services/user-service';
import {Redirect} from 'react-router-dom'

export default class AddProfileImage extends Component {
    state = {
        service: new UserService()
    }

    handleFileUpload = (e) => {
      // this.setState({uploading: true})
      const formData = new FormData()
      formData.append("profileimage", e.target.files[0])
      this.state.service.addProfileImage(formData)
        .then(() => {
          // this.setState({
          //   uploadComplete: true
          // })
          this.props.history.push('/')
          // this.setState({uploading: false})
        })
    }

  render() {

    // if(this.state.uploadComplete) {
    //   return <Redirect to="/" />
    // }

    return (
      <form>
        <input type="file" name="profileimage" onChange={(e => this.handleFileUpload(e))}/>
      </form>
    )
  }
}
