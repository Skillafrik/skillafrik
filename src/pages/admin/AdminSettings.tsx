
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Save, Lock, Mail, Phone, Globe, DollarSign, Bell } from "lucide-react";

const AdminSettings = () => {
  // États pour les différents paramètres
  const [siteName, setSiteName] = useState("SkillAfrik");
  const [siteDescription, setSiteDescription] = useState("La plateforme éducative panafricaine");
  const [contactEmail, setContactEmail] = useState("contact@skillafrik.com");
  const [contactPhone, setContactPhone] = useState("+7 983 139-70-53");
  const [language, setLanguage] = useState("fr");
  const [currency, setCurrency] = useState("XOF");
  const [timezone, setTimezone] = useState("UTC+1");
  const [sessionTimeout, setSessionTimeout] = useState("30");
  const [twoFactorAuth, setTwoFactorAuth] = useState(true);
  const [strongPasswords, setStrongPasswords] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [newRegistration, setNewRegistration] = useState(true);
  const [newSale, setNewSale] = useState(true);
  const [affiliateSale, setAffiliateSale] = useState(true);
  const [commissionRate, setCommissionRate] = useState("25");
  const [minimumPayment, setMinimumPayment] = useState("20000");

  // Fonction pour enregistrer les modifications
  const saveChanges = (section: string) => {
    console.log(`Saving changes for section: ${section}`);
    // Ici, nous simulerions une requête API pour sauvegarder les modifications
  };

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold">Paramètres</h2>
      
      {/* Paramètres généraux */}
      <Card>
        <CardHeader>
          <CardTitle>Paramètres Généraux</CardTitle>
          <CardDescription>Configurez les informations de base de la plateforme</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="site-name" className="text-sm font-medium">Nom du site</label>
              <input
                id="site-name"
                type="text"
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={siteName}
                onChange={(e) => setSiteName(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="site-description" className="text-sm font-medium">Description du site</label>
              <textarea
                id="site-description"
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-20"
                value={siteDescription}
                onChange={(e) => setSiteDescription(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="contact-email" className="text-sm font-medium">Email de contact</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  id="contact-email"
                  type="email"
                  className="border border-gray-300 rounded-lg px-3 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="grid gap-2">
              <label htmlFor="contact-phone" className="text-sm font-medium">Téléphone de contact</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  id="contact-phone"
                  type="text"
                  className="border border-gray-300 rounded-lg px-3 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="grid gap-2">
              <label htmlFor="language" className="text-sm font-medium">Langue par défaut</label>
              <div className="relative">
                <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <select
                  id="language"
                  className="border border-gray-300 rounded-lg px-3 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  <option value="fr">Français</option>
                  <option value="en">Anglais</option>
                  <option value="pt">Portugais</option>
                  <option value="ar">Arabe</option>
                </select>
              </div>
            </div>
            <div className="grid gap-2">
              <label htmlFor="currency" className="text-sm font-medium">Devise par défaut</label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <select
                  id="currency"
                  className="border border-gray-300 rounded-lg px-3 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                >
                  <option value="XOF">FCFA (XOF)</option>
                  <option value="USD">Dollar (USD)</option>
                  <option value="EUR">Euro (EUR)</option>
                </select>
              </div>
            </div>
            <div className="grid gap-2">
              <label htmlFor="timezone" className="text-sm font-medium">Fuseau horaire</label>
              <select
                id="timezone"
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                value={timezone}
                onChange={(e) => setTimezone(e.target.value)}
              >
                <option value="UTC+1">Afrique de l'Ouest (UTC+1)</option>
                <option value="UTC+2">Afrique Centrale (UTC+2)</option>
                <option value="UTC+3">Afrique de l'Est (UTC+3)</option>
                <option value="UTC">GMT (UTC)</option>
              </select>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button onClick={() => saveChanges('general')}>
            <Save className="mr-2 h-4 w-4" /> Enregistrer les modifications
          </Button>
        </CardFooter>
      </Card>
      
      {/* Paramètres de sécurité */}
      <Card>
        <CardHeader>
          <CardTitle>
            <div className="flex items-center">
              <Lock className="mr-2 h-5 w-5 text-orange-500" />
              Sécurité
            </div>
          </CardTitle>
          <CardDescription>Configurer les options de sécurité et d'accès</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Authentification à deux facteurs</h3>
                <p className="text-sm text-gray-500">Exiger une confirmation supplémentaire lors de la connexion</p>
              </div>
              <div className="relative">
                <input 
                  type="checkbox"
                  id="two-factor-auth"
                  className="sr-only"
                  checked={twoFactorAuth}
                  onChange={() => setTwoFactorAuth(!twoFactorAuth)}
                />
                <label
                  htmlFor="two-factor-auth"
                  className={`block h-6 w-12 rounded-full ${twoFactorAuth ? 'bg-blue-600' : 'bg-gray-300'} transition-colors duration-200`}
                >
                  <span 
                    className={`block h-5 w-5 translate-y-[2px] transform rounded-full bg-white transition-transform duration-200 ${twoFactorAuth ? 'translate-x-6' : 'translate-x-1'}`}
                  />
                </label>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Exiger des mots de passe forts</h3>
                <p className="text-sm text-gray-500">Au moins 8 caractères avec lettres, chiffres et symboles</p>
              </div>
              <div className="relative">
                <input 
                  type="checkbox"
                  id="strong-passwords"
                  className="sr-only"
                  checked={strongPasswords}
                  onChange={() => setStrongPasswords(!strongPasswords)}
                />
                <label
                  htmlFor="strong-passwords"
                  className={`block h-6 w-12 rounded-full ${strongPasswords ? 'bg-blue-600' : 'bg-gray-300'} transition-colors duration-200`}
                >
                  <span 
                    className={`block h-5 w-5 translate-y-[2px] transform rounded-full bg-white transition-transform duration-200 ${strongPasswords ? 'translate-x-6' : 'translate-x-1'}`}
                  />
                </label>
              </div>
            </div>
            
            <div className="grid gap-2">
              <label htmlFor="session-timeout" className="text-sm font-medium">Expiration des sessions (minutes)</label>
              <input
                id="session-timeout"
                type="number"
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={sessionTimeout}
                onChange={(e) => setSessionTimeout(e.target.value)}
              />
              <p className="text-xs text-gray-500">Durée avant déconnexion automatique en cas d'inactivité</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button onClick={() => saveChanges('security')}>
            <Save className="mr-2 h-4 w-4" /> Enregistrer les modifications
          </Button>
        </CardFooter>
      </Card>
      
      {/* Paramètres de notification */}
      <Card>
        <CardHeader>
          <CardTitle>
            <div className="flex items-center">
              <Bell className="mr-2 h-5 w-5 text-purple-500" />
              Notifications
            </div>
          </CardTitle>
          <CardDescription>Configurer les notifications email et SMS</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Notifications par email</h3>
                <p className="text-sm text-gray-500">Recevoir des notifications par email</p>
              </div>
              <div className="relative">
                <input 
                  type="checkbox"
                  id="email-notifications"
                  className="sr-only"
                  checked={emailNotifications}
                  onChange={() => setEmailNotifications(!emailNotifications)}
                />
                <label
                  htmlFor="email-notifications"
                  className={`block h-6 w-12 rounded-full ${emailNotifications ? 'bg-blue-600' : 'bg-gray-300'} transition-colors duration-200`}
                >
                  <span 
                    className={`block h-5 w-5 translate-y-[2px] transform rounded-full bg-white transition-transform duration-200 ${emailNotifications ? 'translate-x-6' : 'translate-x-1'}`}
                  />
                </label>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Notifications par SMS</h3>
                <p className="text-sm text-gray-500">Recevoir des notifications par SMS</p>
              </div>
              <div className="relative">
                <input 
                  type="checkbox"
                  id="sms-notifications"
                  className="sr-only"
                  checked={smsNotifications}
                  onChange={() => setSmsNotifications(!smsNotifications)}
                />
                <label
                  htmlFor="sms-notifications"
                  className={`block h-6 w-12 rounded-full ${smsNotifications ? 'bg-blue-600' : 'bg-gray-300'} transition-colors duration-200`}
                >
                  <span 
                    className={`block h-5 w-5 translate-y-[2px] transform rounded-full bg-white transition-transform duration-200 ${smsNotifications ? 'translate-x-6' : 'translate-x-1'}`}
                  />
                </label>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-4">
            <h3 className="font-medium mb-3">Événements de notification</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Nouvelle inscription</span>
                <div className="relative">
                  <input 
                    type="checkbox"
                    id="new-registration"
                    className="sr-only"
                    checked={newRegistration}
                    onChange={() => setNewRegistration(!newRegistration)}
                  />
                  <label
                    htmlFor="new-registration"
                    className={`block h-6 w-12 rounded-full ${newRegistration ? 'bg-blue-600' : 'bg-gray-300'} transition-colors duration-200`}
                  >
                    <span 
                      className={`block h-5 w-5 translate-y-[2px] transform rounded-full bg-white transition-transform duration-200 ${newRegistration ? 'translate-x-6' : 'translate-x-1'}`}
                    />
                  </label>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm">Nouvelle vente</span>
                <div className="relative">
                  <input 
                    type="checkbox"
                    id="new-sale"
                    className="sr-only"
                    checked={newSale}
                    onChange={() => setNewSale(!newSale)}
                  />
                  <label
                    htmlFor="new-sale"
                    className={`block h-6 w-12 rounded-full ${newSale ? 'bg-blue-600' : 'bg-gray-300'} transition-colors duration-200`}
                  >
                    <span 
                      className={`block h-5 w-5 translate-y-[2px] transform rounded-full bg-white transition-transform duration-200 ${newSale ? 'translate-x-6' : 'translate-x-1'}`}
                    />
                  </label>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm">Vente via affiliation</span>
                <div className="relative">
                  <input 
                    type="checkbox"
                    id="affiliate-sale"
                    className="sr-only"
                    checked={affiliateSale}
                    onChange={() => setAffiliateSale(!affiliateSale)}
                  />
                  <label
                    htmlFor="affiliate-sale"
                    className={`block h-6 w-12 rounded-full ${affiliateSale ? 'bg-blue-600' : 'bg-gray-300'} transition-colors duration-200`}
                  >
                    <span 
                      className={`block h-5 w-5 translate-y-[2px] transform rounded-full bg-white transition-transform duration-200 ${affiliateSale ? 'translate-x-6' : 'translate-x-1'}`}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button onClick={() => saveChanges('notifications')}>
            <Save className="mr-2 h-4 w-4" /> Enregistrer les modifications
          </Button>
        </CardFooter>
      </Card>
      
      {/* Paramètres des commissions */}
      <Card>
        <CardHeader>
          <CardTitle>
            <div className="flex items-center">
              <DollarSign className="mr-2 h-5 w-5 text-green-500" />
              Paramètres des commissions
            </div>
          </CardTitle>
          <CardDescription>Configurer les options de paiement et commissions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="commission-rate" className="text-sm font-medium">Taux de commission pour les affiliés (%)</label>
              <input
                id="commission-rate"
                type="number"
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={commissionRate}
                onChange={(e) => setCommissionRate(e.target.value)}
              />
              <p className="text-xs text-gray-500">Pourcentage du montant de la vente versé aux affiliés</p>
            </div>
            
            <div className="grid gap-2">
              <label htmlFor="minimum-payment" className="text-sm font-medium">Montant minimum de paiement (XOF)</label>
              <input
                id="minimum-payment"
                type="number"
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={minimumPayment}
                onChange={(e) => setMinimumPayment(e.target.value)}
              />
              <p className="text-xs text-gray-500">Montant minimum à atteindre avant de pouvoir effectuer un retrait</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button onClick={() => saveChanges('commissions')}>
            <Save className="mr-2 h-4 w-4" /> Enregistrer les modifications
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AdminSettings;
