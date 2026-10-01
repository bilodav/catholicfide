import styles from "./BrowserFilters.module.css";

function FilterSelect({ label, value, onChange, options }) {
  return (
    <div className="select-card">
      <p>{label}</p>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map(([optValue, optLabel]) => (
          <option key={optValue} value={optValue}>
            {optLabel}
          </option>
        ))}
      </select>
    </div>
  );
}

function BrowserFilters({
  categories,
  category,
  onCategoryChange,
  languages,
  language,
  onLanguageChange,
  displayExtraInfo,
  onDisplayExtraInfoChange,
}) {
  return (
    <div className={styles["library-filters"]}>
      {categories && (
        <FilterSelect
          label="Filter By Type:"
          value={category}
          onChange={onCategoryChange}
          options={categories}
        />
      )}

      {languages && (
        <FilterSelect
          label="Select Language:"
          value={language}
          onChange={onLanguageChange}
          options={languages}
        />
      )}

      {onDisplayExtraInfoChange && (
        <FilterSelect
          label="Display Extra Info:"
          value={displayExtraInfo ? "yes" : "no"}
          onChange={(v) => onDisplayExtraInfoChange(v === "yes")}
          options={[
            ["no", "No"],
            ["yes", "Yes"],
          ]}
        />
      )}
    </div>
  );
}

export default BrowserFilters;
