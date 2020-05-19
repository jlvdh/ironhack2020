import React from 'react'

export default function Profile(props) {
  return (
    <div>
      {props.user.username}
      <img src={`http://localhost:4000/uploads/${props.user.profileimage}`} alt="user pic"/>
    </div>
  )
}
