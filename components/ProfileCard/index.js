import Image from 'next/image'
import CheckIcon from 'components/CheckIcon'

export default function ProfileCard ({
  name = '',
  discord = '',
  avatar = '',
  socialMedia = []
}) {
  return (
    <article className="bg-custLight-primary h-[410px] w-64 rounded-xl overflow-hidden group">
      <div className="relative h-52 w-full">
        {
          avatar
            ? <Image
              src={avatar}
              alt={name}
              layout="fill"
              objectFit="cover"
              className="object-center transition-transform duration-300 group-hover:scale-110"
            />
            : <span className="square_loading"></span>
        }
      </div>
      <div className="flex flex-col h-full p-3 max-h-[210px]">
        <div className="flex-auto">
          <h3 className="text-xl font-bold">{name}</h3>
          <h5>{discord}</h5>
          <div className="h-24 mt-5 text-sm">
            {socialMedia.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className=""
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
