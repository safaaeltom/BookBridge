import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import bgImage from "../assets/books-bg.jpg";
import Navbar from "../components/Shared/Navbar";

function BookDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};

  useEffect(() => {
    const books = JSON.parse(localStorage.getItem("books")) || [];
    const foundBook = books.find((b) => b.id === Number(id));

    setBook(foundBook);
  }, [id]);

  function handleDelete() {
  const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
  const updatedBooks = storedBooks.filter(
    (b) => b.id !== book.id
  );

  localStorage.setItem("books", JSON.stringify(updatedBooks));

  navigate("/books-list");
}

  if (!book) {
     return (
      <div
        className="min-h-screen bg-cover bg-center flex flex-col"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <Navbar />

        <p className="text-white text-center mt-10 text-xl">
          Book not found.
        </p>
      </div>
    );
  }

  return (
  <div className=" min-h-screen relative">
    
    {/* Fixed background */}
    <div
      className="fixed inset-0 bg-cover bg-center"
      style={{backgroundImage: `url(${bgImage})`}}
    />
   <Navbar />
   {/* Content Wrapper */}
    <main className="flex-1 flex justify-center px-4 sm:px-6 lg:px-8 py-10 pt-25">
    <div className="w-full max-w-7xl">
   
   {/* Glass card */}
    <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-4 sm:p-6 md:p-8 text-white shadow-2xl">
    <div className="flex flex-col md:flex-row gap-8">
  
      {/* DETAILS - left*/}
      <div className="flex-1 space-y-2 text-sm sm:text-base">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center md:text-left">
        {book.title}
      </h1>

      <p><strong>Category:</strong> {book.category}</p>
      <p><strong>Condition:</strong> {book.condition}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Donor:</strong> {book.donorName}</p>
      <p><strong>Contact:</strong> {book.donorEmail}</p>

      {book.userId === currentUser.id && (
      <button
        onClick={handleDelete}
        className="mt-4 px-4 py-2 bg-white/30 text-red-700 font-medium rounded-lg hover:bg-white/50 transition"
      >
        Delete
      </button>
      )}
     </div>

     {/* IMAGE - right*/}
      <img
        src={book.image || "https://via.placeholder.com/300x400?text=No+Image"}
        alt={book.title}
        className="w-full md:w-72 h-64 md:h-80 object-cover rounded-lg border border-white/30"
      />

      </div>
    </div>
  </div>
   </main>

  </div>
 );
}


export default BookDetailsPage;