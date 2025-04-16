import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  RefreshCcw,
  Users,
  BookOpen,
  Award,
  Share2,
  AlertCircle,
  CheckCircle
} from "lucide-react";
import { 
  CartesianGrid, 
  Line, 
  LineChart, 
  ResponsiveContainer, 
  Tooltip, 
  XAxis,
  YAxis,
  Sector,
  PieChart,
  Pie,
  BarChart,
  Bar,
  Cell
} from "recharts";
import { useToast } from "@/components/ui/use-toast";

const AdminDashboard = () => {
  const { toast } = useToast();
  const [stats, setStats] = useState({
    totalUsers: 876,
    totalCourses: 74,
    totalRevenue: 5230500,
    totalInstructors: 28,
    totalAffiliates: 152
  });

  const [resetConfirmOpen, setResetConfirmOpen] = useState(false);

  // Données pour les graphiques
  const revenueData = [
    { name: 'Jan', value: 300000 },
    { name: 'Fév', value: 420000 },
    { name: 'Mar', value: 380000 },
    { name: 'Avr', value: 510000 },
    { name: 'Mai', value: 680000 },
    { name: 'Jun', value: 720000 },
    { name: 'Jul', value: 850000 }
  ];

  const categoryData = [
    { name: 'Business', value: 35 },
    { name: 'Tech', value: 25 },
    { name: 'Agriculture', value: 15 },
    { name: 'IA', value: 10 },
    { name: 'Marketing', value: 15 }
  ];

  const userGrowthData = [
    { name: 'Jan', newUsers: 45, activeUsers: 120 },
    { name: 'Fév', newUsers: 62, activeUsers: 150 },
    { name: 'Mar', newUsers: 58, activeUsers: 170 },
    { name: 'Avr', newUsers: 75, activeUsers: 200 },
    { name: 'Mai', newUsers: 90, activeUsers: 220 },
    { name: 'Jun', newUsers: 112, activeUsers: 280 },
    { name: 'Jul', newUsers: 135, activeUsers: 340 }
  ];

  // Couleurs pour les graphiques
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  const resetDashboard = () => {
    setStats({
      totalUsers: 0,
      totalCourses: 0,
      totalRevenue: 0,
      totalInstructors: 0,
      totalAffiliates: 0
    });
    
    toast({
      title: "Système réinitialisé",
      description: "Toutes les statistiques ont été remises à zéro.",
      variant: "default"
    });
    
    setResetConfirmOpen(false);
  };

  const formatCurrency = (value: number) => {
    return value.toLocaleString() + " FCFA";
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="text-3xl font-bold">Tableau de bord</h2>
        
        {resetConfirmOpen ? (
          <div className="flex items-center gap-2">
            <Button 
              onClick={() => setResetConfirmOpen(false)}
              variant="outline"
              className="border-gray-300"
            >
              Annuler
            </Button>
            <Button 
              onClick={resetDashboard}
              variant="destructive"
              className="flex items-center"
            >
              <CheckCircle className="mr-1 h-4 w-4" />
              Confirmer la réinitialisation
            </Button>
          </div>
        ) : (
          <Button 
            onClick={() => setResetConfirmOpen(true)}
            variant="outline" 
            className="flex items-center border-gray-300"
          >
            <RefreshCcw className="mr-2 h-4 w-4" />
            Réinitialiser le système
          </Button>
        )}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-6 flex flex-col items-center">
            <div className="bg-blue-100 p-3 rounded-full mb-4">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-medium mb-1">Utilisateurs</h3>
            <p className="text-3xl font-bold">{stats.totalUsers.toLocaleString()}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex flex-col items-center">
            <div className="bg-orange-100 p-3 rounded-full mb-4">
              <BookOpen className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-medium mb-1">Cours</h3>
            <p className="text-3xl font-bold">{stats.totalCourses.toLocaleString()}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex flex-col items-center">
            <div className="bg-green-100 p-3 rounded-full mb-4">
              <svg className="h-6 w-6 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-1">Revenus</h3>
            <p className="text-2xl font-bold">{formatCurrency(stats.totalRevenue)}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex flex-col items-center">
            <div className="bg-purple-100 p-3 rounded-full mb-4">
              <Award className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-medium mb-1">Formateurs</h3>
            <p className="text-3xl font-bold">{stats.totalInstructors.toLocaleString()}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex flex-col items-center">
            <div className="bg-pink-100 p-3 rounded-full mb-4">
              <Share2 className="h-6 w-6 text-pink-600" />
            </div>
            <h3 className="text-lg font-medium mb-1">Affiliés</h3>
            <p className="text-3xl font-bold">{stats.totalAffiliates.toLocaleString()}</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-6">Revenus mensuels</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={revenueData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis tickFormatter={(value) => (value/1000) + 'k'} />
                  <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                  <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* User Growth Chart */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-6">Croissance des utilisateurs</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={userGrowthData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="newUsers" fill="#8884d8" name="Nouveaux utilisateurs" />
                  <Bar dataKey="activeUsers" fill="#82ca9d" name="Utilisateurs actifs" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Category Distribution */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-6">Distribution des catégories</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="name"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
