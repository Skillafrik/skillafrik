
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CourseCard from '../../components/CourseCard';
import SearchBar from '../../components/SearchBar';
import { Cpu } from 'lucide-react';

const TechnologiePage = () => {
  // Données fictives pour les cours de technologie avec prix en FCFA
  const techCourses = [
    {
      id: "2",
      title: "Développement Web Full-Stack avec React et Node.js",
      instructor: "Emmanuel Odei",
      rating: 4.7,
      reviewCount: 315,
      price: 20000,
      originalPrice: 35000,
      level: "Intermédiaire",
      duration: 32,
      students: 2150
    },
    {
      id: "t1",
      title: "Développement d'Applications Mobiles pour l'Afrique",
      instructor: "Fatoumata Camara",
      rating: 4.8,
      reviewCount: 187,
      price: 22500,
      originalPrice: 37500,
      level: "Intermédiaire",
      duration: 28,
      students: 1354
    },
    {
      id: "t2",
      title: "Solutions Technologiques à Faible Connectivité",
      instructor: "Ahmed Diop",
      rating: 4.9,
      reviewCount: 142,
      price: 17500,
      originalPrice: 30000,
      level: "Tous niveaux",
      duration: 16,
      students: 876
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Banner */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="container mx-auto px-4 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full">
              <div className="flex items-center mb-4 justify-center md:justify-start">
                <Cpu className="h-8 w-8 text-blue-600 mr-2" />
                <h1 className="text-3xl font-bold">Technologie</h1>
              </div>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto md:mx-0">
                Maîtrisez les compétences technologiques les plus demandées et participez à la transformation numérique de l'Afrique.
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
            {techCourses.map((course) => (
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

export default TechnologiePage;
