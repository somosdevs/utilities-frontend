import useUser from 'hooks/useUser'
import Code from 'components/_dashboard/snippets/Code'

export default function Projects () {
  useUser()

  return (
    <>
      <section className="w-full">
        <Code />
      </section>
    </>
  )
}
