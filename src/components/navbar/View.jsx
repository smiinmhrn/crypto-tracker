const View = ({ viewMode, setViewMode }) => {
  return (
    <div className="view-toggle">
      <button
        className={viewMode === "grid" ? "active" : ""}
        onClick={() => setViewMode("grid")}
      >
        Grid
      </button>

      <button
        className={viewMode === "list" ? "active" : ""}
        onClick={() => setViewMode("list")}
      >
        List
      </button>
    </div>
  );
};

export default View;
