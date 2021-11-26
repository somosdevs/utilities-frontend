import useAuth from 'hooks/useAuth'
import Code from 'components/_dashboard/snippets/Code'

export default function Projects () {
  useAuth()

  return (
    <>
      <section className="w-full">
        <Code />
      </section>
    </>
  )
}
