
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <div className="bg-orange-500 text-white font-bold rounded w-8 h-8 flex items-center justify-center mr-1">S</div>
              <span className="font-bold text-xl">SkillAfrik</span>
            </Link>
            <p className="text-gray-400 mb-4">
              La plateforme de formation en ligne adaptée aux besoins du marché africain.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-400">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a href="#" className="hover:text-orange-400">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
              <a href="#" className="hover:text-orange-400">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="hover:text-orange-400">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><Link to="/cours" className="text-gray-400 hover:text-orange-400">Tous les cours</Link></li>
              <li><Link to="/a-propos" className="text-gray-400 hover:text-orange-400">À propos</Link></li>
              <li><Link to="/affiliation" className="text-gray-400 hover:text-orange-400">Programme d'affiliation</Link></li>
              <li><Link to="/partenaire" className="text-gray-400 hover:text-orange-400">Devenir partenaire</Link></li>
              <li><Link to="/devenir-formateur" className="text-gray-400 hover:text-orange-400">Devenir formateur</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Catégories</h3>
            <ul className="space-y-2">
              <li><Link to="/categories/business" className="text-gray-400 hover:text-orange-400">Business & Entrepreneuriat</Link></li>
              <li><Link to="/categories/agriculture" className="text-gray-400 hover:text-orange-400">Agriculture</Link></li>
              <li><Link to="/categories/technologie" className="text-gray-400 hover:text-orange-400">Technologie</Link></li>
              <li><Link to="/categories/ia" className="text-gray-400 hover:text-orange-400">Intelligence Artificielle</Link></li>
              <li><Link to="/categories/marketing" className="text-gray-400 hover:text-orange-400">Marketing Digital</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Nous Contacter</h3>
            <p className="text-gray-400 mb-4">
              Abidjan, Côte d'Ivoire<br />
              contact@skillafrik.com<br />
              +225 07 98 XX XX XX
            </p>
            <Link to="/inscription" className="bg-orange-500 text-white px-4 py-2 rounded block text-center hover:bg-orange-600 transition-colors">
              Rejoignez-nous
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© {currentYear} SkillAfrik. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
