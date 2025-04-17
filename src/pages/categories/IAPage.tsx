
import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CourseCard from '../../components/CourseCard';
import SearchBar from '../../components/SearchBar';
import { Brain } from 'lucide-react';
import { useCourses } from '../../utils/courseStorage';

const IAPage = () => {
  const { getCoursesByCategory } = useCourses();
  const [iaCourses, setIaCourses] = useState(getCoursesByCategory('IA'));
  
  useEffect(() => {
    setIaCourses(getCoursesByCategory('IA'));
  }, [getCoursesByCategory]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Banner */}
      <section className="bg-gradient-to-r from-purple-50 to-purple-100 py-16">
        <div className="container mx-auto px-4 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full">
              <div className="flex items-center mb-4 justify-center md:justify-start">
                <Brain className="h-8 w-8 text-purple-600 mr-2" />
                <h1 className="text-3xl font-bold">Intelligence Artificielle</h1>
              </div>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto md:mx-0">
                Explorez le potentiel transformateur de l'IA et apprenez à développer des solutions innovantes pour les défis africains.
              </p>
              <SearchBar />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Cours populaires dans cette catégorie</h2>
          
          {iaCourses.length > 0 ? (
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {iaCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  {...course}
                />
              ))}
            </div>
          ) : (
            <div className="mt-8 text-center py-12 border border-dashed border-gray-300 rounded-lg">
              <h3 className="text-xl font-medium text-gray-600">Aucun cours disponible actuellement</h3>
              <p className="text-gray-500 mt-2">Revenez bientôt pour découvrir nos nouveaux cours d'IA</p>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default IAPage;
