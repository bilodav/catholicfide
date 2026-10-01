import { PRAYERS_BY_ID } from "../../content/prayers";

export default function PrayerContent({ prayer, language = "en" }) {
  // Fall back to English if the selected language doesn't exist on this prayer
  const translation = prayer.translations[language] ?? prayer.translations.en;

  if (!translation) {
    return <p>No content available.</p>;
  }

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
              if (!referenced) {
                return <p key={i}>[ {block.value} not found ]</p>;
              }
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
