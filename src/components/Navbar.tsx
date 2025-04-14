
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
  Briefcase, 
  Leaf, 
  Cpu, 
  Brain, 
  LineChart,
  ChevronDown
} from "lucide-react";

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
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-600 hover:text-gray-900 bg-transparent">
                  Catégories
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-2 w-[280px]">
                  <ul className="grid gap-1">
                    <li>
                      <Link to="/categories/business" className="flex items-center p-2 text-gray-700 hover:bg-orange-50 rounded-md">
                        <Briefcase className="h-4 w-4 mr-2 text-orange-500" />
                        <span>Business & Entrepreneuriat</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/categories/agriculture" className="flex items-center p-2 text-gray-700 hover:bg-orange-50 rounded-md">
                        <Leaf className="h-4 w-4 mr-2 text-orange-500" />
                        <span>Agriculture</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/categories/technologie" className="flex items-center p-2 text-gray-700 hover:bg-orange-50 rounded-md">
                        <Cpu className="h-4 w-4 mr-2 text-orange-500" />
                        <span>Technologie</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/categories/ia" className="flex items-center p-2 text-gray-700 hover:bg-orange-50 rounded-md">
                        <Brain className="h-4 w-4 mr-2 text-orange-500" />
                        <span>Intelligence Artificielle</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/categories/marketing" className="flex items-center p-2 text-gray-700 hover:bg-orange-50 rounded-md">
                        <LineChart className="h-4 w-4 mr-2 text-orange-500" />
                        <span>Marketing Digital</span>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
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
