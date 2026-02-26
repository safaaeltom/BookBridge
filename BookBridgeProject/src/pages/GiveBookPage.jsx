import { useLocation } from "react-router-dom";
import BookForm from "../components/BookForm";
import bgImage from "../assets/books-bg.jpg";

function GiveBookPage() {
  const location = useLocation();
  const preselectedCountry = location.state?.country || "";

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 sm:px-6 lg:px-8"
  style={{ backgroundImage: `url(${bgImage})` }}
>
  <div className="bg-white/20 p-4 sm:p-6 md:p-8 rounded-xl max-w-md w-full backdrop-blur-md shadow-lg">
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center text-white drop-shadow-lg">
          Donate a Book
      </h1>

      <BookForm preselectedCountry={preselectedCountry} />
    </div>
    </div>
  );
}

export default GiveBookPage;
