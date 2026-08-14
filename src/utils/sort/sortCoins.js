const sortCoins = (coins, sortBy) => {
  const sortedCoins = [...coins];

  switch (sortBy) {
    case "name":
      return sortedCoins.sort((a, b) => a.name.localeCompare(b.name));

    case "price":
      return sortedCoins.sort((a, b) => a.current_price - b.current_price);

    case "price_desc":
      return sortedCoins.sort((a, b) => b.current_price - a.current_price);

    case "change":
      return sortedCoins.sort(
        (a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h,
      );

    case "market_cap":
      return sortedCoins.sort((a, b) => b.market_cap - a.market_cap);

    case "market_cap_rank":
    default:
      return sortedCoins.sort((a, b) => a.market_cap_rank - b.market_cap_rank);
  }
};

export default sortCoins;
