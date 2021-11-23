import { Document, Edit, ExternalLink } from 'components/icons'

export default function Popover () {
  return (
    <div className="absolute z-10 top-[50px] -right-8 h-auto w-28 py-1 text-base text-center bg-white rounded-lg border shadow-md overflow-hidden">
      <ul>
        <li className="h-10 w-full border-b-2">
          <a href="#" className="flex items-center gap-2 px-3 h-full w-full hover:bg-gray-100">
            <Edit />
            <span>Profile</span>
          </a>
        </li>
        <li className="h-10 w-full">
          <a
            href="https://github.com/somosdevs/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-3 h-full w-full hover:bg-gray-100"
          >
            <Document />
            <span className="flex items-center gap-1">
              Docs
              <ExternalLink />
            </span>
          </a>
        </li>
      </ul>
    </div>
  )
}
