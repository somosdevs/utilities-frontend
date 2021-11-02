import Head from 'next/head'
import useUser from 'hooks/useUser'
import AppLayout from 'layout/AppLayout'
import useFetch from 'hooks/useFetch'
import ProjectCard from 'components/ProjectCard'

export default function Projects () {
  useUser()
  const { data: projects, status } = useFetch('/api/projects')

  return (
    <>
      <Head>
        <title>UtilitiesX - Projects</title>
      </Head>
      <AppLayout pageName="Projects">
        { status === 'pending' && 'Loading...' }
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
