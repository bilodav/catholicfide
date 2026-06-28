import { useState, useEffect } from "react";

const modules = import.meta.glob("../assets/data/novenas/*.json", {
  eager: true,
});
const NOVENAS = Object.values(modules).map((m) => m.default);
const NOVENAS_BY_ID = Object.fromEntries(
  NOVENAS.map((p) => [p.metadata.id, p]),
);

const initArr = NOVENAS.map((p) => ({
  id: p.metadata.id,
  title: p.metadata.title,
}));

// -----HELPER FUNCTIONS------
function loadSaved() {
  try {
    const raw = localStorage.getItem("novena_progress");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveSaved(data) {
  try {
    localStorage.setItem("novena_progress", JSON.stringify(data));
  } catch {}
}

function clearSaved() {
  localStorage.removeItem("novena_progress");
}

function PrayerContent({ prayer, language = "en", day }) {
  const translation = prayer.translations[language] ?? prayer.translations.en;

  // ── 1. Simple flat text (e.g. Act of Faith) ──────────────────────────
  if (translation.text) {
    return <p className="prayer-text">{translation.text}</p>;
  }

  // ── 2. Novena structure: common + days ───────────────────────────────
  if (translation.common) {
    const { common, days } = translation;
    const dayData = days?.find((d) => d.day === day);

    return (
      <div className="prayer-content novena-content">
        {common.opening && <p className="prayer-opening">{common.opening}</p>}
        {common.introduction && (
          <p className="prayer-introduction">{common.introduction}</p>
        )}
        {common.intention_prompt && (
          <em className="prayer-intention">{common.intention_prompt}</em>
        )}
        {common.body_before_reflection && (
          <p className="prayer-body">{common.body_before_reflection}</p>
        )}
        {dayData && (
          <div className="prayer-daily-reflection">
            <h4 className="reflection-theme">
              Day {dayData.day}: {dayData.theme}
            </h4>
            <p className="reflection-text">{dayData.reflection}</p>
          </div>
        )}
        {common.body_after_reflection && (
          <p className="prayer-body">{common.body_after_reflection}</p>
        )}
        {common.closing && <p className="prayer-closing">{common.closing}</p>}
      </div>
    );
  }

  // ── 3. Block-based content array (existing format) ───────────────────
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
function Novenas() {
  const saved = loadSaved(); // read oncce on module load
  const [novenaCategory, setNovenaCategory] = useState("all");
  const [novenaLanguage, setNovenaLanguage] = useState("en");
  const [novenaList, setNovenaList] = useState(initArr);
  const [searchNovena, setSearchNovena] = useState("");
  const [currNovena, setCurrNovena] = useState(null);

  // Rehydrate from localStorage
  const [currPrayingNovena, setCurrPrayingNovena] = useState(() =>
    saved?.novenaId ? (NOVENAS_BY_ID[saved.novenaId] ?? null) : null,
  );
  const [dayCount, setDayCount] = useState(() => saved?.dayCount ?? 0);
  const [lastCompletedDate, setLastCompletedDate] = useState(
    () => saved?.lastCompletedDate ?? null,
  );
  const [isStarted, setIsStarted] = useState(false);

  // Persist whenever progress changes
  useEffect(() => {
    if (currPrayingNovena) {
      saveSaved({
        novenaId: currPrayingNovena.metadata.id,
        dayCount,
        lastCompletedDate,
      });
    }
  }, [currPrayingNovena, dayCount, lastCompletedDate]);

  function handleNovenaChange(e) {
    const newCategory = e.target.value;
    setNovenaCategory(newCategory);

    if (newCategory === "all") {
      setNovenaList(
        NOVENAS.map((p) => ({ id: p.metadata.id, title: p.metadata.title })),
      );
    } else {
      setNovenaList(
        NOVENAS.filter((p) => p.metadata.primary_category === newCategory).map(
          (p) => ({ id: p.metadata.id, title: p.metadata.title }),
        ),
      );
    }
  }

  function handleNovenaClick(novenaId) {
    setCurrNovena(NOVENAS_BY_ID[novenaId] ?? null);
  }

  function handleLanguageChange(e) {
    setNovenaLanguage(e.target.value);
  }

  function handleSearchNovena(e) {
    const searchText = e.target.value.toLowerCase();
    setSearchNovena(searchText);

    if (!searchText) {
      // Reset to whatever category is currently active
      const base =
        novenaCategory === "all"
          ? NOVENAS
          : NOVENAS.filter(
              (p) => p.metadata.primary_category === novenaCategory,
            );
      setNovenaList(
        base.map((p) => ({ id: p.metadata.id, title: p.metadata.title })),
      );
      return;
    }

    const base =
      novenaCategory === "all"
        ? NOVENAS
        : NOVENAS.filter((p) => p.metadata.primary_category === novenaCategory);

    setNovenaList(
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

  function handleStartNovena(selectedNovena, newNovena = false) {
    setIsStarted(true);
    if (newNovena) {
      setCurrPrayingNovena(selectedNovena);
      setDayCount(1);
      setLastCompletedDate(null);
    }
  }

  function handleCompletedNovena() {
    const today = new Date().toDateString();
    const nextDay = dayCount + 1;
    setDayCount(nextDay);
    setLastCompletedDate(today);
    setIsStarted(false);
  }

  function handleStopNovena() {
    setCurrPrayingNovena(null);
    setDayCount(0);
    setLastCompletedDate(null);
    clearSaved();
  }

  function handleRestartNovena() {
    setDayCount(1);
    setLastCompletedDate(null);
    setIsStarted(true);
  }

  // Has the user already prayed today?
  const today = new Date().toDateString();
  const prayedToday = lastCompletedDate === today;

  return isStarted ? (
    <section className="prayers">
      <div className="prayer-filters">
        <div className="select-card">
          <p>Select Language:</p>
          <select value={novenaLanguage} onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="la">Latin</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="it">Italian</option>
            <option value="pl">Polish</option>
            <option value="pt">Portuguese</option>
            <option value="es">Spanish</option>
          </select>
        </div>
      </div>
      <div className="novena-card-prayer">
        {currPrayingNovena ? (
          <>
            <h3>
              <h3>
                {currPrayingNovena.metadata.title} - Day: {dayCount}
              </h3>
            </h3>
            <PrayerContent
              prayer={currPrayingNovena}
              language={novenaLanguage}
              day={dayCount}
            />
            <button onClick={() => handleCompletedNovena()}>Completed</button>
          </>
        ) : (
          <h3>Select a Novena to view it.</h3>
        )}
      </div>
    </section>
  ) : (
    <section className="prayers">
      <div className="prayer-filters">
        <div className="select-card">
          <p>Filter By Type:</p>
          <select value={novenaCategory} onChange={handleNovenaChange}>
            <option value="all">All</option>
          </select>
        </div>
      </div>

      <div>
        <input
          type="text"
          className="prayer-search"
          placeholder="Search for prayer by title or description"
          value={searchNovena}
          onChange={handleSearchNovena}
        />
        <div className="prayer-filters">
          {currPrayingNovena ? (
            <>
              <h3>
                You are currently doing {currPrayingNovena.metadata.title}
              </h3>
              <p>You have finished {dayCount - 1} on *Today*</p>
              {prayedToday ? (
                <p>
                  ✅ Day {dayCount - 1} complete — see you tomorrow for day{" "}
                  {dayCount}!
                </p>
              ) : (
                <button onClick={handleStartNovena}>
                  Proceed to day: {dayCount}
                </button>
              )}
              <button onClick={handleStopNovena}>Stop this Novena</button>
              <button onClick={handleRestartNovena}>Restart this Novena</button>
            </>
          ) : (
            <>
              <h3>You have not started a novena yet?</h3>
              <p>Choose a Novena below</p>
            </>
          )}
        </div>
        <div className="prayer-display">
          <div className="prayer-list prayer-card">
            <h3>Novena List</h3>
            <ul>
              {novenaList.map((novena) => (
                <li
                  onClick={() => handleNovenaClick(novena.id)}
                  key={novena.id}
                  className={
                    novena.id === currNovena?.metadata.id
                      ? "prayer-list-active-prayer"
                      : null
                  }
                >
                  {novena.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="prayer-card prayercard-nodesc">
            {currNovena ? (
              <>
                <h3>{currNovena.metadata.title}</h3>
                {/* <PrayerContent prayer={currNovena} language={novenaLanguage} /> */}
                <button onClick={() => handleStartNovena(currNovena, true)}>
                  Start Novena
                </button>{" "}
                <span>This will overide your current progrss</span>
                <h4>Description</h4>
                <p>{currNovena.metadata.description}</p>
                <h4>Origin</h4>
                <p>{currNovena.metadata.origin}</p>
                <h4>Origin Date</h4>
                <p>{currNovena.metadata.origin_date}</p>
                <h4>Usage</h4>
                <p>{currNovena.metadata.usage}</p>
                <h4>Type of Prayer</h4>
                <p>{currNovena.metadata.type}</p>
              </>
            ) : (
              <h3>Select a Novena to view it.</h3>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Novenas;
