import React, { Component } from 'react'

export default class Comp extends Component {

  componentDidMount() {
    console.log('Comp did mount')
  }


  componentWillUnmount() {
    console.log('Comp unmount')
  }

  render() {
    console.log('comp render')
    return (
      <div>
        hello
      </div>
    )
  }
}
