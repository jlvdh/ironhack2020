import React from 'react'
import './Box.css'

export default function Box(props) {
  return (
    <div className="box">
  {props.children}
   </div>
  )
}