import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { getCoinData } from "../api/api";
import Loading from "../components/Loading";
import Header from "../components/Header";
import CoinHeader from "../components/CoinHeader";
import CoinPrice from "../components/CoinPrice";
import PriceRanges from "../components/PriceRanges";
import CoinChart from "../components/CoinChart";

const CoinsDetailes = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, loading, error } = useFetch(() => getCoinData(id));

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="app">
        <Header />

        <div className="no-results">
          <p>Coin not found</p>

          <button onClick={() => navigate("/")} className="back-button">
            ← Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <Header />

      <div className="coin-detail">
        <CoinHeader coin={data} />

        <div className="coin-price-section">
          <CoinPrice coin={data} />

          <PriceRanges coin={data} />
        </div>

        <CoinChart coinId={id} />
      </div>
    </div>
  );
};

export default CoinsDetailes;
