import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import kisanSevakLogo from "figma:asset/af6a972ca42c9f73a1e00039d1b53bcfff1a5e30.png";

export function Footer() {
  const { t } = useLanguage();
  
  const quickLinks = [
    { name: t('nav.home'), href: "/" },
    { name: t('nav.soilTesting'), href: "/soil-testing" },
    { name: t('nav.recommendations'), href: "/recommendations" },
    { name: t('nav.shop'), href: "/shop" },
    { name: t('nav.analytics'), href: "/analytics" }
  ];

  const services = [
    "मिट्टी की जांच",
    "व्यक्तिगत सुझाव", 
    "Expert की सलाह",
    "किसान बाज़ार",
    "प्रगति रिपोर्ट",
    "24/7 सहायता"
  ];

  const resources = [
    "खेती के टिप्स",
    "फसल कैलेंडर", 
    "मौसम अपडेट",
    "बाज़ार भाव",
    "सफलता की कहानी",
    "सवाल-जवाब"
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-600" },
    { icon: Twitter, href: "#", color: "hover:text-blue-400" },
    { icon: Instagram, href: "#", color: "hover:text-pink-600" },
    { icon: Youtube, href: "#", color: "hover:text-red-600" }
  ];

  return (
    <footer className="bg-[#3c2e26] text-white earth-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src={kisanSevakLogo} 
                alt="Kisan Sevak Logo" 
                className="h-10 w-auto mr-3"
              />
              <div>
                <h3 className="font-bold text-xl text-[#daa520]">Kisan Sevak</h3>
                <p className="text-sm text-gray-300">{t('footer.tagline')}</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t('footer.description')}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-[#daa520] mr-3" />
                <div>
                  <span className="text-gray-300">+91 98765 43210</span>
                  <p className="text-xs text-gray-400">किसान हेल्पलाइन</p>
                </div>
              </div>
              <div className="flex items-center">
                <MessageCircle className="w-5 h-5 text-[#daa520] mr-3" />
                <div>
                  <span className="text-gray-300">WhatsApp सहायता</span>
                  <p className="text-xs text-gray-400">24/7 उपलब्ध</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-[#daa520] mr-3" />
                <span className="text-gray-300">support@kisansevak.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-[#daa520]">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-[#daa520] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-[#daa520]">{t('footer.services')}</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-[#daa520]">{t('footer.resources')}</h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-[#daa520] transition-colors duration-300"
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#8b6f47]/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-gray-300 text-sm mb-4 md:mb-0 flex items-center">
              {t('footer.copyright')} 
              <Heart className="w-4 h-4 text-red-500 mx-2" />
              {t('footer.madeWith')}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`text-gray-300 ${social.color} transition-all duration-300 hover:scale-110`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center md:justify-start space-x-6 mt-6 text-sm">
            <a href="#" className="text-gray-300 hover:text-[#daa520] transition-colors duration-300">
              गोपनीयता नीति
            </a>
            <a href="#" className="text-gray-300 hover:text-[#daa520] transition-colors duration-300">
              सेवा की शर्तें
            </a>
            <a href="#" className="text-gray-300 hover:text-[#daa520] transition-colors duration-300">
              कुकी नीति
            </a>
            <a href="#" className="text-gray-300 hover:text-[#daa520] transition-colors duration-300">
              अस्वीकरण
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}