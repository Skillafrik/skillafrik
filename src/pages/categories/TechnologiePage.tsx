
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CourseCard from '../../components/CourseCard';
import SearchBar from '../../components/SearchBar';
import { Cpu } from 'lucide-react';

const TechnologiePage = () => {
  // Données fictives pour les cours de technologie
  const techCourses = [
    {
      id: "2",
      title: "Développement Web Full-Stack avec React et Node.js",
      instructor: "Emmanuel Odei",
      rating: 4.7,
      reviewCount: 315,
      price: 39.99,
      originalPrice: 69.99,
      imageUrl: "/lovable-uploads/76515ee7-3b6b-48ff-bea1-6f548f18b6c1.png",
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
      price: 44.99,
      originalPrice: 74.99,
      imageUrl: "/lovable-uploads/76515ee7-3b6b-48ff-bea1-6f548f18b6c1.png",
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
      price: 34.99,
      originalPrice: 59.99,
      imageUrl: "/lovable-uploads/76515ee7-3b6b-48ff-bea1-6f548f18b6c1.png",
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
            <div className="md:w-2/3">
              <div className="flex items-center mb-4">
                <Cpu className="h-8 w-8 text-blue-600 mr-2" />
                <h1 className="text-3xl font-bold">Technologie</h1>
              </div>
              <p className="text-gray-600 mb-8 max-w-2xl">
                Maîtrisez les compétences technologiques les plus demandées et participez à la transformation numérique de l'Afrique.
              </p>
              <SearchBar />
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0">
              <img 
                src="/lovable-uploads/76515ee7-3b6b-48ff-bea1-6f548f18b6c1.png" 
                alt="Technologie" 
                className="rounded-lg shadow-md"
              />
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
