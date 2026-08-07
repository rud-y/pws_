import Reveal from '../Reveal/Reveal';

function ProjectListing({ project }) {
  const { listing } = project;

  return (
    <section className="section listings project-detail" aria-label={listing.ariaLabel}>
      <Reveal as="h1" direction="left" delay={60}>
        <strong>{listing.heading}</strong>
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
                      >
                        {listing.appLink.label}
                      </a>
                    </>
                  )}
                </p>
              );
            })}
            <hr />
            <h6>{listing.techStackHeading || 'Tech Stack'}</h6>
            {listing.techStack && <p>{listing.techStack}</p>}
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
                  aria-label={listing.media.alt}
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
    </section>
  );
}

export default ProjectListing;
