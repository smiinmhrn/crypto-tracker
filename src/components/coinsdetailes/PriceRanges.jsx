import priceFormatter from "../../utils/formatter/priceFormatter";

const PriceRanges = ({ coin }) => {
  return (
    <div className="price-ranges">
      <div className="price-range">
        <span className="range-label">24h High</span>

        <span className="range-value">
          {priceFormatter(coin.market_data.high_24h.usd)}
        </span>
      </div>

      <div className="price-range">
        <span className="range-label">24h Low</span>

        <span className="range-value">
          {priceFormatter(coin.market_data.low_24h.usd)}
        </span>
      </div>
    </div>
  );
};

export default PriceRanges;
