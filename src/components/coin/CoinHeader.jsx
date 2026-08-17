const CoinHeader = ({ coin }) => {
  return (
    <div className="coin-header">
      <div className="coin-title">
        <img src={coin.image.large} alt={coin.name} />

        <div>
          <h1>{coin.name}</h1>
          <p className="symbol">{coin.symbol.toUpperCase()}</p>
        </div>
      </div>

      <span className="rank">Rank #{coin.market_data.market_cap_rank}</span>
    </div>
  );
};

export default CoinHeader;
