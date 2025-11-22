import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { Calendar, TrendingUp, Droplets, Thermometer } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export function AnalyticsDashboard() {
  const soilHealthData = [
    { month: 'Jan', ph: 6.2, nitrogen: 45, phosphorus: 32, potassium: 28 },
    { month: 'Feb', ph: 6.4, nitrogen: 48, phosphorus: 35, potassium: 30 },
    { month: 'Mar', ph: 6.3, nitrogen: 52, phosphorus: 38, potassium: 35 },
    { month: 'Apr', ph: 6.5, nitrogen: 55, phosphorus: 42, potassium: 38 },
    { month: 'May', ph: 6.7, nitrogen: 58, phosphorus: 45, potassium: 42 },
    { month: 'Jun', ph: 6.6, nitrogen: 60, phosphorus: 48, potassium: 45 }
  ];

  const yieldData = [
    { year: '2022', yield: 2.8 },
    { year: '2023', yield: 3.2 },
    { year: '2024', yield: 3.8 },
    { year: '2025', yield: 4.2 }
  ];

  const cropHealthData = [
    { name: 'Excellent', value: 45, color: '#10b981' },
    { name: 'Good', value: 30, color: '#3b82f6' },
    { name: 'Average', value: 20, color: '#f59e0b' },
    { name: 'Poor', value: 5, color: '#ef4444' }
  ];

  const recentTests = [
    { date: '2025-01-09', field: 'North Field', ph: 6.5, status: 'Excellent', color: 'bg-green-100 text-green-700' },
    { date: '2025-01-05', field: 'South Field', ph: 6.2, status: 'Good', color: 'bg-blue-100 text-blue-700' },
    { date: '2025-01-01', field: 'East Field', ph: 5.8, status: 'Average', color: 'bg-yellow-100 text-yellow-700' },
    { date: '2024-12-28', field: 'West Field', ph: 6.7, status: 'Excellent', color: 'bg-green-100 text-green-700' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Smart <span className="text-green-600">Analytics Dashboard</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Track your soil health, monitor crop performance, and make data-driven 
            decisions with our farmer-friendly analytics dashboard.
          </p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Soil pH Level</p>
                  <p className="text-2xl font-bold text-gray-900">6.5</p>
                  <p className="text-green-600 text-sm">+0.2 from last month</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Droplets className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Crop Yield</p>
                  <p className="text-2xl font-bold text-gray-900">4.2 T/Ha</p>
                  <p className="text-green-600 text-sm">+12% from last year</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Soil Temperature</p>
                  <p className="text-2xl font-bold text-gray-900">24°C</p>
                  <p className="text-orange-600 text-sm">Optimal range</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Thermometer className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Tests This Month</p>
                  <p className="text-2xl font-bold text-gray-900">8</p>
                  <p className="text-blue-600 text-sm">4 fields covered</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Soil Health Trends */}
          <Card>
            <CardHeader>
              <CardTitle>Soil Health Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={soilHealthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="ph" stroke="#10b981" strokeWidth={2} name="pH Level" />
                  <Line type="monotone" dataKey="nitrogen" stroke="#3b82f6" strokeWidth={2} name="Nitrogen %" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Yield Performance */}
          <Card>
            <CardHeader>
              <CardTitle>Yield Performance (Tons/Hectare)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={yieldData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="yield" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Crop Health Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Field Health Status</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={cropHealthData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    dataKey="value"
                  >
                    {cropHealthData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {cropHealthData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <span className="ml-2 text-sm">{item.name}</span>
                    </div>
                    <span className="text-sm font-medium">{item.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Tests */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent Soil Tests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTests.map((test, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{test.field}</h4>
                      <p className="text-sm text-gray-600">{test.date}</p>
                    </div>
                    <div className="text-center mx-4">
                      <p className="text-sm text-gray-600">pH Level</p>
                      <p className="font-medium">{test.ph}</p>
                    </div>
                    <Badge className={test.color}>
                      {test.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}