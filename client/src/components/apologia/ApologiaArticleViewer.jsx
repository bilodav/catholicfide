import { useState, useMemo } from "react";
import { useLocation, useParams } from "react-router-dom";
import LibraryBrowser from "../ui/LibraryBrowser/LibraryBrowser";
import ArticleContent from "./ArticleContent";
import { ARTICLES, ARTICLES_BY_ID } from "../../content/apologia";

function formatLabel(slug) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

// [label, metadata key OR function(metadata)] — functions handle nested values
const EXTRA_INFO_FIELDS = [
  ["Description", "description"],
  ["Author", (m) => m.author?.name],
  ["Difficulty", (m) => formatLabel(m.difficulty ?? "")],
  [
    "Reading Time",
    (m) =>
      `Short: ${m.estimated_reading_time?.short} min · Full: ${m.estimated_reading_time?.long} min`,
  ],
];

function uniqueValues(articles, field) {
  return [...new Set(articles.map((a) => a.metadata[field]).filter(Boolean))];
}

function ThemeBrowser({ themeId }) {
  const { state } = useLocation();
  const themeTitle = state?.theme?.title ?? formatLabel(themeId);

  const [selectedSecondary, setSelectedSecondary] = useState("all");
  const [selectedTertiary, setSelectedTertiary] = useState("all");

  const articlesInTheme = useMemo(
    () => ARTICLES.filter((a) => a.metadata.primary_category === themeId),
    [themeId],
  );

  const secondaryCategories = useMemo(
    () => uniqueValues(articlesInTheme, "secondary_category"),
    [articlesInTheme],
  );

  const articlesInSecondary = useMemo(
    () =>
      selectedSecondary === "all"
        ? articlesInTheme
        : articlesInTheme.filter(
            (a) => a.metadata.secondary_category === selectedSecondary,
          ),
    [articlesInTheme, selectedSecondary],
  );

  const tertiaryCategories = useMemo(
    () => uniqueValues(articlesInSecondary, "tertiary_category"),
    [articlesInSecondary],
  );
  const hasTertiary = tertiaryCategories.length > 0;

  const visibleArticles = useMemo(
    () =>
      !hasTertiary || selectedTertiary === "all"
        ? articlesInSecondary
        : articlesInSecondary.filter(
            (a) => a.metadata.tertiary_category === selectedTertiary,
          ),
    [articlesInSecondary, hasTertiary, selectedTertiary],
  );

  function handleSecondaryChange(e) {
    setSelectedSecondary(e.target.value);
    setSelectedTertiary("all");
  }

  return (
    <>
      <div className="artcle-banner">{themeTitle}</div>

      <div className="apologia-filter-banner">
        {secondaryCategories.length > 0 && (
          <nav className="apologia-breadcrumb" aria-label="Category filters">
            <span className="crumb-root">{themeTitle}</span>
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
                    onChange={(e) => setSelectedTertiary(e.target.value)}
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

      <LibraryBrowser
        items={visibleArticles}
        itemsById={ARTICLES_BY_ID}
        listTitle="Article List"
        searchPlaceholder="Search for an article by title or description"
        extraInfoFields={EXTRA_INFO_FIELDS}
        renderContent={(article) => (
          <ArticleContent key={article.metadata.id} article={article} />
        )}
      />
    </>
  );
}

function ApologiaArticleViewer() {
  const { themeId } = useParams();
  // key remounts everything (filters, search, selection) when the theme changes
  return <ThemeBrowser key={themeId} themeId={themeId} />;
}

export default ApologiaArticleViewer;
