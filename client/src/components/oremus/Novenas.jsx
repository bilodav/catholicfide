import { useState, useEffect } from "react";
import LibraryBrowser from "../ui/LibraryBrowser/LibraryBrowser";
import BrowserFilters from "../ui/LibraryBrowser/BrowserFilters";
import NovenaContent from "./NovenaContent";
import { NOVENAS, NOVENAS_BY_ID } from "../../content/novenas";

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

const LANGUAGES = [
  ["en", "English"],
  ["la", "Latin"],
  ["fr", "French"],
  ["de", "German"],
  ["it", "Italian"],
  ["pl", "Polish"],
  ["pt", "Portuguese"],
  ["es", "Spanish"],
];

const EXTRA_INFO_FIELDS = [
  ["Description", "description"],
  ["Origin", "origin"],
  ["Origin Date", "origin_date"],
  ["Usage", "usage"],
  ["Type of Prayer", "type"],
];

function Novenas() {
  const [saved] = useState(loadSaved); // lazy init: reads localStorage once
  const [novenaLanguage, setNovenaLanguage] = useState("en");
  const [completedNovenaTitle, setCompletedNovenaTitle] = useState(null);

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

  function handleStartNovena(selectedNovena, newNovena = false) {
    setIsStarted(true);
    setCompletedNovenaTitle(null);
    if (newNovena) {
      setCurrPrayingNovena(selectedNovena);
      setDayCount(1);
      setLastCompletedDate(null);
    }
  }

  function handleCompletedNovena() {
    const today = new Date().toDateString();
    const totalDays = currPrayingNovena.structure.days;
    const nextDay = dayCount + 1;

    if (nextDay > totalDays) {
      // Full novena completed — reset everything
      setCompletedNovenaTitle(currPrayingNovena.metadata.title);
      setCurrPrayingNovena(null);
      setDayCount(0);
      setLastCompletedDate(null);
      setIsStarted(false);
      clearSaved();
      return;
    }

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
  const prayedToday = lastCompletedDate === new Date().toDateString();

  // ── Praying view ─────────────────────────────────────────────────────
  if (isStarted) {
    return (
      <section className="prayers">
        <BrowserFilters
          languages={LANGUAGES}
          language={novenaLanguage}
          onLanguageChange={setNovenaLanguage}
        />
        <div className="novena-card-prayer">
          {currPrayingNovena ? (
            <>
              <h3>
                {currPrayingNovena.metadata.title} - Day: {dayCount}
              </h3>
              <NovenaContent
                prayer={currPrayingNovena}
                language={novenaLanguage}
                day={dayCount}
              />
              <button className="btn-primary" onClick={handleCompletedNovena}>
                Completed
              </button>
            </>
          ) : (
            <h3>Select a Novena to view it.</h3>
          )}
        </div>
      </section>
    );
  }

  // ── Browse view ──────────────────────────────────────────────────────
  const banner = (
    <div className="active-novena">
      {completedNovenaTitle ? (
        <>
          <h3>You have completed the full novena: {completedNovenaTitle}!</h3>
          <button
            className="btn-accent"
            onClick={() => setCompletedNovenaTitle(null)}
          >
            Dismiss
          </button>
        </>
      ) : currPrayingNovena ? (
        <>
          <h3>You are currently doing {currPrayingNovena.metadata.title}</h3>
          {lastCompletedDate && (
            <p>
              You have finished
              <span className="bold-500"> Day {dayCount - 1} </span>
              on {lastCompletedDate}
            </p>
          )}
          {prayedToday ? (
            <p>
              ✅ Day {dayCount - 1} complete — see you tomorrow for day{" "}
              {dayCount}!
            </p>
          ) : (
            <button className="btn-accent" onClick={() => handleStartNovena()}>
              Proceed to day: {dayCount}
            </button>
          )}
        </>
      ) : (
        <>
          <h3>You have not started a novena yet?</h3>
          <p>Choose a Novena below</p>
        </>
      )}
    </div>
  );

  return (
    <>
      {banner}
      <LibraryBrowser
        items={NOVENAS}
        itemsById={NOVENAS_BY_ID}
        listTitle="Novena List"
        searchPlaceholder="Search for novena by title or description"
        renderContent={(novena) => (
          <>
            <button
              className="btn-outline"
              onClick={() => handleStartNovena(novena, true)}
            >
              Start Novena
            </button>{" "}
            {currPrayingNovena && (
              <span style={{ color: "red" }}>
                This will override your current progress
              </span>
            )}
            {EXTRA_INFO_FIELDS.map(([label, key]) => (
              <div key={key}>
                <h4>{label}</h4>
                <p>{novena.metadata[key]}</p>
              </div>
            ))}
          </>
        )}
      />
    </>
  );
}

export default Novenas;
