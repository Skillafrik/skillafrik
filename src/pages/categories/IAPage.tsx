
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CourseCard from '../../components/CourseCard';
import SearchBar from '../../components/SearchBar';
import { Brain } from 'lucide-react';

const IAPage = () => {
  // Données fictives pour les cours d'IA avec prix en FCFA
  const iaCourses = [
    {
      id: "6",
      title: "Intelligence Artificielle: Applications Pratiques",
      instructor: "Amina Toure",
      rating: 4.7,
      reviewCount: 112,
      price: 25000,
      originalPrice: 40000,
      level: "Avancé",
      duration: 25,
      students: 645
    },
    {
      id: "ia1",
      title: "Machine Learning pour la Santé en Afrique",
      instructor: "Dr. Kwame Osei",
      rating: 4.9,
      reviewCount: 87,
      price: 27500,
      originalPrice: 45000,
      level: "Avancé",
      duration: 30,
      students: 412
    },
    {
      id: "ia2",
      title: "Introduction aux Grands Modèles de Langage (LLM)",
      instructor: "Sofia Mendes",
      rating: 4.8,
      reviewCount: 63,
      price: 22500,
      originalPrice: 35000,
      level: "Intermédiaire",
      duration: 18,
      students: 378
    }
  ];

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
          
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {iaCourses.map((course) => (
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

export default IAPage;
