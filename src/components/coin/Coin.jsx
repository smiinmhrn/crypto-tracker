import priceFormatter from "@/utils/formatter/priceFormatter";
import marketCapFormatter from "@/utils/formatter/marketCapFormatter";
import { Link } from "react-router-dom";

const Coin = ({ coin }) => {
  const priceChange = coin.price_change_percentage_24h;
  const changeClass = priceChange >= 0 ? "positive" : "negative";
  const changeIcon = priceChange >= 0 ? "↑ " : "↓ ";

  return (
    <Link to={`/coin/${coin.id}`} style={{ textDecoration: "none" }}>
      <div className="crypto-card">
        <div className="crypto-header">
          <div className="crypto-info">
            <img src={coin.image} alt={coin.name} />
            <div>
              <h3>{coin.name}</h3>
              <p className="symbol">{coin.symbol.toUpperCase()}</p>
              <span className="rank">#{coin.market_cap_rank}</span>
            </div>
          </div>
        </div>

        <div className="crypto-price">
          <p className="price">{priceFormatter(coin.current_price)}</p>
          <p className={`change ${changeClass}`}>
            {changeIcon}
            {Math.abs(priceChange).toFixed(2)}%
          </p>
        </div>
        <div className="crypto-stats">
          <div className="stat">
            <span className="stat-label">Market Cap</span>
            <span className="stat-value">
              ${marketCapFormatter(coin.market_cap)}
            </span>
          </div>

          <div className="stat">
            <span className="stat-label">Volume</span>
            <span className="stat-value">
              ${marketCapFormatter(coin.total_volume)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Coin;
