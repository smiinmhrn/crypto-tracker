import useFetch from "@/hooks/useFetch";
import { getCoinsData } from "@/api/getCoinsData";
import Loading from "@/components/loading/Loading";
import Coin from "@/components/coin/Coin";
import sortCoins from "@/utils/sort/sortCoins";
import searchCoins from "@/utils/search/search";

const Coins = ({ viewMode, sortBy, searchQuery }) => {
  const { data, loading, error } = useFetch(getCoinsData);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Something went wrong!</p>;
  }

  const searchedCoins = searchCoins(data, searchQuery);
  const sortedCoins = sortCoins(searchedCoins, sortBy);

  if (sortedCoins.length === 0) {
    return (
      <div className="no-results">
        <p>No cryptocurrencies found.</p>
      </div>
    );
  }

  return (
    <div className={`crypto-container ${viewMode}`}>
      {sortedCoins.map((coin) => (
        <Coin key={coin.id} coin={coin} />
      ))}
    </div>
  );
};

export default Coins;
