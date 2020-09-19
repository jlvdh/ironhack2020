import React, {useState} from 'react'

export default function Counter(props) {
  const {counter, setCounter} = props
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}> {counter}</button>
    </div>
  )
}
