import Reveal from '../Reveal/Reveal';

function ProjectListing({ project }) {
  const { listing, slug, title } = project;
  const headingId = `${slug}-detail-heading`;
  const techHeadingId = `${slug}-tech-heading`;

  return (
    <article
      className="section listings project-detail"
      aria-labelledby={headingId}
    >
      <Reveal as="h1" id={headingId} direction="left" delay={60}>
        {listing.heading}
      </Reveal>
      <div className="listing-grid">
        <Reveal direction="left" delay={140}>
          <div className="description">
            {listing.paragraphs?.map((text, index) => {
              const isLast = index === listing.paragraphs.length - 1;
              return (
                <p key={text}>
                  {text}
                  {isLast && listing.appLink && (
                    <>
                      {' '}
                      <a
                        target="_blank"
                        className="app-link"
                        href={listing.appLink.href}
                        rel="noopener noreferrer"
                        aria-label={`Open ${title} app (opens in a new tab)`}
                      >
                        {listing.appLink.label}
                        <span className="visually-hidden">
                          {' '}
                          for {title} (opens in a new tab)
                        </span>
                      </a>
                    </>
                  )}
                </p>
              );
            })}
            <hr aria-hidden="true" />
            <h2 className="tech-heading" id={techHeadingId}>
              {listing.techStackHeading || 'Tech Stack'}
            </h2>
            {listing.techStack && (
              <p aria-labelledby={techHeadingId}>{listing.techStack}</p>
            )}
            {listing.techDetails?.map((detail) => (
              <p key={detail}>{detail}</p>
            ))}
          </div>
        </Reveal>
        <Reveal direction="right" delay={220}>
          {listing.media.type === 'video' ? (
            <figure className="video-box">
              <figcaption className="figure-caption">
                {listing.media.caption}
              </figcaption>
              <div className="media-frame">
                <video
                  aria-label={`${title} ${listing.media.alt || 'demo video'}`}
                  controls
                  preload="none"
                  playsInline
                >
                  <source src={listing.media.src} type="video/mp4" />
                </video>
              </div>
            </figure>
          ) : (
            <div className="media-frame">
              <img
                src={listing.media.src}
                alt={listing.media.alt}
                loading="lazy"
                decoding="async"
              />
            </div>
          )}
        </Reveal>
      </div>
    </article>
  );
}

export default ProjectListing;
