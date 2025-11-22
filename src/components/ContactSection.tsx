import { Phone, MessageCircle, Mail, MapPin, Clock, User, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useLanguage } from "../contexts/LanguageContext";

export function ContactSection() {
  const { t } = useLanguage();
  
  const contactMethods = [
    {
      icon: Phone,
      title: t('contact.helpline'),
      description: t('contact.helplineDesc'),
      contact: "+91 98765 43210",
      color: "bg-[#e8f5e8] text-[#4a7c59]",
      action: t('contact.callNow')
    },
    {
      icon: MessageCircle,
      title: t('contact.whatsappTitle'),
      description: t('contact.whatsappDesc'),
      contact: "+91 98765 43210",
      color: "bg-[#e8f5e8] text-[#4a7c59]",
      action: t('contact.chatNow')
    },
    {
      icon: Mail,
      title: t('contact.emailTitle'),
      description: t('contact.emailDesc'),
      contact: "support@kisansevak.com",
      color: "bg-[#faf5e6] text-[#daa520]",
      action: t('contact.sendEmail')
    }
  ];

  const officeHours = [
    { day: t('contact.monday'), time: t('contact.mondayTime') },
    { day: t('contact.saturday'), time: t('contact.saturdayTime') },
    { day: t('contact.sunday'), time: t('contact.sundayTime') }
  ];

  return (
    <section id="contact" className="py-20 bg-[#f5f2ec] field-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#3c2e26] mb-4">
            {t('contact.title')} <span className="text-[#4a7c59]">{t('contact.titleHighlight')}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t('contact.description')}
          </p>
          <p className="text-[#4a7c59] mt-4 italic">
            {t('contact.quote')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-xl font-bold text-[#3c2e26] mb-6">{t('contact.methods')}</h3>
            
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-14 h-14 ${method.color.split(' ')[0]} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className={`w-7 h-7 ${method.color.split(' ')[1]} ${method.color.split(' ')[2]}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-[#3c2e26] mb-2">{method.title}</h4>
                        <p className="text-sm text-gray-600 mb-3 leading-relaxed">{method.description}</p>
                        <p className="font-semibold text-[#3c2e26] mb-4">{method.contact}</p>
                        <Button size="sm" className="bg-[#4a7c59] hover:bg-[#2d5016] text-white">
                          {method.action}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Office Hours */}
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="flex items-center text-[#3c2e26]">
                  <Clock className="w-5 h-5 mr-2 text-[#4a7c59]" />
                  {t('contact.officeHours')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {officeHours.map((hours, index) => (
                    <div key={index} className="flex justify-between items-center p-2 rounded-lg hover:bg-[#f5f2ec] transition-colors">
                      <span className="text-gray-600 font-medium">{hours.day}</span>
                      <span className="font-semibold text-[#3c2e26]">{hours.time}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-[#e8f5e8] rounded-lg">
                  <p className="text-[#4a7c59] text-sm font-medium">
                    {t('contact.emergency')}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Address */}
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-[#f5f2ec] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-[#8b6f47]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#3c2e26] mb-2">{t('contact.officeTitle')}</h4>
                    <p className="text-gray-600 leading-relaxed">
                      {t('contact.officeAddress')}
                    </p>
                    <p className="text-[#4a7c59] text-sm mt-2 italic">
                      {t('contact.officeTagline')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl bg-white">
              <CardHeader className="bg-gradient-to-r from-[#4a7c59] to-[#2d5016] text-white rounded-t-lg">
                <CardTitle className="flex items-center text-xl">
                  <User className="w-6 h-6 mr-3" />
                  {t('form.consultation')}
                </CardTitle>
                <p className="text-green-100 mt-2">
                  {t('form.consultationDesc')}
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-[#3c2e26] font-medium">{t('form.yourName')}</Label>
                      <Input 
                        id="firstName" 
                        placeholder={t('form.namePlaceholder')}
                        className="mt-2 border-[#8b6f47]/30 focus:border-[#4a7c59]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-[#3c2e26] font-medium">{t('form.mobile')}</Label>
                      <Input 
                        id="phone" 
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="mt-2 border-[#8b6f47]/30 focus:border-[#4a7c59]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="farmSize" className="text-[#3c2e26] font-medium">{t('form.farmSize')}</Label>
                      <Input 
                        id="farmSize" 
                        type="number"
                        placeholder={t('form.farmSizePlaceholder')}
                        className="mt-2 border-[#8b6f47]/30 focus:border-[#4a7c59]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cropType" className="text-[#3c2e26] font-medium">{t('form.primaryCrop')}</Label>
                      <Select>
                        <SelectTrigger className="mt-2 border-[#8b6f47]/30 focus:border-[#4a7c59]">
                          <SelectValue placeholder={t('form.selectCrop')} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="wheat">{t('crops.wheat')}</SelectItem>
                          <SelectItem value="rice">{t('crops.rice')}</SelectItem>
                          <SelectItem value="cotton">{t('crops.cotton')}</SelectItem>
                          <SelectItem value="sugarcane">{t('crops.sugarcane')}</SelectItem>
                          <SelectItem value="vegetables">{t('crops.vegetables')}</SelectItem>
                          <SelectItem value="fruits">{t('crops.fruits')}</SelectItem>
                          <SelectItem value="other">{t('crops.other')}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="location" className="text-[#3c2e26] font-medium">{t('form.farmLocation')}</Label>
                    <Input 
                      id="location" 
                      placeholder={t('form.locationPlaceholder')}
                      className="mt-2 border-[#8b6f47]/30 focus:border-[#4a7c59]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-[#3c2e26] font-medium">{t('form.problem')}</Label>
                    <Textarea 
                      id="message" 
                      placeholder={t('form.problemPlaceholder')}
                      rows={4}
                      className="mt-2 border-[#8b6f47]/30 focus:border-[#4a7c59]"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-[#4a7c59] hover:bg-[#2d5016] text-white flex-1 py-3 hover-lift">
                      <Heart className="w-4 h-4 mr-2" />
                      {t('form.submitConsultation')}
                    </Button>
                    <Button variant="outline" className="border-[#daa520] text-[#daa520] hover:bg-[#daa520] hover:text-white py-3 hover-lift">
                      {t('form.bookSoilTest')}
                    </Button>
                  </div>

                  <div className="bg-[#e8f5e8] p-4 rounded-lg">
                    <p className="text-[#4a7c59] text-sm leading-relaxed">
                      {t('form.promise')}
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}