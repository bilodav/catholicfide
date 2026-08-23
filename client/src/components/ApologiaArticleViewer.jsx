import { useState, useEffect, useMemo } from "react";
import { useLocation, useParams } from "react-router-dom";

const metaModules = import.meta.glob(
  "../assets/data/apologia/articles/**/meta.json",
  { eager: true },
);
const contentModules = import.meta.glob(
  "../assets/data/apologia/articles/**/content.json",
  { eager: true },
);
const citationsModules = import.meta.glob(
  "../assets/data/apologia/articles/**/citations.json",
  { eager: true },
);

function dirOf(path) {
  return path.substring(0, path.lastIndexOf("/"));
}

function indexByDir(modules) {
  const map = {};
  for (const path in modules) {
    map[dirOf(path)] = modules[path].default;
  }
  return map;
}

const contentByDir = indexByDir(contentModules);
const citationsByDir = indexByDir(citationsModules);

const ARTICLES = Object.entries(metaModules).map(([path, m]) => {
  const dir = dirOf(path);
  return {
    ...m.default,
    content: contentByDir[dir] ?? null,
    citations: citationsByDir[dir] ?? null,
  };
});

function formatLabel(slug) {
  return slug
    .split("-")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");
}

function resolveCitation(citations, citationId) {
  if (!citations || !citationId) return null;
  return citations.citations.find((c) => c.id === citationId) ?? null;
}

const VIEW_LABELS = {
  short: "Short answer",
  long: "Full article",
};

