import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { getCoinData } from "../api/api";
import Loading from "../components/Loading";
import Header from "../components/Header";

const CoinsDetailes = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(() => getCoinData(id));
  const navigate = useNavigate();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="app">
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
    </div>
  );
};

export default CoinsDetailes;
