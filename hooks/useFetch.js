import { useEffect, useState } from 'react'

export default function useFetch (url) {
  const [data, setData] = useState([])
  const [status, setStatus] = useState('pending') // 'pending', 'resolved', 'rejected'

  useEffect(() => {
    try {
      fetch(url)
        .then(response => response.json())
        .then(response => {
          if (!response.ok) return setStatus('rejected')
          setStatus('resolved')
          setData(response)
        })
    } catch (error) {
      setStatus('rejected')
    }
  }, [])

  return {
    data,
    status
  }
}
