import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function AnotherComponent(props) {
  return (
    <div>
      {props.match.params.gangsters}
      {props.location.search}
    </div>
  )
}
