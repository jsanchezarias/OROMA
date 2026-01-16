import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { Button } from './ui/button';

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'no', name: 'Norsk', flag: '🇳🇴' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' }
];

export function LanguageSelector() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 border-[#D4735E]/30 hover:border-[#D4735E] hover:bg-[#D4735E]/5 transition-all"
      >
        <Globe className="w-4 h-4 text-[#D4735E]" />
        <span className="text-sm font-medium">{currentLanguage.flag}</span>
      </Button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 top-12 z-50 bg-white border border-[#E5DED5] rounded-xl shadow-2xl shadow-[#2D2520]/10 overflow-hidden min-w-[180px]">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-colors ${
                  i18n.language === lang.code
                    ? 'bg-gradient-to-r from-[#D4735E]/10 to-[#C9A78A]/10 text-[#D4735E] font-semibold'
                    : 'text-[#6B5D54] hover:bg-[#FAF8F5]'
                }`}
              >
                <span className="text-xl">{lang.flag}</span>
                <span className="text-sm">{lang.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
