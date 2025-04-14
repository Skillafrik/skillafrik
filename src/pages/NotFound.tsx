
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-orange-500 mb-4">404</h1>
          <p className="text-2xl text-gray-700 mb-6">Oups! Cette page n'existe pas</p>
          <p className="text-gray-500 mb-8">
            La page que vous recherchez a peut-être été déplacée ou n'existe plus.
          </p>
          <Link
            to="/"
            className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-colors"
          >
            Retourner à l'accueil
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
