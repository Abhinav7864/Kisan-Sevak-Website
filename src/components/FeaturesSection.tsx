import { 
  Zap, 
  Brain, 
  ShoppingCart, 
  Users, 
  Leaf, 
  Clock,
  Target,
  Shield
} from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "Instant Soil Testing",
      description: "Get accurate soil analysis results in minutes, not weeks. Our portable lab technology brings precision testing directly to your farm.",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Brain,
      title: "AI Recommendations",
      description: "Advanced AI analyzes your soil data alongside weather patterns and crop history to provide personalized farming recommendations.",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: ShoppingCart,
      title: "Integrated Marketplace",
      description: "Purchase recommended fertilizers, seeds, and inputs directly through our platform with guaranteed quality and competitive prices.",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Access to agricultural experts and agronomists for personalized consultation and ongoing support throughout your farming cycle.",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Leaf,
      title: "Sustainable Farming",
      description: "Promote eco-friendly practices with recommendations that improve soil health while maximizing yields and minimizing environmental impact.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    },
    {
      icon: Clock,
      title: "Real-time Monitoring",
      description: "Track your soil health progress over time with detailed analytics and historical data to optimize long-term farming strategies.",
      color: "text-red-600",
      bgColor: "bg-red-50"
    }
  ];

  const stats = [
    { icon: Target, value: "98%", label: "Accuracy Rate", color: "text-blue-600" },
    { icon: Clock, value: "5 Min", label: "Test Time", color: "text-green-600" },
    { icon: Shield, value: "24/7", label: "Support", color: "text-purple-600" },
    { icon: Users, value: "50K+", label: "Farmers", color: "text-orange-600" }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for{" "}
            <span className="text-green-600">Modern Farming</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to make data-driven farming decisions and maximize your crop yields.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-6`}>
                    <IconComponent className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Trusted by Farmers Across India
            </h3>
            <p className="text-green-100 text-lg">
              Join the revolution of smart farming with proven results
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-green-100">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}