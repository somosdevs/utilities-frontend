import { Github, Link, Twitter } from 'components/icons'

const ICONS = {
  github: <Github />,
  link: <Link />,
  twitter: <Twitter />
}

export default function CheckIcon ({ incomingIcon = 'link' }) {
  return (
    <span>
      {ICONS[incomingIcon] || <Link />}
    </span>
  )
}
