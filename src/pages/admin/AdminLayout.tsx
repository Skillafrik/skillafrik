
import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarFooter, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarGroup, SidebarGroupLabel } from "@/components/ui/sidebar";
import { Settings, Users, BookOpen, Award, LineChart, Home, DollarSign, Share2, Moon, Sun, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useMobile } from "@/hooks/use-mobile";

const AdminLayout = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const location = useLocation();
  const isMobile = useMobile();
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);
  
  useEffect(() => {
    // Adjust sidebar state when screen size changes
    setSidebarOpen(!isMobile);
  }, [isMobile]);
  
  // Déterminer si nous sommes sur une page de paramètres
  const isSettingsPage = location.pathname.includes('/panel/parametres');
  
  // Déterminer quel onglet est actif basé sur l'URL
  const getActiveSettingsTab = () => {
    if (location.pathname.includes('/securite')) return "securite";
    if (location.pathname.includes('/notifications')) return "notifications";
    if (location.pathname.includes('/paiements')) return "paiements";
    if (location.pathname.includes('/systeme')) return "systeme";
    return "general";
  };

  const navigationItems = [
    { title: "Tableau de bord", path: "/panel", icon: Home },
    { title: "Utilisateurs", path: "/panel/utilisateurs", icon: Users },
    { title: "Cours", path: "/panel/cours", icon: BookOpen },
    { title: "Formateurs", path: "/panel/formateurs", icon: Award },
    { title: "Affiliés", path: "/panel/affilies", icon: Share2 },
    { title: "Analytics", path: "/panel/analytics", icon: LineChart },
    { title: "Paramètres", path: "/panel/parametres", icon: Settings },
  ];

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Mobile sidebar as Sheet component
  const MobileSidebar = () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="lg:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 w-64">
        <div className="bg-blue-600 text-white h-full flex flex-col">
          <div className="flex items-center justify-center p-4 border-b border-blue-700">
            <Link to="/panel" className="text-2xl font-bold text-white">SkillAfrik</Link>
            <div className="text-xs opacity-70 ml-2">Panel v1.0</div>
          </div>
          
          <div className="flex-1 overflow-y-auto py-2">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-4 py-3 text-sm ${
                  location.pathname === item.path
                    ? "bg-blue-700"
                    : "hover:bg-blue-700/50"
                }`}
              >
                <item.icon className="h-5 w-5 mr-3" />
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
          
          <div className="p-4 border-t border-blue-700">
            <div className="text-xs opacity-70 text-center">
              © 2025 SkillAfrik<br />
              Panel v1.0
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );

  // Desktop sidebar
  const DesktopSidebar = () => (
    <SidebarProvider defaultOpen={sidebarOpen}>
      <Sidebar className="hidden lg:flex">
        <SidebarHeader className="flex flex-col items-center justify-center p-4">
          <div className="flex items-center justify-between w-full">
            <Link to="/panel" className="text-2xl font-bold text-white">SkillAfrik</Link>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:bg-blue-700"
              onClick={toggleSidebar}
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
          <div className="text-xs opacity-70">Panel v1.0</div>
        </SidebarHeader>
        
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton asChild tooltip={item.title} isActive={location.pathname === item.path}>
                    <Link to={item.path}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        
        <SidebarFooter className="p-4">
          <div className="text-xs opacity-70 text-center">
            © 2025 SkillAfrik<br />
            Panel v1.0
          </div>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  );

  return (
    <div className="flex min-h-screen w-full bg-gray-50">
      {/* Desktop Sidebar */}
      <DesktopSidebar />

      <div className="flex-1 flex flex-col min-h-screen">
        <header className="bg-white shadow-sm border-b border-gray-200 py-4 px-6 flex justify-between items-center">
          <div className="flex items-center">
            <MobileSidebar />
            <h1 className="text-xl font-semibold md:block hidden ml-2">Panel d'administration</h1>
            <h1 className="text-xl font-semibold md:hidden block ml-2">SkillAfrik Panel</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Rechercher..."
                className="py-2 px-4 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="absolute right-3 top-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
            </div>

            <Button 
              variant="outline" 
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </Button>

            <button className="p-2 rounded-full hover:bg-gray-100 relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </button>

            <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
              A
            </div>
          </div>
        </header>

        {isSettingsPage && (
          <div className="bg-white border-b border-gray-200 px-4 md:px-6 overflow-x-auto">
            <Tabs 
              defaultValue={getActiveSettingsTab()} 
              className="w-full flex justify-start"
            >
              <TabsList className="bg-gray-100 p-1 rounded-md flex whitespace-nowrap">
                <TabsTrigger value="general" asChild>
                  <Link to="/panel/parametres" className="px-4 py-2">Général</Link>
                </TabsTrigger>
                <TabsTrigger value="paiements" asChild>
                  <Link to="/panel/parametres/paiements" className="px-4 py-2">Paiements</Link>
                </TabsTrigger>
                <TabsTrigger value="notifications" asChild>
                  <Link to="/panel/parametres/notifications" className="px-4 py-2">Notifications</Link>
                </TabsTrigger>
                <TabsTrigger value="securite" asChild>
                  <Link to="/panel/parametres/securite" className="px-4 py-2">Sécurité</Link>
                </TabsTrigger>
                <TabsTrigger value="systeme" asChild>
                  <Link to="/panel/parametres/systeme" className="px-4 py-2">Système</Link>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        )}

        <main className="flex-1 p-4 md:p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
