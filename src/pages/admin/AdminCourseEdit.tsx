
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { ArrowLeft, Save, Trash2, Upload, ExternalLink, Image } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const AdminCourseEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isNew = id === "new";

  const [course, setCourse] = useState({
    id: "",
    title: "",
    description: "",
    instructor: "",
    category: "Technologie",
    level: "Débutant",
    price: 0,
    originalPrice: 0,
    duration: 0,
    students: 0,
    imageUrl: "",
    rating: 0,
    status: "draft",
    externalUrl: ""
  });

  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    if (!isNew) {
      // Simuler la récupération des données d'un cours existant
      // Dans un cas réel, cela serait un appel API
      const courseData = {
        id: "6",
        title: "Intelligence Artificielle: Applications Pratiques",
        description: "Ce cours explore les applications pratiques de l'intelligence artificielle dans différents secteurs.",
        instructor: "Amina Toure",
        category: "IA",
        level: "Avancé",
        price: 25000,
        originalPrice: 125000,
        duration: 25,
        students: 645,
        imageUrl: "/lovable-uploads/ae605dec-9ca4-4a78-8ed7-7a0dadbadc30.png",
        rating: 4.7,
        status: "published",
        externalUrl: "https://skillafrik.mychariow.com/prd_pycgdm"
      };
      
      setCourse(courseData);
      setImagePreview(courseData.imageUrl);
    }
  }, [isNew, id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCourse(prev => ({
      ...prev,
      [name]: name === "price" || name === "originalPrice" || name === "duration" ? 
        Number(value) : value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setCourse(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSwitchChange = (name: string, checked: boolean) => {
    setCourse(prev => ({
      ...prev,
      [name]: name === "status" ? (checked ? "published" : "draft") : checked
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Dans un cas réel, cela serait un téléchargement vers un service de stockage
      const objectUrl = URL.createObjectURL(file);
      setImagePreview(objectUrl);
      
      // Simuler un chemin d'accès à l'image après téléchargement
      setCourse(prev => ({
        ...prev,
        imageUrl: objectUrl
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Dans un cas réel, cela serait un appel API pour sauvegarder le cours
    console.log("Cours à sauvegarder:", course);
    
    // Afficher un toast de confirmation
    toast({
      title: `Cours ${isNew ? "créé" : "mis à jour"} avec succès`,
      description: `Le cours "${course.title}" a été ${isNew ? "créé" : "mis à jour"} et est maintenant ${course.status === "published" ? "publié" : "en brouillon"}.`,
    });
    
    // Rediriger vers la liste des cours
    navigate("/panel/cours");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Button variant="ghost" size="sm" onClick={() => navigate("/panel/cours")} className="mr-2">
            <ArrowLeft className="mr-2 h-4 w-4" /> Retour
          </Button>
          <h2 className="text-3xl font-bold">{isNew ? "Créer un cours" : "Modifier le cours"}</h2>
        </div>
        
        <div className="flex space-x-2">
          {!isNew && (
            <Button variant="destructive" size="sm">
              <Trash2 className="mr-2 h-4 w-4" /> Supprimer
            </Button>
          )}
          <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleSubmit}>
            <Save className="mr-2 h-4 w-4" /> Enregistrer
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Colonne principale */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informations du cours</CardTitle>
              <CardDescription>Détails principaux du cours</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Titre du cours</Label>
                <Input 
                  id="title" 
                  name="title" 
                  value={course.title} 
                  onChange={handleChange}
                  placeholder="Ex: Introduction à la Programmation"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  name="description" 
                  value={course.description} 
                  onChange={handleChange}
                  placeholder="Décrivez votre cours..."
                  rows={5}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="instructor">Instructeur</Label>
                <Input 
                  id="instructor" 
                  name="instructor" 
                  value={course.instructor} 
                  onChange={handleChange}
                  placeholder="Nom de l'instructeur"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Catégorie</Label>
                  <Select 
                    value={course.category} 
                    onValueChange={(value) => handleSelectChange("category", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner une catégorie" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Affaires">Affaires</SelectItem>
                      <SelectItem value="Technologie">Technologie</SelectItem>
                      <SelectItem value="Agriculture">Agriculture</SelectItem>
                      <SelectItem value="IA">IA</SelectItem>
                      <SelectItem value="Marketing">Marketing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="level">Niveau</Label>
                  <Select 
                    value={course.level} 
                    onValueChange={(value) => handleSelectChange("level", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner un niveau" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Débutant">Débutant</SelectItem>
                      <SelectItem value="Intermédiaire">Intermédiaire</SelectItem>
                      <SelectItem value="Avancé">Avancé</SelectItem>
                      <SelectItem value="Tous niveaux">Tous niveaux</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="duration">Durée (heures)</Label>
                  <Input 
                    id="duration" 
                    name="duration" 
                    type="number" 
                    value={course.duration} 
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="students">Nombre d'étudiants</Label>
                  <Input 
                    id="students" 
                    name="students" 
                    type="number" 
                    value={course.students} 
                    onChange={handleChange}
                    min="0"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="externalUrl">URL externe (optionnel)</Label>
                <div className="flex">
                  <Input 
                    id="externalUrl" 
                    name="externalUrl" 
                    value={course.externalUrl} 
                    onChange={handleChange}
                    placeholder="https://..."
                    className="flex-1"
                  />
                  {course.externalUrl && (
                    <Button variant="outline" size="icon" className="ml-2" asChild>
                      <a href={course.externalUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
                <p className="text-sm text-gray-500">Lien externe pour rediriger les utilisateurs vers une plateforme de vente</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Image du cours</CardTitle>
              <CardDescription>Téléchargez une image représentative</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed rounded-lg p-4 text-center">
                {imagePreview ? (
                  <div className="space-y-4">
                    <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                      <img 
                        src={imagePreview} 
                        alt="Aperçu du cours" 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <Button variant="outline" onClick={() => document.getElementById("image-upload")?.click()}>
                      <Image className="mr-2 h-4 w-4" /> Changer l'image
                    </Button>
                  </div>
                ) : (
                  <div 
                    className="flex flex-col items-center justify-center py-10 cursor-pointer"
                    onClick={() => document.getElementById("image-upload")?.click()}
                  >
                    <Upload className="h-10 w-10 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600 mb-1">Cliquez pour télécharger une image</p>
                    <p className="text-xs text-gray-400">PNG, JPG, GIF jusqu'à 5MB</p>
                  </div>
                )}
                <input 
                  id="image-upload" 
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                  onChange={handleImageChange}
                />
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Colonne latérale */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Tarification</CardTitle>
              <CardDescription>Définir les prix du cours</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="price">Prix actuel (FCFA)</Label>
                <Input 
                  id="price" 
                  name="price" 
                  type="number" 
                  value={course.price} 
                  onChange={handleChange}
                  min="0"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="originalPrice">Prix original (FCFA)</Label>
                <Input 
                  id="originalPrice" 
                  name="originalPrice" 
                  type="number" 
                  value={course.originalPrice} 
                  onChange={handleChange}
                  min="0"
                />
                <p className="text-xs text-gray-500">Définissez un prix original plus élevé pour montrer une réduction</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Publication</CardTitle>
              <CardDescription>Paramètres de visibilité</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="status">Publier le cours</Label>
                  <p className="text-sm text-gray-500">Rendre le cours visible aux utilisateurs</p>
                </div>
                <Switch 
                  id="status" 
                  checked={course.status === "published"}
                  onCheckedChange={(checked) => handleSwitchChange("status", checked)}
                />
              </div>
              
              <div className="bg-gray-50 p-3 rounded-md text-sm">
                <p className="font-medium mb-1">
                  {course.status === "published" ? "Cours publié" : "Cours en brouillon"}
                </p>
                <p className="text-gray-500">
                  {course.status === "published" 
                    ? "Le cours est visible sur le site et peut être acheté par les utilisateurs." 
                    : "Le cours n'est pas visible sur le site et ne peut pas être acheté."
                  }
                </p>
              </div>
            </CardContent>
          </Card>
          
          {!isNew && (
            <Card>
              <CardHeader>
                <CardTitle>Statistiques</CardTitle>
                <CardDescription>Performance du cours</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Notation moyenne</p>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(course.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`} 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                    <span className="ml-1 text-sm font-medium">{course.rating.toFixed(1)}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Étudiants inscrits</p>
                    <p className="text-lg font-medium">{course.students}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Achats récents</p>
                    <p className="text-lg font-medium">12</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminCourseEdit;
