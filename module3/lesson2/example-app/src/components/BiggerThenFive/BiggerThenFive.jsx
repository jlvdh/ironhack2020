import React from 'react'

export default function BiggerThenFive(props) {
  return (
    <div>
      {props.number > 5 ? 'It\'s bigger then five' : 'not bigger then five'}
    </div>
  )
}
