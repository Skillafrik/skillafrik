
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StatCard from '../components/StatCard';
import { Users } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-50 to-orange-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">À Propos de SkillAfrik</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez notre mission, notre équipe et notre vision pour transformer l'éducation en Afrique et au-delà.
          </p>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="border-b border-gray-200 flex justify-center">
            <button className="px-6 py-3 text-orange-500 border-b-2 border-orange-500 font-medium">
              Notre Mission
            </button>
            <button className="px-6 py-3 text-gray-500 hover:text-gray-700">
              Notre Équipe
            </button>
            <button className="px-6 py-3 text-gray-500 hover:text-gray-700">
              Nos Valeurs
            </button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">
                Notre mission est d'offrir une éducation de qualité accessible à tous en Afrique
              </h2>
              <div className="space-y-4 mb-8">
                <p className="text-gray-600">
                  SkillAfrik est né d'un constat simple : malgré la richesse des talents africains, l'accès à une éducation de qualité reste un défi majeur pour de nombreuses personnes sur le continent.
                </p>
                <p className="text-gray-600">
                  Notre plateforme propose des cours en ligne conçus spécifiquement pour répondre aux besoins et aux défis du marché africain : contenu accessible hors ligne, paiements adaptés aux réalités locales, et formations directement applicables dans le contexte africain.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 mb-8 lg:mb-0 order-1 lg:order-2">
              <img 
                src="/lovable-uploads/a75bf637-5bc7-47aa-98c3-9f12293079a2.png"
                alt="Étudiant sur ordinateur" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <StatCard
              icon={<Users className="h-6 w-6" />}
              value="10,000+"
              label="Apprenants"
            />
            <StatCard
              icon={<div className="h-6 w-6" />}
              value="200+"
              label="Cours"
            />
            <StatCard
              icon={<div className="h-6 w-6" />}
              value="5,000+"
              label="Certificats délivrés"
            />
            <StatCard
              icon={<div className="h-6 w-6" />}
              value="25+"
              label="Pays représentés"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
