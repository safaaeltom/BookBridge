import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BookItem from "../components/BookList/BookItem";
import bgImage from "../assets/books-bg.jpg";
import Navbar from "../components/Shared/Navbar";

const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};

function BooksListPage() {
  const [books, setBooks] = useState([]);
  const location = useLocation(); // get state from navigation
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const selectedCountry = params.get("country") || "";

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
    const filteredBooks = storedBooks.filter(
      (book) => book.country === selectedCountry
    );

    setBooks(filteredBooks);
  }, [selectedCountry]);

  // Delete books that belong to the currentUser
  function handleDelete(bookId) {
    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];

    const updatedBooks = storedBooks.filter(
      (book) => !(book.id === bookId && book.userId === currentUser.id)
    );

    localStorage.setItem("books", JSON.stringify(updatedBooks));

    // Update displayed books
    setBooks(updatedBooks.filter((book) => book.country === selectedCountry));
  }


  return (
    <div
    className="min-h-screen bg-cover bg-center flex flex-col"
    style={{ backgroundImage: `url(${bgImage})`}} 
    >
    <Navbar />
    {/* Content container above the overlay */}
    <main className="flex-1 flex justify-center px-4 sm:px-6 lg:px-8 py-10 pt-25">
    <div className="w-full max-w-7xl">

    <div className="bg-white/20 backdrop-blur-md border border-white/50 rounded-xl p-6 text-white shadow-2xl">
     <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
        Available Books in {selectedCountry || "Selected Country"}
      </h1>

      {books.length === 0 ? (
        <p className="text-white text-center">
          No books available in this country.</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {books.map((book) => (
          <div key={book.id} className="flex flex-col items-start bg-white/20 p-4 rounded-lg text-white shadow-md">
          <BookItem book={book} />
          {/* Delete button below the details */}
                {book.userId === currentUser.id && (
                  <button
                    onClick={() => handleDelete(book.id)}
                    className="mt-4 px-4 py-2 bg-white/30 text-red-700 font-medium rounded-lg hover:bg-white/50 transition"
                  >
                    Delete
                  </button>
                )}
              </div>
            ))}
          </div>
         )}
        </div>
      </div>

    </main>
  </div>
  );
}


export default BooksListPage;
