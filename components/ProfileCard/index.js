import Image from "next/image";

export default function ProfielCard({
  name = "",
  discord = "",
  avatar = "",
  socialMedia = [],
  technologies = [],
}) {
  return (
    <>
      <article>
        <div className="avatar">
          {
            avatar ? 
            <Image
              src={avatar }
              alt={name}
              width="50px"
              height="50px"
              className="image__rounded"
            />
            :
            <span className="square_loading"></span>
          }
        </div>
        <div className="info">
          <h2>{name}</h2>
          <h5>{discord}</h5>
          <div className="technologies">
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
      </article>

      <style jsx>{`
        article {
          width: 260px;
          height: 260px;
          margin: 10px;
          padding: 20px 35px;
          border-radius: 15px;
          background-color: var(--light);
        }

        div.avatar {
          padding-bottom: 15px;
        }

        span.square_loading {
          display: blocK;
          height: 50px;
          width: 50px;
          background-color: #b3b3b3;
          border-radius: 9999px;
        }

        div.info {
          height: 130px;
        }

        div.info h5 {
          opacity: 0.6;
          font-size: 1.4rem;
          font-weight: 300;
          padding: 2px 0 15px;
        }

        div.info h2 {
          font-size: 2rem;
        }

        div.info div.technologies {
          display: flex;
          flex-wrap: wrap;
          max-height: 50%;
          overflow: auto;
        }

        div.info div.technologies span {
          margin: 2px;
          padding: 4px 5px;
          border: 1px solid var(--primary);
          border-radius: 9999px;
          font-size: 1rem;
          font-weight: bold;
          color: var(--primary);
        }

        div.social_media a {
          margin: 0 10px 0 0;
          font-size: 1.4rem;
          color: var(--primary);
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}
