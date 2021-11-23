import Image from 'next/image'
import ExternalLink from 'components/Icons/ExternalLink'

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
          <h5 className="">{discord}</h5>
          <div className="overflow-y-auto h-36 mt-5 text-sm">
            {socialMedia.map((network) => (
              <a
                key={network.name}
                href={network.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between px-5 h-10 w-full mb-1 border border-black rounded text-center"
              >
                <span></span>
                <span>
                  {network.name}
                </span>
                <span>
                  <ExternalLink />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
