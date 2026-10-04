import styles from "./BrowserSearch.module.css";

function BrowserSearch({ value, onChange, placeholder = "Search..." }) {
  return (
    <input
      type="text"
      className={styles["browser-search"]}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default BrowserSearch;
