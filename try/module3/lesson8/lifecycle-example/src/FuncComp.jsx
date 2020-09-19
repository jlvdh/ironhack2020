import React from 'react'

console.log('outside function')

export default function FuncComp(props) {
  console.log('FuncComp render')
  return (
    <div>
      hello {props.status}
    </div>
  )
}
