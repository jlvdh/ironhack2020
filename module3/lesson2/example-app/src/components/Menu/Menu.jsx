import React from 'react'

// const ingredients = {
//   vegetable: 'cauliflower',
//   meat: 'Tenderloin',
//   sauce: 'BBQ'
// }

export default function Menu(props) {
  return (
    <ul>
      <li>{props.vegetable}</li>
      <li>{props.meat}</li>
      <li>{props.sauce}</li>
    </ul>
  )
}
