import { useState } from "react";

const modules = import.meta.glob("../assets/data/prayers/*.json", {
  eager: true,
});
const PRAYERS = Object.values(modules).map((m) => m.default);
const PRAYERS_BY_ID = Object.fromEntries(
  PRAYERS.map((p) => [p.metadata.id, p]),
);

const initArr = PRAYERS.map((p) => ({
  id: p.metadata.id,
  title: p.metadata.title,
}));

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

function Prayers() {
  const [prayerCategory, setPrayerCategory] = useState("all");
  const [prayerLanguage, setPrayerLanguage] = useState("en");
  const [prayerList, setPrayerList] = useState(initArr);
  const [currPrayer, setcurrPrayer] = useState(null);
  const [displayExtraInfo, setDisplayExtraInfo] = useState(false);
  const [searchPrayer, setSearchPrayer] = useState("");

  function handlePrayerChange(e) {
    const newCategory = e.target.value;
    setPrayerCategory(newCategory);

    if (newCategory === "all") {
      setPrayerList(
        PRAYERS.map((p) => ({ id: p.metadata.id, title: p.metadata.title })),
      );
    } else {
      setPrayerList(
        PRAYERS.filter((p) => p.metadata.primary_category === newCategory).map(
          (p) => ({ id: p.metadata.id, title: p.metadata.title }),
        ),
      );
    }
  }

  function handlePrayerClick(prayer) {
    setcurrPrayer(PRAYERS.find((p) => p.metadata.id === prayer));
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
          ? PRAYERS
          : PRAYERS.filter(
              (p) => p.metadata.primary_category === prayerCategory,
            );
      setPrayerList(
        base.map((p) => ({ id: p.metadata.id, title: p.metadata.title })),
      );
      return;
    }

    const base =
      prayerCategory === "all"
        ? PRAYERS
        : PRAYERS.filter((p) => p.metadata.primary_category === prayerCategory);

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
      <div className="prayer-filters">
        <select value={prayerCategory} onChange={handlePrayerChange}>
          <option value="all">All</option>
          <option value="christological">Christological</option>
          <option value="creeds">Creeds</option>
          <option value="devotional">Devotional</option>
          <option value="daily">Daily</option>
          <option value="for-the-dead">For the Dead</option>
          <option value="holy-spirit">Holy Spirit</option>
          <option value="liturgical">Liturgical</option>
          <option value="marian">Marian</option>
          <option value="penitential">Penitential</option>
          <option value="saints">Saints</option>
          <option value="seasonal">Seasonal</option>
        </select>
        <select value={prayerLanguage} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="la">Latin</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="it">Italian</option>
          <option value="pl">Polish</option>
          <option value="pt">Portuguese</option>
          <option value="es">Spanish</option>
        </select>
        <select onChange={handleDisplayExtraInfo}>
          <option value={false}>No</option>
          <option value={true}>Yes</option>
        </select>
      </div>
      <div>
        <input
          type="text"
          className="prayer-search"
          placeholder="Search for prayer by title or description"
          value={searchPrayer}
          onChange={handleSearchPrayer}
        />
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

export default Prayers;
