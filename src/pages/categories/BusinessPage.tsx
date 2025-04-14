
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CourseCard from '../../components/CourseCard';
import SearchBar from '../../components/SearchBar';
import { Briefcase } from 'lucide-react';

const BusinessPage = () => {
  // Données fictives pour les cours de business
  const businessCourses = [
    {
      id: "1",
      title: "Introduction à l'entrepreneuriat en Afrique",
      instructor: "Dr. Aminata Diallo",
      rating: 4.8,
      reviewCount: 423,
      price: 29.99,
      originalPrice: 49.99,
      imageUrl: "/lovable-uploads/282aaf7b-b5fc-491c-b6dc-946522da1cff.png",
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
      price: 34.99,
      originalPrice: 54.99,
      imageUrl: "/lovable-uploads/6223c4ac-466e-40ac-99b5-ccde004ece73.png",
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
      price: 39.99,
      originalPrice: 49.99,
      imageUrl: "/lovable-uploads/f1db26f4-4e64-460c-baf4-66653425c629.png",
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
            <div className="md:w-2/3">
              <div className="flex items-center mb-4">
                <Briefcase className="h-8 w-8 text-orange-500 mr-2" />
                <h1 className="text-3xl font-bold">Business & Entrepreneuriat</h1>
              </div>
              <p className="text-gray-600 mb-8 max-w-2xl">
                Développez vos compétences en gestion d'entreprise et entrepreneuriat avec nos cours spécialement conçus pour le contexte africain.
              </p>
              <SearchBar />
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0">
              <img 
                src="/lovable-uploads/f1db26f4-4e64-460c-baf4-66653425c629.png" 
                alt="Business & Entrepreneuriat" 
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
