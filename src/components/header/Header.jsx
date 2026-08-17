import { useLocation } from "react-router-dom";
import Search from "./Search";
import BackButton from "./BackButton";

const Header = ({ searchQuery, setsearchQuery }) => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <h1>🚀 Crypto Tracker</h1>
          <p>Real-time cryptocurrency prices and market data</p>
        </div>
        {location.pathname === "/" ? (
          <Search searchQuery={searchQuery} setsearchQuery={setsearchQuery} />
        ) : (
          <BackButton />
        )}
      </div>
    </header>
  );
};

export default Header;
