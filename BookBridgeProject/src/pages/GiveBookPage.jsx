import { useLocation } from "react-router-dom";
import BookForm from "../components/GiveBook/BookForm";
import bgImage from "../assets/books-bg.jpg";
import Navbar from "../components/Shared/Navbar";

function GiveBookPage() {
  const location = useLocation();
  const preselectedCountry = location.state?.country || "";

  return (
  
    <div className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
  <Navbar/>
  
  <div className="flex-1 flex items-center justify-center px-4">
  <div className="bg-white/20 p-4 sm:p-6 md:p-8 rounded-xl max-w-md w-full backdrop-blur-md shadow-lg">
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center text-white drop-shadow-lg">
          Donate a Book
      </h1>

      <BookForm preselectedCountry={preselectedCountry} />
    </div>
    </div>
    </div>
  );
}

export default GiveBookPage;
