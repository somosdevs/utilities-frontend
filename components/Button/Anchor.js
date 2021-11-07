import ExternalLink from 'components/Icons/ExternalLink'

export default function Anchor ({
  children,
  href,
  justify,
  height,
  width,
  padding,
  color,
  colorHover,
  background,
  rounded,
  external = false,
  styles
}) {
  return (
      <a
        href={href}
        target={external && '_blank'}
        rel={external && 'noreferrer'}
        className={`flex items-center ${justify ?? 'justify-around'} ${height ?? 'h-8'} ${width ?? 'w-24'} ${padding ?? 'p-1'} ${rounded ?? 'rounded-sm'} ${background ?? 'bg-cust-primary'} ${color ?? 'text-white'} ${colorHover ?? 'hover:text-cust-blue'} ${styles}`}
      >
        {external && <span></span>}
        {children}
        {external && <ExternalLink />}
      </a>
  )
}
