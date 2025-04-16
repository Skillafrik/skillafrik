
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { PlusCircle, Search, MoreHorizontal, Star, Award } from "lucide-react";
import { useState } from "react";

const AdminInstructors = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Données factices pour les formateurs
  const instructors = [
    {
      id: 1,
      name: "Fatima Mensah",
      email: "fatima@example.com",
      country: "Ghana",
      courses: 3,
      students: 682,
      revenue: "789 000 FCFA",
      rating: 4.7,
      status: "active"
    },
    {
      id: 2,
      name: "David Oyelowo",
      email: "david@example.com",
      country: "Nigeria",
      courses: 2,
      students: 709,
      revenue: "835 000 FCFA",
      rating: 4.8,
      status: "active"
    },
    {
      id: 3,
      name: "Grace Akua",
      email: "grace@example.com",
      country: "Ghana",
      courses: 1,
      students: 124,
      revenue: "145 000 FCFA",
      rating: 4.8,
      status: "active"
    },
    {
      id: 4,
      name: "Amina Toure",
      email: "amina@example.com",
      country: "Sénégal",
      courses: 1,
      students: 78,
      revenue: "90 000 FCFA",
      rating: 4.7,
      status: "active"
    },
    {
      id: 5,
      name: "Moussa Sow",
      email: "moussa@example.com",
      country: "Mali",
      courses: 1,
      students: 0,
      revenue: "0 FCFA",
      rating: 0,
      status: "pending"
    }
  ];

  // Filtrer les formateurs selon la recherche
  const filteredInstructors = instructors.filter(instructor => 
    instructor.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    instructor.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    instructor.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Générer l'avatar à partir des initiales
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Gestion des Formateurs</h2>
      
      <Card>
        <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <CardTitle className="flex items-center">
              <Award className="mr-2 h-5 w-5 text-orange-500" />
              Formateurs
            </CardTitle>
            <CardDescription>Gérez les formateurs de la plateforme</CardDescription>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
            <PlusCircle className="mr-2 h-4 w-4" /> Ajouter un formateur
          </Button>
        </CardHeader>
        <CardContent>
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Rechercher des formateurs..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="rounded-lg border overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Formateur</TableHead>
                  <TableHead>Pays</TableHead>
                  <TableHead>Cours</TableHead>
                  <TableHead>Étudiants</TableHead>
                  <TableHead>Revenus</TableHead>
                  <TableHead>Évaluation</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredInstructors.map((instructor) => (
                  <TableRow key={instructor.id}>
                    <TableCell>
                      <div className="flex items-center">
                        <div className="rounded-full w-10 h-10 bg-orange-500 text-white flex items-center justify-center mr-3">
                          {getInitials(instructor.name)}
                        </div>
                        <div>
                          <div className="font-medium">{instructor.name}</div>
                          <div className="text-sm text-gray-500">{instructor.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{instructor.country}</TableCell>
                    <TableCell>{instructor.courses}</TableCell>
                    <TableCell>{instructor.students}</TableCell>
                    <TableCell>{instructor.revenue}</TableCell>
                    <TableCell>
                      {instructor.rating > 0 ? (
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="ml-1">{instructor.rating}</span>
                        </div>
                      ) : (
                        <span className="text-gray-400">N/A</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        instructor.status === "active" 
                          ? "bg-green-100 text-green-800" 
                          : "bg-yellow-100 text-yellow-800"
                      }`}>
                        {instructor.status === "active" ? "Actif" : "En attente"}
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
            <span>Affichage de 1 à {filteredInstructors.length} sur {filteredInstructors.length} entrées</span>
            <div className="flex space-x-1">
              <button className="px-3 py-1 rounded border text-black bg-white">1</button>
              <button className="px-3 py-1 rounded border hover:bg-gray-50">»</button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminInstructors;
