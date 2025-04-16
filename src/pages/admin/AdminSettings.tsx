
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RotateCcw, CreditCard, Mail, Phone, Lock, Server, ArrowRight } from "lucide-react";

const AdminSettings = () => {
  const location = useLocation();
  const [currentTab, setCurrentTab] = useState("general");

  useEffect(() => {
    // Déterminer quel onglet est actif basé sur l'URL
    if (location.pathname.includes('/paiements')) {
      setCurrentTab("paiements");
    } else if (location.pathname.includes('/notifications')) {
      setCurrentTab("notifications");
    } else if (location.pathname.includes('/securite')) {
      setCurrentTab("securite");
    } else if (location.pathname.includes('/systeme')) {
      setCurrentTab("systeme");
    } else {
      setCurrentTab("general");
    }
  }, [location]);

  // Contenu des onglets
  const renderContent = () => {
    switch (currentTab) {
      case "general":
        return <GeneralSettings />;
      case "paiements":
        return <PaymentSettings />;
      case "notifications":
        return <NotificationSettings />;
      case "securite":
        return <SecuritySettings />;
      case "systeme":
        return <SystemSettings />;
      default:
        return <GeneralSettings />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Paramètres</h2>
      </div>
      
      {renderContent()}
    </div>
  );
};

// Composant pour les paramètres généraux
const GeneralSettings = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Paramètres Généraux</CardTitle>
          <CardDescription>Configurer les informations de base de la plateforme</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="siteName">Nom du site</Label>
                <Input id="siteName" placeholder="SkillAfrik" defaultValue="SkillAfrik" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="siteUrl">URL du site</Label>
                <Input id="siteUrl" placeholder="https://skillafrik.com" defaultValue="https://skillafrik.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="adminEmail">Email administrateur</Label>
                <Input id="adminEmail" type="email" placeholder="admin@skillafrik.com" defaultValue="admin@skillafrik.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="timeZone">Fuseau horaire</Label>
                <Select defaultValue="UTC+0">
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez un fuseau horaire" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="UTC+0">UTC+0 (London, Lisbon)</SelectItem>
                    <SelectItem value="UTC+1">UTC+1 (Paris, Berlin)</SelectItem>
                    <SelectItem value="UTC+2">UTC+2 (Cairo, Johannesburg)</SelectItem>
                    <SelectItem value="UTC+3">UTC+3 (Nairobi, Moscow)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Options d'affichage</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="showAuthors">Afficher les auteurs</Label>
                  <p className="text-sm text-gray-500">Montrer les auteurs des cours sur les pages de liste</p>
                </div>
                <Switch id="showAuthors" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="showPrices">Afficher les prix</Label>
                  <p className="text-sm text-gray-500">Montrer les prix des cours sur les pages de liste</p>
                </div>
                <Switch id="showPrices" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="showRatings">Afficher les évaluations</Label>
                  <p className="text-sm text-gray-500">Montrer les évaluations des cours sur les pages de liste</p>
                </div>
                <Switch id="showRatings" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="enableBlog">Activer le blog</Label>
                  <p className="text-sm text-gray-500">Activer la section blog sur le site</p>
                </div>
                <Switch id="enableBlog" />
              </div>
            </div>
          </div>
          
          <div className="pt-6">
            <Button className="mr-2">Enregistrer les modifications</Button>
            <Button variant="outline">Annuler</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Composant pour les paramètres de paiement
const PaymentSettings = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Paramètres de paiement</CardTitle>
          <CardDescription>Configurez les méthodes de paiement et commissions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Méthodes de paiement acceptées</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  <Label htmlFor="mobileMoney">Mobile Money</Label>
                </div>
                <Switch id="mobileMoney" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  <Label htmlFor="bankTransfer">Virement bancaire</Label>
                </div>
                <Switch id="bankTransfer" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  <Label htmlFor="paypal">PayPal</Label>
                </div>
                <Switch id="paypal" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  <Label htmlFor="stripe">Stripe</Label>
                </div>
                <Switch id="stripe" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  <Label htmlFor="flutterwave">Flutterwave</Label>
                </div>
                <Switch id="flutterwave" defaultChecked />
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6">
            <h3 className="text-lg font-medium">Paramètres des commissions</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="affiliateCommission">Taux de commission pour les affiliés (%)</Label>
                  <Input id="affiliateCommission" type="number" defaultValue="25" min="0" max="100" />
                  <p className="text-xs text-gray-500">Pourcentage du montant de la vente versé aux affiliés.</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="minPayment">Montant minimum de paiement (XOF)</Label>
                  <Input id="minPayment" type="number" defaultValue="20000" />
                  <p className="text-xs text-gray-500">Montant minimum à atteindre avant de pouvoir effectuer un retrait.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-6">
            <Button className="mr-2">Enregistrer les modifications</Button>
            <Button variant="outline">Annuler</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Composant pour les paramètres de notification
const NotificationSettings = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Paramètres de notification</CardTitle>
          <CardDescription>Configurez les notifications email et SMS</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Canaux de notification</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  <Label htmlFor="emailNotifications">Notifications par email</Label>
                </div>
                <Switch id="emailNotifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  <Label htmlFor="smsNotifications">Notifications par SMS</Label>
                </div>
                <Switch id="smsNotifications" />
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6">
            <h3 className="text-lg font-medium">Événements de notification</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="newRegistration">Nouvelle inscription</Label>
                <Switch id="newRegistration" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="newSale">Nouvelle vente</Label>
                <Switch id="newSale" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="affiliateSale">Vente via affiliation</Label>
                <Switch id="affiliateSale" defaultChecked />
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6">
            <h3 className="text-lg font-medium">Fournisseurs de service</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="emailService">Service d'envoi d'emails</Label>
                <Select defaultValue="sendinblue">
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez un service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sendinblue">Sendinblue</SelectItem>
                    <SelectItem value="mailchimp">Mailchimp</SelectItem>
                    <SelectItem value="sendgrid">SendGrid</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="smsService">Service d'envoi de SMS</Label>
                <Select defaultValue="twilio">
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez un service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="twilio">Twilio</SelectItem>
                    <SelectItem value="nexmo">Nexmo</SelectItem>
                    <SelectItem value="africastalking">Africa's Talking</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          <div className="pt-6">
            <Button className="mr-2">Enregistrer les modifications</Button>
            <Button variant="outline">Annuler</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Composant pour les paramètres de sécurité
const SecuritySettings = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Paramètres de sécurité</CardTitle>
          <CardDescription>Configurez les options de sécurité et d'accès</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Authentification</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="twoFactor">Authentification à deux facteurs</Label>
                  <p className="text-sm text-gray-500">Exiger une confirmation supplémentaire lors de la connexion</p>
                </div>
                <Switch id="twoFactor" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="strongPassword">Exiger des mots de passe forts</Label>
                  <p className="text-sm text-gray-500">Au moins 8 caractères avec lettres, chiffres et symboles</p>
                </div>
                <Switch id="strongPassword" defaultChecked />
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6">
            <h3 className="text-lg font-medium">Sessions et contrôle d'accès</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="sessionExpiry">Expiration des sessions (minutes)</Label>
                <Input id="sessionExpiry" type="number" defaultValue="30" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="maxAttempts">Tentatives de connexion autorisées</Label>
                <Input id="maxAttempts" type="number" defaultValue="5" min="1" max="10" />
              </div>
            </div>
            <div className="mt-2 text-sm text-gray-500">
              <p>Durée avant déconnexion automatique en cas d'inactivité</p>
              <p className="mt-1">Nombre maximal avant blocage temporaire du compte</p>
            </div>
          </div>

          <div className="space-y-4 pt-6">
            <h3 className="text-lg font-medium">Journalisation et audit</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="ipLogging">Journalisation des adresses IP</Label>
                  <p className="text-sm text-gray-500">Enregistrer les adresses IP pour chaque connexion</p>
                </div>
                <Switch id="ipLogging" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="adminLog">Journal d'activité administrateur</Label>
                  <p className="text-sm text-gray-500">Enregistrer qui a modifié quoi et quand</p>
                </div>
                <Switch id="adminLog" defaultChecked />
              </div>
            </div>
          </div>
          
          <div className="pt-6">
            <Button className="mr-2">Enregistrer les modifications</Button>
            <Button variant="outline">Annuler</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Composant pour les paramètres système
const SystemSettings = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Paramètres Généraux</CardTitle>
          <CardDescription>Configurer les options système et effectuer des opérations de maintenance</CardDescription>
        </CardHeader>
        <CardContent className="space-y-10">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Maintenance du système</h3>
            <p className="text-sm text-gray-500">Ces actions affectent l'ensemble du système. Procédez avec précaution.</p>
            
            <div className="p-6 bg-red-50 rounded-lg border border-red-100 flex items-start gap-4">
              <div className="bg-red-100 rounded-full p-3">
                <RotateCcw className="h-5 w-5 text-red-500" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium">Réinitialiser le système</h4>
                <p className="text-sm text-gray-600 mb-4">Cette action réinitialisera toutes les données du système. Cette opération ne peut pas être annulée.</p>
                <Button variant="destructive">Réinitialiser le système</Button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Informations système</h3>
            <p className="text-sm text-gray-500">Informations techniques sur la configuration actuelle</p>
            
            <div className="border rounded-lg divide-y">
              <div className="flex justify-between p-4">
                <span className="text-gray-600">Version</span>
                <span className="font-medium">SkillAfrik v2.5.0</span>
              </div>
              <div className="flex justify-between p-4">
                <span className="text-gray-600">Dernière mise à jour</span>
                <span className="font-medium">10 avril 2025</span>
              </div>
              <div className="flex justify-between p-4">
                <span className="text-gray-600">Environnement</span>
                <span className="font-medium">Production</span>
              </div>
              <div className="flex justify-between p-4">
                <span className="text-gray-600">Copyright</span>
                <span className="font-medium">© 2025 SkillAfrik</span>
              </div>
            </div>
          </div>
          
          <div className="pt-6">
            <Button className="mr-2">Vérifier les mises à jour</Button>
            <Button variant="outline">Télécharger les logs</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminSettings;
