import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import DonationCTA from '../../components/feature/DonationCTA';
import ScrollReveal from '../../components/effects/ScrollReveal';
import copy from '../../content/pages/contact.json';
// Text, images and links: src/content/pages/contact.json (editable in the website editors).

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen page-transition">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${copy.heroSection.backgroundImage}')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{copy.heroSection.title}</h1>
          <p className="text-xl text-white/90">{copy.heroSection.text}</p>
        </div>
      </section>

      <main>
        {/* Contact Content */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <ScrollReveal direction="left">
                <div className="elite-card bg-white p-10 rounded-2xl shadow-lg">
                  <h2 className="text-4xl font-bold text-[#3c1053] mb-6 gradient-text">{copy.contactInformation.heading}</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#3c1053] to-[#c9b037] mb-8"></div>
                  <p className="text-lg text-gray-600 mb-10 leading-relaxed">{copy.contactInformation.text}</p>

                  <div className="space-y-8">
                    <div className="flex items-start gap-6 group">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#3c1053] to-[#5a1a7a] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <i className="ri-map-pin-line text-white text-2xl"></i>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#3c1053] mb-2">{copy.contactInformation.subheading}</h3>
                        <p className="text-gray-600 leading-relaxed">{copy.contactInformation.text2}<br />{copy.contactInformation.text3}<br />{copy.contactInformation.text4}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-6 group">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#c9b037] to-[#d4c050] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <i className="ri-phone-line text-white text-2xl"></i>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#3c1053] mb-2">{copy.contactInformation.subheading2}</h3>
                        <a href={copy.contactInformation.phoneLink} className="text-gray-600 hover:text-[#c9b037] transition-colors text-lg">{copy.contactInformation.link}</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-6 group">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#3c1053] to-[#5a1a7a] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <i className="ri-mail-line text-white text-2xl"></i>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#3c1053] mb-2">{copy.contactInformation.subheading3}</h3>
                        <a href={copy.contactInformation.emailLink} className="text-gray-600 hover:text-[#c9b037] transition-colors text-lg">{copy.contactInformation.link2}</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-6 group">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#c9b037] to-[#d4c050] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <i className="ri-time-line text-white text-2xl"></i>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#3c1053] mb-2">{copy.contactInformation.subheading4}</h3>
                        <div className="text-gray-600 space-y-1">
                          <p>{copy.contactInformation.text5}</p>
                          <p>{copy.contactInformation.text6}</p>
                          <p>{copy.contactInformation.text7}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social Media Links */}
                  <div className="mt-10 pt-8 border-t border-gray-200">
                    <h3 className="text-xl font-bold text-[#3c1053] mb-4">{copy.socialMediaLinks.subheading}</h3>
                    <div className="flex gap-4">
                      <a
                        href={copy.socialMediaLinks.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gradient-to-br from-[#3c1053] to-[#5a1a7a] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"
                      >
                        <i className="ri-facebook-fill text-white text-xl"></i>
                      </a>
                      <a
                        href={copy.socialMediaLinks.url2}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gradient-to-br from-[#3c1053] to-[#5a1a7a] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"
                      >
                        <i className="ri-twitter-fill text-white text-xl"></i>
                      </a>
                      <a
                        href={copy.socialMediaLinks.url3}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gradient-to-br from-[#3c1053] to-[#5a1a7a] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"
                      >
                        <i className="ri-instagram-fill text-white text-xl"></i>
                      </a>
                      <a
                        href={copy.socialMediaLinks.url4}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gradient-to-br from-[#3c1053] to-[#5a1a7a] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"
                      >
                        <i className="ri-linkedin-fill text-white text-xl"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Contact Form */}
              <ScrollReveal direction="right">
                <div className="elite-card bg-white p-10 rounded-2xl shadow-lg">
                  <h2 className="text-4xl font-bold text-[#3c1053] mb-6">{copy.contactForm.heading}</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#3c1053] to-[#c9b037] mb-8"></div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">{copy.contactForm.fieldLabel}</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c9b037] focus:border-transparent transition-all text-sm"
                        placeholder={copy.contactForm.placeholder}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">{copy.contactForm.fieldLabel2}</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c9b037] focus:border-transparent transition-all text-sm"
                        placeholder={copy.contactForm.placeholder2}
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">{copy.contactForm.fieldLabel3}</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c9b037] focus:border-transparent transition-all text-sm"
                        placeholder={copy.contactForm.placeholder3}
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">{copy.contactForm.fieldLabel4}</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c9b037] focus:border-transparent transition-all text-sm"
                        placeholder={copy.contactForm.placeholder4}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">{copy.contactForm.fieldLabel5}</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c9b037] focus:border-transparent transition-all text-sm resize-none"
                        placeholder={copy.contactForm.placeholder5}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#3c1053] to-[#5a1a7a] text-white font-semibold py-4 px-8 rounded-lg hover:from-[#5a1a7a] hover:to-[#3c1053] transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <i className="ri-send-plane-fill"></i>{copy.contactForm.label}</span>
                    </button>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-[#3c1053] mb-4">{copy.mapSection.heading}</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#3c1053] to-[#c9b037] mx-auto mb-6"></div>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">{copy.mapSection.text}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src={copy.mapSection.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={copy.mapSection.title}
                ></iframe>
              </div>
            </ScrollReveal>

            {/* Directions */}
            <ScrollReveal>
              <div className="mt-12 grid md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#3c1053] to-[#5a1a7a] rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-car-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-[#3c1053] mb-2">{copy.directions.subheading}</h3>
                  <p className="text-gray-600 text-sm">{copy.directions.text}</p>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#c9b037] to-[#d4c050] rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-bus-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-[#3c1053] mb-2">{copy.directions.subheading2}</h3>
                  <p className="text-gray-600 text-sm">{copy.directions.text2}</p>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#3c1053] to-[#5a1a7a] rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-wheelchair-line text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-[#3c1053] mb-2">{copy.directions.subheading3}</h3>
                  <p className="text-gray-600 text-sm">{copy.directions.text3}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <DonationCTA />
      <Footer />
    </div>
  );
};

export default ContactPage;
