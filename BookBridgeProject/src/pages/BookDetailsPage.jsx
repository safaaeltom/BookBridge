import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import bgImage from "../assets/books-bg.jpg";

function BookDetailsPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const books = JSON.parse(localStorage.getItem("books")) || [];
    const foundBook = books.find((b) => b.id === Number(id));
    setBook(foundBook);
  }, [id]);

  if (!book) {
    return <div className="p-6">Book not found.</div>;
  }

  return (
    
    <div className="relative min-h-screen bg-cover bg-center flex items-center justify-center py-12"
  style={{
    backgroundImage: `url(${bgImage})`,
  }}
>
   <div className="bg-white/20 backdrop-blur-md border border-white/50 rounded-xl p-4 sm:p-6 md:p-8 text-white shadow-2xl max-w-4xl w-full">
      <div className="flex flex-col md:flex-row gap-8 items-start">

      {/* left side - IMAGE */}
      <img
    src={book.image || "https://via.placeholder.com/300x400?text=No+Image"}
    alt={book.title}
    className="w-full md:w-72 h-64 md:h-80 object-cover rounded-lg border border-white/40"
  />


      {/* right side - DETAILS */}
      <div className="flex-1 overflow-y-auto max-h-[60vh]">
      <h1 className="text-3xl font-bold mb-6 text-center md:text-left">
        {book.title}
      </h1>

      <p><strong>Category:</strong> {book.category}</p>
      <p><strong>Condition:</strong> {book.condition}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Version:</strong> {}</p>
      <p><strong>Donor:</strong> {book.donor}</p>
      <p><strong>Contact:</strong> {book.donorEmail}</p>
      
    </div>
  </div>
  </div>
  </div>
 );
}

export default BookDetailsPage;