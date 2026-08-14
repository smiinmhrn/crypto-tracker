import useFetch from "../hooks/useFetch";
import getCoinsData from "../api/api";
import Loading from "./Loading";
import Coin from "./Coin";

const Coins = () => {
  const { data, loading, error } = useFetch(getCoinsData);

  return (
    <div className="app">
      {loading ? (
        <Loading />
      ) : (
        data.map((coin) => <Coin key={coin.id} coin={coin} />)
      )}
    </div>
  );
};

export default Coins;
