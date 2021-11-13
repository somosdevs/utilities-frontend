import Link from 'next/link'
import { useRouter } from 'next/router'

export default function SidebarLink ({ icon, title, url }) {
  const router = useRouter()
  const { pathname } = router
  return (
    <li className="h-12 w-full mb-2 text-base">
      <Link href={url}>
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
          ${pathname === url ? 'bg-custLight-primary text-cust-blue font-bold' : ''}`}
        >
          {icon} <span className="pl-4 hidden md:inline">{title}</span>
        </a>
      </Link>
    </li>
  )
}
