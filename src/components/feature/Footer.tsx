import { useMedia } from '../../context/MediaContext';

const Footer = () => {
  const { assets, loading } = useMedia();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#26194f] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {!loading && assets ? (
                <img 
                  src={assets.branding.logo_white || assets.branding.logo_main} 
                  alt="CAWAP Logo" 
                  className="h-12 w-12 object-contain"
                  onError={(e) => {
                    e.currentTarget.src = 'https://i.imgur.com/pArmDNQ.png';
                  }}
                />
              ) : (
                <div className="h-12 w-12 bg-white/10 animate-pulse rounded-lg"></div>
              )}
              <div>
                <h3 className="text-xl font-bold">C.A.W.A.P</h3>
                <p className="text-xs text-white/80">Your Empowerment services</p>
              </div>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              Empowering communities through comprehensive support programs, cultural initiatives, and dedicated service to African and Caribbean communities in Canada.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-sm text-white/80 hover:text-[#c9b037] transition-colors cursor-pointer">
                  About Us
                </a>
              </li>
              <li>
                <a href="/programs" className="text-sm text-white/80 hover:text-[#c9b037] transition-colors cursor-pointer">
                  Our Programs
                </a>
              </li>
              <li>
                <a href="/food-bank" className="text-sm text-white/80 hover:text-[#c9b037] transition-colors cursor-pointer">
                  Food Bank
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-sm text-white/80 hover:text-[#c9b037] transition-colors cursor-pointer">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/upcoming-events" className="text-sm text-white/80 hover:text-[#c9b037] transition-colors cursor-pointer">
                  Events
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm text-white/80 hover:text-[#c9b037] transition-colors cursor-pointer">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              <li>
                <a href="/youth-leadership" className="text-sm text-white/80 hover:text-[#c9b037] transition-colors cursor-pointer">
                  Youth Leadership
                </a>
              </li>
              <li>
                <a href="/women-empowerment" className="text-sm text-white/80 hover:text-[#c9b037] transition-colors cursor-pointer">
                  Women Empowerment
                </a>
              </li>
              <li>
                <a href="/mental-health" className="text-sm text-white/80 hover:text-[#c9b037] transition-colors cursor-pointer">
                  Mental Health Support
                </a>
              </li>
              <li>
                <a href="/financial-literacy" className="text-sm text-white/80 hover:text-[#c9b037] transition-colors cursor-pointer">
                  Financial Literacy
                </a>
              </li>
              <li>
                <a href="/newcomers-settlement-program" className="text-sm text-white/80 hover:text-[#c9b037] transition-colors cursor-pointer">
                  Newcomers Settlement
                </a>
              </li>
              <li>
                <a href="/trainings" className="text-sm text-white/80 hover:text-[#c9b037] transition-colors cursor-pointer">
                  Training Programs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <i className="ri-map-pin-line text-[#c9b037] mt-1"></i>
                <span className="text-sm text-white/80">
                  1200 Markham Road, Unit 414<br />
                  Scarborough, ON M1H 3C3
                </span>
              </li>
              <li>
                <a href="tel:+16475815901" className="flex items-center gap-2 text-sm text-white/80 hover:text-[#c9b037] transition-colors cursor-pointer">
                  <i className="ri-phone-line text-[#c9b037]"></i>
                  647-581-5901
                </a>
              </li>
              <li>
                <a href="mailto:cawap2005@gmail.com" className="flex items-center gap-2 text-sm text-white/80 hover:text-[#c9b037] transition-colors cursor-pointer">
                  <i className="ri-mail-line text-[#c9b037]"></i>
                  cawap2005@gmail.com
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3">Follow Us</h5>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/cawapcommunity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-[#c9b037] rounded-full transition-all duration-300 cursor-pointer"
                  aria-label="Facebook"
                >
                  <i className="ri-facebook-fill text-lg"></i>
                </a>
                <a
                  href="https://www.instagram.com/cawapcanada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-[#c9b037] rounded-full transition-all duration-300 cursor-pointer"
                  aria-label="Instagram"
                >
                  <i className="ri-instagram-line text-lg"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/cawapcanada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-[#c9b037] rounded-full transition-all duration-300 cursor-pointer"
                  aria-label="LinkedIn"
                >
                  <i className="ri-linkedin-fill text-lg"></i>
                </a>
                <a
                  href="https://www.tiktok.com/@aunty.irine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-[#c9b037] rounded-full transition-all duration-300 cursor-pointer"
                  aria-label="TikTok"
                >
                  <i className="ri-tiktok-fill text-lg"></i>
                </a>
                <a
                  href="https://www.youtube.com/@CAWAP-Canada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-[#c9b037] rounded-full transition-all duration-300 cursor-pointer"
                  aria-label="YouTube"
                >
                  <i className="ri-youtube-fill text-lg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60 text-center md:text-left">
              © {currentYear} C.A.W.A.P. All rights reserved. | Charitable Registration: 84865 2740 RR0001
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://readdy.ai/?ref=logo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/60 hover:text-[#c9b037] transition-colors cursor-pointer"
              >
                Website Builder
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
