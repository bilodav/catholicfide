function BrowserSearch({ value, onChange, placeholder = "Search..." }) {
  return (
    <input
      type="text"
      className="prayer-search"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default BrowserSearch;
