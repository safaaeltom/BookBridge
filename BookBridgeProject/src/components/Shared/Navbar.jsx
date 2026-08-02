import { Link } from 'react-router-dom';
import { useCountry } from "../../Context/CountryContext";

function Navbar() {
    const { selectedCountry } = useCountry();

    return ( 
        <nav className="fixed top-0 left-0 w-full z-50 flex justify-center gap-4 p-4 bg-white/10 backdrop-blur-md">
            <Link to="/" className="px-5 py-2 rounded-lg bg-white/20 text-white shadow-md backdrop-blur-sm hover:bg-white/30 transition">Home</Link>
            <Link to={`/books-list?country=${selectedCountry}`} className="px-5 py-2 rounded-lg bg-white/20 text-white shadow-md backdrop-blur-sm hover:bg-white/30 transition">Get a Book</Link>
            <Link to={`/give-book?country=${selectedCountry}`} className="px-5 py-2 rounded-lg bg-white/20 text-white shadow-md backdrop-blur-sm hover:bg-white/30 transition">Give a Book</Link>
        </nav>
     );
}
 
export default Navbar;