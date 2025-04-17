
import { Link } from "react-router-dom";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Briefcase, 
  Leaf, 
  Cpu, 
  Brain, 
  LineChart,
  ChevronDown,
  Menu,
  X,
  PanelTop
} from "lucide-react";
import { useState } from "react";
import { useAdminAuth } from "@/contexts/AdminAuthContext";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated } = useAdminAuth();

  const categories = [
    {
      name: "Business & Entrepreneuriat",
      path: "/categories/business",
      icon: <Briefcase className="h-4 w-4 mr-2 text-orange-500" />
    },
    {
      name: "Agriculture",
      path: "/categories/agriculture",
      icon: <Leaf className="h-4 w-4 mr-2 text-orange-500" />
    },
    {
      name: "Technologie",
      path: "/categories/technologie",
      icon: <Cpu className="h-4 w-4 mr-2 text-orange-500" />
    },
    {
      name: "Intelligence Artificielle",
      path: "/categories/ia",
      icon: <Brain className="h-4 w-4 mr-2 text-orange-500" />
    },
    {
      name: "Marketing Digital",
      path: "/categories/marketing",
      icon: <LineChart className="h-4 w-4 mr-2 text-orange-500" />
    }
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
      <div className="container mx-auto h-16 px-4">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <div className="bg-orange-500 text-white font-bold rounded w-8 h-8 flex items-center justify-center mr-1">S</div>
            <span className="font-bold text-gray-800">SkillAfrik</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 h-full">
            <Link to="/cours" className="text-gray-700 hover:text-gray-900 font-medium h-full flex items-center border-b-2 border-transparent hover:border-orange-500">
              Cours
            </Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-gray-900 font-medium bg-transparent h-full">
                    Catégories
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="p-2 w-[280px] bg-white">
                      {categories.map((category, index) => (
                        <li key={index}>
                          <Link 
                            to={category.path} 
                            className="flex items-center p-2 text-gray-700 hover:bg-orange-50 rounded-md"
                          >
                            {category.icon}
                            <span>{category.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link to="/affiliation" className="text-gray-700 hover:text-gray-900 font-medium h-full flex items-center border-b-2 border-transparent hover:border-orange-500">
              Affiliation
            </Link>
            
            <Link to="/a-propos" className="text-gray-700 hover:text-gray-900 font-medium h-full flex items-center border-b-2 border-transparent hover:border-orange-500">
              À propos
            </Link>
            
            {isAuthenticated && (
              <Link 
                to="/panel" 
                className="text-gray-700 hover:text-gray-900 font-medium h-full flex items-center border-b-2 border-transparent hover:border-orange-500"
              >
                <PanelTop className="mr-2 h-4 w-4" />
                Panel Admin
              </Link>
            )}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              to="/connexion" 
              className="text-gray-700 hover:text-gray-900 font-medium px-4 py-2"
            >
              Se connecter
            </Link>
            <Link 
              to="/inscription" 
              className="bg-orange-500 text-white font-medium px-4 py-2 rounded hover:bg-orange-600 transition-colors"
            >
              S'inscrire
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-md"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto py-4 px-4 space-y-4">
            <Link to="/cours" className="block py-2 text-gray-700 hover:text-gray-900">
              Cours
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center py-2 text-gray-700 w-full justify-between hover:text-gray-900">
                Catégories <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full">
                {categories.map((category, index) => (
                  <DropdownMenuItem key={index} asChild>
                    <Link to={category.path} className="flex items-center">
                      {category.icon}
                      <span>{category.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link to="/affiliation" className="block py-2 text-gray-700 hover:text-gray-900">
              Affiliation
            </Link>
            <Link to="/a-propos" className="block py-2 text-gray-700 hover:text-gray-900">
              À propos
            </Link>
            
            {isAuthenticated && (
              <Link 
                to="/panel" 
                className="block py-2 text-gray-700 hover:text-gray-900 flex items-center"
              >
                <PanelTop className="mr-2 h-4 w-4" />
                Panel Admin
              </Link>
            )}
            
            <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
              <Link to="/connexion" className="text-center py-2 text-gray-700 hover:text-gray-900">
                Se connecter
              </Link>
              <Link to="/inscription" className="text-center bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition-colors">
                S'inscrire
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
