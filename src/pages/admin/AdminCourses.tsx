
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { PlusCircle, Search, Filter, MoreHorizontal, Star } from "lucide-react";
import { useState } from "react";

const AdminCourses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("Tous");

  // Données factices pour les cours
  const courses = [
    {
      id: 1,
      title: "Introduction à l'Entrepreneuriat Africain",
      category: "Affaires",
      level: "Débutant",
      instructor: "Fatima Mensah",
      price: "50 FCFA",
      students: 245,
      rating: 4.7,
      status: "published"
    },
    {
      id: 2,
      title: "Développement Web avec React",
      category: "Technologie",
      level: "Intermédiaire",
      instructor: "David Oyelowo",
      price: "80 FCFA",
      students: 189,
      rating: 4.9,
      status: "published"
    },
    {
      id: 3,
      title: "Marketing Digital pour Entrepreneurs",
      category: "Affaires",
      level: "Débutant",
      instructor: "Fatima Mensah",
      price: "60 FCFA",
      students: 317,
      rating: 4.6,
      status: "published"
    },
    {
      id: 4,
      title: "Agriculture Durable en Afrique",
      category: "Agriculture",
      level: "Intermédiaire",
      instructor: "Grace Akua",
      price: "70 FCFA",
      students: 124,
      rating: 4.8,
      status: "published"
    },
    {
      id: 5,
      title: "Cybersécurité pour Débutants",
      category: "Technologie",
      level: "Débutant",
      instructor: "David Oyelowo",
      price: "Gratuit",
      students: 520,
      rating: 4.5,
      status: "published"
    },
    {
      id: 6,
      title: "Intelligence Artificielle: Applications Pratiques",
      category: "IA",
      level: "Avancé",
      instructor: "Amina Toure",
      price: "90 FCFA",
      students: 78,
      rating: 4.7,
      status: "draft"
    },
    {
      id: 7,
      title: "Gestion d'Entreprise en Afrique",
      category: "Affaires",
      level: "Intermédiaire",
      instructor: "Moussa Sow",
      price: "65 FCFA",
      students: 0,
      rating: 0,
      status: "draft"
    },
  ];

  // Filtres disponibles
  const filters = ["Tous", "Publié", "Brouillon", "Affaires", "Technologie", "Agriculture", "IA", "Marketing"];

  // Fonction pour filtrer les cours
  const filteredCourses = courses.filter(course => {
    // Filtrer par requête de recherche
    const matchesQuery = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filtrer par type de cours
    const matchesFilter = 
      filter === "Tous" ? true : 
      filter === "Publié" ? course.status === "published" :
      filter === "Brouillon" ? course.status === "draft" :
      course.category === filter;
    
    return matchesQuery && matchesFilter;
  });

  // Générer le style pour le badge de statut
  const getStatusBadgeStyle = (status: string) => {
    return status === "published" 
      ? "bg-green-100 text-green-800" 
      : "bg-yellow-100 text-yellow-800";
  };

  // Formater le statut pour l'affichage
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
          <Button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
            <PlusCircle className="mr-2 h-4 w-4" /> Ajouter un cours
          </Button>
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
                {filteredCourses.map((course) => (
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
                    <TableCell>{course.price}</TableCell>
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
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <span>Affichage de 1 à {filteredCourses.length} sur {filteredCourses.length} entrées</span>
            <div className="flex space-x-1">
              <button className="px-3 py-1 rounded border text-black bg-white">1</button>
              <button className="px-3 py-1 rounded border hover:bg-gray-50">2</button>
              <button className="px-3 py-1 rounded border hover:bg-gray-50">»</button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminCourses;
