import React, { useEffect, useState } from 'react'
import useKanye from './useKanye'

export default function Kanye(props) {
  const { counter } = props

  const { quote, loading } = useKanye(counter)
  // const [quote, setQuote] = useState('')

  // useEffect(() => {
  //   fetch(`http://api.kanye.rest/`)
  //     .then(res => res.json())
  //     .then(quote => {
  //       console.log(quote)
  //       setQuote(quote.quote)
  //     })
  //   console.log('use effect')
  // }, [counter])

  // console.log('render')

  if (loading) {
    return <p>quote is loading</p>
  }
  return (
    <div>
      {quote}
    </div>
  )
}
