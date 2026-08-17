import { useState } from "react";
import Coins from "../components/coins/Coins";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

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
      <Footer />
    </div>
  );
};

export default HomePage;
