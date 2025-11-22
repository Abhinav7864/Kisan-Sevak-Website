import { useState, useEffect } from "react";
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
import { 
  Calendar, 
  TrendingUp, 
  Droplets, 
  Thermometer, 
  Download, 
  FileText, 
  Eye,
  Filter,
  User,
  MapPin
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";

export function AnalyticsPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [soilData, setSoilData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const soilHealthData = [
    { month: 'Jan', ph: 6.2, nitrogen: 45, phosphorus: 32, potassium: 28 },
    { month: 'Feb', ph: 6.4, nitrogen: 48, phosphorus: 35, potassium: 30 },
    { month: 'Mar', ph: 6.3, nitrogen: 52, phosphorus: 38, potassium: 35 },
    { month: 'Apr', ph: 6.5, nitrogen: 55, phosphorus: 42, potassium: 38 },
    { month: 'May', ph: 6.7, nitrogen: 58, phosphorus: 45, potassium: 42 },
    { month: 'Jun', ph: 6.6, nitrogen: 60, phosphorus: 48, potassium: 45 }
  ];

  const yieldData = [
    { year: '2022', yield: 2.8, revenue: 84000 },
    { year: '2023', yield: 3.2, revenue: 96000 },
    { year: '2024', yield: 3.8, revenue: 114000 },
    { year: '2025', yield: 4.2, revenue: 126000 }
  ];

  const fieldHealthData = [
    { name: 'Excellent', value: 45, color: '#10b981' },
    { name: 'Good', value: 30, color: '#3b82f6' },
    { name: 'Average', value: 20, color: '#f59e0b' },
    { name: 'Needs Attention', value: 5, color: '#ef4444' }
  ];

type SoilData = {
  Nitrogen: string;
  Phosphorous: string;
  Potassium: string;
  PH_Level: string;
  Electrical_Conductivity: string;
  Moisture: string;
  Temperature: string;
};
  const recentReports = [
    {
      id: 'RPT-2025-001',
      date: '2025-01-09',
      field: 'North Field',
      area: '2.5 hectares',
      ph: 6.5,
      status: 'Excellent',
      color: 'bg-green-100 text-green-700',
      recommendations: 8
    },
    {
      id: 'RPT-2025-002',
      date: '2025-01-05',
      field: 'South Field',
      area: '1.8 hectares',
      ph: 6.2,
      status: 'Good',
      color: 'bg-blue-100 text-blue-700',
      recommendations: 6
    },
    {
      id: 'RPT-2024-025',
      date: '2025-01-01',
      field: 'East Field',
      area: '3.2 hectares',
      ph: 5.8,
      status: 'Average',
      color: 'bg-yellow-100 text-yellow-700',
      recommendations: 12
    },
    {
      id: 'RPT-2024-024',
      date: '2024-12-28',
      field: 'West Field',
      area: '2.0 hectares',
      ph: 6.7,
      status: 'Excellent',
      color: 'bg-green-100 text-green-700',
      recommendations: 5
    }
  ];

  // Login Component
  const LoginForm = () => (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="max-w-md mx-auto px-4 py-20">
        <Card className="shadow-2xl">
          <CardHeader className="text-center pb-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl text-gray-900">
              Access Your Dashboard
            </CardTitle>
            <p className="text-gray-600 mt-2">
              Login to view your soil reports and analytics
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input 
                id="phone" 
                type="tel"
                placeholder="+91 98765 43210"
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="otp">OTP</Label>
              <Input 
                id="otp" 
                placeholder="Enter 6-digit OTP"
                className="mt-1"
              />
            </div>

            <Button 
              className="w-full bg-green-600 hover:bg-green-700"
              onClick={() => setIsLoggedIn(true)}
            >
              Login to Dashboard
            </Button>

            <div className="text-center">
              <Button variant="link" className="text-green-600">
                New user? Register here
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  useEffect(() => {
    fetch('http://localhost:5000/api/soil')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch soil data');
        return res.json();
      })
      .then((data) => {
        setSoilData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (!isLoggedIn) {
    return <LoginForm />;
  }

  if (loading) return <div>Loading soil data...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Analytics Dashboard
              </h1>
              <p className="text-gray-600">
                Welcome back, Ramesh Kumar! Here's your farm's performance overview.
              </p>
            </div>
            <div className="mt-4 lg:mt-0 flex space-x-3">
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filter Data
              </Button>
              <Button className="bg-green-600 hover:bg-green-700">
                <Download className="w-4 h-4 mr-2" />
                Export Reports
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Average Soil pH</p>
                      <p className="text-2xl font-bold text-gray-900">6.5</p>
                      <p className="text-green-600 text-sm">+0.2 from last test</p>
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
                      <p className="text-gray-600 text-sm">Current Yield</p>
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
                      <p className="text-gray-600 text-sm">Total Farm Area</p>
                      <p className="text-2xl font-bold text-gray-900">9.5 Ha</p>
                      <p className="text-blue-600 text-sm">4 fields monitored</p>
                    </div>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 text-sm">Tests This Year</p>
                      <p className="text-2xl font-bold text-gray-900">24</p>
                      <p className="text-orange-600 text-sm">6 tests pending</p>
                    </div>
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Soil Health Trends */}
              <Card>
                <CardHeader>
                  <CardTitle>Soil Health Trends (6 Months)</CardTitle>
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

              {/* Field Health Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle>Field Health Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={fieldHealthData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={120}
                        dataKey="value"
                      >
                        {fieldHealthData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="mt-4 space-y-2">
                    {fieldHealthData.map((item, index) => (
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
            </div>
          </TabsContent>

          {/* Reports Tab */}
          <TabsContent value="reports" className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Soil Test Reports</h2>
              <div className="mt-4 sm:mt-0 flex space-x-3">
                <Select>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Filter by field" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Fields</SelectItem>
                    <SelectItem value="north">North Field</SelectItem>
                    <SelectItem value="south">South Field</SelectItem>
                    <SelectItem value="east">East Field</SelectItem>
                    <SelectItem value="west">West Field</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="bg-green-600 hover:bg-green-700">
                  <FileText className="w-4 h-4 mr-2" />
                  New Report
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {recentReports.map((report, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div>
                          <h3 className="font-bold text-gray-900 mb-1">{report.field}</h3>
                          <p className="text-sm text-gray-600">{report.area}</p>
                          <p className="text-xs text-gray-500 mt-1">ID: {report.id}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Test Date</p>
                          <p className="font-medium text-gray-900">{report.date}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">pH Level</p>
                          <p className="font-medium text-gray-900">{report.ph}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Recommendations</p>
                          <p className="font-medium text-gray-900">{report.recommendations} items</p>
                        </div>
                      </div>
                      <div className="mt-4 lg:mt-0 lg:ml-8 flex items-center space-x-3">
                        <Badge className={report.color}>
                          {report.status}
                        </Badge>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="w-4 h-4 mr-1" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

        </Tabs>

        {/* Soil Data Display */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Soil Data</h2>
          <ul className="space-y-2">
            {soilData.map((row: SoilData, idx) => (
              <li key={idx} className="p-4 bg-white rounded-lg shadow">
                <p className="text-gray-800 font-medium">Sample {idx + 1}</p>
                <p className="text-gray-600">Nitrogen: {row.Nitrogen}</p>
                <p className="text-gray-600">Phosphorous: {row.Phosphorous}</p>
                <p className="text-gray-600">Potassium: {row.Potassium}</p>
                <p className="text-gray-600">PH Level: {row.PH_Level}</p>
                <p className="text-gray-600">Electrical Conductivity: {row.Electrical_Conductivity}</p>
                <p className="text-gray-600">Moisture: {row.Moisture}</p>
                <p className="text-gray-600">Temperature: {row.Temperature}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}