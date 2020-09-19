import React, { Component } from 'react'
import queryString from 'query-string'

export default class ClassComp extends Component {
  values = queryString.parse(this.props.location.search)

  render() {
     

    return (
      <div>
        {this.values.search}
      </div>
    )
  }
}
