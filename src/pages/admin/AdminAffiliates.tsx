
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { PlusCircle, Search, MoreHorizontal, Share2, DollarSign } from "lucide-react";
import { useState } from "react";

const AdminAffiliates = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Données factices pour les affiliés
  const affiliates = [
    {
      id: 1,
      name: "Amadou Kane",
      email: "amadou@example.com",
      country: "Sénégal",
      referrals: 32,
      sales: "325 000 FCFA",
      commission: "81 250 FCFA",
      joined: "08/01/2024",
      status: "active"
    },
    {
      id: 2,
      name: "Ngozi Okonkwo",
      email: "ngozi@example.com",
      country: "Nigeria",
      referrals: 45,
      sales: "425 000 FCFA",
      commission: "106 250 FCFA",
      joined: "12/12/2023",
      status: "active"
    },
    {
      id: 3,
      name: "Kwame Asante",
      email: "kwame@example.com",
      country: "Ghana",
      referrals: 28,
      sales: "285 000 FCFA",
      commission: "71 250 FCFA",
      joined: "20/01/2024",
      status: "active"
    },
    {
      id: 4,
      name: "Aisha Ibrahim",
      email: "aisha@example.com",
      country: "Mali",
      referrals: 15,
      sales: "145 000 FCFA",
      commission: "36 250 FCFA",
      joined: "05/02/2024",
      status: "pending"
    },
    {
      id: 5,
      name: "Jean-Pierre Kouassi",
      email: "jeanpierre@example.com",
      country: "Côte d'Ivoire",
      referrals: 21,
      sales: "215 000 FCFA",
      commission: "53 750 FCFA",
      joined: "18/01/2024",
      status: "active"
    }
  ];

  // Filtrer les affiliés selon la recherche
  const filteredAffiliates = affiliates.filter(affiliate => 
    affiliate.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    affiliate.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    affiliate.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Générer l'avatar à partir des initiales
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Gestion des Affiliés</h2>
      
      <Card>
        <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <CardTitle className="flex items-center">
              <Share2 className="mr-2 h-5 w-5 text-blue-500" />
              Affiliés
            </CardTitle>
            <CardDescription>Gérez le programme d'affiliation de la plateforme</CardDescription>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
            <PlusCircle className="mr-2 h-4 w-4" /> Ajouter un affilié
          </Button>
        </CardHeader>
        <CardContent>
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Rechercher des affiliés..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Total des affiliés</p>
                    <p className="text-2xl font-bold">145</p>
                  </div>
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
                    <Share2 className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Ventes via affiliation</p>
                    <p className="text-2xl font-bold">2 450 000 FCFA</p>
                  </div>
                  <div className="bg-green-100 text-green-600 p-2 rounded-full">
                    <DollarSign className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Commissions versées</p>
                    <p className="text-2xl font-bold">612 500 FCFA</p>
                  </div>
                  <div className="bg-purple-100 text-purple-600 p-2 rounded-full">
                    <DollarSign className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="rounded-lg border overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Affilié</TableHead>
                  <TableHead>Pays</TableHead>
                  <TableHead>Référrals</TableHead>
                  <TableHead>Ventes</TableHead>
                  <TableHead>Commission</TableHead>
                  <TableHead>Date d'inscription</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAffiliates.map((affiliate) => (
                  <TableRow key={affiliate.id}>
                    <TableCell>
                      <div className="flex items-center">
                        <div className="rounded-full w-10 h-10 bg-blue-500 text-white flex items-center justify-center mr-3">
                          {getInitials(affiliate.name)}
                        </div>
                        <div>
                          <div className="font-medium">{affiliate.name}</div>
                          <div className="text-sm text-gray-500">{affiliate.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{affiliate.country}</TableCell>
                    <TableCell>{affiliate.referrals}</TableCell>
                    <TableCell>{affiliate.sales}</TableCell>
                    <TableCell>{affiliate.commission}</TableCell>
                    <TableCell>{affiliate.joined}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        affiliate.status === "active" 
                          ? "bg-green-100 text-green-800" 
                          : "bg-yellow-100 text-yellow-800"
                      }`}>
                        {affiliate.status === "active" ? "Actif" : "En attente"}
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
            <span>Affichage de 1 à {filteredAffiliates.length} sur {filteredAffiliates.length} entrées</span>
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

export default AdminAffiliates;
