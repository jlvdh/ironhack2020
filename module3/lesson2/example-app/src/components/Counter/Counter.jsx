import React, { Component } from 'react'
import BiggerThenFive from '../BiggerThenFive/BiggerThenFive'

export default class Counter extends Component {
  state = {
    counter: 1
  }

  addOne = () => {
    this.setState({
      counter: this.state.counter +1
    })
  }

  render() {
    return (
      <React.Fragment>
      <div>
        {this.state.counter}
      </div>
      <BiggerThenFive number={this.state.counter} />
      <button onClick={this.addOne}>add one</button>

      </React.Fragment>
    )
  }
}
