import { MapPin, FileText, Brain, ShoppingCart, CheckCircle } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      icon: MapPin,
      title: "On-Site Soil Testing",
      description: "Our experts visit your farm with portable testing equipment for immediate soil analysis.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: FileText,
      title: "Instant Report",
      description: "Get comprehensive soil health report within minutes, not weeks.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Brain,
      title: "AI Recommendations",
      description: "Our AI analyzes your soil data and provides personalized farming recommendations.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: ShoppingCart,
      title: "Marketplace Purchase",
      description: "Order recommended fertilizers, seeds, and inputs directly through our platform.",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How <span className="text-green-600">Kisan Sevak</span> Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple, fast, and effective. Get from soil testing to better yields in just 4 easy steps.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="text-center">
                  {/* Step number */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-white rounded-full shadow-lg mx-auto flex items-center justify-center border-4 border-gray-100">
                      <IconComponent className={`w-8 h-8 ${step.color.split(' ')[1]}`} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-green-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Transform Your Farming?
          </h3>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Join thousands of farmers who have already improved their yields with Kisan Sevak's 
            smart soil testing and AI recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors">
              Book Your Test Today
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-medium transition-colors">
              Call Expert: +91 98765 43210
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}