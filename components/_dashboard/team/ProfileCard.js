import Image from 'next/image'
import useAuth from 'hooks/useAuth'
import CheckIcon from 'components/CheckIcon'
import { Edit } from 'components/icons'

export default function ProfileCard ({
  name = '',
  discord = '',
  avatar = '',
  socialMedia = []
}) {
  const { user } = useAuth()

  return (
    <article className="relative bg-custLight-primary h-[320px] w-64 rounded-xl overflow-hidden group">
      <button
        className="absolute hidden items-center justify-center h-8 w-8 bg-cust-primary z-50 top-3 right-3 rounded-lg group-hover:flex"
        onClick={() => console.log('edit')}
      >
        {name === user?.username ? <Edit fill="#fca311" /> : ''}
      </button>
      <div className="relative h-48 w-full">
        {
          // eslint-disable-next-line no-extra-boolean-cast
          !!avatar
            ? <Image
              src={avatar}
              alt={name}
              layout="fill"
              objectFit="cover"
              className="object-center"
            />
            : <span className="square_loading"></span>
        }
      </div>
      <div className="flex flex-col h-full p-3 max-h-[210px]">
        <div className="flex-auto">
          <h3 className="text-xl font-bold">{name}</h3>
          <h5 className="opacity-80">{discord}</h5>
          <div className="flex items-center justify-end gap-3 mt-5 pr-4 text-sm">
            {socialMedia.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="inline-block text-xl hover:opacity-60"
              >
                <CheckIcon incomingIcon={link.name.toLowerCase()} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
