import React, { Component } from 'react'
import Comp from './Comp'
import FuncComp from './FuncComp'

console.log('init')
const someFunction = () => {
  console.log('constructor phase')
}
export default class App extends Component {
  state = {
    hello: someFunction(),
    stateProp: true
  }
  componentDidMount() {
    console.log('component did mount')
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(snapshot)
    console.log('update from %s to %s', prevState.stateProp, this.state.stateProp)
  }

  sayHello = () => {
    this.setState({stateProp: !this.state.stateProp})
  }


  render() {
    console.log('rendering')
    return (
      <div>
        {this.state.stateProp && <Comp />}
        <FuncComp status={this.state.stateProp} />
        <button onClick={this.sayHello}>say hello</button>
      </div>
    )
  }
}
