import { useLocation } from "react-router-dom";
import Search from "./Search";
import BackButton from "./BackButton";

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <h1>🚀 Crypto Tracker</h1>
          <p>Real-time cryptocurrency prices and market data</p>
        </div>
      </div>

      {location.pathname === "/" ? <Search /> : <BackButton />}
    </header>
  );
};

export default Header;
