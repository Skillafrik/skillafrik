
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="border-b border-gray-100 bg-white">
      <div className="container mx-auto flex justify-between items-center h-16 px-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="bg-orange-500 text-white font-bold rounded w-8 h-8 flex items-center justify-center mr-1">S</div>
            <span className="font-bold text-gray-800">SkillAfrik</span>
          </Link>
        </div>

        <nav className="hidden md:flex space-x-6">
          <Link to="/cours" className="text-gray-600 hover:text-gray-900">Cours</Link>
          <div className="relative group">
            <button className="text-gray-600 hover:text-gray-900 flex items-center">
              Catégories <span className="ml-1">▼</span>
            </button>
            {/* Dropdown menu could be added here */}
          </div>
          <Link to="/affiliation" className="text-gray-600 hover:text-gray-900">Affiliation</Link>
          <Link to="/partenaire" className="text-gray-600 hover:text-gray-900">Partenaires</Link>
          <Link to="/a-propos" className="text-gray-600 hover:text-gray-900">A propos</Link>
        </nav>

        <div className="flex items-center space-x-2">
          <Link to="/connexion" className="text-gray-600 hover:text-gray-900 px-3 py-2">
            Se connecter
          </Link>
          <Link to="/inscription" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors">
            S'inscrire
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
