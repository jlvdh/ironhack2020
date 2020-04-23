import React from 'react'

import './App.css'
import NavBar from '../Navbar/NavBar'

const someText = <h1>this page is not about cats</h1>

const number = 8 * 40

export default function App() {
  return (
    <div className='container'>
      <NavBar />
      {someText}
      welcome class {8*30}
    </div>
  )
}
