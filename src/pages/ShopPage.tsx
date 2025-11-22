import { useState } from "react";
import { ShoppingCart, Star, Filter, Search, Truck, Shield, Heart, Grid3X3, List } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function ShopPage() {
  const [viewMode, setViewMode] = useState("grid");

  const categories = [
    { name: "Fertilizers", count: 85, icon: "🌱" },
    { name: "Seeds", count: 120, icon: "🌾" },
    { name: "Pesticides", count: 45, icon: "🐛" },
    { name: "Soil Enhancers", count: 35, icon: "🌿" },
    { name: "Tools", count: 60, icon: "🔧" },
    { name: "Equipment", count: 25, icon: "⚙️" }
  ];

  const products = [
    {
      id: 1,
      name: "NPK 19:19:19 Premium",
      category: "Fertilizers",
      price: 2450,
      originalPrice: 2800,
      rating: 4.8,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1678687975782-4dc5be103a03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXJ0aWxpemVyJTIwYmFncyUyMGFncmljdWx0dXJhbHxlbnwxfHx8fDE3NTc0NDA0NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      badge: "AI Recommended",
      badgeColor: "bg-green-600",
      inStock: true,
      description: "Balanced NPK fertilizer for comprehensive plant nutrition",
      unit: "50 kg bag"
    },
    {
      id: 2,
      name: "Hybrid Wheat Seeds HD-3086",
      category: "Seeds",
      price: 85,
      originalPrice: 95,
      rating: 4.9,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1731970820339-e725b78f55e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWVkcyUyMHBhY2tldHMlMjBhZ3JpY3VsdHVyYWx8ZW58MXx8fHwxNzU3NTEyODQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      badge: "High Yield",
      badgeColor: "bg-blue-600",
      inStock: true,
      description: "High-yielding rust resistant wheat variety",
      unit: "per kg"
    },
    {
      id: 3,
      name: "Organic Neem Oil Spray",
      category: "Pesticides",
      price: 850,
      originalPrice: 950,
      rating: 4.7,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1678687975782-4dc5be103a03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXJ0aWxpemVyJTIwYmFncyUyMGFncmljdWx0dXJhbHxlbnwxfHx8fDE3NTc0NDA0NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      badge: "Eco-Friendly",
      badgeColor: "bg-green-600",
      inStock: true,
      description: "Natural pest control solution safe for crops",
      unit: "1 liter bottle"
    },
    {
      id: 4,
      name: "Vermicompost Premium",
      category: "Soil Enhancers",
      price: 450,
      originalPrice: 500,
      rating: 4.6,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1678687975782-4dc5be103a03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXJ0aWxpemVyJTIwYmFncyUyMGFncmljdWx0dXJhbHxlbnwxfHx8fDE3NTc0NDA0NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      badge: "Organic",
      badgeColor: "bg-emerald-600",
      inStock: true,
      description: "Rich organic compost for soil health improvement",
      unit: "25 kg bag"
    },
    {
      id: 5,
      name: "Digital Soil pH Meter",
      category: "Tools",
      price: 1250,
      originalPrice: 1500,
      rating: 4.5,
      reviews: 78,
      image: "https://images.unsplash.com/photo-1690986469727-1ed8bcdf6384?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtaW5nJTIwdG9vbHMlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzU3NTEyODQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      badge: "Best Seller",
      badgeColor: "bg-purple-600",
      inStock: true,
      description: "Accurate digital pH testing for soil analysis",
      unit: "per piece"
    },
    {
      id: 6,
      name: "Drip Irrigation Kit",
      category: "Equipment",
      price: 12500,
      originalPrice: 15000,
      rating: 4.8,
      reviews: 45,
      image: "https://images.unsplash.com/photo-1690986469727-1ed8bcdf6384?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtaW5nJTIwdG9vbHMlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzU3NTEyODQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      badge: "Water Saver",
      badgeColor: "bg-blue-600",
      inStock: true,
      description: "Complete drip irrigation system for 1 acre",
      unit: "complete kit"
    }
  ];

  const benefits = [
    { icon: Truck, title: "Free Delivery", desc: "On orders above ₹2000" },
    { icon: Shield, title: "Quality Assured", desc: "100% genuine products" },
    { icon: Star, title: "Expert Curated", desc: "Recommended by agronomists" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Agricultural <span className="text-green-200">Marketplace</span>
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Quality farming inputs delivered to your doorstep. All products are 
              curated by agricultural experts and aligned with soil test recommendations.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                placeholder="Search products, seeds, fertilizers..." 
                className="pl-12 py-4 bg-white border-0 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Categories */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{category.icon}</span>
                        <span className="font-medium text-gray-700">{category.name}</span>
                      </div>
                      <Badge variant="outline">{category.count}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Filters */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select price range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-500">Under ₹500</SelectItem>
                        <SelectItem value="500-2000">₹500 - ₹2,000</SelectItem>
                        <SelectItem value="2000-5000">₹2,000 - ₹5,000</SelectItem>
                        <SelectItem value="above-5000">Above ₹5,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Sort products" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="popular">Most Popular</SelectItem>
                        <SelectItem value="price-low">Price: Low to High</SelectItem>
                        <SelectItem value="price-high">Price: High to Low</SelectItem>
                        <SelectItem value="rating">Highest Rated</SelectItem>
                        <SelectItem value="newest">Newest First</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Header with View Toggle */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">All Products</h2>
                <p className="text-gray-600">{products.length} products found</p>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 mb-12 ${
              viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
            }`}>
              {products.map((product) => (
                <Card key={product.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className={`w-full object-cover ${viewMode === "grid" ? "h-56" : "h-32"}`}
                    />
                    <Badge className={`absolute top-3 left-3 ${product.badgeColor} text-white`}>
                      {product.badge}
                    </Badge>
                    <Button
                      variant="outline"
                      size="sm"
                      className="absolute top-3 right-3 bg-white/90 hover:bg-white"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline" className="text-xs">
                        {product.category}
                      </Badge>
                      <div className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    </div>
                    
                    <h3 className="font-bold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                    <p className="text-xs text-gray-500 mb-3">{product.unit}</p>
                    
                    <div className="flex items-center mb-4">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="font-bold text-lg text-gray-900">₹{product.price.toLocaleString()}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through ml-2">
                            ₹{product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                      {product.originalPrice && (
                        <Badge className="bg-red-100 text-red-700">
                          {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                        </Badge>
                      )}
                    </div>

                    <div className="flex space-x-2">
                      <Button className="flex-1 bg-green-600 hover:bg-green-700">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                      <Button variant="outline" size="sm">
                        Quick View
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Benefits Section */}
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-0">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {benefits.map((benefit, index) => {
                    const IconComponent = benefit.icon;
                    return (
                      <div key={index} className="text-center">
                        <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-4">
                          <IconComponent className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}