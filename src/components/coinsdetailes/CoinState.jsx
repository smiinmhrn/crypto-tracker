import marketCapFormatter from "../../utils/formatter/marketCapFormatter";

const CoinState = ({ coin }) => {
  return (
    <div className="stats-grid">
      <div className="stat-card">
        <span className="stat-label">Market Cap</span>
        <span className="stat-value">
          ${marketCapFormatter(coin.market_data.market_cap.usd)}
        </span>
      </div>

      <div className="stat-card">
        <span className="stat-label">Volume (24)</span>
        <span className="stat-value">
          ${marketCapFormatter(coin.market_data.total_volume.usd)}
        </span>
      </div>

      <div className="stat-card">
        <span className="stat-label">Circulating Supply</span>
        <span className="stat-value">
          {coin.market_data.circulating_supply?.toLocaleString() || "N/A"}
        </span>
      </div>

      <div className="stat-card">
        <span className="stat-label">Total Supply</span>
        <span className="stat-value">
          {coin.market_data.total_supply?.toLocaleString() || "N/A"}
        </span>
      </div>
    </div>
  );
};

export default CoinState;
