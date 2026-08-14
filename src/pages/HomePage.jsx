import { useState } from "react";
import Coins from "../components/Coins";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const [viewMode, setViewMode] = useState("grid");

  return (
    <div className="app">
      <Navbar viewMode={viewMode} setViewMode={setViewMode} />
      <Coins viewMode={viewMode}/>
    </div>
  );
};

export default HomePage;
