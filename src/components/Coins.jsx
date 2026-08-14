import useFetch from "../hooks/useFetch";
import getCoinsData from "../api/api";
import Loading from "./Loading";
import Coin from "./Coin";

const Coins = ({ viewMode }) => {
  const { data, loading, error } = useFetch(getCoinsData);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className={`crypto-container ${viewMode}`}>
          {data.map((coin) => (
            <Coin key={coin.id} coin={coin} />
          ))}
        </div>
      )}
    </>
  );
};

export default Coins;
