import { BrowserRouter, Route, Routes } from "react-router-dom";

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
