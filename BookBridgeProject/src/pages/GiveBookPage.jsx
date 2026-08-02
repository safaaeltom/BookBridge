import { useLocation } from "react-router-dom";
import BookForm from "../components/GiveBook/BookForm";
import bgImage from "../assets/books-bg.jpg";
import Navbar from "../components/Shared/Navbar";

function GiveBookPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const preselectedCountry = params.get("country") || "";

  return (
  
    <div className="min-h-screen bg-cover bg-center bg-fixed flex flex-col"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
  <Navbar/>
  
  <div className="flex-1 flex items-start justify-center px-4 pt-25 pb-10">
  <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-4 sm:p-6 md:p-8 max-w-md w-full shadow-2xl">
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
