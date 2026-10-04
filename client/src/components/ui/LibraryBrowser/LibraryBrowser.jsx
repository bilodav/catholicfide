import { useState } from "react";
import BrowserFilters from "./BrowserFilters";
import BrowserSearch from "./BrowserSearch";
import ItemList from "./ItemList";
import ItemViewer from "./ItemViewer";
import styles from "./LibraryBrowser.module.css";

function LibraryBrowser({
  items,
  itemsById,
  categories,
  languages,
  extraInfoFields,
  renderContent,
  listTitle,
  searchPlaceholder,
}) {
  const [category, setCategory] = useState("all");
  const [language, setLanguage] = useState(languages?.[0]?.[0] ?? "en");
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [displayExtraInfo, setDisplayExtraInfo] = useState(false);

  // Derived data
  const query = search.trim().toLowerCase();
  const list = items
    .filter(
      (p) => category === "all" || p.metadata.primary_category === category,
    )
    .filter(
      (p) =>
        !query ||
        p.metadata.title?.toLowerCase().includes(query) ||
        p.metadata.description?.toLowerCase().includes(query) ||
        p.metadata.id?.toLowerCase().includes(query),
    )
    .map((p) => ({ id: p.metadata.id, title: p.metadata.title }));

  const filterCount = [categories, languages, extraInfoFields].filter(
    Boolean,
  ).length;
  const inlineSearch = filterCount === 1;

  const selected = selectedId ? itemsById[selectedId] : null;

  return (
    <section>
      <div
        className={`${styles["filters"]} ${
          inlineSearch ? styles["filters-inline-search"] : ""
        }`}
      >
        <BrowserFilters
          categories={categories}
          category={category}
          onCategoryChange={setCategory}
          languages={languages}
          language={language}
          onLanguageChange={setLanguage}
          displayExtraInfo={displayExtraInfo}
          onDisplayExtraInfoChange={
            extraInfoFields ? setDisplayExtraInfo : undefined
          }
        />

        {searchPlaceholder && (
          <BrowserSearch
            value={search}
            onChange={setSearch}
            placeholder={searchPlaceholder}
          />
        )}
      </div>

      <div>
        <div className={styles["library-display"]}>
          <ItemList
            title={listTitle}
            items={list}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
          <ItemViewer
            content={selected}
            language={language}
            displayExtraInfo={displayExtraInfo}
            extraInfoFields={extraInfoFields}
            renderContent={renderContent}
          />
        </div>
      </div>
    </section>
  );
}

export default LibraryBrowser;
