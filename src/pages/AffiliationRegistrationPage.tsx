
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

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Le nom complet est requis" }),
  email: z.string().email({ message: "Email invalide" }),
  phone: z.string().min(8, { message: "Numéro de téléphone invalide" }),
  website: z.string().optional(),
  audience: z.string().min(2, { message: "Veuillez décrire votre audience" }),
  motivation: z.string().min(10, { message: "Veuillez décrire votre motivation" }),
  terms: z.boolean().refine(val => val === true, { message: "Vous devez accepter les conditions" }),
});

const AffiliationRegistrationPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      website: "",
      audience: "",
      motivation: "",
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
        description: "Nous examinerons votre candidature et vous contacterons bientôt.",
      });
      form.reset();
    }, 1500);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section avec image de fond */}
      <section 
        className="py-16 bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/lovable-uploads/19e61f04-7070-4239-a1e0-863ec9578037.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">Devenir Affilié SkillAfrik</h1>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Rejoignez notre programme d'affiliation et commencez à gagner des commissions en partageant le savoir en Afrique.
          </p>
        </div>
      </section>

      {/* Formulaire d'inscription */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-8 text-center">Formulaire d'inscription au programme d'affiliation</h2>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom complet</FormLabel>
                      <FormControl>
                        <Input placeholder="Votre nom complet" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="votre@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Numéro de téléphone</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+227 XX XX XX XX" {...field} />
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
                      <FormLabel>Site web / Blog / Page réseaux sociaux (optionnel)</FormLabel>
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
                name="audience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Décrivez votre audience</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Type d'audience, taille approximative, pays, centres d'intérêt..."
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
                name="motivation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pourquoi souhaitez-vous devenir affilié SkillAfrik ?</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Partagez votre motivation et comment vous comptez promouvoir nos cours..."
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
                        J'accepte les conditions générales du programme d'affiliation et la politique de confidentialité
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
                {isSubmitting ? "Envoi en cours..." : "Soumettre ma candidature"}
              </Button>
            </form>
          </Form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AffiliationRegistrationPage;
