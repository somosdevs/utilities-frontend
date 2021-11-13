import Head from 'next/head'
import useUser from 'hooks/useUser'
import AppLayout from 'layouts/AppLayout'
import Code from 'components/Snippets/Code'

export default function Projects () {
  useUser()

  return (
    <>
      <Head>
        <title>UtilitiesX - Snippets</title>
      </Head>
      <AppLayout pageName="Snippets">
        <section className="w-full">
          <Code />
        </section>
      </AppLayout>
    </>
  )
}
