const SortDropDown = ({ sortBy, setSortBy }) => {
  return (
    <div className="filter-group">
      <label>Sort by:</label>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="market_cap_rank">Rank</option>
        <option value="name">Name</option>
        <option value="price">Price (Low to High)</option>
        <option value="price_desc">Price (High to Low)</option>
        <option value="change">24h Change</option>
        <option value="market_cap">Market Cap</option>
      </select>
    </div>
  );
};

export default SortDropDown;
