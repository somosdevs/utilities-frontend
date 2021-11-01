import Head from 'next/head'
import useUser from 'hooks/useUser'
import AppLayout from 'layout/AppLayout'

export default function Home () {
  useUser()

  return (
    <>
      <Head>
        <title>UtilitiesX - Home</title>
      </Head>
      <AppLayout pageName="Home"></AppLayout>
    </>
  )
}
