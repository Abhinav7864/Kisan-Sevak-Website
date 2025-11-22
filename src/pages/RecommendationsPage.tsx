import { Brain, Leaf, Droplets, Bug, Sprout, TrendingUp, CheckCircle, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router-dom";

export function RecommendationsPage() {
  const soilAnalysis = {
    ph: { value: 6.2, status: "Good", color: "text-green-600" },
    nitrogen: { value: 45, status: "Low", color: "text-orange-600" },
    phosphorus: { value: 28, status: "Medium", color: "text-blue-600" },
    potassium: { value: 22, status: "Low", color: "text-red-600" },
    organicMatter: { value: 2.8, status: "Good", color: "text-green-600" }
  };

  const fertilizerRecommendations = [
    {
      name: "NPK 19:19:19",
      purpose: "Balanced nutrition for vegetative growth",
      dosage: "25 kg per hectare",
      timing: "Apply during soil preparation",
      price: "₹2,450",
      priority: "High",
      aiScore: 92
    },
    {
      name: "Urea (46% N)",
      purpose: "Nitrogen boost for leaf development",
      dosage: "50 kg per hectare",
      timing: "Split application - 30 & 60 days after sowing",
      price: "₹1,890",
      priority: "High",
      aiScore: 88
    },
    {
      name: "Single Super Phosphate",
      purpose: "Root development and flowering",
      dosage: "75 kg per hectare",
      timing: "Basal application before sowing",
      price: "₹1,650",
      priority: "Medium",
      aiScore: 75
    }
  ];

  const seedRecommendations = [
    {
      name: "Hybrid Wheat - HD 3086",
      variety: "High-yielding variety",
      yield: "5.5-6.2 tons/hectare",
      maturity: "135-140 days",
      resistance: "Rust resistant",
      price: "₹85/kg",
      quantity: "125 kg/hectare",
      aiScore: 94
    },
    {
      name: "Mustard - Pusa Bold",
      variety: "Oil-rich variety",
      yield: "2.2-2.8 tons/hectare",
      maturity: "125-130 days",
      resistance: "Aphid tolerant",
      price: "₹120/kg",
      quantity: "4 kg/hectare",
      aiScore: 87
    }
  ];

  const pesticideRecommendations = [
    {
      name: "Neem Oil Spray",
      type: "Organic Insecticide",
      target: "Aphids, Whiteflies, Thrips",
      dosage: "5 ml per liter water",
      application: "Foliar spray in evening",
      price: "₹850",
      safety: "Eco-friendly",
      aiScore: 90
    },
    {
      name: "Copper Sulfate",
      type: "Fungicide",
      target: "Bacterial blight, Rust",
      dosage: "2 gm per liter water",
      application: "Preventive spray",
      price: "₹450",
      safety: "Handle with care",
      aiScore: 82
    }
  ];

  const cropRecommendations = [
    {
      crop: "Wheat",
      suitability: 95,
      reason: "Excellent soil conditions for winter wheat",
      expectedYield: "6.2 tons/hectare",
      profitability: "High",
      season: "Rabi"
    },
    {
      crop: "Mustard",
      suitability: 88,
      reason: "Good alternative cash crop",
      expectedYield: "2.8 tons/hectare",
      profitability: "Medium-High",
      season: "Rabi"
    },
    {
      crop: "Chickpea",
      suitability: 75,
      reason: "Nitrogen-fixing legume crop",
      expectedYield: "2.2 tons/hectare",
      profitability: "Medium",
      season: "Rabi"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-purple-100 text-purple-700 mb-6">
              AI-Powered Intelligence
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Smart <span className="text-green-600">AI Recommendations</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get personalized farming recommendations based on your soil analysis, 
              weather patterns, and crop history. Our AI processes thousands of data points 
              to give you the most accurate advice.
            </p>
          </div>

          {/* Soil Health Overview */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Brain className="w-6 h-6 text-purple-600 mr-3" />
              Your Soil Analysis Summary
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {Object.entries(soilAnalysis).map(([key, data]) => (
                <div key={key} className="text-center">
                  <div className="text-2xl font-bold mb-2">{data.value}{key === 'ph' ? '' : '%'}</div>
                  <div className="text-sm text-gray-600 mb-2 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                  <Badge className={`${data.color} bg-gray-100`}>
                    {data.status}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations Tabs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="fertilizers" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="fertilizers" className="flex items-center">
                <Leaf className="w-4 h-4 mr-2" />
                Fertilizers
              </TabsTrigger>
              <TabsTrigger value="seeds" className="flex items-center">
                <Sprout className="w-4 h-4 mr-2" />
                Seeds
              </TabsTrigger>
              <TabsTrigger value="pesticides" className="flex items-center">
                <Bug className="w-4 h-4 mr-2" />
                Pesticides
              </TabsTrigger>
              <TabsTrigger value="crops" className="flex items-center">
                <TrendingUp className="w-4 h-4 mr-2" />
                Crop Selection
              </TabsTrigger>
            </TabsList>

            {/* Fertilizer Recommendations */}
            <TabsContent value="fertilizers">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {fertilizerRecommendations.map((fertilizer, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{fertilizer.name}</CardTitle>
                        <div className="flex flex-col items-end">
                          <Badge className={`mb-2 ${
                            fertilizer.priority === 'High' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                          }`}>
                            {fertilizer.priority} Priority
                          </Badge>
                          <div className="text-sm text-gray-600">AI Score: {fertilizer.aiScore}%</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">Purpose</h4>
                          <p className="text-sm text-gray-600">{fertilizer.purpose}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">Recommended Dosage</h4>
                          <p className="text-sm text-gray-600">{fertilizer.dosage}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">Application Timing</h4>
                          <p className="text-sm text-gray-600">{fertilizer.timing}</p>
                        </div>
                        <div className="flex justify-between items-center pt-4 border-t">
                          <span className="font-bold text-lg text-gray-900">{fertilizer.price}</span>
                          <Link to="/shop">
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                              Buy Now
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Seed Recommendations */}
            <TabsContent value="seeds">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {seedRecommendations.map((seed, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{seed.name}</CardTitle>
                        <div className="text-right">
                          <div className="text-sm text-gray-600 mb-1">AI Score</div>
                          <div className="font-bold text-green-600">{seed.aiScore}%</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">Variety</h4>
                          <p className="text-sm text-gray-600">{seed.variety}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">Expected Yield</h4>
                          <p className="text-sm text-gray-600">{seed.yield}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">Maturity</h4>
                          <p className="text-sm text-gray-600">{seed.maturity}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">Resistance</h4>
                          <p className="text-sm text-gray-600">{seed.resistance}</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center pt-4 border-t">
                        <div>
                          <span className="font-bold text-lg text-gray-900">{seed.price}</span>
                          <span className="text-sm text-gray-600 ml-2">({seed.quantity})</span>
                        </div>
                        <Link to="/shop">
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            Buy Seeds
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Pesticide Recommendations */}
            <TabsContent value="pesticides">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {pesticideRecommendations.map((pesticide, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{pesticide.name}</CardTitle>
                          <p className="text-sm text-gray-600">{pesticide.type}</p>
                        </div>
                        <Badge className={`${
                          pesticide.safety === 'Eco-friendly' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {pesticide.safety}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">Target Pests</h4>
                          <p className="text-sm text-gray-600">{pesticide.target}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">Dosage</h4>
                          <p className="text-sm text-gray-600">{pesticide.dosage}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">Application</h4>
                          <p className="text-sm text-gray-600">{pesticide.application}</p>
                        </div>
                        <div className="flex justify-between items-center pt-4 border-t">
                          <span className="font-bold text-lg text-gray-900">{pesticide.price}</span>
                          <Link to="/shop">
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                              Order Now
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Crop Selection */}
            <TabsContent value="crops">
              <div className="space-y-6">
                {cropRecommendations.map((crop, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardContent className="p-8">
                      <div className="grid lg:grid-cols-3 gap-8 items-center">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{crop.crop}</h3>
                          <p className="text-gray-600 mb-4">{crop.reason}</p>
                          <Badge className="bg-blue-100 text-blue-700">{crop.season} Season</Badge>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between mb-2">
                              <span className="text-sm text-gray-600">Suitability</span>
                              <span className="text-sm font-medium">{crop.suitability}%</span>
                            </div>
                            <Progress value={crop.suitability} className="h-2" />
                          </div>
                          <div className="text-sm text-gray-600">
                            <div>Expected Yield: <span className="font-medium text-gray-900">{crop.expectedYield}</span></div>
                            <div>Profitability: <span className="font-medium text-gray-900">{crop.profitability}</span></div>
                          </div>
                        </div>
                        <div className="text-center lg:text-right">
                          <Link to="/shop">
                            <Button className="bg-green-600 hover:bg-green-700">
                              <Sprout className="w-4 h-4 mr-2" />
                              Get Seeds
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Implement These Recommendations
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Get all recommended products delivered to your farm with expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                <Leaf className="w-5 h-5 mr-2" />
                Shop Recommendations
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-green-600">
              <Brain className="w-5 h-5 mr-2" />
              Consult Expert
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}