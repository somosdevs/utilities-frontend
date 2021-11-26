import { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/client'
import { useRouter } from 'next/router'

export default function useAuth () {
  const [initialized, setInitialized] = useState('idle') // idle, not_logged, logged
  const [user, setUser] = useState({})
  const router = useRouter()

  useEffect(() => {
    onAuthStateChanged((user) => {
      setUser(user)
      setInitialized('logged')
    })
  }, [])

  useEffect(() => {
    initialized === 'not_logged' && router.push('/')
  }, [user])

  return {
    initialized,
    user
  }
}
