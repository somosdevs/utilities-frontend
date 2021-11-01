import Link from 'next/link'

export default function ErrorPage () {
  return (
    <div>
      404
      <Link href="/">
        <a>Go to a safe place</a>
      </Link>
    </div>
  )
}
