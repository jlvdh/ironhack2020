import React, { useState } from 'react'

export default function Form() {
  const [name, setName] = useState('')

  return (
    <form>
      username
      <input type="text" name="" value={name} onChange={(e) => setName(e.target.value)} id=""/>
    </form>
  )
}
