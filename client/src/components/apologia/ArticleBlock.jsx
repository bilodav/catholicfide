import { resolveMediaSrc } from "../../content/apologia";

function resolveCitation(citations, citationId) {
  if (!citations || !citationId) return null;
  return citations.citations.find((c) => c.id === citationId) ?? null;
}

function ArticleBlock({ block, citations, dir }) {
  switch (block.type) {
    case "paragraph":
      return <p className="article-paragraph">{block.text}</p>;

    case "heading":
      return <h5 className="article-heading">{block.text}</h5>;

    case "scripture": {
      const cite = resolveCitation(citations, block.citation_id);
      if (!cite) return null;
      return (
        <blockquote className="article-scripture">
          <p className="scripture-text">&ldquo;{cite.text}&rdquo;</p>
          <cite className="scripture-reference">
            {cite.reference} ({cite.translation})
          </cite>
          {block.commentary && (
            <p className="scripture-commentary">{block.commentary}</p>
          )}
        </blockquote>
      );
    }

    case "image": {
      const cite = resolveCitation(citations, block.citation_id);
      if (!cite) return null;
      const src = resolveMediaSrc(dir, cite.src);
      if (!src) return null; // could swap in a fallback placeholder image
      return (
        <figure className="article-image">
          <img src={src} alt={cite.title || ""} />
          {(block.caption || cite.title) && (
            <figcaption>{block.caption || cite.title}</figcaption>
          )}
        </figure>
      );
    }

    case "video": {
      const cite = resolveCitation(citations, block.citation_id);
      if (!cite) return null;

      return (
        <div className="article-video">
          <p className="video-title">{block.title || cite.title}</p>
          {cite.provider === "YouTube" && cite.videoId ? (
            <div className="video-embed">
              <iframe
                src={`https://www.youtube.com/embed/${cite.videoId}`}
                title={block.title || cite.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ) : (
            <a href={cite.url} target="_blank" rel="noreferrer">
              Watch on {cite.provider}
            </a>
          )}
        </div>
      );
    }

    case "callout":
      return (
        <div className={`article-callout callout-${block.style || "info"}`}>
          {block.title && <p className="callout-title">{block.title}</p>}
          <p className="callout-text">{block.text}</p>
        </div>
      );

    case "timeline":
      return (
        <ol className="article-timeline">
          {block.events.map((ev, i) => (
            <li key={i} className="timeline-event">
              <span className="timeline-date">{ev.date}</span>
              <span className="timeline-title">{ev.title}</span>
            </li>
          ))}
        </ol>
      );

    case "church-father": {
      const cite = resolveCitation(citations, block.citation_id);
      if (!cite) return null;
      return (
        <blockquote className="article-church-father">
          <p className="father-quote">&ldquo;{cite.quote}&rdquo;</p>
          <cite className="father-attribution">
            {cite.author}, {cite.work}
            {cite.chapter ? ` ${cite.chapter}` : ""}
          </cite>
        </blockquote>
      );
    }

    case "catechism": {
      const cite = resolveCitation(citations, block.citation_id);
      if (!cite) return null;
      return (
        <blockquote className="article-catechism">
          <p className="catechism-text">{cite.text}</p>
          <cite className="catechism-reference">CCC {cite.paragraph}</cite>
        </blockquote>
      );
    }

    case "philosophical-citation": {
      const cite = resolveCitation(citations, block.citation_id);
      if (!cite) return null;
      return (
        <div className="article-philosophy-citation">
          <p className="philosophy-source">
            {cite.author}, <em>{cite.work}</em>
          </p>
          {(block.note || cite.note) && (
            <p className="philosophy-note">{block.note || cite.note}</p>
          )}
        </div>
      );
    }

    case "objection":
      return (
        <div className="article-objection">
          <p className="objection-title">{block.title}</p>
          <p className="objection-steelman">
            <strong className="bold-500">The objection: </strong>
            {block.steelman}
          </p>
          <p className="objection-response">
            <strong className="bold-500">Response: </strong>
            {block.response}
          </p>
        </div>
      );

    case "bullet-list":
      return (
        <ul className="article-bullet-list">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );

    case "faq":
      return (
        <div className="article-faq-item">
          <p className="faq-question">{block.question}</p>
          <p className="faq-answer">{block.answer}</p>
        </div>
      );

    default:
      return null;
  }
}

export default ArticleBlock;
