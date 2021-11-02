import Image from 'next/image'

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

  console.log(preview)

  return (
    <article className="bg-custLight-primary h-80 w-64 rounded-xl overflow-hidden group">
      <div className="relative h-24 w-full">
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
        <div className="">
          <h3 className="text-xl font-bold">{name}</h3>
          <h5 className="text-base text-gray-600">{createDate}</h5>
          <div className="flex items-center gap-1 h-8 mt-2 mb-4 w-full text-center">
            <a href="#" className="w-full p-1 border border-black">Visitar</a>
            <a href="#" className="w-full p-1 border border-black">Repositorio</a>
          </div>
          <div className="overflow-y-auto h-20 text-xs">
            {languages.map((lang) => (
              <p
                key={lang}
                className="inline-block h-auto w-auto mx-1 mb-1 px-2 py-1 border border-black rounded text-center"
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
