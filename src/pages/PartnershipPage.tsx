
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { UserPlus, CheckCircle, Users, Globe } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';

const PartnershipPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section avec l'image de l'Afrique IA en arrière-plan */}
      <section 
        className="py-20 bg-cover bg-center relative"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/lovable-uploads/19e61f04-7070-4239-a1e0-863ec9578037.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl font-bold mb-4 text-white">Devenez Partenaire de SkillAfrik</h1>
          <p className="text-gray-200 max-w-2xl mx-auto mb-8">
            Rejoignez-nous dans notre mission de transformer l'éducation en Afrique en devenant partenaire officiel de SkillAfrik.
          </p>
          <Button asChild size="lg">
            <Link to="/partenaire/inscription" className="bg-orange-500 hover:bg-orange-600">
              Devenir partenaire maintenant
            </Link>
          </Button>
        </div>
      </section>

      {/* Types de partenariats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Types de Partenariats</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-500">
              <h3 className="text-xl font-semibold mb-3">Partenaires Éducatifs</h3>
              <p className="text-gray-600 mb-4">
                Établissements d'enseignement, universités et centres de formation qui souhaitent proposer nos cours à leurs étudiants.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                  <span>Tarifs préférentiels pour vos étudiants</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                  <span>Co-certification des formations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                  <span>Plateforme personnalisée</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-500">
              <h3 className="text-xl font-semibold mb-3">Partenaires Corporatifs</h3>
              <p className="text-gray-600 mb-4">
                Entreprises et organisations souhaitant former leurs employés ou soutenir le développement de compétences.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                  <span>Formations sur mesure</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                  <span>Suivi des performances</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                  <span>Formation des talents locaux</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-500">
              <h3 className="text-xl font-semibold mb-3">Partenaires Technologiques</h3>
              <p className="text-gray-600 mb-4">
                Entreprises tech et startups souhaitant intégrer leurs solutions ou co-développer des outils éducatifs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                  <span>Intégration API</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                  <span>Co-développement de solutions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                  <span>Visibilité dans l'écosystème tech africain</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Les Avantages de Notre Partenariat</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={<Users className="h-6 w-6 text-orange-500" />}
              title="Réseau Panafricain"
              description="Accédez à notre réseau d'apprenants, d'éducateurs et d'experts dans toute l'Afrique."
            />
            <FeatureCard 
              icon={<Globe className="h-6 w-6 text-orange-500" />}
              title="Impact Social"
              description="Participez activement à la transformation digitale et éducative du continent africain."
            />
            <FeatureCard 
              icon={<UserPlus className="h-6 w-6 text-orange-500" />}
              title="Recrutement de Talents"
              description="Identifiez et recrutez les meilleurs talents formés selon les standards du marché."
            />
            <FeatureCard 
              icon={<CheckCircle className="h-6 w-6 text-orange-500" />}
              title="Visibilité"
              description="Bénéficiez d'une visibilité sur notre plateforme et nos communications."
            />
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Ce Que Disent Nos Partenaires</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-gray-300 rounded-full w-12 h-12 mr-4"></div>
                <div>
                  <h4 className="font-bold">ESMT Dakar</h4>
                  <p className="text-sm text-gray-600">Partenaire Éducatif</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Notre partenariat avec SkillAfrik a permis à nos étudiants d'accéder à des contenus de qualité adaptés aux réalités du marché africain."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-gray-300 rounded-full w-12 h-12 mr-4"></div>
                <div>
                  <h4 className="font-bold">Orange Digital Center</h4>
                  <p className="text-sm text-gray-600">Partenaire Corporatif</p>
                </div>
              </div>
              <p className="text-gray-600">
                "SkillAfrik nous aide à former des développeurs talentueux dans plusieurs pays d'Afrique, contribuant ainsi à notre stratégie d'innovation."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-gray-300 rounded-full w-12 h-12 mr-4"></div>
                <div>
                  <h4 className="font-bold">Africa Startup Lab</h4>
                  <p className="text-sm text-gray-600">Partenaire Technologique</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Grâce à notre partenariat avec SkillAfrik, nous pouvons offrir des parcours de formation complets aux entrepreneurs tech que nous accompagnons."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à Transformer l'Éducation en Afrique avec Nous?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Rejoignez notre réseau de partenaires et participez activement au développement des compétences numériques en Afrique.
          </p>
          <Button asChild size="lg" variant="outline" className="bg-white text-orange-600 hover:bg-gray-100">
            <Link to="/partenaire/inscription">
              Devenir partenaire maintenant
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PartnershipPage;
