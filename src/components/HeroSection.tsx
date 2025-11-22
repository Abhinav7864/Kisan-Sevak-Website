import { Button } from "./ui/button";
import { ArrowRight, Zap, Leaf } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-100 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="lg:pr-8">
            <div className="flex items-center space-x-2 mb-6">
              <Leaf className="w-6 h-6 text-green-600" />
              <span className="text-green-700 font-medium">Smart Agriculture Technology</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Instant Soil Testing,{" "}
              <span className="text-green-600">Smarter Farming</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Transform your farming with our revolutionary on-site soil testing technology. 
              Get instant results, AI-powered recommendations, and access to quality inputs 
              - all in one platform designed for Indian farmers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4">
                <Zap className="w-5 h-5 mr-2" />
                Book Soil Test
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4">
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-2xl font-bold text-green-600">50K+</div>
                <div className="text-sm text-gray-600">Tests Completed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">95%</div>
                <div className="text-sm text-gray-600">Yield Improvement</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">24/7</div>
                <div className="text-sm text-gray-600">Expert Support</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1683248892987-7b6181dfd718?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb2Rlcm4lMjBmYXJtaW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTc0ODQzOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern farming technology with soil testing"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-4 hidden lg:block">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Leaf className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-medium">Soil Health</div>
                  <div className="text-xs text-gray-500">Excellent</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 hidden lg:block">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Zap className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-medium">AI Analysis</div>
                  <div className="text-xs text-gray-500">Complete</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}