import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StatCard from '../components/StatCard';
import FeatureCard from '../components/FeatureCard';
import { Users, BookOpen, Award, Globe, Heart, Briefcase, Target, Accessibility } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const values = [
    {
      title: "Accessibilité",
      description: "Nous croyons que l'éducation de qualité doit être accessible à tous, quels que soient leur situation géographique, leur connectivité internet ou leurs moyens financiers.",
      icon: <Accessibility className="h-6 w-6" />
    },
    {
      title: "Excellence",
      description: "Nous nous engageons à fournir un contenu éducatif de la plus haute qualité, adapté aux réalités et aux besoins du marché africain.",
      icon: <Award className="h-6 w-6" />
    },
    {
      title: "Communauté",
      description: "Nous créons une communauté solidaire d'apprenants et de formateurs qui s'entraident pour réussir et transformer le continent africain.",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Impact",
      description: "Notre objectif est de créer un impact durable en formant la prochaine génération de leaders, d'entrepreneurs et de professionnels africains.",
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "Durabilité",
      description: "Nous développons un modèle d'affaires équitable qui rémunère justement les créateurs de contenu tout en restant accessible aux apprenants.",
      icon: <Briefcase className="h-6 w-6" />
    }
  ];

  const renderTabContent = () => {
    switch(activeTab) {
      case 'mission':
        return (
          <div className="py-16 bg-white">
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
                    src="/lovable-uploads/923cc5fa-78ac-4b7c-a4d6-539acd6632f3.png"
                    alt="Mr LUCIEN" 
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                <StatCard
                  icon={<Users className="h-6 w-6" />}
                  value="10,000+"
                  label="Apprenants"
                />
                <StatCard
                  icon={<BookOpen className="h-6 w-6" />}
                  value="200+"
                  label="Cours"
                />
                <StatCard
                  icon={<Award className="h-6 w-6" />}
                  value="5,000+"
                  label="Certificats délivrés"
                />
                <StatCard
                  icon={<Globe className="h-6 w-6" />}
                  value="25+"
                  label="Pays représentés"
                />
              </div>
            </div>
          </div>
        );
      case 'founder':
        return (
          <div className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">Notre Fondateur</h2>
              
              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src="/lovable-uploads/923cc5fa-78ac-4b7c-a4d6-539acd6632f3.png"
                        alt="Mr LUCIEN KOUMESSI" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8 md:w-2/3">
                      <div className="uppercase tracking-wide text-orange-500 font-semibold">Fondateur & CEO</div>
                      <h2 className="text-2xl font-bold mt-2 mb-2">Mr LUCIEN KOUMESSI</h2>
                      <p className="text-gray-500 mb-4">Consultant commercial & Promoteur des entreprises internationaux</p>
                      
                      <div className="prose max-w-none">
                        <p className="mb-3">
                          Leader visionnaire avec plus de 10 ans d'expérience dans l'éducation et la technologie, en Afrique et à l'international.
                        </p>
                        <p className="mb-3">
                          Consultant commercial avec 10 ans d'expérience en marketing et ventes, spécialisé dans la promotion des entreprises internationales.
                        </p>
                        <p className="mb-3">
                          Sa vision pour SkillAfrik est née d'un constat simple mais puissant : malgré l'abondance de talents en Afrique, l'accès à une éducation de qualité reste un défi majeur pour de nombreuses personnes sur le continent.
                        </p>
                        <p>
                          Grâce à son expertise et son réseau international, il a pu créer une plateforme qui répond aux besoins spécifiques du marché africain tout en offrant un contenu éducatif de qualité internationale.
                        </p>
                      </div>
                      
                      <div className="mt-6 flex space-x-4">
                        <Button variant="default" size="sm">
                          <a href="https://wa.me/79831397053" target="_blank" rel="noreferrer">Contacter</a>
                        </Button>
                        <Button variant="outline" size="sm">
                          <a href="https://linkedin.com/in/" target="_blank" rel="noreferrer">LinkedIn</a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'values':
        return (
          <div className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-6 text-center">Nos valeurs fondatrices</h2>
              <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                Chez SkillAfrik, chaque décision que nous prenons est guidée par un ensemble de valeurs fondamentales qui définissent notre identité et notre mission.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <FeatureCard
                    key={index}
                    icon={value.icon}
                    title={value.title}
                    description={value.description}
                  />
                ))}
              </div>
              
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src="/lovable-uploads/baa46c38-7b33-4945-b43d-5714be2704cd.png" 
                    alt="SkillAfrik Technology Vision" 
                    className="rounded-lg shadow-md w-full h-auto"
                  />
                </div>
                <div className="mt-16 bg-orange-50 rounded-lg p-8 shadow-sm">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Heart className="h-5 w-5 text-orange-500 mr-2" />
                    Rejoignez-nous
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Devenez formateur ou partenaire et contribuez à notre mission d'éducation accessible en Afrique.
                  </p>
                  <div className="space-x-4">
                    <Button asChild variant="default" size="sm">
                      <Link to="/partenaire">Devenir partenaire</Link>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <Link to="/formateur">Devenir formateur</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section 
        className="bg-cover bg-center py-16"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/lovable-uploads/19e61f04-7070-4239-a1e0-863ec9578037.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">À Propos de SkillAfrik</h1>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Découvrez notre mission, notre fondateur et notre vision pour transformer l'éducation en Afrique et au-delà.
          </p>
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="border-b border-gray-200 flex justify-center overflow-x-auto">
            <button 
              onClick={() => setActiveTab('mission')}
              className={`px-6 py-3 font-medium whitespace-nowrap ${activeTab === 'mission' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Notre Mission
            </button>
            <button 
              onClick={() => setActiveTab('founder')}
              className={`px-6 py-3 font-medium whitespace-nowrap ${activeTab === 'founder' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Notre Fondateur
            </button>
            <button 
              onClick={() => setActiveTab('values')}
              className={`px-6 py-3 font-medium whitespace-nowrap ${activeTab === 'values' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Nos Valeurs
            </button>
          </div>
        </div>
      </section>

      {renderTabContent()}

      <Footer />
    </div>
  );
};

export default AboutPage;
