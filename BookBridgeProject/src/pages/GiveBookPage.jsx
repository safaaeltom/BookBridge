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
  <div className="bg-white/20 p-5 rounded max-w-md w-full backdrop-blur-md">
    <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-white drop-shadow-lg">
        Donate a Book
      </h1>

      <BookForm preselectedCountry={preselectedCountry} />
    </div>
    </div>
  );
}

export default GiveBookPage;
