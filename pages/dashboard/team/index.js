import useAuth from 'hooks/useAuth'
import ProfileCard from 'components/_dashboard/team/ProfileCard'
import { fetchUrl } from 'utils/fetchUrl'

export async function getServerSideProps () {
  const data = await fetchUrl(`${process.env.NEXT_PUBLIC_BASE_URL}/api/team`)

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
  useAuth()

  return (
    <>
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
