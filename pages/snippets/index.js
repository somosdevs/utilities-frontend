import Head from 'next/head'
import useUser from 'hooks/useUser'
import AppLayout from 'layout/AppLayout'

export default function Projects () {
  useUser()

  return (
    <>
      <Head>
        <title>UtilitiesX - Snippets</title>
      </Head>
      <AppLayout pageName="Snippets">
        <section></section>
      </AppLayout>
    </>
  )
}
