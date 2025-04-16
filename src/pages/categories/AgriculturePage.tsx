
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CourseCard from '../../components/CourseCard';
import SearchBar from '../../components/SearchBar';
import { Leaf } from 'lucide-react';

const AgriculturePage = () => {
  // Données fictives pour les cours d'agriculture avec prix en FCFA
  const agricultureCourses = [
    {
      id: "5",
      title: "Agriculture Durable en Afrique Subsaharienne",
      instructor: "Dr. Kofi Mensah",
      rating: 4.9,
      reviewCount: 156,
      price: 15000,
      originalPrice: 22500,
      level: "Débutant",
      duration: 15,
      students: 980
    },
    {
      id: "a1",
      title: "Techniques d'Irrigation Moderne pour l'Afrique",
      instructor: "Sarah Mensah",
      rating: 4.7,
      reviewCount: 120,
      price: 17500,
      originalPrice: 25000,
      level: "Intermédiaire",
      duration: 18,
      students: 745
    },
    {
      id: "a2",
      title: "Cultures Résistantes au Changement Climatique",
      instructor: "Jean Moulin",
      rating: 4.8,
      reviewCount: 98,
      price: 15000,
      originalPrice: 22500,
      level: "Tous niveaux",
      duration: 14,
      students: 602
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Banner */}
      <section className="bg-gradient-to-r from-green-50 to-green-100 py-16">
        <div className="container mx-auto px-4 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full">
              <div className="flex items-center mb-4 justify-center md:justify-start">
                <Leaf className="h-8 w-8 text-green-600 mr-2" />
                <h1 className="text-3xl font-bold">Agriculture</h1>
              </div>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto md:mx-0">
                Découvrez des techniques agricoles modernes et durables adaptées aux défis spécifiques du continent africain.
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
          
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {agricultureCourses.map((course) => (
              <CourseCard
                key={course.id}
                {...course}
              />
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AgriculturePage;
