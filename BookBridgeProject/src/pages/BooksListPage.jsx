import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BookItem from "../components/BookItem";

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
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        Available Books in {selectedCountry || "Selected Country"}
      </h1>

      {books.length === 0 ? (
        <p>No books available in this country.</p>
      ) : (
        <div className="grid grid-cols-3 gap-6">
          {books.map((book) => (
  <BookItem key={book.id} book={book} />
))}
        </div>
      )}
    </div>
  );
}

export default BooksListPage;
