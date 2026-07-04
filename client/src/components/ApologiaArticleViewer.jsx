import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

const modules = import.meta.glob(
  "../assets/data/apologia/articles/**/meta.json",
  { eager: true },
);

const ARTICLES = Object.values(modules).map((m) => m.default);

const ARTICLES_BY_ID = Object.fromEntries(ARTICLES.map((a) => [a.id, a]));

function ApologiaArticleViewer() {
  const { themeId } = useParams();
  const { state } = useLocation();
  const [prayerCategory, setPrayerCategory] = useState("all");
  const [prayerLanguage, setPrayerLanguage] = useState("en");
  const [currPrayer, setcurrPrayer] = useState(null);
  const [displayExtraInfo, setDisplayExtraInfo] = useState(false);
  const [searchPrayer, setSearchPrayer] = useState("");
  // Depends on themeId, so it has to live inside the component
  const initArr = ARTICLES.filter((a) => a.primary_category === themeId).map(
    (a) => ({
      id: a.id,
      title: a.title,
    }),
  );
  const [prayerList, setPrayerList] = useState(initArr);

  useEffect(() => {
    setPrayerList(
      ARTICLES.filter((a) => a.primary_category === themeId).map((a) => ({
        id: a.id,
        title: a.title,
      })),
    );
  }, [themeId]);

  function handlePrayerChange(e) {
    const newCategory = e.target.value;
    setPrayerCategory(newCategory);

    if (newCategory === "all") {
      setPrayerList(
        ARTICLES.map((p) => ({ id: p.metadata.id, title: p.metadata.title })),
      );
    } else {
      setPrayerList(
        ARTICLES.filter((p) => p.metadata.primary_category === newCategory).map(
          (p) => ({ id: p.metadata.id, title: p.metadata.title }),
        ),
      );
    }
  }

  function handlePrayerClick(prayer) {
    setcurrPrayer(ARTICLES.find((p) => p.metadata.id === prayer));
  }

  function handleLanguageChange(e) {
    setPrayerLanguage(e.target.value);
  }

  function handleDisplayExtraInfo() {
    setDisplayExtraInfo((prev) => !prev);
  }

  function handleSearchPrayer(e) {
    const searchText = e.target.value.toLowerCase();
    setSearchPrayer(searchText);

    if (!searchText) {
      // Reset to whatever category is currently active
      const base =
        prayerCategory === "all"
          ? ARTICLES
          : ARTICLES.filter(
              (p) => p.metadata.primary_category === prayerCategory,
            );
      setPrayerList(
        base.map((p) => ({ id: p.metadata.id, title: p.metadata.title })),
      );
      return;
    }

    const base =
      prayerCategory === "all"
        ? ARTICLES
        : ARTICLES.filter(
            (p) => p.metadata.primary_category === prayerCategory,
          );

    setPrayerList(
      base
        .filter(
          (p) =>
            p.metadata.title?.toLowerCase().includes(searchText) ||
            p.metadata.description?.toLowerCase().includes(searchText) ||
            p.metadata.id?.toLowerCase().includes(searchText),
        )
        .map((p) => ({ id: p.metadata.id, title: p.metadata.title })),
    );
  }

  return (
    <section className="prayers">
      <div className="artcle-banner">{state.theme.title}</div>
      <div className="prayer-filters">
        <div className="select-card">
          <p>Sort:</p>
          <select value={prayerCategory} onChange={handlePrayerChange}>
            <option value="alpha-asc">A-Z</option>
            <option value="alpha-dec">Z-A</option>
            <option value="newest-first">Newest First</option>
            <option value="oldest-first">Oldest First</option>
            <option value="recent-updated">Recently Updated</option>
          </select>
        </div>
        <div className="select-card">
          <p>Display Extra Info:</p>
          <select onChange={handleDisplayExtraInfo}>
            <option value={false}>No</option>
            <option value={true}>Yes</option>
          </select>
        </div>
        <input
          type="text"
          className="prayer-search"
          placeholder="Search for prayer by title or description"
          value={searchPrayer}
          onChange={handleSearchPrayer}
        />
      </div>
      <div>
        <div className="prayer-display">
          <div className="prayer-list prayer-card">
            <h3>Prayer List</h3>
            <ul>
              {prayerList.map((prayer) => (
                <li
                  onClick={() => handlePrayerClick(prayer.id)}
                  key={prayer.id}
                  className={
                    prayer.id === currPrayer?.metadata.id
                      ? "prayer-list-active-prayer"
                      : null
                  }
                >
                  {prayer.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="prayer-card prayercard-nodesc">
            {currPrayer ? (
              <>
                <h3>{currPrayer.metadata.title}</h3>
                <PrayerContent prayer={currPrayer} language={prayerLanguage} />
              </>
            ) : (
              <h3>Select a prayer to view it.</h3>
            )}
          </div>

          {displayExtraInfo && currPrayer ? (
            <div className="prayer-card prayercard-nodesc">
              <h3>Extra Info</h3>
              <h4>Description</h4>
              <p>{currPrayer.metadata.description}</p>
              <h4>Origin</h4>
              <p>{currPrayer.metadata.origin}</p>
              <h4>Origin Date</h4>
              <p>{currPrayer.metadata.origin_date}</p>
              <h4>Usage</h4>
              <p>{currPrayer.metadata.usage}</p>
              <h4>Type of Prayer</h4>
              <p>{currPrayer.metadata.type}</p>
            </div>
          ) : undefined}
        </div>
      </div>
    </section>
  );
}

export default ApologiaArticleViewer;

function PrayerContent({ prayer, language = "en" }) {
  // ✅ fallback to English if the selected language doesn't exist on this prayer
  const translation = prayer.translations[language] ?? prayer.translations.en;

  if (translation.text) {
    return <p className="prayer-text">{translation.text}</p>;
  }

  if (translation.content) {
    return (
      <div className="prayer-content">
        {translation.content.map((block, i) => {
          switch (block.type) {
            case "text":
              return <p key={i}>{block.value}</p>;
            case "instructions":
              return <em key={i}>{block.value}</em>;
            case "prayer-reference": {
              const referenced = PRAYERS_BY_ID[block.value];
              if (!referenced)
                return <p key={i}>[ {block.value} not found ]</p>;
              return (
                <div key={i} className="prayer-reference-inline">
                  {block.optional && <em>(Optional) </em>}
                  <PrayerContent prayer={referenced} language={language} />
                  {block.count > 1 && <em> (×{block.count})</em>}
                </div>
              );
            }
            default:
              return null;
          }
        })}
      </div>
    );
  }

  return <p>No content available.</p>;
}
