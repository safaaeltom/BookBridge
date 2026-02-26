import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BookItem from "../components/BookItem";
import bgImage from "../assets/books-bg.jpg";

function BooksListPage() {
  const [books, setBooks] = useState([]);
  const location = useLocation(); // get state from navigation
  const selectedCountry = location.state?.country || "";

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];

    // Filter books by selected country
    const filteredBooks = storedBooks.filter(
      (book) => book.country === selectedCountry
    );

    setBooks(filteredBooks);
  }, [selectedCountry]);

  return (
    <div
    className="relative min-h-screen bg-cover bg-center flex flex-col items-center py-12"
    style={{
      backgroundImage: `url(${bgImage})`,
    }} 
  >
    {/* Content container above the overlay */}
    <div className="bg-white/20 backdrop-blur-md border border-white/50 rounded-xl p-6 text-white shadow-2xl hover:bg-white/30 transition">
    <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
        Available Books in {selectedCountry || "Selected Country"}
      </h1>

      {books.length === 0 ? (
        <p className="text-white text-center">
          No books available in this country.</p>
      ) : (
        <div className="grid md:grid-cols-5 gap-8">
          {books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
        </div>
      )}
    </div>
    <button className="mt-7 px-6 py-7 bg-white/20 text-white font-bold border rounded hover:bg-white/30 transition"
          onClick={() => window.location.href = "/give-book"}>
          GIVE BOOKS IN {selectedCountry || "Selected Country"}
        </button>
    </div>
  );
}

export default BooksListPage;
