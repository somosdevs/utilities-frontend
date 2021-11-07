import Image from 'next/image'
import Skeleton from 'components/Skeleton'
import Anchor from 'components/Button/Anchor'

export default function ProjectCard ({
  loading = false,
  name = '',
  preview = '',
  languages = [],
  createdAt = { _seconds: 100000, _nanoseconds: 1 },
  link = '',
  repoUrl = ''
}) {
  const time = new Date((createdAt._seconds * 1000) + (createdAt._nanoseconds / 1000000))
  const createDate = time.toLocaleDateString()

  return (
    <article className="bg-custLight-primary h-80 w-64 rounded-xl overflow-hidden">
      <div className="relative h-24 w-full">
        {
          loading
            ? <Skeleton height="100%" />
            : preview
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
          <h3 className="h-[28px] mb-px text-xl font-bold">{
            loading
              ? <Skeleton rounded="4px" height="22px" />
              : name
          }</h3>
          <h5 className="h-[24px] text-base text-gray-600">{
            loading
              ? <Skeleton rounded="4px" height="16px" width="120px" />
              : createDate
          }</h5>
          <div className="flex items-center gap-1 h-8 mt-2 mb-4 w-full text-center">
            <Anchor href={link} width="w-full" disable={!link} rounded="rounded-lg" external>Link</Anchor>
            <Anchor href={repoUrl} width="w-full" disable={!repoUrl} rounded="rounded-lg" outlined external>Github</Anchor>
          </div>
          <div className="overflow-y-auto h-20 text-xs">
            {languages.map((lang) => (
              <p
                key={lang}
                className="
                  inline-block
                  h-auto
                  w-auto
                  mx-1
                  mb-1
                  px-2
                  py-[5px]
                  gradient__bg
                  text-center
                  font-bold

                  rounded-md
                  "
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
