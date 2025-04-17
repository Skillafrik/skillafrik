
// Types pour les inscriptions et partenariats
export interface Registration {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  dateInscription: string;
  statut: 'en_attente' | 'approuvé' | 'rejeté';
}

export interface Partnership {
  id: string;
  organizationName: string;
  contactName: string;
  email: string;
  phone: string;
  partnerType: string;
  country: string;
  dateSubmitted: string;
  statut: 'en_attente' | 'approuvé' | 'rejeté';
}

// Récupérer toutes les inscriptions
export const getAllRegistrations = (): Registration[] => {
  const storedRegistrations = localStorage.getItem('registrations');
  if (!storedRegistrations) {
    return [];
  }
  return JSON.parse(storedRegistrations);
};

// Ajouter une nouvelle inscription
export const addRegistration = (data: Omit<Registration, 'id' | 'dateInscription' | 'statut'>): Registration => {
  const registrations = getAllRegistrations();
  const newRegistration = {
    ...data,
    id: crypto.randomUUID(),
    dateInscription: new Date().toISOString(),
    statut: 'en_attente' as const
  };
  
  registrations.push(newRegistration);
  localStorage.setItem('registrations', JSON.stringify(registrations));
  return newRegistration;
};

// Mettre à jour le statut d'une inscription
export const updateRegistrationStatus = (id: string, statut: 'en_attente' | 'approuvé' | 'rejeté'): boolean => {
  const registrations = getAllRegistrations();
  const index = registrations.findIndex(reg => reg.id === id);
  
  if (index === -1) return false;
  
  registrations[index].statut = statut;
  localStorage.setItem('registrations', JSON.stringify(registrations));
  return true;
};

// Récupérer tous les partenariats
export const getAllPartnerships = (): Partnership[] => {
  const storedPartnerships = localStorage.getItem('partnerships');
  if (!storedPartnerships) {
    return [];
  }
  return JSON.parse(storedPartnerships);
};

// Ajouter un nouveau partenariat
export const addPartnership = (data: Omit<Partnership, 'id' | 'dateSubmitted' | 'statut'>): Partnership => {
  const partnerships = getAllPartnerships();
  const newPartnership = {
    ...data,
    id: crypto.randomUUID(),
    dateSubmitted: new Date().toISOString(),
    statut: 'en_attente' as const
  };
  
  partnerships.push(newPartnership);
  localStorage.setItem('partnerships', JSON.stringify(partnerships));
  return newPartnership;
};

// Mettre à jour le statut d'un partenariat
export const updatePartnershipStatus = (id: string, statut: 'en_attente' | 'approuvé' | 'rejeté'): boolean => {
  const partnerships = getAllPartnerships();
  const index = partnerships.findIndex(part => part.id === id);
  
  if (index === -1) return false;
  
  partnerships[index].statut = statut;
  localStorage.setItem('partnerships', JSON.stringify(partnerships));
  return true;
};

// Réinitialiser les données du tableau de bord (sans toucher aux cours)
export const resetDashboardData = (): void => {
  localStorage.removeItem('registrations');
  localStorage.removeItem('partnerships');
  
  // Réinitialiser les statistiques mais pas les cours
  localStorage.setItem('dashboardStats', JSON.stringify({
    totalUsers: 0,
    totalInstructors: 0,
    totalAffiliates: 0,
    totalRevenue: 0
  }));
};
