import { useEffect, useState } from 'react'

function useKanye(counter) {
  const [quote, setQuote] = useState('')
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch('https://api.kanye.rest')
      .then(res => res.json())
      .then(data => {
        setQuote(data.quote)
        setLoading(false)
      })
}, [counter])
return {quote, loading}
}


export default useKanye