import { useNavigate, useParams } from "react-router-dom";
import useFetch from "@/hooks/useFetch";
import { getCoinData } from "@/apis/getCoinData";
import Loading from "@/components/loading/Loading";
import Header from "@/components/header/Header";
import CoinHeader from "@/components/coin/CoinHeader";
import CoinPrice from "@/components/coin/CoinPrice";
import PriceRanges from "@/components/coinsdetailes/PriceRanges";
import CoinChart from "@/components/coinsdetailes/CoinChart";
import CoinState from "@/components/coinsdetailes/CoinState";
import Footer from "@/components/footer/Footer";

const CoinsDetailes = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, loading, error } = useFetch(() => getCoinData(id));

  if (loading) {
    return (
      <div className="app">
        <Loading />
      </div>
    );
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
        <CoinState coin={data} />
      </div>
      <Footer />
    </div>
  );
};

export default CoinsDetailes;
