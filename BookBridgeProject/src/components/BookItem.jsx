import { useNavigate } from "react-router-dom";

function BookItem({ book }) {
  const navigate = useNavigate();

  return (
    <div
      className="border p-4 rounded shadow cursor-pointer"
      onClick={() => navigate(`/books/${book.id}`)}
    >
      {book.image && (
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-40 object-cover mb-2 rounded"
        />
      )}

      <h2 className="text-lg font-semibold">{book.title}</h2>
      <p className="text-sm text-white">{book.category}</p>
      <p className="text-sm">Country: {book.country}</p>
    </div>
  );
}

export default BookItem;