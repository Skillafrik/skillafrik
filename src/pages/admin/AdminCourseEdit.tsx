
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { ArrowLeft, Save, Trash2, Upload, ExternalLink, Image, AlertCircle } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { useCourses, Course } from "@/utils/courseStorage";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const AdminCourseEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isNew = id === "new";
  const { getCourseById, addCourse, updateCourse, deleteCourse } = useCourses();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const emptyCourse: Omit<Course, "id"> = {
    title: "",
    description: "",
    instructor: "",
    category: "Technologie",
    level: "Débutant",
    price: 0,
    originalPrice: 0,
    duration: 0,
    students: 0,
    rating: 0,
    status: "draft",
    imageUrl: "",
    externalUrl: "",
    reviewCount: 0
  };

  const [course, setCourse] = useState<Omit<Course, "id"> & { id?: string }>(emptyCourse);
  const [imagePreview, setImagePreview] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!isNew && id) {
      const existingCourse = getCourseById(id);
      if (existingCourse) {
        setCourse(existingCourse);
        setImagePreview(existingCourse.imageUrl || "");
      } else {
        toast({
          title: "Cours non trouvé",
          description: "Le cours que vous essayez de modifier n'existe pas.",
          variant: "destructive",
        });
        navigate("/panel/cours");
      }
    }
  }, [isNew, id, getCourseById, navigate]);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!course.title.trim()) {
      newErrors.title = "Le titre est requis";
    }
    
    if (!course.instructor.trim()) {
      newErrors.instructor = "Le nom de l'instructeur est requis";
    }
    
    if (course.price < 0) {
      newErrors.price = "Le prix ne peut pas être négatif";
    }
    
    if (course.originalPrice < 0) {
      newErrors.originalPrice = "Le prix original ne peut pas être négatif";
    }
    
    if (course.duration < 0) {
      newErrors.duration = "La durée ne peut pas être négative";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCourse(prev => ({
      ...prev,
      [name]: name === "price" || name === "originalPrice" || name === "duration" || name === "students" ? 
        Number(value) : value
    }));
    
    // Clear error for this field if any
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[name];
        return newErrors;
      });
    }
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
      // In a real app, this would be an upload to a storage service
      const objectUrl = URL.createObjectURL(file);
      setImagePreview(objectUrl);
      
      // Simulate an image path after upload
      setCourse(prev => ({
        ...prev,
        imageUrl: objectUrl
      }));
    }
  };

  const handleDeleteCourse = () => {
    if (id) {
      const success = deleteCourse(id);
      
      if (success) {
        toast({
          title: "Cours supprimé",
          description: "Le cours a été supprimé avec succès.",
        });
        navigate("/panel/cours");
      } else {
        toast({
          title: "Erreur de suppression",
          description: "Une erreur est survenue lors de la suppression du cours.",
          variant: "destructive",
        });
      }
    }
    setShowDeleteDialog(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Formulaire incomplet",
        description: "Veuillez corriger les erreurs dans le formulaire.",
        variant: "destructive",
      });
      return;
    }
    
    try {
      if (isNew) {
        // Add new course
        addCourse(course);
        toast({
          title: "Cours créé",
          description: `Le cours "${course.title}" a été créé avec succès.`,
        });
      } else if (id) {
        // Update existing course
        updateCourse(id, course);
        toast({
          title: "Cours mis à jour",
          description: `Le cours "${course.title}" a été mis à jour avec succès.`,
        });
      }
      
      navigate("/panel/cours");
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'enregistrement du cours.",
        variant: "destructive",
      });
    }
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
            <Button 
              variant="destructive" 
              size="sm" 
              onClick={() => setShowDeleteDialog(true)}
            >
              <Trash2 className="mr-2 h-4 w-4" /> Supprimer
            </Button>
          )}
          <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleSubmit}>
            <Save className="mr-2 h-4 w-4" /> Enregistrer
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Column */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informations du cours</CardTitle>
              <CardDescription>Détails principaux du cours</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title" className={errors.title ? "text-red-500" : ""}>
                  Titre du cours
                </Label>
                <Input 
                  id="title" 
                  name="title" 
                  value={course.title} 
                  onChange={handleChange}
                  placeholder="Ex: Introduction à la Programmation"
                  className={errors.title ? "border-red-500" : ""}
                />
                {errors.title && (
                  <p className="text-sm text-red-500">{errors.title}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  name="description" 
                  value={course.description || ""} 
                  onChange={handleChange}
                  placeholder="Décrivez votre cours..."
                  rows={5}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="instructor" className={errors.instructor ? "text-red-500" : ""}>
                  Instructeur
                </Label>
                <Input 
                  id="instructor" 
                  name="instructor" 
                  value={course.instructor} 
                  onChange={handleChange}
                  placeholder="Nom de l'instructeur"
                  className={errors.instructor ? "border-red-500" : ""}
                />
                {errors.instructor && (
                  <p className="text-sm text-red-500">{errors.instructor}</p>
                )}
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
                  <Label htmlFor="duration" className={errors.duration ? "text-red-500" : ""}>
                    Durée (heures)
                  </Label>
                  <Input 
                    id="duration" 
                    name="duration" 
                    type="number" 
                    value={course.duration} 
                    onChange={handleChange}
                    min="0"
                    className={errors.duration ? "border-red-500" : ""}
                  />
                  {errors.duration && (
                    <p className="text-sm text-red-500">{errors.duration}</p>
                  )}
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
                    value={course.externalUrl || ""} 
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
                <p className="text-sm text-gray-500">
                  Lien externe pour rediriger les utilisateurs vers une plateforme de vente
                </p>
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
        
        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Tarification</CardTitle>
              <CardDescription>Définir les prix du cours</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="price" className={errors.price ? "text-red-500" : ""}>
                  Prix actuel (FCFA)
                </Label>
                <Input 
                  id="price" 
                  name="price" 
                  type="number" 
                  value={course.price} 
                  onChange={handleChange}
                  min="0"
                  className={errors.price ? "border-red-500" : ""}
                />
                {errors.price && (
                  <p className="text-sm text-red-500">{errors.price}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="originalPrice" className={errors.originalPrice ? "text-red-500" : ""}>
                  Prix original (FCFA)
                </Label>
                <Input 
                  id="originalPrice" 
                  name="originalPrice" 
                  type="number" 
                  value={course.originalPrice} 
                  onChange={handleChange}
                  min="0"
                  className={errors.originalPrice ? "border-red-500" : ""}
                />
                {errors.originalPrice && (
                  <p className="text-sm text-red-500">{errors.originalPrice}</p>
                )}
                <p className="text-xs text-gray-500">
                  Définissez un prix original plus élevé pour montrer une réduction
                </p>
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

      {/* Delete Course Confirmation Dialog */}
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Êtes-vous sûr ?</AlertDialogTitle>
            <AlertDialogDescription>
              Cette action est irréversible. Le cours sera définitivement supprimé.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Annuler</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleDeleteCourse}
              className="bg-red-600 hover:bg-red-700"
            >
              Supprimer
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AdminCourseEdit;
