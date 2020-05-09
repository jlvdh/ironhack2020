import React from 'react'
import queryString from 'query-string'

export default function Wiggles(props) {
  const values = queryString.parse(props.location.search)
  console.log(values)
  return (
    <div>
      <h1>{props.match.params.catname}</h1>
      {values.birthday && <p>happy birthday</p>}
      <img src='http://placekitten.com/500/500' alt="cats" />
    </div>
  )
}
