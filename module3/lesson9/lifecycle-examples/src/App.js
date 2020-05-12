import React, { Component } from 'react'
import Two from './Two'

function someState() {
  console.log('App.js - constructor phase')
}

export default class App extends Component {
  state = {
    someState: someState(),
    count: 0
  }

  componentDidMount() {
    console.log('App.js - component did mount')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`App.js - component did update: ${prevState.count}`)
  }

  incrementCounter = () => {
    this.setState({count: this.state.count + 1})
  }

  render() {
    console.log('App.js - Render')
    return (
      <div>
        <button onClick={this.incrementCounter}>increment {this.state.count}</button>
    {this.state.count === 2 && <Two /> }
      </div>
    )
  }
}