import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import NProgress from 'nprogress'
import AppLayout from 'layouts/AppLayout'
import { capitalize } from 'utils/capitalize'

import '../styles/globals.css'
import '../styles/nprogress.css'

function MyApp ({ Component, pageProps }) {
  const router = useRouter()
  const { pathname } = router

  // Progress Bar (NProgress)
  useEffect(() => {
    const handleStart = (url) => {
      NProgress.start()
    }

    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  // All /dashboard routes
  if (pathname.includes('/dashboard')) {
    const pageName = pathname.slice(11)
    return (
      <>
        <Head>
          <title>{capitalize(pageName)}</title>
        </Head>
        <AppLayout pageName={capitalize(pageName)}>
          <Component {...pageProps} />
        </AppLayout>
      </>
    )
  }

  return <Component {...pageProps} />
}

export default MyApp
