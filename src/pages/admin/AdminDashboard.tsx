
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Users, BookOpen, DollarSign, BarChart3, Activity } from "lucide-react";
import { Line, Pie, LineChart, PieChart, ResponsiveContainer, Cell, PieSector } from "recharts";
import StatCard from "@/components/StatCard";

const AdminDashboard = () => {
  // Données factices pour les statistiques
  const stats = [
    { 
      title: "Utilisateurs Actifs", 
      value: "876", 
      change: "+5%", 
      icon: <Users className="h-8 w-8 text-blue-600" />
    },
    { 
      title: "Cours Publiés", 
      value: "74", 
      change: "+8%", 
      icon: <BookOpen className="h-8 w-8 text-orange-500" />
    },
    { 
      title: "Revenu Mensuel", 
      value: "5 230 500 FCFA", 
      change: "+12%", 
      icon: <DollarSign className="h-8 w-8 text-green-600" />
    },
    { 
      title: "Revenu Total", 
      value: "25 450 750 FCFA", 
      change: "+15%", 
      icon: <BarChart3 className="h-8 w-8 text-purple-600" />
    },
  ];

  // Données pour le graphique des revenus mensuels
  const revenueData = [
    { date: "01/04", revenue: 3200000, students: 120 },
    { date: "02/04", revenue: 2800000, students: 95 },
    { date: "03/04", revenue: 3500000, students: 145 },
    { date: "04/04", revenue: 3000000, students: 135 },
    { date: "05/04", revenue: 4200000, students: 180 },
    { date: "06/04", revenue: 3800000, students: 165 },
    { date: "07/04", revenue: 4500000, students: 200 },
    { date: "08/04", revenue: 5000000, students: 230 },
    { date: "09/04", revenue: 4800000, students: 210 },
    { date: "10/04", revenue: 4300000, students: 190 },
  ];

  // Données pour la répartition par pays
  const countryData = [
    { name: "Nigeria", value: 320, fill: "#2563eb" },
    { name: "Ghana", value: 215, fill: "#16a34a" },
    { name: "Côte d'Ivoire", value: 185, fill: "#f59e0b" },
    { name: "Sénégal", value: 98, fill: "#ef4444" },
    { name: "Cameroun", value: 124, fill: "#8b5cf6" },
    { name: "Autres pays", value: 216, fill: "#6b7280" },
  ];

  // Données pour les activités récentes
  const recentActivities = [
    {
      name: "Kofi Anan",
      action: "a acheté le cours 'Développement Web avec React'",
      amount: "79,99 €",
      date: "10/04",
      time: "10:23",
      avatar: "K",
      color: "bg-purple-200 text-purple-600"
    },
    {
      name: "Marie Diop",
      action: "s'est inscrit sur la plateforme",
      date: "10/04",
      time: "09:45",
      avatar: "M",
      color: "bg-blue-200 text-blue-600"
    },
    {
      name: "Fatima Mensah",
      action: "a publié le cours 'Marketing Digital pour Entrepreneurs'",
      date: "09/04",
      time: "15:30",
      avatar: "F",
      color: "bg-green-200 text-green-600"
    },
    {
      name: "Awa Cissé",
      action: "a payé pour le cours 'Agriculture Durable en Afrique'",
      amount: "69,99 €",
      date: "09/04",
      time: "11:20",
      avatar: "A",
      color: "bg-yellow-200 text-yellow-600"
    },
    {
      name: "Amadou Kane",
      action: "a rejoint le programme d'affiliation",
      date: "08/04",
      time: "14:15",
      avatar: "A",
      color: "bg-orange-200 text-orange-600"
    },
  ];

  // Données pour les cours populaires
  const popularCourses = [
    {
      title: "Introduction à l'Entrepreneuriat Africain",
      category: "Affaires",
      level: "Débutant",
      instructor: "Fatima Mensah",
      price: "50 FCFA",
      students: 245,
      rating: 4.7,
      status: "Publié"
    },
    {
      title: "Développement Web avec React",
      category: "Technologie",
      level: "Intermédiaire",
      instructor: "David Oyelowo",
      price: "80 FCFA",
      students: 189,
      rating: 4.9,
      status: "Publié"
    },
    {
      title: "Marketing Digital pour Entrepreneurs",
      category: "Affaires",
      level: "Débutant",
      instructor: "Fatima Mensah",
      price: "60 FCFA",
      students: 317,
      rating: 4.6,
      status: "Publié"
    },
    {
      title: "Agriculture Durable en Afrique",
      category: "Agriculture",
      level: "Intermédiaire",
      instructor: "Grace Akua",
      price: "70 FCFA",
      students: 124,
      rating: 4.8,
      status: "Publié"
    },
    {
      title: "Cybersécurité pour Débutants",
      category: "Technologie",
      level: "Débutant",
      instructor: "David Oyelowo",
      price: "Gratuit",
      students: 520,
      rating: 4.5,
      status: "Publié"
    },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold">Tableau de bord</h2>
      
      {/* Cartes statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <span className="text-xs text-green-600 font-semibold">{stat.change} vs mois précédent</span>
                </div>
                <div>
                  {stat.icon}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Graphiques */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Revenus mensuels et Inscriptions</CardTitle>
            <CardDescription>Évolution des revenus sur les 10 derniers jours</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ChartContainer 
              config={{
                revenue: { color: "#2563eb", label: "Revenus" },
                students: { color: "#10b981", label: "Étudiants" }
              }}
            >
              <LineChart data={revenueData}>
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  name="Revenus" 
                  stroke="var(--color-revenue, #2563eb)" 
                  strokeWidth={2} 
                  dot={{ r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="students" 
                  name="Étudiants" 
                  stroke="var(--color-students, #10b981)" 
                  strokeWidth={2} 
                  dot={{ r: 4 }}
                  yAxisId="right"
                />
                <ChartTooltip content={<ChartTooltipContent />} />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Distribution des utilisateurs</CardTitle>
            <CardDescription>Répartition par pays</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ChartContainer config={{}}>
              <PieChart>
                <Pie
                  data={countryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {countryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
      
      {/* Activités récentes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Activity className="mr-2 h-5 w-5" />
              Activités récentes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`rounded-full w-10 h-10 flex items-center justify-center font-medium ${activity.color}`}>
                    {activity.avatar}
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex justify-between">
                      <p className="font-medium">{activity.name}</p>
                      <p className="text-sm text-gray-500">{activity.date} {activity.time}</p>
                    </div>
                    <p className="text-sm text-gray-600">
                      {activity.action} {activity.amount && <span className="font-semibold">{activity.amount}</span>}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Voir toutes les activités
              </button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Statistiques par pays</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {countryData.map((country, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div 
                      className="w-3 h-3 rounded-full mr-2" 
                      style={{ backgroundColor: country.fill }}
                    />
                    <span>{country.name}</span>
                  </div>
                  <span className="font-medium">{country.value} utilisateurs</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Tableau des cours */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Cours</CardTitle>
            <CardDescription>Liste des cours les plus populaires</CardDescription>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center text-sm">
            <span className="mr-1">+</span> Ajouter un cours
          </button>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Titre</TableHead>
                  <TableHead>Formateur</TableHead>
                  <TableHead>Prix</TableHead>
                  <TableHead>Étudiants</TableHead>
                  <TableHead>Note</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {popularCourses.map((course, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      <div>
                        <div className="font-medium">{course.title}</div>
                        <div className="text-xs text-gray-500">{course.category} • {course.level}</div>
                      </div>
                    </TableCell>
                    <TableCell>{course.instructor}</TableCell>
                    <TableCell>{course.price}</TableCell>
                    <TableCell>{course.students}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <span className="text-yellow-500 mr-1">★</span> 
                        <span>{course.rating}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                        {course.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <button className="text-gray-400 hover:text-gray-600">
                        •••
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
            <span>Affichage de 1 à 5 sur 32 entrées</span>
            <div className="flex space-x-1">
              <button className="px-3 py-1 rounded border text-black bg-white">1</button>
              <button className="px-3 py-1 rounded border hover:bg-gray-50">2</button>
              <button className="px-3 py-1 rounded border hover:bg-gray-50">3</button>
              <button className="px-3 py-1 rounded border hover:bg-gray-50">4</button>
              <button className="px-3 py-1 rounded border hover:bg-gray-50">5</button>
              <button className="px-3 py-1 rounded border hover:bg-gray-50">»</button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
