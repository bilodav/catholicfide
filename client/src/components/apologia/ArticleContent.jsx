import { useState } from "react";
import ArticleBlock from "./ArticleBlock";

const VIEW_LABELS = {
  short: "Short answer",
  long: "Full article",
};

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
              dir={article.dir}
            />
          ))}
        </section>
      ))}
    </div>
  );
}

// Owns the short/long toggle. Render it with key={article.metadata.id} so the
// view resets to "short" whenever a different article is selected.
function ArticleContent({ article }) {
  const [view, setView] = useState("short");

  return (
    <>
      {article.content && (
        <div className="article-view-toggle">
          {Object.keys(VIEW_LABELS).map((v) => (
            <button
              key={v}
              type="button"
              className={v === view ? "is-active btn-outline" : "btn-secondary"}
              onClick={() => setView(v)}
            >
              {VIEW_LABELS[v]}
            </button>
          ))}
        </div>
      )}

      <ArticleSections article={article} view={view} />
    </>
  );
}

export default ArticleContent;
