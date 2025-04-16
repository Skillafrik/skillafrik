
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Button } from "@/components/ui/button";
import { Download, Calendar, ArrowUpRight, ArrowDownRight, Circle } from "lucide-react";
import { Line, LineChart, Pie, PieChart, Bar, BarChart, Cell, ResponsiveContainer } from "recharts";

const AdminAnalytics = () => {
  // Données pour le graphique des revenus mensuels
  const monthlyRevenueData = [
    { month: "Jan", revenue: 2500000, students: 95 },
    { month: "Fév", revenue: 3200000, students: 120 },
    { month: "Mar", revenue: 2800000, students: 105 },
    { month: "Avr", revenue: 4200000, students: 180 },
    { month: "Mai", revenue: 3800000, students: 160 },
    { month: "Juin", revenue: 4500000, students: 200 },
    { month: "Juil", revenue: 5200000, students: 230 },
    { month: "Aoû", revenue: 4800000, students: 215 },
    { month: "Sep", revenue: 5500000, students: 240 },
    { month: "Oct", revenue: 5000000, students: 225 },
    { month: "Nov", revenue: 6200000, students: 275 },
    { month: "Déc", revenue: 6800000, students: 310 },
  ];

  // Données pour la répartition des ventes par catégorie
  const categorySalesData = [
    { name: "Affaires", value: 35, fill: "#2563eb" },
    { name: "Technologie", value: 25, fill: "#16a34a" },
    { name: "Marketing", value: 20, fill: "#f59e0b" },
    { name: "IA", value: 15, fill: "#8b5cf6" },
    { name: "Agriculture", value: 5, fill: "#ef4444" },
  ];

  // Données pour la répartition par pays
  const countryData = [
    { name: "Nigeria", value: 32, fill: "#2563eb" },
    { name: "Ghana", value: 21, fill: "#16a34a" },
    { name: "Côte d'Ivoire", value: 18, fill: "#f59e0b" },
    { name: "Sénégal", value: 10, fill: "#ef4444" },
    { name: "Cameroun", value: 12, fill: "#8b5cf6" },
    { name: "Autres pays", value: 7, fill: "#6b7280" },
  ];

  // Données pour les sources de vente
  const salesSourceData = [
    { name: "Ventes directes", value: 67, fill: "#2563eb" },
    { name: "Programme d'affiliation", value: 33, fill: "#10b981" },
  ];

  // Données pour le graphique des inscriptions
  const enrollmentData = [
    { month: "Jan", students: 85 },
    { month: "Fév", students: 110 },
    { month: "Mar", students: 95 },
    { month: "Avr", students: 165 },
    { month: "Mai", students: 145 },
    { month: "Juin", students: 180 },
    { month: "Juil", students: 210 },
    { month: "Aoû", students: 195 },
    { month: "Sep", students: 225 },
    { month: "Oct", students: 205 },
    { month: "Nov", students: 255 },
    { month: "Déc", students: 290 },
  ];

  // Données pour les cours les plus populaires
  const popularCoursesData = [
    { name: "Cybersécurité pour Débutants", students: 520 },
    { name: "Marketing Digital pour Entrepreneurs", students: 317 },
    { name: "Introduction à l'Entrepreneuriat Africain", students: 245 },
    { name: "Développement Web avec React", students: 189 },
    { name: "Agriculture Durable en Afrique", students: 124 },
  ];

  // Statistiques clés
  const keyStats = [
    { 
      title: "Revenu Mensuel", 
      value: "5 230 500 FCFA", 
      change: "+12%",
      trend: "up"
    },
    { 
      title: "Nouvelles Inscriptions", 
      value: "235", 
      change: "+8%",
      trend: "up"
    },
    { 
      title: "Taux de Rétention", 
      value: "76%", 
      change: "-2%",
      trend: "down"
    },
    { 
      title: "Taux de Conversion", 
      value: "8.4%", 
      change: "+1.2%",
      trend: "up"
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h2 className="text-3xl font-bold">Analyse et Rapports</h2>
        
        <div className="flex gap-3 w-full sm:w-auto">
          <Button variant="outline" className="w-full sm:w-auto">
            <Calendar className="mr-2 h-4 w-4" />
            Période
          </Button>
          <Button variant="outline" className="w-full sm:w-auto">
            <Download className="mr-2 h-4 w-4" />
            Exporter
          </Button>
        </div>
      </div>
      
      {/* Statistiques clés */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {keyStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">{stat.title}</p>
                {stat.trend === 'up' ? (
                  <span className="flex items-center text-xs text-green-600">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    {stat.change}
                  </span>
                ) : (
                  <span className="flex items-center text-xs text-red-600">
                    <ArrowDownRight className="h-3 w-3 mr-1" />
                    {stat.change}
                  </span>
                )}
              </div>
              <p className="text-2xl font-bold mt-2">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Graphiques principaux */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Revenus Mensuels</CardTitle>
            <CardDescription>Évolution des revenus sur l'année</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ChartContainer 
              config={{
                revenue: { color: "#2563eb", label: "Revenus" },
                students: { color: "#10b981", label: "Étudiants" }
              }}
            >
              <LineChart data={monthlyRevenueData}>
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
            <CardTitle>Distribution des revenus par catégorie</CardTitle>
            <CardDescription>Répartition des ventes par catégorie de cours</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ChartContainer config={{}}>
              <PieChart>
                <Pie
                  data={categorySalesData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {categorySalesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Top 5 des cours</CardTitle>
            <CardDescription>Cours les plus populaires par nombre d'étudiants</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ChartContainer config={{}}>
              <BarChart
                data={popularCoursesData}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 130, bottom: 5 }}
              >
                <Bar dataKey="students" fill="#8884d8" radius={[0, 4, 4, 0]}>
                  {popularCoursesData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill="#8b5cf6" />
                  ))}
                </Bar>
                <ChartTooltip content={<ChartTooltipContent />} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Distribution géographique</CardTitle>
            <CardDescription>Répartition des utilisateurs par pays</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-8">
              <ChartContainer config={{}}>
                <PieChart height={200}>
                  <Pie
                    data={countryData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={false}
                  >
                    {countryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ChartContainer>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {countryData.map((country, index) => (
                <div key={index} className="flex items-center">
                  <div 
                    className="w-3 h-3 rounded-full mr-2" 
                    style={{ backgroundColor: country.fill }}
                  />
                  <div className="text-sm">
                    <span className="font-medium">{country.name}: </span>
                    <span>{country.value}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Nouvelles inscriptions</CardTitle>
            <CardDescription>Évolution des inscriptions mensuelles</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ChartContainer 
              config={{
                students: { color: "#8b5cf6", label: "Inscriptions" }
              }}
            >
              <BarChart data={enrollmentData}>
                <Bar
                  dataKey="students"
                  name="Étudiants"
                  fill="var(--color-students, #8b5cf6)"
                  radius={[4, 4, 0, 0]}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Source des ventes</CardTitle>
            <CardDescription>Ventes directes vs programme d'affiliation</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ChartContainer config={{}}>
              <PieChart>
                <Pie
                  data={salesSourceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={90}
                  outerRadius={110}
                  startAngle={90}
                  endAngle={-270}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {salesSourceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Légende des graphiques</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...categorySalesData, ...salesSourceData].map((item, index) => (
              <div key={index} className="flex items-center">
                <div 
                  className="w-4 h-4 rounded-full mr-2" 
                  style={{ backgroundColor: item.fill }}
                />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminAnalytics;
