
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { PlusCircle, Search, Filter, MoreHorizontal, Star, Edit, ExternalLink, Trash2, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
import { useCourses } from "@/utils/courseStorage";
import { toast } from "@/components/ui/use-toast";

const AdminCourses = () => {
  const { courses, deleteCourse, refreshCourses } = useCourses();
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("Tous");
  const [courseToDelete, setCourseToDelete] = useState<string | null>(null);
  const [filteredCourses, setFilteredCourses] = useState(courses);

  // Filters available
  const filters = ["Tous", "Publié", "Brouillon", "Affaires", "Technologie", "Agriculture", "IA", "Marketing"];
  
  useEffect(() => {
    // Apply filters whenever courses change
    filterCourses();
  }, [courses, searchQuery, filter]);
  
  // Function to filter courses
  const filterCourses = () => {
    let filtered = [...courses];
    
    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(course => 
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Filter by category or status
    if (filter !== "Tous") {
      filtered = filtered.filter(course => 
        filter === "Publié" ? course.status === "published" :
        filter === "Brouillon" ? course.status === "draft" :
        course.category === filter
      );
    }
    
    setFilteredCourses(filtered);
  };

  const handleDeleteCourse = (id: string) => {
    const success = deleteCourse(id);
    
    if (success) {
      toast({
        title: "Cours supprimé",
        description: "Le cours a été supprimé avec succès.",
      });
      refreshCourses();
    } else {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de la suppression du cours.",
        variant: "destructive",
      });
    }
    
    setCourseToDelete(null);
  };

  // Generate style for status badge
  const getStatusBadgeStyle = (status: string) => {
    return status === "published" 
      ? "bg-green-100 text-green-800" 
      : "bg-yellow-100 text-yellow-800";
  };

  // Format status for display
  const formatStatus = (status: string) => {
    return status === "published" ? "Publié" : "Brouillon";
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Gestion des Cours</h2>
      
      <Card>
        <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <CardTitle>Cours</CardTitle>
            <CardDescription>Gérez les cours de la plateforme</CardDescription>
          </div>
          <Link to="/panel/cours/new">
            <Button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
              <PlusCircle className="mr-2 h-4 w-4" /> Ajouter un cours
            </Button>
          </Link>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
            <div className="relative w-full sm:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Rechercher des cours..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-2 w-full sm:w-auto">
              <Filter className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-500">Filtrer par:</span>
              <select
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                {filters.map(filterOption => (
                  <option key={filterOption} value={filterOption}>
                    {filterOption}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="rounded-lg border overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Titre</TableHead>
                  <TableHead>Catégorie</TableHead>
                  <TableHead>Formateur</TableHead>
                  <TableHead>Prix</TableHead>
                  <TableHead>Étudiants</TableHead>
                  <TableHead>Note</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCourses.length > 0 ? (
                  filteredCourses.map((course) => (
                    <TableRow key={course.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{course.title}</div>
                          <div className="text-xs text-gray-500">Niveau: {course.level}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded-full text-xs bg-gray-100">
                          {course.category}
                        </span>
                      </TableCell>
                      <TableCell>{course.instructor}</TableCell>
                      <TableCell>{course.price.toLocaleString()} FCFA</TableCell>
                      <TableCell>{course.students}</TableCell>
                      <TableCell>
                        {course.rating > 0 ? (
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            <span className="ml-1">{course.rating}</span>
                          </div>
                        ) : (
                          <span className="text-gray-400">N/A</span>
                        )}
                      </TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${getStatusBadgeStyle(course.status)}`}>
                          {formatStatus(course.status)}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                              <Link to={`/panel/cours/${course.id}`}>
                                <Edit className="mr-2 h-4 w-4" /> Modifier
                              </Link>
                            </DropdownMenuItem>
                            {course.externalUrl && (
                              <DropdownMenuItem asChild>
                                <a href={course.externalUrl} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="mr-2 h-4 w-4" /> Voir URL externe
                                </a>
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuItem 
                              onClick={() => setCourseToDelete(course.id)}
                              className="text-red-600"
                            >
                              <Trash2 className="mr-2 h-4 w-4" /> Supprimer
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={8} className="h-24 text-center">
                      <div className="flex flex-col items-center justify-center">
                        <AlertCircle className="h-8 w-8 text-gray-400 mb-2" />
                        <p className="text-gray-500">Aucun cours trouvé</p>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          {filteredCourses.length > 0 && (
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
              <span>Affichage de 1 à {filteredCourses.length} sur {filteredCourses.length} entrées</span>
              <div className="flex space-x-1">
                <button className="px-3 py-1 rounded border text-black bg-white">1</button>
                <button className="px-3 py-1 rounded border hover:bg-gray-50">2</button>
                <button className="px-3 py-1 rounded border hover:bg-gray-50">»</button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Confirmation Dialog for Course Deletion */}
      <AlertDialog open={!!courseToDelete} onOpenChange={() => setCourseToDelete(null)}>
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
              onClick={() => courseToDelete && handleDeleteCourse(courseToDelete)}
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

export default AdminCourses;
