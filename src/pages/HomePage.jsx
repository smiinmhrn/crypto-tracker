import { useState } from "react";
import Coins from "../components/Coins";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("market_cap_rank");

  return (
    <div className="app">
      <Navbar
        viewMode={viewMode}
        setViewMode={setViewMode}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <Coins viewMode={viewMode} sortBy={sortBy} />
    </div>
  );
};

export default HomePage;
