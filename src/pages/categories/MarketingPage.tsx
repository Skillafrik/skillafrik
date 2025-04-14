
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CourseCard from '../../components/CourseCard';
import SearchBar from '../../components/SearchBar';
import { LineChart } from 'lucide-react';

const MarketingPage = () => {
  // Données fictives pour les cours de marketing
  const marketingCourses = [
    {
      id: "4",
      title: "Marketing Digital: Stratégies pour le Marché Africain",
      instructor: "Omar Sow",
      rating: 4.6,
      reviewCount: 189,
      price: 34.99,
      originalPrice: 59.99,
      imageUrl: "/lovable-uploads/f17886cc-fb6d-42ee-ab0c-4fc0ac15222f.png",
      level: "Intermédiaire",
      duration: 20,
      students: 1520
    },
    {
      id: "m1",
      title: "Social Media Marketing pour Entreprises Africaines",
      instructor: "Aminata Touré",
      rating: 4.8,
      reviewCount: 145,
      price: 29.99,
      originalPrice: 49.99,
      imageUrl: "/lovable-uploads/f17886cc-fb6d-42ee-ab0c-4fc0ac15222f.png",
      level: "Débutant",
      duration: 16,
      students: 1245
    },
    {
      id: "m2",
      title: "Branding et Création de Contenu Local",
      instructor: "David Okafor",
      rating: 4.7,
      reviewCount: 132,
      price: 34.99,
      originalPrice: 54.99,
      imageUrl: "/lovable-uploads/f17886cc-fb6d-42ee-ab0c-4fc0ac15222f.png",
      level: "Tous niveaux",
      duration: 18,
      students: 958
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Banner */}
      <section className="bg-gradient-to-r from-pink-50 to-pink-100 py-16">
        <div className="container mx-auto px-4 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3">
              <div className="flex items-center mb-4">
                <LineChart className="h-8 w-8 text-pink-600 mr-2" />
                <h1 className="text-3xl font-bold">Marketing Digital</h1>
              </div>
              <p className="text-gray-600 mb-8 max-w-2xl">
                Apprenez à promouvoir efficacement votre entreprise en ligne avec des stratégies adaptées aux marchés africains.
              </p>
              <SearchBar />
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0">
              <img 
                src="/lovable-uploads/f17886cc-fb6d-42ee-ab0c-4fc0ac15222f.png" 
                alt="Marketing Digital" 
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
            {marketingCourses.map((course) => (
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

export default MarketingPage;
