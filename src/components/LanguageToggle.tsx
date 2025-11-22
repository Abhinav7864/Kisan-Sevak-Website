import { Button } from "./ui/button";
import { useLanguage } from "../contexts/LanguageContext";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'hi' ? 'en' : 'hi');
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="border-[#8b6f47]/30 text-[#3c2e26] hover:bg-[#f5f2ec] hover:border-[#4a7c59] transition-all duration-300 font-medium"
    >
      <Globe className="w-4 h-4 mr-2" />
      {language === 'hi' ? 'English' : 'हिंदी'}
    </Button>
  );
}