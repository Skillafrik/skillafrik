
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import CourseCard from '../components/CourseCard';
import CourseTabs from '../components/CourseTabs';

const CoursesPage = () => {
  // Données fictives pour les cours
  const courses = [
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
      id: "3",
      title: "Design Graphique pour les Entrepreneurs Africains",
      instructor: "Fatou Ndiaye",
      rating: 4.9,
      reviewCount: 218,
      price: 24.99,
      originalPrice: 39.99,
      imageUrl: "/lovable-uploads/2ae69fb7-b69a-4712-b671-9c113ae4904b.png",
      level: "Tous niveaux",
      duration: 14,
      students: 1876
    },
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
      id: "5",
      title: "Agriculture Durable en Afrique Subsaharienne",
      instructor: "Dr. Kofi Mensah",
      rating: 4.9,
      reviewCount: 156,
      price: 29.99,
      originalPrice: 44.99,
      imageUrl: "/lovable-uploads/f96b3759-24d2-44dc-bfda-7933d2a85e6f.png",
      level: "Débutant",
      duration: 15,
      students: 980
    },
    {
      id: "6",
      title: "Intelligence Artificielle: Applications Pratiques",
      instructor: "Amina Toure",
      rating: 4.7,
      reviewCount: 112,
      price: 49.99,
      originalPrice: 79.99,
      imageUrl: "/lovable-uploads/dc7bdddf-77c4-4b52-acff-4e1849f65f4a.png",
      level: "Avancé",
      duration: 25,
      students: 645
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

  const tabs = ["Tous les cours", "Les plus populaires", "Nouveautés", "Cours gratuits"];
  const [activeTab, setActiveTab] = useState("Tous les cours");

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
          <SearchBar />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {/* Course filters/tabs */}
          <CourseTabs tabs={tabs} defaultTab="Tous les cours" />
          
          {/* Course grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((course) => (
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

export default CoursesPage;
