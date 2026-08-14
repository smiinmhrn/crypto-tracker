import useFetch from "../hooks/useFetch";
import getCoinsData from "../api/api";
import Loading from "./Loading";
import Coin from "./Coin";
import sortCoins from "../utils/sort/sortCoins";

const Coins = ({ viewMode, sortBy }) => {
  const { data, loading, error } = useFetch(getCoinsData);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Something went wrong!</p>;
  }

  const sortedCoins = sortCoins(data, sortBy);

  return (
    <div className={`crypto-container ${viewMode}`}>
      {sortedCoins.map((coin) => (
        <Coin key={coin.id} coin={coin} />
      ))}
    </div>
  );
};

export default Coins;
