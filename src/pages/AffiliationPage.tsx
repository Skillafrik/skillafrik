import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FAQItem from '../components/FAQItem';
import { Link } from 'react-router-dom';

const AffiliationPage = () => {
  const faqs = [
    {
      question: "Qui peut devenir affilié ?",
      answer: "Toute personne ayant un compte SkillAfrik peut devenir affilié. Que vous soyez un influenceur, blogueur, enseignant ou simplement passionné par l'éducation, notre programme est ouvert à tous."
    },
    {
      question: "Comment sont calculées les commissions ?",
      answer: "Vous recevez 25% du prix d'achat pour chaque cours vendu via votre lien d'affiliation. Par exemple, si quelqu'un achète un cours à 40$, vous gagnez 10$."
    },
    {
      question: "Quand recevrai-je mes paiements ?",
      answer: "Les paiements sont traités le 15 de chaque mois pour toutes les commissions accumulées le mois précédent, à condition d'avoir atteint le seuil minimum de 20$."
    },
    {
      question: "Quelles sont les méthodes de paiement ?",
      answer: "Nous proposons des paiements via Mobile Money (MTN, Orange, Moov), PayPal, et virement bancaire pour certains pays africains."
    },
    {
      question: "Combien de temps le cookie d'affiliation reste-t-il actif ?",
      answer: "Notre cookie d'affiliation reste actif pendant 30 jours. Si un utilisateur clique sur votre lien et achète un cours dans les 30 jours, vous recevez votre commission."
    },
    {
      question: "Puis-je promouvoir des cours spécifiques ?",
      answer: "Absolument ! Vous pouvez générer des liens d'affiliation pour des cours spécifiques qui correspondent à votre audience et à vos intérêts."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section avec background Africa AI */}
      <section 
        className="bg-cover bg-center py-16"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/lovable-uploads/19e61f04-7070-4239-a1e0-863ec9578037.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="bg-orange-500 text-white font-bold rounded-full h-12 w-12 flex items-center justify-center text-xl mx-auto mb-4">
            25%
          </div>
          <h1 className="text-4xl font-bold mb-6 text-white">
            Comment fonctionne notre programme d'affiliation?
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto mb-8">
            Gagnez de l'argent en partageant le savoir. Transformez votre influence en revenus tout en aidant les autres à développer leurs compétences.
          </p>
          <Link
            to="/affiliation/inscription"
            className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-colors font-medium"
          >
            Devenir affilié maintenant
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Comment ça fonctionne</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">1. Inscrivez-vous</h3>
              <p className="text-gray-600">
                Rejoignez notre programme d'affiliation gratuitement et obtenez votre lien d'affiliation unique.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">2. Partagez</h3>
              <p className="text-gray-600">
                Partagez votre lien avec votre audience sur les réseaux sociaux, blogs ou emails.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">3. Gagnez</h3>
              <p className="text-gray-600">
                Recevez 25% de commission pour chaque achat effectué via votre lien, payé mensuellement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Les avantages de notre programme</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-orange-500 mb-4">
                <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Commissions attractives</h3>
              <p className="text-gray-600">
                Gagnez 25% sur chaque vente générée par votre lien, parmi les plus élevés du secteur.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-orange-500 mb-4">
                <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Outils marketing</h3>
              <p className="text-gray-600">
                Accédez à des bannières, emails templates et contenu prêt à l'emploi pour promouvoir les cours.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-orange-500 mb-4">
                <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Suivi en temps réel</h3>
              <p className="text-gray-600">
                Surveillez vos performances, clics et conversions avec notre tableau de bord intuitif.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-orange-500 mb-4">
                <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Paiements flexibles</h3>
              <p className="text-gray-600">
                Choisissez votre mode de paiement préféré : Mobile Money, PayPal ou virement bancaire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">Questions fréquentes</h2>
          <p className="text-gray-600 text-center mb-12">Tout ce que vous devez savoir sur notre programme d'affiliation</p>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <FAQItem 
                key={index} 
                question={faq.question} 
                answer={faq.answer} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à commencer à gagner avec SkillAfrik ?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Rejoignez notre programme d'affiliation dès maintenant et commencez à transformer votre influence en revenus tout en aidant d'autres personnes à acquérir des compétences précieuses.
          </p>
          <Link
            to="/affiliation/inscription"
            className="bg-white text-orange-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors font-medium"
          >
            Devenir affilié maintenant
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AffiliationPage;
