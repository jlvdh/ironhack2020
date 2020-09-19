import React, {useEffect, useState} from 'react'
import useKanye from './useKanye'

export default function Kanye(props) {

  const [quote, setQuote] = useState('')

  console.log('render')
  useEffect(() => {
      fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(data => {
          setQuote(data.quote)
        })
  }, [props.counter])

  const {quote: quote2, loading } = useKanye(props.counter)

  if(loading) {
    return <p>loading</p>
  }
  return (
    <>
    <div>
      <em>{quote}</em> 
    </div>
    <div>
      <em>{quote2}</em>
    </div>
    </>
  )
}
