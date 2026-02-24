import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BooksListPage from "./pages/BooksListPage";
import GiveBookPage from "./pages/GiveBookPage";
import BookDetailsPage from "./pages/BookDetailsPage";
function App() {
  return (
    <Routes>
      
      <Route path="/" element={<HomePage />} />
      <Route path="/books-list" element={<BooksListPage />} />
      <Route path="/give-book" element={<GiveBookPage />} />
      <Route path="/books/:id" element={<BookDetailsPage />} />
    </Routes>
  );
}

export default App;
