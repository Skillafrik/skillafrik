
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formSchema = z.object({
  organizationName: z.string().min(2, { message: "Le nom de l'organisation est requis" }),
  contactName: z.string().min(2, { message: "Le nom du contact est requis" }),
  position: z.string().min(2, { message: "La position est requise" }),
  email: z.string().email({ message: "Email invalide" }),
  phone: z.string().min(8, { message: "Numéro de téléphone invalide" }),
  website: z.string().url({ message: "URL invalide" }).optional().or(z.literal("")),
  country: z.string().min(2, { message: "Le pays est requis" }),
  partnerType: z.string().min(1, { message: "Veuillez sélectionner un type de partenariat" }),
  description: z.string().min(10, { message: "Veuillez décrire votre organisation" }),
  objective: z.string().min(10, { message: "Veuillez décrire vos objectifs" }),
  terms: z.boolean().refine(val => val === true, { message: "Vous devez accepter les conditions" }),
});

const PartnerRegistrationPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      organizationName: "",
      contactName: "",
      position: "",
      email: "",
      phone: "",
      website: "",
      country: "",
      partnerType: "",
      description: "",
      objective: "",
      terms: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simuler une soumission de formulaire
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      toast({
        title: "Demande envoyée avec succès !",
        description: "Notre équipe va examiner votre demande de partenariat et vous recontactera bientôt.",
      });
      form.reset();
    }, 1500);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="py-16 bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/lovable-uploads/19e61f04-7070-4239-a1e0-863ec9578037.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">Devenir Partenaire SkillAfrik</h1>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Rejoignez notre écosystème d'innovation en éducation et contribuez à transformer l'éducation en Afrique.
          </p>
        </div>
      </section>

      {/* Formulaire d'inscription */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-8 text-center">Formulaire de demande de partenariat</h2>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <h3 className="text-lg font-semibold">Informations sur l'organisation</h3>
              
              <FormField
                control={form.control}
                name="organizationName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom de l'organisation</FormLabel>
                    <FormControl>
                      <Input placeholder="Nom de votre organisation" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pays</FormLabel>
                      <FormControl>
                        <Input placeholder="Pays de l'organisation" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="website"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Site web (optionnel)</FormLabel>
                      <FormControl>
                        <Input placeholder="https://votre-site.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description de l'organisation</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Présentez brièvement votre organisation, votre secteur d'activité, etc."
                        className="min-h-[100px]" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <h3 className="text-lg font-semibold pt-4">Informations de contact</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="contactName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom du contact principal</FormLabel>
                      <FormControl>
                        <Input placeholder="Nom complet" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="position"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Position / Titre</FormLabel>
                      <FormControl>
                        <Input placeholder="Votre rôle dans l'organisation" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="contact@organisation.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Téléphone</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+227 XX XX XX XX" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <h3 className="text-lg font-semibold pt-4">Informations sur le partenariat</h3>
              
              <FormField
                control={form.control}
                name="partnerType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type de partenariat souhaité</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez un type de partenariat" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="educational">Partenaire Éducatif</SelectItem>
                        <SelectItem value="corporate">Partenaire Corporatif</SelectItem>
                        <SelectItem value="technology">Partenaire Technologique</SelectItem>
                        <SelectItem value="other">Autre (précisez dans vos objectifs)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="objective"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Objectifs du partenariat</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Décrivez vos objectifs et attentes concernant ce partenariat avec SkillAfrik..."
                        className="min-h-[100px]" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="terms"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox 
                        checked={field.value} 
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        J'accepte les conditions générales de partenariat et la politique de confidentialité
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Envoi en cours..." : "Soumettre ma demande de partenariat"}
              </Button>
            </form>
          </Form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PartnerRegistrationPage;
