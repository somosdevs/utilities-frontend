import Image from 'next/image'

export default function ProjectCard ({
  name = '',
  preview = '',
  languages = [],
  link = '',
  repoUrl = ''
}) {
  return (
    <article className="bg-custLight-primary h-80 w-64 rounded-xl overflow-hidden group">
      <div className="relative h-44 w-full">
        {
          preview
            ? <Image
            src={preview}
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
          <div className="overflow-y-auto h-36 mt-5 text-sm">
            {languages.map((lang) => (
              <p
                key={lang}
                className="px-5 h-10 w-full mb-1 border border-black rounded text-center"
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
