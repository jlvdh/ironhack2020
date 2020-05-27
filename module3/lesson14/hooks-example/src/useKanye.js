import { useState, useEffect } from 'react'

export default function useKanye(counter) {
  const [quote, setQuote] = useState('')
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch(`http://api.kanye.rest/`)
      .then(res => res.json())
      .then(quote => {
        setLoading(false)
        console.log(quote)
        setQuote(quote.quote)
      })
    console.log('use effect')
  }, [counter])

  return {
    quote,
    loading
  }
}
