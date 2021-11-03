import Image from 'next/image'
import ExternalLink from 'components/Icons/ExternalLink'

export default function ProjectCard ({
  id,
  name = '',
  preview = '',
  languages = [],
  createdAt,
  link = '',
  repoUrl = ''
}) {
  const time = new Date((createdAt._seconds * 1000) + (createdAt._nanoseconds / 1000000))
  const createDate = time.toLocaleDateString()

  return (
    <article className="bg-custLight-primary h-80 w-64 rounded-xl overflow-hidden">
      <div className="relative h-24 w-full">
        {
          preview
            ? <Image
                src={preview}
                alt={name}
                layout="fill"
                objectFit="cover"
                className="bg-black object-center"
              />
            : <div className="h-full bg-cust-primary"></div>
        }
      </div>
      <div className="flex flex-col h-full p-3 max-h-[210px]">
        <div className="">
          <h3 className="text-xl font-bold">{name}</h3>
          <h5 className="text-base text-gray-600">{createDate}</h5>
          <div className="flex items-center gap-1 h-8 mt-2 mb-4 w-full text-center">
          <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className={`
                flex 
                items-center 
                justify-around 
                w-full 
                p-1
                bg-cust-primary
                border
                border-cust-primary
                text-white
                rounded-lg
                transition
                duration-300
                hover:opacity-80
                hover:text-cust-blue
                ${link ? '' : 'opacity-40 pointer-events-none'}
              `}
            >
              <span></span>
              Link
              {link ? <ExternalLink /> : <span></span>}
            </a>
            <a
              href={repoUrl}
              target="_blank"
              rel="noreferrer"
              className={`
                flex 
                items-center 
                justify-around 
                w-full 
                p-1 
                border 
                border-cust-primary
                rounded-lg
                transition
                duration-300
                hover:bg-cust-primary
                hover:text-cust-blue
                ${repoUrl ? '' : 'opacity-60 pointer-events-none'}
              `}
            >
              <span></span>
              Github
              {link ? <ExternalLink /> : <span></span>}
            </a>
          </div>
          <div className="overflow-y-auto h-20 text-xs">
            {languages.map((lang) => (
              <p
                key={lang}
                className="inline-block h-auto w-auto mx-1 mb-1 px-2 py-[3px] border border-black rounded-sm text-center"
              >
                {lang}
              </p>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
