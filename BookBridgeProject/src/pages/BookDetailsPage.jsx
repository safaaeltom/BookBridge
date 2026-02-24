import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

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
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">{book.title}</h1>

      {book.image && (
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-64 object-cover mb-4 rounded"
        />
      )}

      <p><strong>Category:</strong> {book.category}</p>
      <p><strong>Donor:</strong> {book.donor}</p>
      <p><strong>Country:</strong> {book.country}</p>
    </div>
  );
}

export default BookDetailsPage;