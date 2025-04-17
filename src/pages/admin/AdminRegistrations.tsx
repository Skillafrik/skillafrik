
import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { 
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  CheckCircle, 
  XCircle, 
  Clock, 
  UserPlus, 
  Building 
} from "lucide-react";
import { Registration, Partnership, getAllRegistrations, getAllPartnerships, updateRegistrationStatus, updatePartnershipStatus } from '@/utils/registrationService';

const AdminRegistrations = () => {
  const { toast } = useToast();
  const [registrations, setRegistrations] = useState<Registration[]>(getAllRegistrations());
  const [partnerships, setPartnerships] = useState<Partnership[]>(getAllPartnerships());
  const [activeTab, setActiveTab] = useState("inscriptions");

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleStatusChange = (id: string, status: 'en_attente' | 'approuvé' | 'rejeté', type: 'registration' | 'partnership') => {
    if (type === 'registration') {
      updateRegistrationStatus(id, status);
      setRegistrations(getAllRegistrations());
    } else {
      updatePartnershipStatus(id, status);
      setPartnerships(getAllPartnerships());
    }

    toast({
      title: "Statut mis à jour",
      description: `Le statut a été changé à "${status}"`,
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'en_attente':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800"><Clock className="w-3 h-3 mr-1" /> En attente</span>;
      case 'approuvé':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"><CheckCircle className="w-3 h-3 mr-1" /> Approuvé</span>;
      case 'rejeté':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800"><XCircle className="w-3 h-3 mr-1" /> Rejeté</span>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Demandes</h2>
      </div>

      <Tabs defaultValue="inscriptions" value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="inscriptions" className="flex items-center">
            <UserPlus className="w-4 h-4 mr-2" /> Inscriptions
          </TabsTrigger>
          <TabsTrigger value="partenariats" className="flex items-center">
            <Building className="w-4 h-4 mr-2" /> Partenariats
          </TabsTrigger>
        </TabsList>

        <TabsContent value="inscriptions" className="mt-4">
          <Card className="p-6">
            <Table>
              <TableCaption>Liste des demandes d'inscription</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Nom</TableHead>
                  <TableHead>Prénom</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Téléphone</TableHead>
                  <TableHead>Date d'inscription</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {registrations.length > 0 ? (
                  registrations.map((registration) => (
                    <TableRow key={registration.id}>
                      <TableCell>{registration.nom}</TableCell>
                      <TableCell>{registration.prenom}</TableCell>
                      <TableCell>{registration.email}</TableCell>
                      <TableCell>{registration.telephone}</TableCell>
                      <TableCell>{formatDate(registration.dateInscription)}</TableCell>
                      <TableCell>{getStatusBadge(registration.statut)}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleStatusChange(registration.id, 'approuvé', 'registration')}
                            className="text-green-600 border-green-600 hover:bg-green-50"
                          >
                            <CheckCircle className="w-4 h-4" />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleStatusChange(registration.id, 'rejeté', 'registration')}
                            className="text-red-600 border-red-600 hover:bg-red-50"
                          >
                            <XCircle className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8 text-gray-500">
                      Aucune demande d'inscription pour l'instant.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>

        <TabsContent value="partenariats" className="mt-4">
          <Card className="p-6">
            <Table>
              <TableCaption>Liste des demandes de partenariat</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Organisation</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Téléphone</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Pays</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {partnerships.length > 0 ? (
                  partnerships.map((partnership) => (
                    <TableRow key={partnership.id}>
                      <TableCell>{partnership.organizationName}</TableCell>
                      <TableCell>{partnership.contactName}</TableCell>
                      <TableCell>{partnership.email}</TableCell>
                      <TableCell>{partnership.phone}</TableCell>
                      <TableCell>{partnership.partnerType}</TableCell>
                      <TableCell>{partnership.country}</TableCell>
                      <TableCell>{formatDate(partnership.dateSubmitted)}</TableCell>
                      <TableCell>{getStatusBadge(partnership.statut)}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleStatusChange(partnership.id, 'approuvé', 'partnership')}
                            className="text-green-600 border-green-600 hover:bg-green-50"
                          >
                            <CheckCircle className="w-4 h-4" />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleStatusChange(partnership.id, 'rejeté', 'partnership')}
                            className="text-red-600 border-red-600 hover:bg-red-50"
                          >
                            <XCircle className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={9} className="text-center py-8 text-gray-500">
                      Aucune demande de partenariat pour l'instant.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminRegistrations;
