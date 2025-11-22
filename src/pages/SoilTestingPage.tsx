import { MapPin, FileText, Zap, CheckCircle, Clock, Users, Shield, Award } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router-dom";

export function SoilTestingPage() {
  const process = [
    {
      step: 1,
      icon: MapPin,
      title: "Expert Visits Your Farm",
      description: "Our certified agricultural experts visit your farm with portable soil testing equipment. We collect samples from multiple locations for comprehensive analysis.",
      duration: "30 minutes",
      color: "bg-blue-100 text-blue-600"
    },
    {
      step: 2,
      icon: Zap,
      title: "Instant Soil Testing",
      description: "Using advanced portable lab technology, we conduct real-time analysis of pH levels, nutrients (NPK), organic matter, and micronutrients right on your field.",
      duration: "15 minutes",
      color: "bg-green-100 text-green-600"
    },
    {
      step: 3,
      icon: FileText,
      title: "Data Processing",
      description: "Our mobile app processes the test results instantly, comparing your soil data with optimal ranges for your specific crops and regional conditions.",
      duration: "5 minutes",
      color: "bg-purple-100 text-purple-600"
    },
    {
      step: 4,
      icon: CheckCircle,
      title: "Instant Soil Report",
      description: "Receive a comprehensive soil health report with detailed analysis, deficiency identification, and improvement recommendations on the spot.",
      duration: "Immediate",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const benefits = [
    { icon: Clock, title: "Save Time", desc: "No waiting weeks for lab results" },
    { icon: Shield, title: "99% Accuracy", desc: "Laboratory-grade precision" },
    { icon: Users, title: "Expert Support", desc: "Agricultural specialists guide you" },
    { icon: Award, title: "Certified Process", desc: "Government approved methodology" }
  ];

  const testingParameters = [
    { name: "Soil pH Level", importance: "Critical for nutrient availability" },
    { name: "Nitrogen (N)", importance: "Essential for leaf and stem growth" },
    { name: "Phosphorus (P)", importance: "Vital for root development and flowering" },
    { name: "Potassium (K)", importance: "Important for disease resistance" },
    { name: "Organic Matter", importance: "Improves soil structure and fertility" },
    { name: "Micronutrients", importance: "Zinc, Iron, Manganese, Boron analysis" },
    { name: "Soil Texture", importance: "Determines water retention capacity" },
    { name: "Electrical Conductivity", importance: "Measures soil salinity levels" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-green-100 text-green-700 mb-6">
                Revolutionary Technology
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Instant <span className="text-green-600">Soil Testing</span> at Your Farm
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Get accurate, laboratory-grade soil analysis in minutes, not weeks. 
                Our portable testing technology brings precision agriculture directly to your field.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  <MapPin className="w-5 h-5 mr-2" />
                  Book Farm Visit
                </Button>
                <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  <FileText className="w-5 h-5 mr-2" />
                  Sample Report
                </Button>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1664790702707-5de8895af266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2lsJTIwdGVzdGluZyUyMGxhYm9yYXRvcnl8ZW58MXx8fHwxNzU3NDM3MTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Soil testing laboratory equipment"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How Our <span className="text-green-600">Soil Testing</span> Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple, fast, and accurate. From farm visit to actionable insights in under an hour.
            </p>
          </div>

          <div className="space-y-8">
            {process.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Connecting line */}
                  {index < process.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-16 bg-gray-200 hidden md:block"></div>
                  )}
                  
                  <div className="grid md:grid-cols-12 gap-8 items-center">
                    {/* Step indicator */}
                    <div className="md:col-span-2 flex flex-col items-center md:items-start">
                      <div className="relative">
                        <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-gray-100">
                          <IconComponent className={`w-8 h-8 ${step.color.split(' ')[1]}`} />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                          {step.step}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-10">
                      <Card className="border-0 shadow-lg">
                        <CardContent className="p-8">
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {step.title}
                              </h3>
                              <p className="text-gray-600 leading-relaxed mb-4 lg:mb-0">
                                {step.description}
                              </p>
                            </div>
                            <div className="lg:ml-8 lg:text-right">
                              <Badge className="bg-green-100 text-green-700">
                                <Clock className="w-3 h-3 mr-1" />
                                {step.duration}
                              </Badge>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testing Parameters */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive <span className="text-green-600">Soil Analysis</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We test for all critical soil parameters to give you a complete picture 
              of your soil health and fertility status.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testingParameters.map((param, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{param.name}</h3>
                      <p className="text-sm text-gray-600">{param.importance}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-green-600">Kisan Sevak</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready for Instant Soil Testing?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Book your farm visit today and get detailed soil analysis within an hour.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <MapPin className="w-5 h-5 mr-2" />
              Schedule Farm Visit
            </Button>
            <Link to="/recommendations">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-green-600">
                View Sample Recommendations
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}