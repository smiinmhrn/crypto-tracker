import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CoinsDetailes from "./pages/CoinsDetailes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coin/:id" element={<CoinsDetailes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
