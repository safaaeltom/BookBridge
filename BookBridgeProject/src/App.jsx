import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import BooksListPage from "./pages/BooksListPage";
import GiveBookPage from "./pages/GiveBookPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/books-list" element={<BooksListPage />} />
      <Route path="/give-book" element={<GiveBookPage />} />
    </Routes>
  );
}

export default App;
