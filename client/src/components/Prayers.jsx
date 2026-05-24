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

function PrayerContent({ prayer }) {
  const translation = prayer.translations.en;

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
                  <PrayerContent prayer={referenced} />
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

  function handlePrayerChange(e) {
    const newCategory = e.target.value;
    setPrayerCategory(newCategory); // for keeping the select in sync

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
        <select name="" id="">
          <option value="">language</option>
          <option value="">English</option>
          <option value="">Latin</option>
          <option value="">French</option>
          <option value="">Italian</option>
        </select>
        <select name="" id="">
          <option value="">Display Extra Info</option>
          <option value="">Yes</option>
          <option value="">No</option>
        </select>
      </div>
      <div>
        <input
          type="text"
          className="prayer-search"
          placeholder="Search for prayer by title or description"
        />
        <div className="prayer-display">
          <div className="prayer-list prayer-card">
            <h3>Prayer List</h3>
            <ul>
              {prayerList.map((prayer) => (
                <li
                  onClick={() => handlePrayerClick(prayer.id)}
                  key={prayer.id}
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
                <PrayerContent prayer={currPrayer} />
              </>
            ) : (
              <p>Select a prayer to view it.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Prayers;
