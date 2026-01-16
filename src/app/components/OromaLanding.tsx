import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, ChevronRight, CheckCircle, Heart, Shield, Sparkles, Wine, MapPin, Users, Video, CreditCard, Calendar, Plane } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { LanguageSelector } from './LanguageSelector';

export function OromaLanding() {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    dates: '',
    cities: '',
    experience: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    alert(t('apply.successMessage'));
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2D2520]">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF8F5]/80 backdrop-blur-xl border-b border-[#D4735E]/10">
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-gradient-to-br from-[#D4735E] to-[#C9A78A] rounded-full flex items-center justify-center shadow-lg shadow-[#D4735E]/20">
              <span className="text-white font-bold text-xl tracking-tight">O</span>
            </div>
            <span className="text-2xl font-serif tracking-wider text-[#2D2520]">OROMA</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <button onClick={() => scrollToSection('experiences')} className="text-sm text-[#6B5D54] hover:text-[#D4735E] transition-colors duration-300">
              {t('nav.experiences')}
            </button>
            <button onClick={() => scrollToSection('companions')} className="text-sm text-[#6B5D54] hover:text-[#D4735E] transition-colors duration-300">
              {t('nav.hosts')}
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-sm text-[#6B5D54] hover:text-[#D4735E] transition-colors duration-300">
              {t('nav.packages')}
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-sm text-[#6B5D54] hover:text-[#D4735E] transition-colors duration-300">
              {t('nav.howItWorks')}
            </button>
            <button onClick={() => scrollToSection('destinations')} className="text-sm text-[#6B5D54] hover:text-[#D4735E] transition-colors duration-300">
              {t('nav.destinations')}
            </button>
            <button onClick={() => scrollToSection('apply')} className="text-sm text-[#6B5D54] hover:text-[#D4735E] transition-colors duration-300">
              {t('nav.apply')}
            </button>
            <LanguageSelector />
            <Button 
              onClick={() => scrollToSection('apply')}
              className="bg-gradient-to-r from-[#D4735E] to-[#C9A78A] text-white hover:from-[#C4654E] hover:to-[#B9977A] font-medium shadow-lg shadow-[#D4735E]/20 transition-all duration-300"
            >
              {t('nav.beginJourney')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#2D2520]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAF8F5]/95 backdrop-blur-xl border-t border-[#D4735E]/10">
            <div className="px-6 py-6 space-y-5">
              <button onClick={() => scrollToSection('experiences')} className="block text-[#6B5D54] hover:text-[#D4735E] transition-colors">
                {t('nav.experiences')}
              </button>
              <button onClick={() => scrollToSection('companions')} className="block text-[#6B5D54] hover:text-[#D4735E] transition-colors">
                {t('nav.hosts')}
              </button>
              <button onClick={() => scrollToSection('pricing')} className="block text-[#6B5D54] hover:text-[#D4735E] transition-colors">
                {t('nav.packages')}
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="block text-[#6B5D54] hover:text-[#D4735E] transition-colors">
                {t('nav.howItWorks')}
              </button>
              <button onClick={() => scrollToSection('destinations')} className="block text-[#6B5D54] hover:text-[#D4735E] transition-colors">
                {t('nav.destinations')}
              </button>
              <button onClick={() => scrollToSection('apply')} className="block text-[#6B5D54] hover:text-[#D4735E] transition-colors">
                {t('nav.apply')}
              </button>
              <div className="pt-2">
                <LanguageSelector />
              </div>
              <Button 
                onClick={() => scrollToSection('apply')}
                className="w-full bg-gradient-to-r from-[#D4735E] to-[#C9A78A] text-white"
              >
                {t('nav.beginJourney')}
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section - Sensual & Inviting */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Warm Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1701445538567-11cf0f440b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwb29sJTIwY291cGxlJTIwc3Vuc2V0JTIwdmlsbGElMjByb21hbnRpY3xlbnwxfHx8fDE3Njg1NTUwODJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Luxury Colombia Experience"
            className="w-full h-full object-cover scale-105"
          />
          {/* Enhanced overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#2D2520]/70 via-[#2D2520]/50 to-[#FAF8F5]/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D2520]/60 via-transparent to-[#2D2520]/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-10 pt-20">
          <div className="inline-block px-5 py-2.5 bg-white/95 backdrop-blur-sm border border-[#D4735E]/30 rounded-full mb-4 shadow-lg">
            <span className="text-sm text-[#D4735E] font-semibold tracking-wider">LUXURY • COMPANIONSHIP • UNFORGETTABLE</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] tracking-tight text-white drop-shadow-2xl">
            Experience Colombia<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4735E] via-[#F5A894] to-[#D4735E] drop-shadow-none">
              With Perfect Company
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-lg">
            Curated luxury experiences paired with stunning local companions who know Colombia intimately.
          </p>

          <p className="text-lg text-white/90 max-w-3xl mx-auto font-light drop-shadow-md">
            Beautiful, sophisticated hosts • Private villas • Exclusive access • Intimate moments • No crowds, just connection.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              onClick={() => scrollToSection('apply')}
              size="lg"
              className="bg-gradient-to-r from-[#D4735E] to-[#C9A78A] text-white hover:from-[#C4654E] hover:to-[#B9977A] text-lg px-10 py-7 h-auto font-semibold shadow-2xl shadow-[#D4735E]/40 hover:shadow-[#D4735E]/60 transition-all duration-500 hover:scale-105"
            >
              Start Your Journey
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              onClick={() => scrollToSection('companions')}
              size="lg"
              variant="outline"
              className="border-2 border-white/90 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-[#D4735E] text-lg px-10 py-7 h-auto font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Meet Your Hosts
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-2 bg-white/70 rounded-full" />
          </div>
        </div>
      </section>

      {/* Atmospheric Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#D4735E]/20 to-transparent" />

      {/* The OROMA Difference - With Companionship Focus */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-serif leading-tight text-[#2D2520]">
                  More Than Travel,<br />
                  <span className="text-[#D4735E]">A Complete Experience</span>
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-[#D4735E] to-transparent" />
              </div>
              
              <p className="text-xl text-[#6B5D54] leading-relaxed font-light">
                OROMA pairs international travelers with stunning Colombian companions who provide authentic local expertise, sophistication, and genuine connection throughout your journey.
              </p>

              <div className="space-y-4 text-[#6B5D54]">
                <p className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-[#D4735E] mt-1 flex-shrink-0" />
                  <span><strong className="text-[#2D2520]">Beautiful Local Hosts</strong> — Sophisticated companions who truly know Colombia</span>
                </p>
                <p className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-[#D4735E] mt-1 flex-shrink-0" />
                  <span><strong className="text-[#2D2520]">Complete Companionship</strong> — From dinner to nightlife to private moments</span>
                </p>
                <p className="flex items-start gap-3">
                  <Wine className="w-5 h-5 text-[#D4735E] mt-1 flex-shrink-0" />
                  <span><strong className="text-[#2D2020]">Luxury Experiences</strong> — Private villas, rooftop gatherings, exclusive venues</span>
                </p>
                <p className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-[#D4735E] mt-1 flex-shrink-0" />
                  <span><strong className="text-[#2D2520]">Discretion Guaranteed</strong> — Private, safe, and completely confidential</span>
                </p>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative h-[600px] rounded-3xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1766080971298-8a0474ddf447?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBldmVuaW5nJTIwZHJlc3MlMjBsdXh1cnklMjBiYXJ8ZW58MXx8fHwxNzY4NTU0MTQzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Elegant Colombian Companion"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2520]/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Your Colombian Companions - NEW SECTION */}
      <section id="companions" className="py-32 bg-gradient-to-b from-white to-[#F5F1EA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight text-[#2D2520]">
              Your Perfect<br />
              <span className="text-[#D4735E]">Colombian Companions</span>
            </h2>
            <p className="text-xl text-[#6B5D54] max-w-3xl mx-auto font-light">
              Beautiful, intelligent, and sophisticated — our carefully selected hosts are Colombia's finest. They'll show you the country through local eyes, with warmth, charm, and genuine connection.
            </p>
          </div>

          {/* Companion Gallery Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="relative h-[500px] rounded-3xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1631951579708-49613878f431?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjB3b21hbiUyMGNvY2t0YWlsJTIwcm9vZnRvcCUyMG5pZ2h0fGVufDF8fHx8MTc2ODU1NDE0NHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Colombian Host"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2520]/80 via-[#2D2520]/20 to-transparent" />
              <div className="absolute bottom-8 left-6 right-6 text-white">
                <p className="text-sm text-[#D4735E] mb-2 font-medium">NIGHTLIFE SPECIALISTS</p>
                <p className="text-sm leading-relaxed">Your guide to Colombia's most exclusive rooftops, clubs, and after-hours experiences</p>
              </div>
            </div>

            <div className="relative h-[500px] rounded-3xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1768243280089-dc534711cdb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHJlZCUyMGRyZXNzJTIwbmlnaHRsaWZlJTIwZWxlZ2FudHxlbnwxfHx8fDE3Njg1NTQxNDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Colombian Host"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2520]/80 via-[#2D2520]/20 to-transparent" />
              <div className="absolute bottom-8 left-6 right-6 text-white">
                <p className="text-sm text-[#D4735E] mb-2 font-medium">CULTURAL GUIDES</p>
                <p className="text-sm leading-relaxed">Sophisticated companions for fine dining, art galleries, and cultural experiences</p>
              </div>
            </div>

            <div className="relative h-[500px] rounded-3xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1746549844375-bb7561ddbb94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGJpa2luaSUyMHBvb2wlMjBsdXh1cnklMjB2aWxsYXxlbnwxfHx8fDE3Njg1NTQxNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Colombian Host"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2520]/80 via-[#2D2520]/20 to-transparent" />
              <div className="absolute bottom-8 left-6 right-6 text-white">
                <p className="text-sm text-[#D4735E] mb-2 font-medium">WELLNESS & RELAXATION</p>
                <p className="text-sm leading-relaxed">Private villa experiences, spa days, and intimate moments of complete relaxation</p>
              </div>
            </div>
          </div>

          {/* What Sets Our Companions Apart */}
          <div className="bg-gradient-to-br from-[#D4735E]/10 to-[#C9A78A]/10 border border-[#D4735E]/20 rounded-3xl p-10 md:p-12">
            <h3 className="text-2xl font-serif mb-8 text-center text-[#2D2520]">What Makes Our Companions Special</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#D4735E] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-[#2D2520] mb-1">Natural Colombian Beauty</p>
                  <p className="text-sm text-[#6B5D54]">Carefully selected for elegance, charm, and genuine warmth</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#D4735E] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-[#2D2520] mb-1">Multilingual & Cultured</p>
                  <p className="text-sm text-[#6B5D54]">Fluent in English, worldly, educated, great conversationalists</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#D4735E] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-[#2D2520] mb-1">Local Expertise</p>
                  <p className="text-sm text-[#6B5D54]">Born and raised in Colombia, they know every hidden gem</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#D4735E] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-[#2D2520] mb-1">Complete Discretion</p>
                  <p className="text-sm text-[#6B5D54]">Professional, trustworthy, and completely confidential</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose OROMA */}
      <section id="experiences" className="py-32 bg-gradient-to-b from-[#F5F1EA] to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight text-[#2D2520]">
              The Complete Package
            </h2>
            <p className="text-xl text-[#6B5D54] max-w-2xl mx-auto font-light">
              Companionship, luxury, and unforgettable experiences — all curated for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8 text-[#D4735E]" />,
                title: 'Beautiful Companions',
                description: 'Stunning local hosts who provide warmth, sophistication, and genuine connection'
              },
              {
                icon: <Shield className="w-8 h-8 text-[#D4735E]" />,
                title: 'Safe & Discreet',
                description: 'Verified hosts, private accommodations, complete confidentiality, 24/7 support'
              },
              {
                icon: <Wine className="w-8 h-8 text-[#D4735E]" />,
                title: 'Luxury Experiences',
                description: 'Private villas, rooftop lounges, exclusive restaurants, VIP nightlife access'
              },
              {
                icon: <Users className="w-8 h-8 text-[#D4735E]" />,
                title: 'Personalized Matching',
                description: 'We pair you with the perfect companion based on your preferences'
              },
              {
                icon: <MapPin className="w-8 h-8 text-[#D4735E]" />,
                title: 'Local Insider Access',
                description: 'Experience Colombia like a VIP local, not a tourist'
              },
              {
                icon: <Sparkles className="w-8 h-8 text-[#D4735E]" />,
                title: 'All-Inclusive Service',
                description: 'Transportation, accommodations, experiences, and companionship — handled'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group bg-white border border-[#E5DED5] hover:border-[#D4735E]/40 rounded-3xl p-8 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#D4735E]/10"
              >
                <div className="mb-5 transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-[#2D2520]">{feature.title}</h3>
                <p className="text-[#6B5D54] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intimate Moments Gallery */}
      <section className="py-32 bg-gradient-to-b from-white to-[#F5F1EA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight text-[#2D2520]">
              Moments You'll<br />
              <span className="text-[#D4735E]">Never Forget</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-96 rounded-3xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1533029332375-e7cbfc79e984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjB5YWNodCUyMGx1eHVyeSUyMHN1bnNldCUyMHRvZ2V0aGVyfGVufDF8fHx8MTc2ODU1NDE0NXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Private Yacht Experience"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2520]/70 via-[#2D2520]/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-3xl font-serif text-white mb-2">Private Yacht Sunsets</h3>
                <p className="text-white/90 text-sm">Caribbean luxury with your companion, champagne, and endless ocean views</p>
              </div>
            </div>

            <div className="relative h-96 rounded-3xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1681168699413-7fc39077d38c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjB3b21hbiUyMGNoYW1wYWduZSUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc2ODU1NDE0N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Rooftop Celebrations"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2520]/70 via-[#2D2520]/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-3xl font-serif text-white mb-2">Rooftop Celebrations</h3>
                <p className="text-white/90 text-sm">City lights, cocktails, and the perfect company overlooking Bogotá or Medellín</p>
              </div>
            </div>

            <div className="relative h-96 rounded-3xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1581993652887-45f6a564c3bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBkYW5jaW5nJTIwaW50aW1hdGUlMjBuaWdodGNsdWJ8ZW58MXx8fHwxNzY4NTU0MTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Intimate Dancing"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2520]/70 via-[#2D2520]/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-3xl font-serif text-white mb-2">Dance the Night Away</h3>
                <p className="text-white/90 text-sm">VIP access to Colombia's hottest clubs with your beautiful companion</p>
              </div>
            </div>

            <div className="relative h-96 rounded-3xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1699246549472-8e87a59aaab4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBiZWFjaCUyMHN1bnNldCUyMHJvbWFudGljJTIwd2Fsa2luZ3xlbnwxfHx8fDE3Njg1NTQxNDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Beach Paradise"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2520]/70 via-[#2D2520]/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-3xl font-serif text-white mb-2">Caribbean Paradise</h3>
                <p className="text-white/90 text-sm">Private beaches, warm sand, crystal waters, and intimate moments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section id="cities" className="py-32 bg-gradient-to-b from-[#F5F1EA] to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight text-[#2D2520]">
              Four Destinations,<br />
              <span className="text-[#D4735E]">Infinite Pleasure</span>
            </h2>
            <p className="text-xl text-[#6B5D54] font-light">
              Each city offers unique experiences with your perfect companion
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Bogotá */}
            <div className="group relative overflow-hidden rounded-3xl aspect-[4/5] cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1753715474939-ab263c9b953a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW50aG91c2UlMjB0ZXJyYWNlJTIwY2l0eSUyMGxpZ2h0cyUyMGV2ZW5pbmd8ZW58MXx8fHwxNzY4NTUzNjg1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Bogotá"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2520] via-[#2D2520]/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4735E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="absolute bottom-0 left-0 right-0 p-10">
                <div className="inline-block px-3 py-1 bg-[#D4735E]/20 border border-[#D4735E]/30 rounded-full mb-4">
                  <span className="text-xs text-[#D4735E] font-medium tracking-wider">URBAN SOPHISTICATION</span>
                </div>
                <h3 className="text-4xl font-serif mb-4 leading-tight text-white">Bogotá</h3>
                <p className="text-white/90 mb-4 text-lg font-light">Penthouse nights and cultural elegance</p>
                <p className="text-sm text-white/80 leading-relaxed">
                  Rooftop lounges with panoramic Andes views, world-class dining, exclusive art scene, and sophisticated nightlife with your beautiful companion.
                </p>
              </div>
            </div>

            {/* Medellín */}
            <div className="group relative overflow-hidden rounded-3xl aspect-[4/5] cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1758448756167-88dc934c58e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb29mdG9wJTIwaW5maW5pdHklMjBwb29sJTIwc3Vuc2V0JTIwY2l0eXxlbnwxfHx8fDE3Njg1NTM2ODR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Medellín"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2520] via-[#2D2520]/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4735E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="absolute bottom-0 left-0 right-0 p-10">
                <div className="inline-block px-3 py-1 bg-[#D4735E]/20 border border-[#D4735E]/30 rounded-full mb-4">
                  <span className="text-xs text-[#D4735E] font-medium tracking-wider">ETERNAL SPRING</span>
                </div>
                <h3 className="text-4xl font-serif mb-4 leading-tight text-white">Medellín</h3>
                <p className="text-white/90 mb-4 text-lg font-light">Villa living and vibrant energy</p>
                <p className="text-sm text-white/80 leading-relaxed">
                  Private infinity pools, luxury villas, Colombia's most beautiful women, and legendary nightlife in the city of eternal spring.
                </p>
              </div>
            </div>

            {/* Cartagena */}
            <div className="group relative overflow-hidden rounded-3xl aspect-[4/5] cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1767050179711-a8401bd02be9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRpbWF0ZSUyMGRpbm5lciUyMGNhbmRsZXMlMjByb21hbnRpYyUyMGF0bW9zcGhlcmV8ZW58MXx8fHwxNzY4NTUzNjgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Cartagena"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2520] via-[#2D2520]/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4735E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="absolute bottom-0 left-0 right-0 p-10">
                <div className="inline-block px-3 py-1 bg-[#D4735E]/20 border border-[#D4735E]/30 rounded-full mb-4">
                  <span className="text-xs text-[#D4735E] font-medium tracking-wider">CARIBBEAN ROMANCE</span>
                </div>
                <h3 className="text-4xl font-serif mb-4 leading-tight text-white">Cartagena</h3>
                <p className="text-white/90 mb-4 text-lg font-light">Colonial charm meets Caribbean sensuality</p>
                <p className="text-sm text-white/80 leading-relaxed">
                  Private yachts, candlelit dinners in historic palaces, beach clubs, and romantic walks with your companion through cobblestone streets.
                </p>
              </div>
            </div>

            {/* Santa Marta & Tayrona */}
            <div className="group relative overflow-hidden rounded-3xl aspect-[4/5] cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1766910700406-ad8b117b7696?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwc3Vuc2V0JTIwY291cGxlJTIwc2lsaG91ZXR0ZXxlbnwxfHx8fDE3Njg1NTM2ODN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Santa Marta"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2520] via-[#2D2520]/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4735E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="absolute bottom-0 left-0 right-0 p-10">
                <div className="inline-block px-3 py-1 bg-[#D4735E]/20 border border-[#D4735E]/30 rounded-full mb-4">
                  <span className="text-xs text-[#D4735E] font-medium tracking-wider">TROPICAL PARADISE</span>
                </div>
                <h3 className="text-4xl font-serif mb-4 leading-tight text-white">Santa Marta & Tayrona</h3>
                <p className="text-white/90 mb-4 text-lg font-light">Private beaches and jungle luxury</p>
                <p className="text-sm text-white/80 leading-relaxed">
                  Eco-luxury lodges, pristine beaches, jungle adventures, and intimate escapes with your companion in paradise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-32 bg-gradient-to-b from-white to-[#F5F1EA]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-10 leading-tight text-[#2D2520]">
            For the Man Who<br />
            <span className="text-[#D4735E]">Knows What He Wants</span>
          </h2>
          
          <div className="space-y-8 text-xl text-[#6B5D54] mb-16">
            <p className="leading-relaxed font-light max-w-3xl mx-auto">
              OROMA is for successful international men who appreciate beauty, sophistication, and genuine connection. You've worked hard — you deserve an extraordinary experience.
            </p>
            
            <ul className="space-y-6 max-w-3xl mx-auto">
              <li className="flex items-center justify-center gap-4">
                <CheckCircle className="w-6 h-6 text-[#D4735E] flex-shrink-0" />
                <span className="font-light">International entrepreneurs and executives seeking adventure</span>
              </li>
              <li className="flex items-center justify-center gap-4">
                <CheckCircle className="w-6 h-6 text-[#D4735E] flex-shrink-0" />
                <span className="font-light">Men who value beautiful companionship and cultural experiences</span>
              </li>
              <li className="flex items-center justify-center gap-4">
                <CheckCircle className="w-6 h-6 text-[#D4735E] flex-shrink-0" />
                <span className="font-light">Those seeking discretion, safety, and premium service</span>
              </li>
              <li className="flex items-center justify-center gap-4">
                <CheckCircle className="w-6 h-6 text-[#D4735E] flex-shrink-0" />
                <span className="font-light">Travelers who want the complete luxury experience</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[#D4735E]/10 to-[#C9A78A]/10 border border-[#D4735E]/20 rounded-3xl p-10 backdrop-blur-sm">
            <p className="text-2xl text-[#2D2520] font-light italic">
              "This isn't tourism.<br />This is the Colombia experience you've been searching for."
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-32 bg-gradient-to-b from-[#F5F1EA] to-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight text-[#2D2520]">
              Ready to Experience<br />
              <span className="text-[#D4735E]">Colombia?</span>
            </h2>
            <p className="text-xl text-[#6B5D54] font-light">
              Limited availability. Exclusive service. Complete your application to begin.
            </p>
          </div>

          <div className="bg-white border border-[#E5DED5] rounded-3xl p-10 md:p-16 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-3">
                <Label htmlFor="name" className="text-[#2D2520] text-base">Full Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="bg-[#FAF8F5] border-[#E5DED5] text-[#2D2520] h-14 rounded-xl focus:border-[#D4735E] transition-colors"
                  required
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="email" className="text-[#2D2520] text-base">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="bg-[#FAF8F5] border-[#E5DED5] text-[#2D2520] h-14 rounded-xl focus:border-[#D4735E] transition-colors"
                  required
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="country" className="text-[#2D2520] text-base">Country of Residence</Label>
                <Input
                  id="country"
                  value={formData.country}
                  onChange={(e) => setFormData({...formData, country: e.target.value})}
                  placeholder="e.g., United States, Australia, Germany"
                  className="bg-[#FAF8F5] border-[#E5DED5] text-[#2D2520] h-14 rounded-xl focus:border-[#D4735E] transition-colors placeholder:text-[#A89B91]"
                  required
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="dates" className="text-[#2D2520] text-base">Travel Dates</Label>
                <Input
                  id="dates"
                  value={formData.dates}
                  onChange={(e) => setFormData({...formData, dates: e.target.value})}
                  placeholder="e.g., March 15-22, 2025"
                  className="bg-[#FAF8F5] border-[#E5DED5] text-[#2D2520] h-14 rounded-xl focus:border-[#D4735E] transition-colors placeholder:text-[#A89B91]"
                  required
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="cities" className="text-[#2D2520] text-base">Preferred Destinations</Label>
                <Input
                  id="cities"
                  value={formData.cities}
                  onChange={(e) => setFormData({...formData, cities: e.target.value})}
                  placeholder="e.g., Medellín, Cartagena"
                  className="bg-[#FAF8F5] border-[#E5DED5] text-[#2D2520] h-14 rounded-xl focus:border-[#D4735E] transition-colors placeholder:text-[#A89B91]"
                  required
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="experience" className="text-[#2D2520] text-base">
                  What are you looking for?
                </Label>
                <Textarea
                  id="experience"
                  value={formData.experience}
                  onChange={(e) => setFormData({...formData, experience: e.target.value})}
                  placeholder="Tell us about your ideal experience: companionship preferences, activities, nightlife, relaxation..."
                  className="bg-[#FAF8F5] border-[#E5DED5] text-[#2D2520] min-h-40 rounded-xl focus:border-[#D4735E] transition-colors placeholder:text-[#A89B91]"
                  required
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-[#D4735E] to-[#C9A78A] text-white hover:from-[#C4654E] hover:to-[#B9977A] text-lg py-7 h-auto font-semibold rounded-xl shadow-2xl shadow-[#D4735E]/20 hover:shadow-[#D4735E]/40 transition-all duration-500"
              >
                Submit Application
              </Button>

              <p className="text-center text-sm text-[#A89B91] font-light">
                We review all applications personally and respond within 48 hours
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D2520] border-t border-[#3D3530] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-gradient-to-br from-[#D4735E] to-[#C9A78A] rounded-full flex items-center justify-center shadow-lg shadow-[#D4735E]/20">
                <span className="text-white font-bold text-xl tracking-tight">O</span>
              </div>
              <span className="text-2xl font-serif tracking-wider text-[#FAF8F5]">OROMA</span>
            </div>

            <div className="text-center md:text-left">
              <p className="text-[#A89B91] font-light">
                Luxury Companionship Experiences in Colombia
              </p>
              <p className="text-[#6B5D54] text-sm mt-2">
                © 2025 OROMA. Discreet. Private. Unforgettable.
              </p>
            </div>

            <div className="flex gap-8 text-sm text-[#A89B91]">
              <button className="hover:text-[#D4735E] transition-colors">Privacy</button>
              <button className="hover:text-[#D4735E] transition-colors">Terms</button>
              <button className="hover:text-[#D4735E] transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}