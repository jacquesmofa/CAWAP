import { useState, useEffect } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import SmartSearch from './SmartSearch';
import { useMedia } from '../../context/MediaContext';
import navigation from '../../content/navigation.json';
import site from '../../content/site.json';

// Menu labels and links: src/content/navigation.json. Brand and contact: src/content/site.json.

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const [isMobileProgramsOpen, setIsMobileProgramsOpen] = useState(false);
  const [isMobileEventsOpen, setIsMobileEventsOpen] = useState(false);

  const { assets, loading } = useMedia();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsMobileProgramsOpen(false);
    setIsMobileEventsOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <nav className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 cursor-pointer z-50">
              {!loading && assets ? (
                <img 
                  src={assets.branding.logo_main} 
                  alt="CAWAP Logo" 
                  className="h-16 w-16 object-contain"
                  onError={(e) => {
                    e.currentTarget.src = 'https://i.imgur.com/pArmDNQ.png';
                  }}
                />
              ) : (
                <div className="h-16 w-16 bg-gray-200 animate-pulse rounded-lg"></div>
              )}
              <div className="flex flex-col">
                <span className={`text-2xl font-bold transition-colors ${isScrolled ? 'text-[#26194f]' : 'text-white'}`}>
                  {site.brandName}
                </span>
                <span className={`text-xs transition-colors ${isScrolled ? 'text-gray-600' : 'text-white/90'}`}>
                  {site.tagline}
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.links.map((item) => (
                <a
                  key={item.link}
                  href={item.link}
                  className={`font-medium transition-colors cursor-pointer ${
                    isScrolled ? 'text-gray-700 hover:text-[#26194f]' : 'text-white hover:text-[#c9b037]'
                  }`}
                >
                  {item.label}
                </a>
              ))}

              {/* Programs Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsProgramsOpen(true)}
                onMouseLeave={() => setIsProgramsOpen(false)}
              >
                <button
                  className={`font-medium transition-colors flex items-center gap-1 cursor-pointer ${
                    isScrolled ? 'text-gray-700 hover:text-[#26194f]' : 'text-white hover:text-[#c9b037]'
                  }`}
                >
                  {navigation.programsLabel}
                  <i className={`ri-arrow-down-s-line transition-transform ${isProgramsOpen ? 'rotate-180' : ''}`}></i>
                </button>
                {isProgramsOpen && (
                  <div className="absolute top-full left-[-200px] mt-2 w-[720px] bg-white rounded-lg shadow-xl py-4 px-2 z-50 grid grid-cols-3 gap-x-2">
                    {navigation.programLinks.map((item) => (
                      <a key={item.link} href={item.link} className="block px-4 py-2 text-gray-700 hover:bg-[#26194f]/10 hover:text-[#26194f] transition-colors cursor-pointer rounded-md">
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {navigation.linksAfterPrograms.map((item) => (
                <a
                  key={item.link}
                  href={item.link}
                  className={`font-medium transition-colors cursor-pointer ${
                    isScrolled ? 'text-gray-700 hover:text-[#26194f]' : 'text-white hover:text-[#c9b037]'
                  }`}
                >
                  {item.label}
                </a>
              ))}

              {/* Events Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsEventsOpen(true)}
                onMouseLeave={() => setIsEventsOpen(false)}
              >
                <button
                  className={`font-medium transition-colors flex items-center gap-1 cursor-pointer ${
                    isScrolled ? 'text-gray-700 hover:text-[#26194f]' : 'text-white hover:text-[#c9b037]'
                  }`}
                >
                  {navigation.eventsLabel}
                  <i className={`ri-arrow-down-s-line transition-transform ${isEventsOpen ? 'rotate-180' : ''}`}></i>
                </button>
                {isEventsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 z-50">
                    {navigation.eventLinks.map((item) => (
                      <a key={item.link} href={item.link} className="block px-4 py-2 text-gray-700 hover:bg-[#26194f]/10 hover:text-[#26194f] transition-colors cursor-pointer">
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Smart Search */}
              <SmartSearch />

              {/* Language Switcher */}
              <LanguageSwitcher />

              <a
                href={navigation.donateButton.link}
                className="bg-[#c9b037] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#b39f2f] transition-all duration-300 elite-btn whitespace-nowrap cursor-pointer"
              >
                {navigation.donateButton.label}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden text-3xl z-50 w-12 h-12 flex items-center justify-center cursor-pointer"
            >
              <i className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-black`}></i>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 lg:hidden overflow-y-auto">
          <div className="pt-24 px-6 pb-6">
            {/* Mobile Search & Language */}
            <div className="mb-6 space-y-3">
              <SmartSearch />
              <LanguageSwitcher />
            </div>

            {navigation.links.map((item) => (
              <a
                key={item.link}
                href={item.link}
                onClick={toggleMobileMenu}
                className="block py-3 text-gray-700 hover:text-[#26194f] font-medium border-b border-gray-200 cursor-pointer"
              >
                {item.label}
              </a>
            ))}

            {/* Mobile Programs Dropdown */}
            <div className="border-b border-gray-200">
              <button
                onClick={() => setIsMobileProgramsOpen(!isMobileProgramsOpen)}
                className="w-full flex items-center justify-between py-3 text-gray-700 hover:text-[#26194f] font-medium cursor-pointer"
              >
                {navigation.programsLabel}
                <i className={`ri-arrow-down-s-line transition-transform ${isMobileProgramsOpen ? 'rotate-180' : ''}`}></i>
              </button>
              {isMobileProgramsOpen && (
                <div className="pl-4 pb-2">
                  {navigation.programLinks.map((item) => (
                    <a key={item.link} href={item.link} onClick={toggleMobileMenu} className="block py-2 text-gray-600 hover:text-[#26194f] cursor-pointer">
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {navigation.linksAfterPrograms.map((item) => (
              <a
                key={item.link}
                href={item.link}
                onClick={toggleMobileMenu}
                className="block py-3 text-gray-700 hover:text-[#26194f] font-medium border-b border-gray-200 cursor-pointer"
              >
                {item.label}
              </a>
            ))}

            {/* Mobile Events Dropdown */}
            <div className="border-b border-gray-200">
              <button
                onClick={() => setIsMobileEventsOpen(!isMobileEventsOpen)}
                className="w-full flex items-center justify-between py-3 text-gray-700 hover:text-[#26194f] font-medium cursor-pointer"
              >
                {navigation.eventsLabel}
                <i className={`ri-arrow-down-s-line transition-transform ${isMobileEventsOpen ? 'rotate-180' : ''}`}></i>
              </button>
              {isMobileEventsOpen && (
                <div className="pl-4 pb-2">
                  {navigation.eventLinks.map((item) => (
                    <a key={item.link} href={item.link} onClick={toggleMobileMenu} className="block py-2 text-gray-600 hover:text-[#26194f] cursor-pointer">
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href={navigation.donateButton.link}
              onClick={toggleMobileMenu}
              className="block mt-4 text-center bg-[#c9b037] text-white px-6 py-3 rounded-full font-semibold cursor-pointer"
            >
              {navigation.donateButton.label}
            </a>

            {/* Mobile Contact Info */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="space-y-3">
                <a href={`tel:${site.contact.phoneLink}`} className="flex items-center gap-2 text-gray-600 hover:text-[#26194f] cursor-pointer">
                  <i className="ri-phone-line"></i>
                  <span className="text-sm">{site.contact.phoneDisplay}</span>
                </a>
                <a href={`mailto:${site.contact.email}`} className="flex items-center gap-2 text-gray-600 hover:text-[#26194f] cursor-pointer">
                  <i className="ri-mail-line"></i>
                  <span>{site.contact.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
