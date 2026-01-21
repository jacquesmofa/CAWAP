import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const [isMobileProgramsOpen, setIsMobileProgramsOpen] = useState(false);
  const [isMobileEventsOpen, setIsMobileEventsOpen] = useState(false);

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
              <img 
                src="https://i.imgur.com/pArmDNQ.png" 
                alt="CAWAP Logo" 
                className="h-16 w-16 object-contain"
              />
              <div className="flex flex-col">
                <span className={`text-2xl font-bold transition-colors ${isScrolled ? 'text-[#26194f]' : 'text-white'}`}>
                  C.A.W.A.P
                </span>
                <span className={`text-xs transition-colors ${isScrolled ? 'text-gray-600' : 'text-white/90'}`}>
                  Your Empowerment services
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <a
                href="/"
                className={`font-medium transition-colors cursor-pointer ${
                  isScrolled ? 'text-gray-700 hover:text-[#26194f]' : 'text-white hover:text-[#c9b037]'
                }`}
              >
                Home
              </a>
              <a
                href="/about"
                className={`font-medium transition-colors cursor-pointer ${
                  isScrolled ? 'text-gray-700 hover:text-[#26194f]' : 'text-white hover:text-[#c9b037]'
                }`}
              >
                About
              </a>
              <a
                href="/food-pantry"
                className={`font-medium transition-colors cursor-pointer ${
                  isScrolled ? 'text-gray-700 hover:text-[#26194f]' : 'text-white hover:text-[#c9b037]'
                }`}
              >
                Food Bank
              </a>

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
                  Programs
                  <i className={`ri-arrow-down-s-line transition-transform ${isProgramsOpen ? 'rotate-180' : ''}`}></i>
                </button>
                {isProgramsOpen && (
                  <div className="absolute top-full left-[-200px] mt-2 w-[720px] bg-white rounded-lg shadow-xl py-4 px-2 z-50 grid grid-cols-3 gap-x-2">
                    <a href="/youth-leadership" className="block px-4 py-2 text-gray-700 hover:bg-[#26194f]/10 hover:text-[#26194f] transition-colors cursor-pointer rounded-md">
                      Youth Leadership
                    </a>
                    <a href="/capital-g-girls" className="block px-4 py-2 text-gray-700 hover:bg-[#26194f]/10 hover:text-[#26194f] transition-colors cursor-pointer rounded-md">
                      Capital G Girls
                    </a>
                    <a href="/heart-wise-seniors" className="block px-4 py-2 text-gray-700 hover:bg-[#26194f]/10 hover:text-[#26194f] transition-colors cursor-pointer rounded-md">
                      Heart Wise Seniors
                    </a>
                    <a href="/women-empowerment" className="block px-4 py-2 text-gray-700 hover:bg-[#26194f]/10 hover:text-[#26194f] transition-colors cursor-pointer rounded-md">
                      Women Empowerment
                    </a>
                    <a href="/sankofa-royale-awards" className="block px-4 py-2 text-gray-700 hover:bg-[#26194f]/10 hover:text-[#26194f] transition-colors cursor-pointer rounded-md">
                      Sankofa Royale Awards
                    </a>
                    <a href="/food-pantry" className="block px-4 py-2 text-gray-700 hover:bg-[#26194f]/10 hover:text-[#26194f] transition-colors cursor-pointer rounded-md">
                      Food Pantry
                    </a>
                    <a href="/financial-literacy" className="block px-4 py-2 text-gray-700 hover:bg-[#26194f]/10 hover:text-[#26194f] transition-colors cursor-pointer rounded-md">
                      Financial Literacy
                    </a>
                    <a href="/javascript-program" className="block px-4 py-2 text-gray-700 hover:bg-[#26194f]/10 hover:text-[#26194f] transition-colors cursor-pointer rounded-md">
                      Javascript Program
                    </a>
                    <a href="/children-summer-camp" className="block px-4 py-2 text-gray-700 hover:bg-[#26194f]/10 hover:text-[#26194f] transition-colors cursor-pointer rounded-md">
                      Children Summer Camp
                    </a>
                    <a href="/mental-health" className="block px-4 py-2 text-gray-700 hover:bg-[#26194f]/10 hover:text-[#26194f] transition-colors cursor-pointer rounded-md">
                      Mental Health
                    </a>
                    <a href="/new-breed-women-of-substance" className="block px-4 py-2 text-gray-700 hover:bg-[#26194f]/10 hover:text-[#26194f] transition-colors cursor-pointer rounded-md">
                      New Breed Women
                    </a>
                    <a href="/project-and-evaluation" className="block px-4 py-2 text-gray-700 hover:bg-[#26194f]/10 hover:text-[#26194f] transition-colors cursor-pointer rounded-md">
                      Project & Evaluation
                    </a>
                    <a href="/newcomers-settlement-program" className="block px-4 py-2 text-gray-700 hover:bg-[#26194f]/10 hover:text-[#26194f] transition-colors cursor-pointer rounded-md">
                      Newcomers Settlement
                    </a>
                    <a href="/cultural-events" className="block px-4 py-2 text-gray-700 hover:bg-[#26194f]/10 hover:text-[#26194f] transition-colors cursor-pointer rounded-md">
                      Cultural Events
                    </a>
                  </div>
                )}
              </div>

              <a
                href="/gallery"
                className={`font-medium transition-colors cursor-pointer ${
                  isScrolled ? 'text-gray-700 hover:text-[#26194f]' : 'text-white hover:text-[#c9b037]'
                }`}
              >
                Gallery
              </a>
              <a
                href="/contact"
                className={`font-medium transition-colors cursor-pointer ${
                  isScrolled ? 'text-gray-700 hover:text-[#26194f]' : 'text-white hover:text-[#c9b037]'
                }`}
              >
                Contact
              </a>

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
                  Events
                  <i className={`ri-arrow-down-s-line transition-transform ${isEventsOpen ? 'rotate-180' : ''}`}></i>
                </button>
                {isEventsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 z-50">
                    <a href="/upcoming-events" className="block px-4 py-2 text-gray-700 hover:bg-[#26194f]/10 hover:text-[#26194f] transition-colors cursor-pointer">
                      Upcoming Events
                    </a>
                    <a href="/past-events" className="block px-4 py-2 text-gray-700 hover:bg-[#26194f]/10 hover:text-[#26194f] transition-colors cursor-pointer">
                      Past Events
                    </a>
                    <a href="/christmas-event" className="block px-4 py-2 text-gray-700 hover:bg-[#26194f]/10 hover:text-[#26194f] transition-colors cursor-pointer">
                      Christmas Event
                    </a>
                  </div>
                )}
              </div>

              <a
                href="/donate"
                className="bg-[#c9b037] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#b39f2f] transition-all duration-300 elite-btn whitespace-nowrap cursor-pointer"
              >
                Donate Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden text-3xl z-50 w-12 h-12 flex items-center justify-center cursor-pointer"
            >
              <i className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} ${isScrolled ? 'text-[#26194f]' : 'text-white'}`}></i>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 lg:hidden overflow-y-auto">
          <div className="pt-24 px-6 pb-6">
            {/* ... existing mobile menu content ... */}
            <a
              href="/"
              onClick={toggleMobileMenu}
              className="block py-3 text-gray-700 hover:text-[#26194f] font-medium border-b border-gray-200 cursor-pointer"
            >
              Home
            </a>
            <a
              href="/about"
              onClick={toggleMobileMenu}
              className="block py-3 text-gray-700 hover:text-[#26194f] font-medium border-b border-gray-200 cursor-pointer"
            >
              About
            </a>
            <a
              href="/food-pantry"
              onClick={toggleMobileMenu}
              className="block py-3 text-gray-700 hover:text-[#26194f] font-medium border-b border-gray-200 cursor-pointer"
            >
              Food Bank
            </a>

            {/* Mobile Programs Dropdown */}
            <div className="border-b border-gray-200">
              <button
                onClick={() => setIsMobileProgramsOpen(!isMobileProgramsOpen)}
                className="w-full flex items-center justify-between py-3 text-gray-700 hover:text-[#26194f] font-medium cursor-pointer"
              >
                Programs
                <i className={`ri-arrow-down-s-line transition-transform ${isMobileProgramsOpen ? 'rotate-180' : ''}`}></i>
              </button>
              {isMobileProgramsOpen && (
                <div className="pl-4 pb-2">
                  {/* ... existing program links ... */}
                  <a href="/youth-leadership" onClick={toggleMobileMenu} className="block py-2 text-gray-600 hover:text-[#26194f] cursor-pointer">
                    Youth Leadership
                  </a>
                  <a href="/capital-g-girls" onClick={toggleMobileMenu} className="block py-2 text-gray-600 hover:text-[#26194f] cursor-pointer">
                    Capital G Girls
                  </a>
                  <a href="/heart-wise-seniors" onClick={toggleMobileMenu} className="block py-2 text-gray-600 hover:text-[#26194f] cursor-pointer">
                    Heart Wise Seniors
                  </a>
                  <a href="/women-empowerment" onClick={toggleMobileMenu} className="block py-2 text-gray-600 hover:text-[#26194f] cursor-pointer">
                    Women Empowerment
                  </a>
                  <a href="/sankofa-royale-awards" onClick={toggleMobileMenu} className="block py-2 text-gray-600 hover:text-[#26194f] cursor-pointer">
                    Sankofa Royale Awards
                  </a>
                  <a href="/food-pantry" onClick={toggleMobileMenu} className="block py-2 text-gray-600 hover:text-[#26194f] cursor-pointer">
                    Food Pantry
                  </a>
                  <a href="/financial-literacy" onClick={toggleMobileMenu} className="block py-2 text-gray-600 hover:text-[#26194f] cursor-pointer">
                    Financial Literacy
                  </a>
                  <a href="/javascript-program" onClick={toggleMobileMenu} className="block py-2 text-gray-600 hover:text-[#26194f] cursor-pointer">
                    Javascript Program
                  </a>
                  <a href="/children-summer-camp" onClick={toggleMobileMenu} className="block py-2 text-gray-600 hover:text-[#26194f] cursor-pointer">
                    Children Summer Camp
                  </a>
                  <a href="/mental-health" onClick={toggleMobileMenu} className="block py-2 text-gray-600 hover:text-[#26194f] cursor-pointer">
                    Mental Health
                  </a>
                  <a href="/new-breed-women-of-substance" onClick={toggleMobileMenu} className="block py-2 text-gray-600 hover:text-[#26194f] cursor-pointer">
                    New Breed Women
                  </a>
                  <a href="/project-and-evaluation" onClick={toggleMobileMenu} className="block py-2 text-gray-600 hover:text-[#26194f] cursor-pointer">
                    Project & Evaluation
                  </a>
                  <a href="/newcomers-settlement-program" onClick={toggleMobileMenu} className="block py-2 text-gray-600 hover:text-[#26194f] cursor-pointer">
                    Newcomers Settlement
                  </a>
                  <a href="/cultural-events" onClick={toggleMobileMenu} className="block py-2 text-gray-600 hover:text-[#26194f] cursor-pointer">
                    Cultural Events
                  </a>
                </div>
              )}
            </div>

            <a
              href="/gallery"
              onClick={toggleMobileMenu}
              className="block py-3 text-gray-700 hover:text-[#26194f] font-medium border-b border-gray-200 cursor-pointer"
            >
              Gallery
            </a>
            <a
              href="/contact"
              onClick={toggleMobileMenu}
              className="block py-3 text-gray-700 hover:text-[#26194f] font-medium border-b border-gray-200 cursor-pointer"
            >
              Contact
            </a>

            {/* Mobile Events Dropdown */}
            <div className="border-b border-gray-200">
              <button
                onClick={() => setIsMobileEventsOpen(!isMobileEventsOpen)}
                className="w-full flex items-center justify-between py-3 text-gray-700 hover:text-[#26194f] font-medium cursor-pointer"
              >
                Events
                <i className={`ri-arrow-down-s-line transition-transform ${isMobileEventsOpen ? 'rotate-180' : ''}`}></i>
              </button>
              {isMobileEventsOpen && (
                <div className="pl-4 pb-2">
                  <a href="/upcoming-events" onClick={toggleMobileMenu} className="block py-2 text-gray-600 hover:text-[#26194f] cursor-pointer">
                    Upcoming Events
                  </a>
                  <a href="/past-events" onClick={toggleMobileMenu} className="block py-2 text-gray-600 hover:text-[#26194f] cursor-pointer">
                    Past Events
                  </a>
                  <a href="/christmas-event" onClick={toggleMobileMenu} className="block py-2 text-gray-600 hover:text-[#26194f] cursor-pointer">
                    Christmas Event
                  </a>
                </div>
              )}
            </div>

            <a
              href="/donate"
              onClick={toggleMobileMenu}
              className="block mt-4 text-center bg-[#c9b037] text-white px-6 py-3 rounded-full font-semibold cursor-pointer"
            >
              Donate Now
            </a>

            {/* Mobile Contact Info */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="space-y-3">
                <a href="tel:+16475815901" className="flex items-center gap-2 text-gray-600 hover:text-[#26194f] cursor-pointer">
                  <i className="ri-phone-line"></i>
                  <span className="text-sm">647-581-5901</span>
                </a>
                <a href="mailto:cawap2005@gmail.com" className="flex items-center gap-2 text-gray-600 hover:text-[#26194f] cursor-pointer">
                  <i className="ri-mail-line"></i>
                  <span>cawap2005@gmail.com</span>
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