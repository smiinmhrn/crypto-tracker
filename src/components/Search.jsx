const Search = ({ searchQuery, setsearchQuery }) => {
  return (
    <div className="search-section">
      <input
        type="text"
        placeholder="Search cryptos..."
        className="search-input"
        onChange={(e) => setsearchQuery(e.target.value)}
        value={searchQuery}
      ></input>
    </div>
  );
};

export default Search;
