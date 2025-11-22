import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'hi' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation objects
const translations = {
  hi: {
    // Navigation
    'nav.home': 'घर',
    'nav.soilTesting': 'मिट्टी जांच',
    'nav.recommendations': 'सुझाव',
    'nav.shop': 'बाज़ार',
    'nav.analytics': 'रिपोर्ट',
    'nav.callExpert': 'Expert से बात करें',
    
    // Hero Section
    'hero.badge': '🌾 भारतीय किसानों के लिए बनाया गया',
    'hero.title': 'आपके खेत का',
    'hero.titleHighlight': 'सच्चा साथी',
    'hero.description': 'Mitti ki sahi jankari se badhaiye apni fasal ka utpaadan. Hamari team aapke kheton ki dekhbhal karne ke liye har samay taiyar hai.',
    'hero.quote': '"जो मिट्टी को समझता है, वो खेती में कामयाब होता है"',
    'hero.checkSoil': 'अपनी मिट्टी जांचें',
    'hero.talkExpert': 'Expert से बात करें',
    'hero.happyFarmers': 'खुश किसान',
    
    // Story Section
    'story.title': 'हमारी कहानी',
    'story.subtitle': 'किसानों के लिए, किसानों के साथ',
    'story.description': 'Kisan Sevak ki शुरुआत एक सपने से हुई - हर भारतीय किसान के पास वो जानकारी हो जो उसकी फसल को बेहतर बना सके। हमारे founder खुद किसान परिवार से आते हैं और जानते हैं कि सही सलाह कितनी जरूरी है।',
    'story.point1': 'किसान के दिल को समझने वाला',
    'story.point2': 'Community के साथ मिलकर काम करना',
    'story.point3': 'Sustainable farming के लिए प्रतिबद्ध',
    
    // Features Section
    'features.title': 'हम आपकी कैसे',
    'features.titleHighlight': 'मदद करते हैं',
    'features.description': 'Kheti mein safalta पाने के लिए जरूरी है सही जानकारी। Hum आपको वो सब कुछ देते हैं jo आपकी fasal को बेहतर बनाने के लिए चाहिए।',
    'features.soilTesting.title': 'मिट्टी की जांच (Soil Testing)',
    'features.soilTesting.description': 'Get your soil tested by our experts. Quick, accurate results that help your crops grow better.',
    'features.soilTesting.cta': 'Check My Soil',
    'features.advice.title': 'सुझाव और सलाह (Expert Advice)',
    'features.advice.description': 'Personalized farming tips based on your soil and local weather conditions.',
    'features.advice.cta': 'Get Advice',
    'features.shop.title': 'किसान बाज़ार (Farmer Shop)',
    'features.shop.description': 'Buy quality seeds, fertilizers, and tools at fair prices. No middlemen.',
    'features.shop.cta': 'Shop Now',
    'features.reports.title': 'प्रगति रिपोर्ट (Progress Reports)',
    'features.reports.description': 'Track your farm\'s improvement with simple charts and friendly explanations.',
    'features.reports.cta': 'View Reports',
    
    // Testimonials
    'testimonials.title': 'किसानों की',
    'testimonials.titleHighlight': 'सफलता की कहानी',
    'testimonials.description': 'देखिए कैसे हमारे किसान भाई बहन अपनी फसल में सुधार ला रहे हैं',
    
    // CTA Section
    'cta.title': 'तैयार हैं अपनी फसल को बेहतर बनाने के लिए?',
    'cta.description': 'हज़ारों किसान भाई बहन अपनी फसल में सुधार ला चुके हैं। अब आपकी बारी है!',
    'cta.checkSoil': 'अभी मिट्टी जांचें',
    'cta.whatsapp': 'WhatsApp पर पूछें',
    'cta.trust': '💚 5000+ खुश किसानों का भरोसा',
    
    // Contact Section
    'contact.title': 'हमसे',
    'contact.titleHighlight': 'जुड़ें',
    'contact.description': 'कोई सवाल है? Expert की सलाह चाहिए? हमारी team हमेशा आपकी मदद के लिए तैयार है। किसी भी समय संपर्क करें।',
    'contact.quote': '"सवाल पूछना अच्छी खेती की शुरुआत है"',
    'contact.methods': 'संपर्क के तरीके',
    'contact.helpline': 'किसान हेल्पलाइन',
    'contact.helplineDesc': 'तुरंत सहायता के लिए हमारे experts से बात करें',
    'contact.whatsappTitle': 'WhatsApp सहायता',
    'contact.whatsappDesc': 'WhatsApp पर तुरंत जवाब पाएं',
    'contact.emailTitle': 'Email सहायता',
    'contact.emailDesc': 'विस्तृत जानकारी के लिए लिखें',
    'contact.callNow': 'अभी कॉल करें',
    'contact.chatNow': 'Chat करें',
    'contact.sendEmail': 'Email भेजें',
    
    // Footer
    'footer.tagline': 'खेत का साथी, किसान की प्रगति',
    'footer.description': 'भारतीय किसानों को सशक्त बनाना हमारा मिशन है। Modern technology और traditional wisdom के साथ आपकी खेती को बेहतर बनाते हैं।',
    'footer.quickLinks': 'जल्दी पहुंच',
    'footer.services': 'हमारी सेवाएं',
    'footer.resources': 'सहायक सामग्री',
    'footer.copyright': '© 2025 Kisan Sevak. सभी अधिकार सुरक्षित।',
    'footer.madeWith': 'भारतीय किसानों के लिए बनाया गया',
    'footer.helplineLabel': 'किसान हेल्पलाइन',
    'footer.whatsappLabel': 'WhatsApp सहायता',
    'footer.available24x7': '24/7 उपलब्ध',
    'footer.officeHours.title': 'कार्यालय समय',
    'footer.officeHours.weekdays': 'सोमवार - शुक्रवार',
    'footer.officeHours.saturday': 'शनिवार', 
    'footer.officeHours.sunday': 'रविवार',
    'footer.officeHours.weekdayTime': 'सुबह 9:00 - शाम 7:00',
    'footer.officeHours.saturdayTime': 'सुबह 9:00 - शाम 5:00',
    'footer.officeHours.sundayTime': 'सुबह 10:00 - शाम 4:00',
    
    // Contact Form
    'form.consultation': 'सलाह के लिए संपर्क करें',
    'form.consultationDesc': 'अपनी जानकारी भरें, हमारे expert आपसे जल्दी संपर्क करेंगे',
    'form.yourName': 'आपका नाम',
    'form.namePlaceholder': 'जैसे: रामेश कुमार',
    'form.mobile': 'मोबाइल नंबर *',
    'form.farmSize': 'खेत का आकार (एकड़ में)',
    'form.farmSizePlaceholder': 'जैसे: 5 एकड़',
    'form.primaryCrop': 'मुख्य फसल',
    'form.selectCrop': 'अपनी फसल चुनें',
    'form.farmLocation': 'खेत की जगह',
    'form.locationPlaceholder': 'गांव, जिला, राज्य',
    'form.problem': 'आपकी समस्या (Optional)',
    'form.problemPlaceholder': 'अपनी खेती की समस्या या जरूरत के बारे में बताएं... जैसे: फसल में पीले पत्ते हो रहे हैं, मिट्टी सख्त है, आदि',
    'form.submitConsultation': 'सलाह के लिए संपर्क करें',
    'form.bookSoilTest': 'मिट्टी जांच बुक करें',
    'form.promise': '💚 वादा: हमारे agricultural experts 24 घंटे के अंदर आपसे संपर्क करेंगे और आपकी खेती की जरूरतों पर विस्तार से चर्चा करेंगे।',
    
    // Office Hours and Additional Contact Info
    'contact.officeHours': 'कार्यालय समय',
    'contact.emergency': '🌱 Emergency में 24/7 WhatsApp सहायता उपलब्ध है',
    'contact.officeTitle': 'हमारा कार्यालय',
    'contact.officeAddress': 'Tech Hub, Sector 18\nGurugram, Haryana 122015\nभारत',
    'contact.officeTagline': '"दिल्ली के पास, किसानों के साथ"',
    'contact.monday': 'सोमवार - शुक्रवार',
    'contact.saturday': 'शनिवार',
    'contact.sunday': 'रविवार',
    'contact.mondayTime': 'सुबह 9:00 - शाम 7:00',
    'contact.saturdayTime': 'सुबह 9:00 - शाम 5:00',
    'contact.sundayTime': 'सुबह 10:00 - शाम 4:00',
    
    // Crop Options
    'crops.wheat': 'गेहूं',
    'crops.rice': 'धान',
    'crops.cotton': 'कपास',
    'crops.sugarcane': 'गन्ना',
    'crops.vegetables': 'सब्जी',
    'crops.fruits': 'फल',
    'crops.other': 'अन्य',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.soilTesting': 'Soil Testing',
    'nav.recommendations': 'Recommendations',
    'nav.shop': 'Shop',
    'nav.analytics': 'Analytics',
    'nav.callExpert': 'Call Expert',
    
    // Hero Section
    'hero.badge': '🌾 Made for Indian Farmers',
    'hero.title': 'Your Farm\'s',
    'hero.titleHighlight': 'True Partner',
    'hero.description': 'Improve your crop yield with the right soil information. Our team is always ready to take care of your fields.',
    'hero.quote': '"Those who understand the soil, succeed in farming"',
    'hero.checkSoil': 'Check My Soil',
    'hero.talkExpert': 'Talk to Expert',
    'hero.happyFarmers': 'Happy Farmers',
    
    // Story Section
    'story.title': 'Our Story',
    'story.subtitle': 'For Farmers, With Farmers',
    'story.description': 'Kisan Sevak started with a dream - every Indian farmer should have the information that can make their crops better. Our founders come from farming families and know how important the right advice is.',
    'story.point1': 'Understanding the farmer\'s heart',
    'story.point2': 'Working together with the community',
    'story.point3': 'Committed to sustainable farming',
    
    // Features Section
    'features.title': 'How We',
    'features.titleHighlight': 'Help You',
    'features.description': 'The right information is essential for success in farming. We give you everything you need to make your crops better.',
    'features.soilTesting.title': 'Soil Testing',
    'features.soilTesting.description': 'Get your soil tested by our experts. Quick, accurate results that help your crops grow better.',
    'features.soilTesting.cta': 'Check My Soil',
    'features.advice.title': 'Expert Advice',
    'features.advice.description': 'Personalized farming tips based on your soil and local weather conditions.',
    'features.advice.cta': 'Get Advice',
    'features.shop.title': 'Farmer Market',
    'features.shop.description': 'Buy quality seeds, fertilizers, and tools at fair prices. No middlemen.',
    'features.shop.cta': 'Shop Now',
    'features.reports.title': 'Progress Reports',
    'features.reports.description': 'Track your farm\'s improvement with simple charts and friendly explanations.',
    'features.reports.cta': 'View Reports',
    
    // Testimonials
    'testimonials.title': 'Farmers\'',
    'testimonials.titleHighlight': 'Success Stories',
    'testimonials.description': 'See how our farmer brothers and sisters are improving their crops',
    
    // CTA Section
    'cta.title': 'Ready to improve your crops?',
    'cta.description': 'Thousands of farmer brothers and sisters have already improved their crops. Now it\'s your turn!',
    'cta.checkSoil': 'Check Soil Now',
    'cta.whatsapp': 'Ask on WhatsApp',
    'cta.trust': '💚 Trusted by 5000+ Happy Farmers',
    
    // Contact Section
    'contact.title': 'Get in',
    'contact.titleHighlight': 'Touch',
    'contact.description': 'Have questions? Need expert advice? Our team is always here to help you succeed. Contact us anytime.',
    'contact.quote': '"Asking questions is the beginning of good farming"',
    'contact.methods': 'Contact Methods',
    'contact.helpline': 'Farmer Helpline',
    'contact.helplineDesc': 'Talk to our experts for immediate assistance',
    'contact.whatsappTitle': 'WhatsApp Support',
    'contact.whatsappDesc': 'Get instant answers on WhatsApp',
    'contact.emailTitle': 'Email Support',
    'contact.emailDesc': 'Write for detailed information',
    'contact.callNow': 'Call Now',
    'contact.chatNow': 'Chat Now',
    'contact.sendEmail': 'Send Email',
    
    // Footer
    'footer.tagline': 'Farm\'s Partner, Farmer\'s Progress',
    'footer.description': 'Empowering Indian farmers is our mission. We improve your farming with modern technology and traditional wisdom.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Our Services',
    'footer.resources': 'Resources',
    'footer.copyright': '© 2025 Kisan Sevak. All rights reserved.',
    'footer.madeWith': 'Made with ❤️ for Indian Farmers',
    
    // Contact Form
    'form.consultation': 'Contact for Consultation',
    'form.consultationDesc': 'Fill in your details, our experts will contact you soon',
    'form.yourName': 'Your Name',
    'form.namePlaceholder': 'e.g: Ramesh Kumar',
    'form.mobile': 'Mobile Number *',
    'form.farmSize': 'Farm Size (in acres)',
    'form.farmSizePlaceholder': 'e.g: 5 acres',
    'form.primaryCrop': 'Primary Crop',
    'form.selectCrop': 'Choose your crop',
    'form.farmLocation': 'Farm Location',
    'form.locationPlaceholder': 'Village, District, State',
    'form.problem': 'Your Problem (Optional)',
    'form.problemPlaceholder': 'Tell us about your farming problem or needs... e.g: yellow leaves in crops, hard soil, etc.',
    'form.submitConsultation': 'Contact for Consultation',
    'form.bookSoilTest': 'Book Soil Test',
    'form.promise': '💚 Promise: Our agricultural experts will contact you within 24 hours and discuss your farming needs in detail.',
    
    // Office Hours and Additional Contact Info
    'contact.officeHours': 'Office Hours',
    'contact.emergency': '🌱 24/7 WhatsApp support available for emergencies',
    'contact.officeTitle': 'Our Office',
    'contact.officeAddress': 'Tech Hub, Sector 18\nGurugram, Haryana 122015\nIndia',
    'contact.officeTagline': '"Near Delhi, With Farmers"',
    'contact.monday': 'Monday - Friday',
    'contact.saturday': 'Saturday',
    'contact.sunday': 'Sunday',
    'contact.mondayTime': '9:00 AM - 7:00 PM',
    'contact.saturdayTime': '9:00 AM - 5:00 PM',
    'contact.sundayTime': '10:00 AM - 4:00 PM',
    
    // Crop Options
    'crops.wheat': 'Wheat',
    'crops.rice': 'Rice',
    'crops.cotton': 'Cotton',
    'crops.sugarcane': 'Sugarcane',
    'crops.vegetables': 'Vegetables',
    'crops.fruits': 'Fruits',
    'crops.other': 'Other',
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    // Check localStorage for saved language preference
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('kisan-sevak-language');
      return (saved as Language) || 'en';
    }
    return 'en';
  });

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem('kisan-sevak-language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}