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
   <div className="bg-white/20 backdrop-blur-md border border-white/50 rounded-xl p-8 text-white shadow-2xl max-w-md w-full">
      <h1 className="text-3xl font-bold mb-6b text-center">
        {book.title}
      </h1>

      {book.image && (
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-64 object-cover mb-6 rounded-lg border border-white/40"
        />
      )}

      <p><strong>Category:</strong> {book.category}</p>
      <p><strong>Condition:</strong> {book.condition}</p>
      <p><strong>Donor:</strong> {book.donor}</p>
      <p><strong>Country:</strong> {book.country}</p>
    </div>
  </div>
 );
}

export default BookDetailsPage;