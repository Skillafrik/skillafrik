
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CourseCard from '../../components/CourseCard';
import SearchBar from '../../components/SearchBar';
import { Briefcase } from 'lucide-react';

const BusinessPage = () => {
  // Données fictives pour les cours de business avec prix en FCFA
  const businessCourses = [
    {
      id: "1",
      title: "Introduction à l'entrepreneuriat en Afrique",
      instructor: "Dr. Aminata Diallo",
      rating: 4.8,
      reviewCount: 423,
      price: 15000,
      originalPrice: 25000,
      level: "Débutant",
      duration: 18,
      students: 3240
    },
    {
      id: "7",
      title: "Gestion de Projet Agile pour Startups",
      instructor: "Jean-Pierre Kouassi",
      rating: 4.8,
      reviewCount: 98,
      price: 18000,
      originalPrice: 28000,
      level: "Intermédiaire",
      duration: 12,
      students: 520
    },
    {
      id: "8",
      title: "Finance pour Entrepreneurs Africains",
      instructor: "Nadia Ahmed",
      rating: 4.5,
      reviewCount: 76,
      price: 20000,
      originalPrice: 25000,
      level: "Intermédiaire",
      duration: 16,
      students: 430
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Banner */}
      <section className="bg-gradient-to-r from-orange-50 to-orange-100 py-16">
        <div className="container mx-auto px-4 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full">
              <div className="flex items-center mb-4 justify-center md:justify-start">
                <Briefcase className="h-8 w-8 text-orange-500 mr-2" />
                <h1 className="text-3xl font-bold">Business & Entrepreneuriat</h1>
              </div>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto md:mx-0">
                Développez vos compétences en gestion d'entreprise et entrepreneuriat avec nos cours spécialement conçus pour le contexte africain.
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
            {businessCourses.map((course) => (
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

export default BusinessPage;
