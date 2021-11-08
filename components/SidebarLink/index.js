import Link from 'next/link'
import { useRouter } from 'next/router'

export default function SidebarLink ({ link }) {
  const router = useRouter()
  const { pathname } = router
  return (
    <li className="h-12 w-full mb-2 text-base">
      <Link href={link.url}>
        <a className={`
          flex
          items-center
          justify-center
          md:justify-start
          h-full
          mx-3
          md:px-6
          rounded-lg
          hover:bg-custLight-primary
          ${pathname === link.url ? 'bg-custLight-primary text-cust-blue font-bold' : ''}`}
        >
          {link.icon} <span className="pl-4 hidden md:inline">{link.title}</span>
        </a>
      </Link>
    </li>
  )
}
