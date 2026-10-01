import LibraryBrowser from "../ui/LibraryBrowser/LibraryBrowser";
import PrayerContent from "./PrayerContent";
import { PRAYERS, PRAYERS_BY_ID } from "../../content/prayers";

const CATEGORIES = [
  ["all", "All"],
  ["benedictine", "Benedictine"],
  ["christological", "Christological"],
  ["creeds", "Creeds"],
  ["devotional", "Devotional"],
  ["daily", "Daily"],
  ["for-the-dead", "For the Dead"],
  ["holy-spirit", "Holy Spirit"],
  ["liturgical", "Liturgical"],
  ["marian", "Marian"],
  ["penitential", "Penitential"],
  ["saints", "Saints"],
  ["seasonal", "Seasonal"],
];

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

function Prayers() {
  return (
    <LibraryBrowser
      items={PRAYERS}
      itemsById={PRAYERS_BY_ID}
      categories={CATEGORIES}
      languages={LANGUAGES}
      extraInfoFields={EXTRA_INFO_FIELDS}
      listTitle="Prayer List"
      searchPlaceholder="Search for prayer by title or description"
      renderContent={(prayer, language) => (
        <PrayerContent prayer={prayer} language={language} />
      )}
    />
  );
}

export default Prayers;
