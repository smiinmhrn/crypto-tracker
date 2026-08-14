import { useState } from "react";
import Coins from "../components/Coins";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

const HomePage = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("market_cap_rank");
  const [searchQuery, setsearchQuery] = useState("");

  return (
    <div className="app">
      <Header searchQuery={searchQuery} setsearchQuery={setsearchQuery} />
      <Navbar
        viewMode={viewMode}
        setViewMode={setViewMode}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <Coins viewMode={viewMode} sortBy={sortBy} searchQuery={searchQuery} />
    </div>
  );
};

export default HomePage;
