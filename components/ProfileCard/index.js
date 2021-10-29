import Image from "next/image";

export default function ProfileCard({
  name = "",
  discord = "",
  avatar = "",
  socialMedia = [],
  technologies = [],
}) {
  return (
    <article className="bg-custLight-primary h-96 w-64 rounded-xl overflow-hidden">
      <div className="relative h-44 w-full">
        {
          avatar ? 
          <Image
            src={avatar }
            alt={name}
            layout="fill"
            objectFit="cover"
            className="object-center"
          />
          :
          <span className="square_loading"></span>
        }
      </div>
      <div className="flex flex-col h-full p-3 max-h-[210px]">
        <div className="flex-auto">
          <h3 className="text-xl font-bold">{name}</h3>
          <h5 className="">{discord}</h5>
          <div className="overflow-hidden">
            {technologies.map((lang) => (
              <span key={lang}>{lang}</span>
            ))}
          </div>
        </div>
        <div className="social_media">
          {socialMedia.map((network) => (
            <a
              key={network.name}
              href={network.url}
              target="_blank"
              rel="noreferrer"
            >
              {network.name}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
