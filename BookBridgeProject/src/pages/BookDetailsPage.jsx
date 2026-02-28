import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import bgImage from "../assets/books-bg.jpg";

function BookDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
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
  <div 
    className="relative min-h-screen bg-cover bg-center flex flex-col px-4 py-12"
    style={{backgroundImage: `url(${bgImage})`}}
>
   
   {/* Content Wrapper */}
  <div className="flex flex-col items-center flex-1">
   
   {/* Glass card */}
   <div className="bg-white/20 backdrop-blur-md border border-white/50 rounded-xl p-4 sm:p-6 md:p-8 text-white shadow-2xl max-w-4xl w-full">
      <div className="flex flex-col md:flex-row gap-8 items-start">

      {/* IMAGE */}
      <img
      src={book.image || "https://via.placeholder.com/300x400?text=No+Image"}
      alt={book.title}
      className="w-full md:w-72 h-64 md:h-80 object-cover rounded-lg border border-white/40"
  />
  
      {/* DETAILS */}
      <div className="flex-1 space-y-2 text-sm sm:text-base">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center md:text-left">
        {book.title}
      </h1>

      <p><strong>Category:</strong> {book.category}</p>
      <p><strong>Condition:</strong> {book.condition}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Donor:</strong> {book.donorName}</p>
      <p><strong>Contact:</strong> {book.donorEmail}</p>
     </div>

    </div>
  </div>

  </div>

  {/* Button - bottom*/}
  <div className="flex justify-center mt-10">
            <button
              className="px-8 py-3 bg-white/20 text-white font-bold border border-white/50 rounded-lg hover:bg-white/30 transition backdrop-blur-md"
              onClick={() => navigate("/give-book")}
            >
              GIVE BOOKS IN {book.country || "Selected Country"}
            </button>
      </div>
    </div>
 );
}

export default BookDetailsPage;