
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

const DevenirFormateurPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    specialite: '',
    experience: '',
    biographie: '',
    linkedin: '',
    website: '',
    acceptConditions: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSwitchChange = (checked: boolean) => {
    setFormData({
      ...formData,
      acceptConditions: checked
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      experience: value
    });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.nom.trim()) newErrors.nom = "Le nom est requis";
    if (!formData.prenom.trim()) newErrors.prenom = "Le prénom est requis";
    
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
      newErrors.email = "L'email est invalide";
    }
    
    if (!formData.telephone.trim()) {
      newErrors.telephone = "Le numéro de téléphone est requis";
    }
    
    if (!formData.specialite.trim()) {
      newErrors.specialite = "La spécialité est requise";
    }
    
    if (!formData.experience) {
      newErrors.experience = "L'expérience est requise";
    }
    
    if (!formData.biographie.trim()) {
      newErrors.biographie = "La biographie est requise";
    } else if (formData.biographie.length < 100) {
      newErrors.biographie = "La biographie doit contenir au moins 100 caractères";
    }
    
    if (!formData.acceptConditions) {
      newErrors.acceptConditions = "Vous devez accepter les conditions";
    }
    
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      
      // Simulation d'une API call
      setTimeout(() => {
        toast({
          title: "Demande envoyée!",
          description: "Nous examinerons votre candidature et vous contacterons prochainement.",
          variant: "success"
        });
        
        navigate('/');
        setIsSubmitting(false);
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="py-12 bg-gray-50 flex-grow">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-center mb-6">Devenir Formateur</h1>
            <p className="text-gray-600 mb-8 text-center">
              Rejoignez notre plateforme en tant que formateur et partagez vos connaissances avec des milliers d'apprenants en Afrique
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="nom">Nom</Label>
                  <Input
                    id="nom"
                    name="nom"
                    type="text"
                    value={formData.nom}
                    onChange={handleChange}
                    className={errors.nom ? "border-red-500" : ""}
                  />
                  {errors.nom && <p className="text-sm text-red-500 mt-1">{errors.nom}</p>}
                </div>
                
                <div>
                  <Label htmlFor="prenom">Prénom</Label>
                  <Input
                    id="prenom"
                    name="prenom"
                    type="text"
                    value={formData.prenom}
                    onChange={handleChange}
                    className={errors.prenom ? "border-red-500" : ""}
                  />
                  {errors.prenom && <p className="text-sm text-red-500 mt-1">{errors.prenom}</p>}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
                </div>
                
                <div>
                  <Label htmlFor="telephone">Téléphone</Label>
                  <Input
                    id="telephone"
                    name="telephone"
                    type="tel"
                    value={formData.telephone}
                    onChange={handleChange}
                    className={errors.telephone ? "border-red-500" : ""}
                  />
                  {errors.telephone && <p className="text-sm text-red-500 mt-1">{errors.telephone}</p>}
                </div>
              </div>
              
              <div>
                <Label htmlFor="specialite">Spécialité / Domaine d'expertise</Label>
                <Input
                  id="specialite"
                  name="specialite"
                  type="text"
                  value={formData.specialite}
                  onChange={handleChange}
                  className={errors.specialite ? "border-red-500" : ""}
                  placeholder="Ex: Développement Web, Marketing Digital, Entrepreneuriat..."
                />
                {errors.specialite && <p className="text-sm text-red-500 mt-1">{errors.specialite}</p>}
              </div>
              
              <div>
                <Label htmlFor="experience">Niveau d'expérience en formation</Label>
                <Select 
                  onValueChange={handleSelectChange}
                  value={formData.experience}
                >
                  <SelectTrigger className={errors.experience ? "border-red-500" : ""}>
                    <SelectValue placeholder="Sélectionnez votre niveau d'expérience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="debutant">Débutant (0-1 an)</SelectItem>
                    <SelectItem value="intermediaire">Intermédiaire (2-5 ans)</SelectItem>
                    <SelectItem value="experimente">Expérimenté (5+ ans)</SelectItem>
                    <SelectItem value="expert">Expert reconnu dans le domaine</SelectItem>
                  </SelectContent>
                </Select>
                {errors.experience && <p className="text-sm text-red-500 mt-1">{errors.experience}</p>}
              </div>
              
              <div>
                <Label htmlFor="biographie">Biographie et expérience professionnelle</Label>
                <Textarea
                  id="biographie"
                  name="biographie"
                  value={formData.biographie}
                  onChange={handleChange}
                  className={`min-h-[150px] ${errors.biographie ? "border-red-500" : ""}`}
                  placeholder="Parlez-nous de votre parcours, vos compétences et pourquoi vous souhaitez devenir formateur sur SkillAfrik..."
                />
                {errors.biographie && <p className="text-sm text-red-500 mt-1">{errors.biographie}</p>}
                <p className="text-sm text-gray-500 mt-1">{formData.biographie.length} / 500 caractères (minimum 100)</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="linkedin">LinkedIn (optionnel)</Label>
                  <Input
                    id="linkedin"
                    name="linkedin"
                    type="url"
                    value={formData.linkedin}
                    onChange={handleChange}
                    placeholder="https://linkedin.com/in/votrenom"
                  />
                </div>
                
                <div>
                  <Label htmlFor="website">Site web (optionnel)</Label>
                  <Input
                    id="website"
                    name="website"
                    type="url"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://votresite.com"
                  />
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Switch 
                  id="acceptConditions" 
                  checked={formData.acceptConditions} 
                  onCheckedChange={handleSwitchChange}
                />
                <Label htmlFor="acceptConditions">
                  J'accepte les conditions pour les formateurs et la politique de confidentialité
                </Label>
              </div>
              {errors.acceptConditions && <p className="text-sm text-red-500">{errors.acceptConditions}</p>}
              
              <Button 
                type="submit" 
                className="w-full bg-orange-500 hover:bg-orange-600" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Envoi en cours..." : "Soumettre ma candidature"}
              </Button>
            </form>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default DevenirFormateurPage;
