import { useLocation } from "react-router-dom";
import BookForm from "../components/BookForm";
import bgImage from "../assets/books-bg.jpg";

function GiveBookPage() {
  const location = useLocation();
  const preselectedCountry = location.state?.country || "";

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center"
  style={{ backgroundImage: `url(${bgImage})` }}
>
  <div className="bg-white bg-opacity-60 p-4 sm:p-6 rounded max-w-md w-full">
    <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-white drop-shadow-lg">
        Donate a Book
      </h1>

      <BookForm preselectedCountry={preselectedCountry} />
    </div>
    </div>
  );
}

export default GiveBookPage;
