import Head from 'next/head'
import useUser from 'hooks/useUser'
import AppLayout from 'layout/AppLayout'
import ProfileCard from 'components/ProfileCard'

export async function getServerSideProps (context) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/team`)
  const data = await response.json()

  if (!data) {
    return {
      props: {
        status: 'rejected'
      }
    }
  }

  return {
    props: {
      status: 'resolved',
      data
    }
  }
}

export default function Home ({ status, data }) {
  useUser()

  return (
    <>
      <Head>
        <title>UtilitiesX - Team</title>
      </Head>
      <AppLayout pageName="Team">
        <section>
          {
            status === 'rejected' && 'An error has ocurred'
          }
          {
            status === 'resolved' &&
            data.map((member) => (
              <ProfileCard key={member.name} {...member} />
            ))
          }
        </section>
      </AppLayout>
      <style jsx>{`
        section {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }
      `}</style>
    </>
  )
}
