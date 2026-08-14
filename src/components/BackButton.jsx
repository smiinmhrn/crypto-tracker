import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/")} className="back-button">
      ← Back to List
    </button>
  );
};
export default BackButton;
