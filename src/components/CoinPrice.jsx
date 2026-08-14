import priceFormatter from "../utils/formatter/priceFormatter";

const CoinPrice = ({ coin }) => {
  const priceChange = coin.market_data.price_change_percentage_24h || 0;

  const changeClass = priceChange >= 0 ? "positive" : "negative";

  const changeIcon = priceChange >= 0 ? "↑ " : "↓ ";

  return (
    <div className="current-price">
      <h2>{priceFormatter(coin.market_data.current_price.usd)}</h2>

      <span className={`change-badge ${changeClass}`}>
        {changeIcon}
        {Math.abs(priceChange).toFixed(2)}%
      </span>
    </div>
  );
};

export default CoinPrice;
