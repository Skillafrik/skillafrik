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
    <header className="border-b border-gray-100 bg-white sticky top-0 z-40">
      <div className="container mx-auto flex items-center h-16 px-4 justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="bg-orange-500 text-white font-bold rounded w-8 h-8 flex items-center justify-center mr-1">S</div>
            <span className="font-bold text-gray-800">SkillAfrik</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/cours" className="text-gray-600 hover:text-gray-900">Cours</Link>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-600 hover:text-gray-900 bg-transparent">
                  Catégories
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-2 w-[280px] bg-white">
                  <ul className="grid gap-1">
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
          
          <Link to="/affiliation" className="text-gray-600 hover:text-gray-900">Affiliation</Link>
          <Link to="/a-propos" className="text-gray-600 hover:text-gray-900">À propos</Link>
          
          {isAuthenticated && (
            <Link 
              to="/panel" 
              className="text-gray-600 hover:text-gray-900 flex items-center"
            >
              <PanelTop className="mr-2 h-4 w-4" />
              Panel Admin
            </Link>
          )}
        </nav>

        <div className="hidden md:flex items-center space-x-2">
          <Link to="/connexion" className="text-gray-600 hover:text-gray-900 px-3 py-2">
            Se connecter
          </Link>
          <Link to="/inscription" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors">
            S'inscrire
          </Link>
        </div>

        <button 
          className="md:hidden text-gray-600"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4">
          <div className="container mx-auto px-4 space-y-4">
            <Link to="/cours" className="block py-2 text-gray-600">Cours</Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center py-2 text-gray-600 w-full justify-between">
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
            
            <Link to="/affiliation" className="block py-2 text-gray-600">Affiliation</Link>
            <Link to="/a-propos" className="block py-2 text-gray-600">À propos</Link>
            
            {isAuthenticated && (
              <Link 
                to="/panel" 
                className="block py-2 text-gray-600 flex items-center"
              >
                <PanelTop className="mr-2 h-4 w-4" />
                Panel Admin
              </Link>
            )}
            
            <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
              <Link to="/connexion" className="text-center py-2 text-gray-600">
                Se connecter
              </Link>
              <Link to="/inscription" className="text-center bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
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
