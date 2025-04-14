
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import CourseCard from '../components/CourseCard';
import FeatureCard from '../components/FeatureCard';
import StatCard from '../components/StatCard';
import { Wifi, CreditCard, Languages, Award, Users, Shield } from 'lucide-react';

const HomePage = () => {
  // Données fictives pour les cours
  const topCourses = [
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
      students: 3240,
      featured: true
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
      students: 2150,
      featured: true
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
      students: 1876,
      featured: true
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
      students: 1520,
      featured: true
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-50 to-orange-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Développe tes compétences, <span className="text-orange-500">transforme ton avenir</span>
            </h1>
            <p className="text-gray-600 text-center text-lg">
              SkillAfrik, la plateforme d'apprentissage en ligne conçue pour les besoins spécifiques de l'Afrique et au-delà.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <Link to="/cours" className="btn-primary py-3 px-6">
                Découvrir les cours
              </Link>
              <Link to="/inscription" className="btn-secondary py-3 px-6">
                Créer un compte
              </Link>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-white rounded-full p-3 mb-2">
                  <svg className="w-6 h-6 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                    <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path>
                  </svg>
                </div>
                <span className="text-lg font-bold">Mode hors ligne</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white rounded-full p-3 mb-2">
                  <svg className="w-6 h-6 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                    <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path>
                  </svg>
                </div>
                <span className="text-lg font-bold">Communauté active</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white rounded-full p-3 mb-2">
                  <svg className="w-6 h-6 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                    <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path>
                  </svg>
                </div>
                <span className="text-lg font-bold">Certificats vérifiables</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cours populaires Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Cours populaires</h2>
            <Link to="/cours" className="text-orange-500 hover:text-orange-600 flex items-center">
              Voir tous les cours 
              <svg className="w-5 h-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          <p className="text-gray-600 mb-8">
            Les formations les plus suivies pour développer vos compétences et booster votre carrière.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topCourses.map((course) => (
              <CourseCard
                key={course.id}
                {...course}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Affiliation Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="md:flex items-center md:space-x-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="flex items-center mb-4">
                <div className="bg-orange-500 text-white rounded-full h-10 w-10 flex items-center justify-center text-xl font-bold">
                  25%
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Comment fonctionne notre programme d'affiliation?
              </h2>
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 text-orange-500 mr-3">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Partagez vos liens</h3>
                    <p className="text-gray-600 text-sm">
                      Générez votre lien unique ou code promo et partagez-le avec votre réseau.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 text-orange-500 mr-3">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Suivez vos performances</h3>
                    <p className="text-gray-600 text-sm">
                      Visualisez en temps réel les clics, inscriptions et ventes générées.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 text-orange-500 mr-3">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Gagnez des commissions</h3>
                    <p className="text-gray-600 text-sm">
                      Recevez 25% du montant pour chaque cours acheté via votre lien.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 text-orange-500 mr-3">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Retirez facilement</h3>
                    <p className="text-gray-600 text-sm">
                      Récupérez vos gains par Mobile Money ou virement bancaire.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold mb-2">
                  <span className="text-orange-500">Gagnez de l'argent</span> en partageant le savoir
                </h2>
                <p className="text-gray-600 mb-6">
                  Rejoignez notre programme d'affiliation et transformez vos partages en revenus. Aidez les autres à monter en compétences tout en gagnant 25% de commission sur chaque vente.
                </p>
                <div className="flex justify-center mb-6">
                  <Link 
                    to="/affiliation/inscription" 
                    className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-colors font-medium"
                  >
                    Devenir affilié maintenant
                  </Link>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <h3 className="text-2xl font-bold text-orange-500">25%</h3>
                    <p className="text-gray-600 text-sm">Commission</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">30j</h3>
                    <p className="text-gray-600 text-sm">Cookie validité</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">1000+</h3>
                    <p className="text-gray-600 text-sm">Affiliés actifs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi SkillAfrik Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Pourquoi choisir SkillAfrik?</h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Notre plateforme est spécialement conçue pour répondre aux besoins et défis spécifiques du marché africain.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Wifi className="h-6 w-6" />}
              title="Mode hors ligne"
              description="Téléchargez les cours pour y accéder sans connexion internet."
            />
            <FeatureCard
              icon={<CreditCard className="h-6 w-6" />}
              title="Paiements locaux"
              description="Payez facilement avec Mobile Money et moyens de paiement africains."
            />
            <FeatureCard
              icon={<Languages className="h-6 w-6" />}
              title="Multilingue"
              description="Contenu disponible en français, anglais et langues africaines."
            />
            <FeatureCard
              icon={<Award className="h-6 w-6" />}
              title="Certificats vérifiables"
              description="Obtenez des certificats avec QR code pour authentification."
            />
            <FeatureCard
              icon={<Users className="h-6 w-6" />}
              title="Communauté engagée"
              description="Rejoignez un forum d'entraide entre apprenants et formateurs."
            />
            <FeatureCard
              icon={<Shield className="h-6 w-6" />}
              title="Sécurité renforcée"
              description="Vos données et paiements sont protégés par un cryptage avancé."
            />
          </div>
        </div>
      </section>

      {/* Statistiques Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Notre impact en chiffres</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
                icon={<Award className="h-6 w-6" />}
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à commencer à gagner avec SkillAfrik ?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Rejoignez notre programme d'affiliation dès maintenant et commencez à transformer votre influence en revenus tout en aidant d'autres personnes à acquérir des compétences précieuses.
          </p>
          <Link
            to="/affiliation/inscription"
            className="bg-orange-500 text-white px-8 py-3 rounded-md hover:bg-orange-600 transition-colors font-medium"
          >
            Devenir affilié maintenant
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
