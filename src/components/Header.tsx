import { Button } from "./ui/button";
import { Phone, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";
import kisanSevakLogo from "figma:asset/af6a972ca42c9f73a1e00039d1b53bcfff1a5e30.png";

export function Header() {
  const location = useLocation();
  const { t } = useLanguage();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-[#faf8f4] shadow-sm border-b border-[#8b6f47]/20 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img 
                src={kisanSevakLogo} 
                alt="Kisan Sevak - Khet Ka Saathi, Kisan Ki Pragati" 
                className="h-12 w-auto"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link 
                to="/" 
                className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                  isActive('/') ? 'text-[#2d5016] bg-[#e8f5e8] shadow-sm' : 'text-[#3c2e26] hover:text-[#2d5016] hover:bg-[#f5f2ec]'
                }`}
              >
                {t('nav.home')}
              </Link>
              <Link 
                to="/soil-testing" 
                className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                  isActive('/soil-testing') ? 'text-[#2d5016] bg-[#e8f5e8] shadow-sm' : 'text-[#3c2e26] hover:text-[#2d5016] hover:bg-[#f5f2ec]'
                }`}
              >
                {t('nav.soilTesting')}
              </Link>
              <Link 
                to="/recommendations" 
                className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                  isActive('/recommendations') ? 'text-[#2d5016] bg-[#e8f5e8] shadow-sm' : 'text-[#3c2e26] hover:text-[#2d5016] hover:bg-[#f5f2ec]'
                }`}
              >
                {t('nav.recommendations')}
              </Link>
              <Link 
                to="/shop" 
                className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                  isActive('/shop') ? 'text-[#2d5016] bg-[#e8f5e8] shadow-sm' : 'text-[#3c2e26] hover:text-[#2d5016] hover:bg-[#f5f2ec]'
                }`}
              >
                {t('nav.shop')}
              </Link>
              <Link 
                to="/analytics" 
                className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                  isActive('/analytics') ? 'text-[#2d5016] bg-[#e8f5e8] shadow-sm' : 'text-[#3c2e26] hover:text-[#2d5016] hover:bg-[#f5f2ec]'
                }`}
              >
                {t('nav.analytics')}
              </Link>
            </div>
          </nav>

          {/* Language Toggle & CTA Button */}
          <div className="hidden md:flex items-center space-x-3">
            <LanguageToggle />
            <Button className="bg-[#4a7c59] hover:bg-[#2d5016] text-white shadow-md hover-lift">
              <Phone className="w-4 h-4 mr-2" />
              {t('nav.callExpert')}
            </Button>
          </div>

          {/* Mobile menu button and language toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageToggle />
            <Button variant="ghost" size="sm" className="text-[#3c2e26]">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}