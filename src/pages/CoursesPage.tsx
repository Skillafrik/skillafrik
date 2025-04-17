
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import CourseCard from '../components/CourseCard';
import CourseTabs from '../components/CourseTabs';
import { useCourses } from '../contexts/CourseContext';
import { toast } from '../components/ui/use-toast';

const CoursesPage = () => {
  const { getPublishedCourses } = useCourses();
  const [courses, setCourses] = useState(getPublishedCourses());
  const [searchTerm, setSearchTerm] = useState("");
  
  const tabs = ["Tous les cours", "Les plus populaires", "Nouveautés", "Cours gratuits"];
  const [activeTab, setActiveTab] = useState("Tous les cours");
  
  useEffect(() => {
    // Refresh courses when the component mounts
    setCourses(getPublishedCourses());
  }, [getPublishedCourses]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (!term.trim()) {
      setCourses(getPublishedCourses());
      return;
    }
    
    const filtered = getPublishedCourses().filter(course => 
      course.title.toLowerCase().includes(term.toLowerCase()) ||
      course.instructor.toLowerCase().includes(term.toLowerCase()) ||
      course.level.toLowerCase().includes(term.toLowerCase()) ||
      course.category.toLowerCase().includes(term.toLowerCase())
    );
    
    setCourses(filtered);
    
    if (filtered.length === 0) {
      toast({
        title: "Aucun résultat",
        description: `Aucun cours ne correspond à "${term}"`,
        variant: "destructive"
      });
    }
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    
    const allCourses = getPublishedCourses();
    
    switch(tab) {
      case "Les plus populaires":
        setCourses([...allCourses].sort((a, b) => b.students - a.students));
        break;
      case "Nouveautés":
        // In a real app, you would sort by date. Here we'll just simulate it
        setCourses([...allCourses].sort((a, b) => b.id.localeCompare(a.id)));
        break;
      case "Cours gratuits":
        setCourses(allCourses.filter(course => course.price === 0));
        break;
      default:
        setCourses(allCourses);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Banner */}
      <section className="bg-gradient-to-r from-orange-50 to-orange-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Explorez tous nos cours</h1>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Développez vos compétences avec notre sélection de cours de haute qualité, conçus spécifiquement pour répondre aux besoins du marché africain.
          </p>
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Rechercher des cours..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {/* Course filters/tabs */}
          <CourseTabs 
            tabs={tabs} 
            defaultTab="Tous les cours" 
            onTabChange={handleTabChange}
          />
          
          {/* Course grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.length > 0 ? (
              courses.map((course) => (
                <CourseCard
                  key={course.id}
                  {...course}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-xl font-medium text-gray-600">Aucun cours trouvé</h3>
                <p className="text-gray-500 mt-2">Essayez de modifier vos critères de recherche</p>
              </div>
            )}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CoursesPage;
