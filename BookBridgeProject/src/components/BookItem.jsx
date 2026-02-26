import { useNavigate } from "react-router-dom";

function BookItem({ book }) {
  const navigate = useNavigate();

  return (
    <div
      className="border p-4 sm:p-5 rounded-lg shadow-md cursor-pointer  hover:bg-white/10 transition"
      onClick={() => navigate(`/books/${book.id}`)}
    >
      {book.image && (
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-40 sm:h-52 md:h-60 lg:h-64 object-cover mb-3 rounded-lg"
        />
      )}

      <h2 className="text-md sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 line-clamp-2">{book.title}</h2>
      <p className="text-xs sm:text-sm md:text-base text-gray-300 line-clamp-1">{book.category}</p>
    </div>
  );
}

export default BookItem;