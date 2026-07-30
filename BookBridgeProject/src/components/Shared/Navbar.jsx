import { Link } from 'react-router-dom';

function Navbar() {
    return ( 
        <nav className="backdrop-blur-sm flex justify-center gap-8 p-4">
            <Link to="/" className="text-white hover:text-gray-200 transition-colors">Home</Link>
            <Link to="/books-list" className="text-white hover:text-gray-200 transition-colors">Get a Book</Link>
            <Link to="/give-book" className="text-white hover:text-gray-200 transition-colors">Give a Book</Link>
        </nav>
     );
}
 
export default Navbar;