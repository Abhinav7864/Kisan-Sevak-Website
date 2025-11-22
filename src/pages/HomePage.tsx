import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ArrowRight, Heart, Users, Sprout, TrendingUp, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";

export function HomePage() {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Sprout,
      title: t('features.soilTesting.title'),
      description: t('features.soilTesting.description'),
      link: "/soil-testing",
      color: "text-[#4a7c59]",
      bgColor: "bg-[#e8f5e8]",
      cta: t('features.soilTesting.cta')
    },
    {
      icon: Heart,
      title: t('features.advice.title'),
      description: t('features.advice.description'),
      link: "/recommendations",
      color: "text-[#daa520]",
      bgColor: "bg-[#faf5e6]",
      cta: t('features.advice.cta')
    },
    {
      icon: Users,
      title: t('features.shop.title'),
      description: t('features.shop.description'),
      link: "/shop",
      color: "text-[#8b4513]",
      bgColor: "bg-[#f5f2ec]",
      cta: t('features.shop.cta')
    },
    {
      icon: TrendingUp,
      title: t('features.reports.title'),
      description: t('features.reports.description'),
      link: "/analytics",
      color: "text-[#2e8b57]",
      bgColor: "bg-[#f0f8f4]",
      cta: t('features.reports.cta')
    }
  ];



  return (
    <div className="bg-[#faf8f4]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#4a7c59] via-[#2d5016] to-[#8b6f47] field-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="mb-6">
                <Badge className="bg-white/20 text-white border-white/30 mb-4">
                  {t('hero.badge')}
                </Badge>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                {t('hero.title')} 
                <br />
                <span className="text-[#daa520]">{t('hero.titleHighlight')}</span>
              </h1>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                {t('hero.description')}
              </p>
              <p className="text-lg text-green-200 mb-8 italic">
                {t('hero.quote')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/soil-testing">
                  <Button size="lg" className="bg-[#daa520] hover:bg-[#b8860b] text-black font-semibold px-8 py-4 hover-lift">
                    <Sprout className="w-5 h-5 mr-2" />
                    {t('hero.checkSoil')}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-[#2d5016] px-8 py-4 hover-lift"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {t('hero.talkExpert')}
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1688240818501-2881b90f1b2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmYXJtZXIlMjB3b3JraW5nJTIwZmllbGQlMjB0cmFkaXRpb25hbHxlbnwxfHx8fDE3NTc3Mzk1MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Indian farmer working in field"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#2d5016]">50,000+</div>
                  <div className="text-sm text-gray-600">{t('hero.happyFarmers')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#3c2e26] mb-6">
                {t('story.title')}
                <br />
                <span className="text-[#4a7c59]">{t('story.subtitle')}</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {t('story.description')}
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#e8f5e8] rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4 text-[#4a7c59]" />
                  </div>
                  <span className="text-gray-700">{t('story.point1')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#e8f5e8] rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-[#4a7c59]" />
                  </div>
                  <span className="text-gray-700">{t('story.point2')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#e8f5e8] rounded-full flex items-center justify-center">
                    <Sprout className="w-4 h-4 text-[#4a7c59]" />
                  </div>
                  <span className="text-gray-700">{t('story.point3')}</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1626349442320-e5ebd1b99655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGVhdCUyMGZpZWxkJTIwZ29sZGVuJTIwaGFydmVzdCUyMGZhcm1pbmd8ZW58MXx8fHwxNzU3NzM5NTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Golden wheat field"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#f5f2ec] field-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#3c2e26] mb-4">
              {t('features.title')} <span className="text-[#4a7c59]">{t('features.titleHighlight')}</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('features.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card 
                  key={index} 
                  className="group bg-white hover:shadow-xl transition-all duration-500 border-0 shadow-lg hover-lift overflow-hidden"
                >
                  <CardContent className="p-8 text-center">
                    <div className={`w-20 h-20 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-500`}>
                      <IconComponent className={`w-10 h-10 ${feature.color}`} />
                    </div>
                    <h3 className="font-bold text-[#3c2e26] mb-4 group-hover:text-[#4a7c59] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    <Link to={feature.link}>
                      <Button 
                        variant="outline" 
                        className="w-full border-[#4a7c59] text-[#4a7c59] hover:bg-[#4a7c59] hover:text-white transition-all duration-300"
                      >
                        {feature.cta}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#4a7c59] to-[#2d5016] earth-texture">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            {t('cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/soil-testing">
              <Button size="lg" className="bg-[#daa520] hover:bg-[#b8860b] text-black font-semibold px-8 py-4 hover-lift">
                <Sprout className="w-5 h-5 mr-2" />
                {t('cta.checkSoil')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-[#2d5016] px-8 py-4 hover-lift"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {t('cta.whatsapp')}
            </Button>
          </div>
          <p className="text-green-200 mt-6 text-sm">
            {t('cta.trust')}
          </p>
        </div>
      </section>
    </div>
  );
}