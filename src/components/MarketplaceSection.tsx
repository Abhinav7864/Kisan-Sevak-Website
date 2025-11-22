import { ShoppingCart, Star, Truck, Shield } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function MarketplaceSection() {
  const categories = [
    { name: "Fertilizers", count: "150+ Products", color: "bg-green-100 text-green-700" },
    { name: "Seeds", count: "200+ Varieties", color: "bg-blue-100 text-blue-700" },
    { name: "Pesticides", count: "80+ Solutions", color: "bg-orange-100 text-orange-700" },
    { name: "Equipment", count: "50+ Tools", color: "bg-purple-100 text-purple-700" }
  ];

  const products = [
    {
      id: 1,
      name: "NPK 19:19:19 Premium",
      category: "Fertilizer",
      price: "₹2,450",
      originalPrice: "₹2,800",
      rating: 4.8,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1722044942164-9637e0452395?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXJ0aWxpemVyJTIwc2VlZHMlMjBhZ3JpY3VsdHVyZXxlbnwxfHx8fDE3NTc1MTE1MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      badge: "AI Recommended",
      badgeColor: "bg-green-600"
    },
    {
      id: 2,
      name: "Hybrid Wheat Seeds",
      category: "Seeds",
      price: "₹1,890",
      originalPrice: "₹2,100",
      rating: 4.9,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1722044942164-9637e0452395?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXJ0aWxpemVyJTIwc2VlZHMlMjBhZ3JpY3VsdHVyZXxlbnwxfHx8fDE3NTc1MTE1MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      badge: "Best Seller",
      badgeColor: "bg-blue-600"
    },
    {
      id: 3,
      name: "Organic Neem Spray",
      category: "Pesticide",
      price: "₹850",
      originalPrice: "₹950",
      rating: 4.7,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1722044942164-9637e0452395?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXJ0aWxpemVyJTIwc2VlZHMlMjBhZ3JpY3VsdHVyZXxlbnwxfHx8fDE3NTc1MTE1MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      badge: "Eco-Friendly",
      badgeColor: "bg-green-600"
    },
    {
      id: 4,
      name: "Smart Irrigation Kit",
      category: "Equipment",
      price: "₹12,500",
      originalPrice: "₹15,000",
      rating: 4.6,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1722044942164-9637e0452395?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXJ0aWxpemVyJTIwc2VlZHMlMjBhZ3JpY3VsdHVyZXxlbnwxfHx8fDE3NTc1MTE1MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      badge: "New",
      badgeColor: "bg-purple-600"
    }
  ];

  const benefits = [
    { icon: Truck, title: "Free Delivery", desc: "On orders above ₹2000" },
    { icon: Shield, title: "Quality Assured", desc: "100% genuine products" },
    { icon: Star, title: "Expert Curated", desc: "Recommended by agronomists" }
  ];

  return (
    <section id="marketplace" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Integrated <span className="text-green-600">Marketplace</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get all your farming inputs in one place. Quality products, competitive prices, 
            and expert recommendations based on your soil test results.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
              <Badge className={category.color}>{category.count}</Badge>
            </div>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="relative">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <Badge className={`absolute top-3 left-3 ${product.badgeColor} text-white`}>
                  {product.badge}
                </Badge>
              </div>
              <CardContent className="p-4">
                <div className="text-sm text-gray-500 mb-1">{product.category}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                
                <div className="flex items-center mb-3">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600 ml-1">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="font-bold text-lg text-gray-900">{product.price}</span>
                    <span className="text-sm text-gray-500 line-through ml-2">{product.originalPrice}</span>
                  </div>
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}