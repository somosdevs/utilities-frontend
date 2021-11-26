import useUser from 'hooks/useUser'
import useFetch from 'hooks/useFetch'
import ProjectCard from 'components/_dashboard/projects/ProjectCard'

export default function Projects () {
  useUser()
  const { data: projects, status } = useFetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`)

  return (
    <>
      { status === 'rejected' && 'An error has ocurred' }
      <section className="flex flex-wrap gap-6">
        {
          status === 'pending' && <ProjectCard loading />
        }
        {
          status === 'resolved' &&
          projects.map(project => <ProjectCard key={project.id} {...project} />)
        }
      </section>
    </>
  )
}