function ApologiaArticleViewer() {
  const { themeId } = useParams();
  const { state } = useLocation();

  const [selectedSecondary, setSelectedSecondary] = useState("all");
  const [selectedTertiary, setSelectedTertiary] = useState("all");
  const [currPrayer, setCurrPrayer] = useState(null);
  const [articleView, setArticleView] = useState("short");
  const [displayExtraInfo, setDisplayExtraInfo] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setSelectedSecondary("all");
    setSelectedTertiary("all");
    setCurrPrayer(null);
  }, [themeId]);

  const articlesInTheme = useMemo(
    () => ARTICLES.filter((a) => a.primary_category === themeId),
    [themeId],
  );

  const secondaryCategories = useMemo(() => {
    const seen = new Set();
    return articlesInTheme
      .map((a) => a.secondary_category)
      .filter((c) => c && !seen.has(c) && seen.add(c));
  }, [articlesInTheme]);

  const articlesInSecondary = useMemo(() => {
    if (selectedSecondary === "all") return articlesInTheme;
    return articlesInTheme.filter(
      (a) => a.secondary_category === selectedSecondary,
    );
  }, [articlesInTheme, selectedSecondary]);

  const tertiaryCategories = useMemo(() => {
    const seen = new Set();
    return articlesInSecondary
      .map((a) => a.tertiary_category)
      .filter((c) => c && !seen.has(c) && seen.add(c));
  }, [articlesInSecondary]);

  const hasTertiary = tertiaryCategories.length > 0;

  const articlesInTertiary = useMemo(() => {
    if (!hasTertiary || selectedTertiary === "all") return articlesInSecondary;
    return articlesInSecondary.filter(
      (a) => a.tertiary_category === selectedTertiary,
    );
  }, [articlesInSecondary, hasTertiary, selectedTertiary]);

  const prayerList = useMemo(() => {
    const text = searchText.toLowerCase();
    if (!text) return articlesInTertiary;
    return articlesInTertiary.filter(
      (a) =>
        a.title?.toLowerCase().includes(text) ||
        a.description?.toLowerCase().includes(text) ||
        a.id?.toLowerCase().includes(text),
    );
  }, [articlesInTertiary, searchText]);

  function handleSecondaryChange(e) {
    setSelectedSecondary(e.target.value);
    setSelectedTertiary("all");
  }

  function handleTertiaryChange(e) {
    setSelectedTertiary(e.target.value);
  }

  function handlePrayerClick(id) {
    setCurrPrayer(ARTICLES.find((a) => a.id === id));
    setArticleView("short");
  }

  function handleDisplayExtraInfo(e) {
    setDisplayExtraInfo(e.target.value === "true");
  }

  return (
    <section className="prayers">
      <div className="artcle-banner">{state.theme.title}</div>

      <div className="apologia-filter-banner">
        {secondaryCategories.length > 0 && (
          <nav className="apologia-breadcrumb" aria-label="Category filters">
            <span className="crumb-root">{state.theme.title}</span>
            <span className="crumb-sep">✦</span>
            <div className="crumb-select-wrap">
              <select
                className="crumb-select"
                value={selectedSecondary}
                onChange={handleSecondaryChange}
              >
                <option value="all">All</option>
                {secondaryCategories.map((cat) => (
                  <option key={cat} value={cat}>
                    {formatLabel(cat)}
                  </option>
                ))}
              </select>
            </div>

            {hasTertiary && (
              <>
                <span className="crumb-sep">✦</span>
                <div className="crumb-select-wrap">
                  <select
                    className="crumb-select"
                    value={selectedTertiary}
                    onChange={handleTertiaryChange}
                  >
                    <option value="all">All</option>
                    {tertiaryCategories.map((cat) => (
                      <option key={cat} value={cat}>
                        {formatLabel(cat)}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            )}
          </nav>
        )}
      </div>

      <div className="article-filters">
        <div className="select-card">
          <p>Display Extra Info:</p>
          <select onChange={handleDisplayExtraInfo} defaultValue="false">
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <input
          type="text"
          className="article-search"
          placeholder="Search for an article by title or description"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <div className="prayer-display">
        <div className="prayer-list prayer-card">
          <h3>Article List</h3>
          {prayerList.length === 0 ? (
            <p className="prayer-list-empty">No articles match this filter.</p>
          ) : (
            <ul>
              {prayerList.map((article) => (
                <li
                  onClick={() => handlePrayerClick(article.id)}
                  key={article.id}
                  className={
                    article.id === currPrayer?.id
                      ? "prayer-list-active-prayer"
                      : null
                  }
                >
                  {article.title}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="apologia-viewer">
          {currPrayer ? (
            <>
              <h3>{currPrayer.title}</h3>

              {currPrayer.content && (
                <div className="article-view-toggle">
                  {["short", "long"].map((view) => (
                    <button
                      key={view}
                      type="button"
                      className={
                        view === articleView
                          ? "is-active btn-outline"
                          : "btn-secondary"
                      }
                      onClick={() => setArticleView(view)}
                    >
                      {VIEW_LABELS[view]}
                    </button>
                  ))}
                </div>
              )}

              <ArticleSections article={currPrayer} view={articleView} />
            </>
          ) : (
            <h3>Select an article to view it.</h3>
          )}
        </div>

        {displayExtraInfo && currPrayer && (
          <div className="prayer-card prayercard-nodesc">
            <h3>Extra Info</h3>
            <h4>Description</h4>
            <p>{currPrayer.description}</p>
            <h4>Author</h4>
            <p>{currPrayer.author?.name}</p>
            <h4>Difficulty</h4>
            <p>{formatLabel(currPrayer.difficulty ?? "")}</p>
            <h4>Reading Time</h4>
            <p>
              {articleView === "short"
                ? currPrayer.estimated_reading_time?.short
                : currPrayer.estimated_reading_time?.long}{" "}
              min
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default ApologiaArticleViewer;

function ArticleSections({ article, view }) {
  if (!article.content) {
    return <p className="empty-note">This article has no content yet.</p>;
  }

  const sections =
    view === "short"
      ? article.content.sections.filter((s) => s.includeInShort)
      : article.content.sections;

  return (
    <div className="article-sections">
      {sections.map((section) => (
        <section
          key={section.id}
          className={`article-section section-${section.type}`}
        >
          <h4 className="section-title">{section.title}</h4>
          {section.blocks.map((block) => (
            <ArticleBlock
              key={block.id}
              block={block}
              citations={article.citations}
            />
          ))}
        </section>
      ))}
    </div>
  );
}

function ArticleBlock({ block, citations }) {
  switch (block.type) {
    case "paragraph":
      return <p className="article-paragraph">{block.text}</p>;

    case "heading": {
      // const Tag = `h${block.level || 3}`;
      const Tag = `h5`;
      return <Tag className="article-heading">{block.text}</Tag>;
    }

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
      return (
        <figure className="article-image">
          <img src={cite.src} alt={cite.title || ""} />
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
