const searchCoins = (coins, searchQuery) => {
  if (!coins || !searchQuery) return coins || [];

  const query = searchQuery.toLowerCase();

  return coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(query) ||
      coin.symbol.toLowerCase().includes(query),
  );
};

export default searchCoins;
