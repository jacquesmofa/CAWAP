import { useMedia } from '../../context/MediaContext';
import site from '../../content/site.json';
import footer from '../../content/footer.json';

// Footer text and links: src/content/footer.json. Contact and social links: src/content/site.json.

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
                <h3 className="text-xl font-bold">{site.brandName}</h3>
                <p className="text-xs text-white/80">{site.tagline}</p>
              </div>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              {footer.about}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{footer.quickLinksTitle}</h4>
            <ul className="space-y-2">
              {footer.quickLinks.map((item) => (
                <li key={item.link}>
                  <a href={item.link} className="text-sm text-white/80 hover:text-[#c9b037] transition-colors cursor-pointer">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{footer.programsTitle}</h4>
            <ul className="space-y-2">
              {footer.programLinks.map((item) => (
                <li key={item.link}>
                  <a href={item.link} className="text-sm text-white/80 hover:text-[#c9b037] transition-colors cursor-pointer">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{footer.contactTitle}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <i className="ri-map-pin-line text-[#c9b037] mt-1"></i>
                <span className="text-sm text-white/80">
                  {site.contact.addressLine1}<br />
                  {site.contact.addressLine2}
                </span>
              </li>
              <li>
                <a href={`tel:${site.contact.phoneLink}`} className="flex items-center gap-2 text-sm text-white/80 hover:text-[#c9b037] transition-colors cursor-pointer">
                  <i className="ri-phone-line text-[#c9b037]"></i>
                  {site.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.contact.email}`} className="flex items-center gap-2 text-sm text-white/80 hover:text-[#c9b037] transition-colors cursor-pointer">
                  <i className="ri-mail-line text-[#c9b037]"></i>
                  {site.contact.email}
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3">{footer.followTitle}</h5>
              <div className="flex gap-3">
                {site.socials.map((social) => (
                  <a
                    key={social.url}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-[#c9b037] rounded-full transition-all duration-300 cursor-pointer"
                    aria-label={social.name}
                  >
                    <i className={`${social.icon} text-lg`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-sm text-white/60 text-center">
              © {currentYear} {footer.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
