
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { PlusCircle, Search, MoreHorizontal, Filter } from "lucide-react";
import { useState } from "react";

const AdminUsers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("Tous");

  // Données factices pour les utilisateurs
  const users = [
    {
      id: 1,
      name: "Amadou Diallo",
      email: "amadou@skillafrik.com",
      role: "Admin",
      country: "Sénégal",
      registrationDate: "15/01/2024",
      lastLogin: "10/04/2024",
      status: "active"
    },
    {
      id: 2,
      name: "Fatima Mensah",
      email: "fatima@example.com",
      role: "Formateur",
      country: "Ghana",
      registrationDate: "03/02/2024",
      lastLogin: "09/04/2024",
      status: "active"
    },
    {
      id: 3,
      name: "Kofi Anan",
      email: "kofi@example.com",
      role: "Étudiant",
      country: "Ghana",
      registrationDate: "15/02/2024",
      lastLogin: "08/04/2024",
      status: "active"
    },
    {
      id: 4,
      name: "Awa Cissé",
      email: "awa@example.com",
      role: "Étudiant",
      country: "Sénégal",
      registrationDate: "20/01/2024",
      lastLogin: "25/03/2024",
      status: "inactive"
    },
    {
      id: 5,
      name: "David Oyelowo",
      email: "david@example.com",
      role: "Formateur",
      country: "Nigeria",
      registrationDate: "10/11/2023",
      lastLogin: "10/04/2024",
      status: "active"
    },
    {
      id: 6,
      name: "Grace Akua",
      email: "grace@example.com",
      role: "Formateur",
      country: "Ghana",
      registrationDate: "05/12/2023",
      lastLogin: "07/04/2024",
      status: "active"
    },
    {
      id: 7,
      name: "Moussa Sow",
      email: "moussa@example.com",
      role: "Étudiant",
      country: "Mali",
      registrationDate: "12/03/2024",
      lastLogin: "05/04/2024",
      status: "active"
    },
    {
      id: 8,
      name: "Chioma Okafor",
      email: "chioma@example.com",
      role: "Étudiant",
      country: "Nigeria",
      registrationDate: "08/01/2024",
      lastLogin: "01/04/2024",
      status: "inactive"
    }
  ];

  // Filtres disponibles
  const filters = ["Tous", "Admin", "Formateur", "Étudiant", "Actifs", "Inactifs"];

  // Fonction pour filtrer les utilisateurs
  const filteredUsers = users.filter(user => {
    // Filtrer par requête de recherche
    const matchesQuery = user.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         user.email.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filtrer par type d'utilisateur
    const matchesFilter = 
      filter === "Tous" ? true : 
      filter === "Actifs" ? user.status === "active" :
      filter === "Inactifs" ? user.status === "inactive" :
      user.role === filter;
    
    return matchesQuery && matchesFilter;
  });

  // Générer l'avatar à partir des initiales
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  // Générer la couleur de l'avatar en fonction du rôle
  const getAvatarColor = (role: string) => {
    switch(role) {
      case "Admin": return "bg-blue-600 text-white";
      case "Formateur": return "bg-orange-500 text-white";
      case "Étudiant": return "bg-green-500 text-white";
      default: return "bg-gray-500 text-white";
    }
  };

  // Générer le style pour le badge de statut
  const getStatusBadgeStyle = (status: string) => {
    return status === "active" 
      ? "bg-green-100 text-green-800" 
      : "bg-gray-100 text-gray-800";
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Gestion des Utilisateurs</h2>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Utilisateurs</CardTitle>
            <CardDescription>Gérez les utilisateurs de la plateforme</CardDescription>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <PlusCircle className="mr-2 h-4 w-4" /> Ajouter un utilisateur
          </Button>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
            <div className="relative w-full sm:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Rechercher des utilisateurs..."
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

          <div className="rounded-lg border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Utilisateur</TableHead>
                  <TableHead>Rôle</TableHead>
                  <TableHead>Pays</TableHead>
                  <TableHead>Date d'inscription</TableHead>
                  <TableHead>Dernière connexion</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div className="flex items-center">
                        <div className={`rounded-full w-10 h-10 flex items-center justify-center mr-3 ${getAvatarColor(user.role)}`}>
                          {getInitials(user.name)}
                        </div>
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-gray-500">{user.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        user.role === "Admin" ? "bg-blue-100 text-blue-800" :
                        user.role === "Formateur" ? "bg-orange-100 text-orange-800" :
                        "bg-green-100 text-green-800"
                      }`}>
                        {user.role}
                      </span>
                    </TableCell>
                    <TableCell>{user.country}</TableCell>
                    <TableCell>{user.registrationDate}</TableCell>
                    <TableCell>{user.lastLogin}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusBadgeStyle(user.status)}`}>
                        {user.status === "active" ? "actif" : "inactif"}
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

          <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
            <span>Affichage de 1 à {filteredUsers.length} sur {filteredUsers.length} entrées</span>
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

export default AdminUsers;
