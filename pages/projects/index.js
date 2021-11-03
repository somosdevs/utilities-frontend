import Head from 'next/head'
import useUser from 'hooks/useUser'
import AppLayout from 'layout/AppLayout'
import ProjectCard from 'components/ProjectCard'

export async function getServerSideProps (context) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`)
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
      projects: data
    }
  }
}

export default function Projects ({ status, projects }) {
  useUser()

  return (
    <>
      <Head>
        <title>UtilitiesX - Projects</title>
      </Head>
      <AppLayout pageName="Projects">
        { status === 'rejected' && 'An error has ocurred' }
        <section className="flex flex-wrap gap-6">
          {
            status === 'resolved' &&
            projects.map(project => <ProjectCard key={project.id} {...project} />)
          }
        </section>
      </AppLayout>
    </>
  )
}
