import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const currentLang = i18n.language as 'en' | 'fr';

  // Load saved language preference on mount
  useEffect(() => {
    const savedLang = localStorage.getItem('cawap_language') as 'en' | 'fr';
    if (savedLang && savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
      document.documentElement.lang = savedLang;
    }
  }, [i18n]);

  const switchLanguage = (lang: 'en' | 'fr') => {
    i18n.changeLanguage(lang);
    localStorage.setItem('cawap_language', lang);
    document.documentElement.lang = lang;
    setIsOpen(false);
    
    // Trigger custom event for other components to listen
    window.dispatchEvent(new CustomEvent('languageChange', { detail: { language: lang } }));
    
    // Force re-render of the entire app
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/90 hover:bg-white transition-all duration-300 cursor-pointer shadow-md border border-gray-200"
        aria-label="Change language"
      >
        <i className="ri-global-line text-lg text-[#3c1053]"></i>
        <span className="text-sm font-medium uppercase text-gray-800">{currentLang}</span>
        <i className={`ri-arrow-down-s-line text-sm transition-transform duration-300 text-gray-700 ${isOpen ? 'rotate-180' : ''}`}></i>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Dropdown */}
          <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl overflow-hidden z-50 min-w-[140px]">
            <button
              onClick={() => switchLanguage('en')}
              className={`w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-gray-50 transition-colors duration-200 cursor-pointer ${
                currentLang === 'en' ? 'bg-[#3c1053]/5 text-[#3c1053] font-semibold' : 'text-gray-700'
              }`}
            >
              <span className="text-xl">🇬🇧</span>
              <span className="text-sm">English</span>
              {currentLang === 'en' && <i className="ri-check-line ml-auto text-[#c9b037]"></i>}
            </button>
            <button
              onClick={() => switchLanguage('fr')}
              className={`w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-gray-50 transition-colors duration-200 cursor-pointer ${
                currentLang === 'fr' ? 'bg-[#3c1053]/5 text-[#3c1053] font-semibold' : 'text-gray-700'
              }`}
            >
              <span className="text-xl">🇫🇷</span>
              <span className="text-sm">Français</span>
              {currentLang === 'fr' && <i className="ri-check-line ml-auto text-[#c9b037]"></i>}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSwitcher;
