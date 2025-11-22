import { Heart, Users, Target } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1657348734524-501b2236ad85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmYXJtZXIlMjBhZ3JpY3VsdHVyZXxlbnwxfHx8fDE3NTc0OTM4Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Indian farmer working in agricultural field"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <div className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Empowering Farmers with{" "}
                <span className="text-green-600">Smart Technology</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Kisan Sevak was born from a simple belief: every farmer deserves access to 
                the best agricultural science and technology. We've seen too many farmers 
                struggle with delayed soil reports, expensive testing, and lack of proper guidance.
              </p>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our mission is to bridge this gap by bringing laboratory-grade soil testing 
                directly to your farm, powered by AI recommendations and backed by agricultural 
                experts who understand the unique challenges of Indian farming.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Farmer First</h3>
                <p className="text-sm text-gray-600">
                  Every decision we make puts farmers' needs and success at the center.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Precision</h3>
                <p className="text-sm text-gray-600">
                  Accurate testing and precise recommendations for optimal results.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Community</h3>
                <p className="text-sm text-gray-600">
                  Building a supportive network of farmers and agricultural experts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}