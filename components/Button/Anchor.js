/* eslint-disable react/jsx-no-target-blank */
import ExternalLink from 'components/Icons/ExternalLink'

export default function Anchor ({
  children,
  href,
  disable,
  justify,
  height,
  width,
  padding,
  color,
  colorHover,
  background,
  bgHover,
  rounded,
  outlineColor,
  external = false,
  outlined = false,
  styles
}) {
  return (
      <a
        href={href}
        target={external ? '_blank' : ''}
        rel={external ? 'noreferrer' : ''}
        className={`
          flex
          items-center
          transition
          duration-300
          ${disable && 'opacity-20 pointer-events-none'}
          ${justify ?? 'justify-around'}
          ${height ?? 'h-8'}
          ${width ?? 'w-24'}
          ${padding ?? 'p-1'}
          ${rounded ?? 'rounded-sm'}
          ${outlined && 'border'}
          ${outlined
            ? outlineColor ?? 'border-cust-primary'
            : background ?? 'bg-cust-primary'
          }
          ${color ?? (outlined ? 'text-cust-primary' : 'text-cust-white')}
          ${colorHover ? `hover:${colorHover}` : (outlined ? 'hover:text-white' : 'hover:text-cust-blue')}
          hover:${bgHover ?? (outlined ? 'bg-cust-primary' : 'opacity-80')}
          ${styles}
        `}
      >
        {external && <span></span>}
        {children}
        {external && <ExternalLink />}
      </a>
  )
}
