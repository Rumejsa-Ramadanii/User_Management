function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search by name or email"
      onChange={(e) => onSearch(e.target.value)}
      style={{ marginBottom: "15px", padding: "8px", width: "100%" }}
    />
  );
}

export default SearchBar;
