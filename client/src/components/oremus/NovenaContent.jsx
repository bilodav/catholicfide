import { NOVENAS_BY_ID } from "../../content/novenas";
import { PRAYERS_BY_ID } from "../../content/prayers";

function NovenaContent({ prayer, language = "en", day }) {
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
          <b className="prayer-intention bold-500">{common.intention_prompt}</b>
        )}
        <br />
        {common.body_before_reflection && (
          <p className="prayer-body">{common.body_before_reflection}</p>
        )}
        {dayData && (
          <div className="prayer-daily-reflection">
            <h4 className="reflection-theme">
              Day {dayData.day}
              {dayData.theme ? `: ${dayData.theme}` : ""}
            </h4>
            {dayData.reflection && (
              <p className="reflection-text">{dayData.reflection}</p>
            )}
          </div>
        )}
        {common.body_after_reflection && (
          <p className="prayer-body">{common.body_after_reflection}</p>
        )}
        {common.closing && <p className="prayer-closing">{common.closing}</p>}
      </div>
    );
  }

  // ── 3. Novena structure: same_prayer template (e.g. Infant of Prague) ─
  if (translation.template) {
    const { template } = translation;

    return (
      <div className="prayer-content novena-content">
        {template.opening && (
          <p className="prayer-opening">{template.opening}</p>
        )}
        {template.introduction && (
          <p className="prayer-introduction">{template.introduction}</p>
        )}
        {template.intention_prompt && (
          <em className="prayer-intention bold-500">
            {template.intention_prompt}
          </em>
        )}
        {template.daily_prayer && (
          <div className="prayer-daily-reflection">
            {template.daily_prayer.split("\n\n").map((para, i) => (
              <p key={i} className="prayer-body">
                {para}
              </p>
            ))}
          </div>
        )}
        {template.closing && (
          <p className="prayer-closing">{template.closing}</p>
        )}
      </div>
    );
  }

  // ── 4. Block-based content array ─────────────────────────────────────
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
              // References can point at a regular prayer (e.g. Our Father) or another novena
              const referenced =
                PRAYERS_BY_ID[block.value] ?? NOVENAS_BY_ID[block.value];
              if (!referenced)
                return <p key={i}>[ {block.value} not found ]</p>;
              return (
                <div key={i} className="prayer-reference-inline">
                  {block.optional && <em>(Optional) </em>}
                  <NovenaContent prayer={referenced} language={language} />
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

export default NovenaContent;
