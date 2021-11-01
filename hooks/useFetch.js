import { useEffect, useState } from 'react'

export default function useFetch (url) {
  const [data, setData] = useState([])
  const [status, setStatus] = useState('pending') // 'pending', 'resolved', 'rejected'

  useEffect(() => {
    try {
      window.fetch(url)
        .then(response => {
          if (!response.ok) return setStatus('rejected')
          return response.json()
        })
        .then(response => {
          setStatus('resolved')
          return setData(response)
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
