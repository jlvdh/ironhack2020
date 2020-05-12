import React, { Component } from 'react'

export default class Two extends Component {

  state = {
    quote: ''
  }

  componentDidMount() {
    fetch('https://api.kanye.rest/')
      .then(res => res.json())
      .then(result => {
        console.log(result)
        this.setState({quote: result.quote})
      })
      .catch(e => console.log(e))
  }

  componentWillUnmount() {
    console.log('Two.js - component will unmount')
  }

  render() {
    return (
      <div>
        It's Two <br></br>
        {this.state.quote === '' ? 'Kanye Rest loading' : this.state.quote}
      </div>
    )
  }
}
