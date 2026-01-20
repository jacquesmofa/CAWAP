import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import DonationCTA from '../../components/feature/DonationCTA';
import ScrollReveal from '../../components/effects/ScrollReveal';

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
            backgroundImage: "url('https://readdy.ai/api/search-image?query=welcoming%20community%20center%20reception%20desk%20with%20friendly%20staff%20ready%20to%20help%2C%20bright%20modern%20office%20space%20with%20warm%20inviting%20atmosphere%2C%20professional%20photography%20showing%20accessibility%20and%20support%2C%20clean%20organized%20environment%20with%20natural%20lighting%2C%20diverse%20people%20communicating%20and%20connecting%2C%20contemporary%20design%20representing%20openness%20and%20community%20engagement&width=1920&height=400&seq=contact-hero&orientation=landscape')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-white/90">We'd Love to Hear From You</p>
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
                  <h2 className="text-4xl font-bold text-[#3c1053] mb-6 gradient-text">Get In Touch</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#3c1053] to-[#c9b037] mb-8"></div>
                  <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                    We would love to hear from you. Please feel free to reach out to us with any questions, comments, or inquiries.
                  </p>

                  <div className="space-y-8">
                    <div className="flex items-start gap-6 group">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#3c1053] to-[#5a1a7a] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <i className="ri-map-pin-line text-white text-2xl"></i>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#3c1053] mb-2">Address</h3>
                        <p className="text-gray-600 leading-relaxed">
                          101 West Dr Unit 7<br />
                          Brampton, ON L6T 2J6<br />
                          Canada
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-6 group">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#c9b037] to-[#d4c050] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <i className="ri-phone-line text-white text-2xl"></i>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#3c1053] mb-2">Phone</h3>
                        <a href="tel:+16475815901" className="text-gray-600 hover:text-[#c9b037] transition-colors text-lg">
                          647-581-5901
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-6 group">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#3c1053] to-[#5a1a7a] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <i className="ri-mail-line text-white text-2xl"></i>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#3c1053] mb-2">Email</h3>
                        <a href="mailto:cawap2005@gmail.com" className="text-gray-600 hover:text-[#c9b037] transition-colors text-lg">
                          cawap2005@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="mt-10 pt-8 border-t border-gray-200">
                    <h3 className="text-xl font-bold text-[#3c1053] mb-6">Follow Us</h3>
                    <div className="flex gap-4">
                      <a
                        href="https://www.facebook.com/cawap.ca"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gradient-to-br from-[#3c1053] to-[#5a1a7a] rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 elite-btn text-white"
                        aria-label="Facebook"
                      >
                        <i className="ri-facebook-fill text-xl"></i>
                      </a>
                      <a
                        href="https://twitter.com/cawap_ca"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gradient-to-br from-[#c9b037] to-[#d4c050] rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 elite-btn text-white"
                        aria-label="Twitter"
                      >
                        <i className="ri-twitter-fill text-xl"></i>
                      </a>
                      <a
                        href="https://www.youtube.com/channel/UCxxxxxx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gradient-to-br from-[#3c1053] to-[#5a1a7a] rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 elite-btn text-white"
                        aria-label="Youtube"
                      >
                        <i className="ri-youtube-fill text-xl"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Contact Form */}
              <ScrollReveal direction="right">
                <div className="elite-card bg-white p-10 rounded-2xl shadow-lg">
                  <h2 className="text-4xl font-bold text-[#3c1053] mb-6 gradient-text">Send Us A Message</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#3c1053] to-[#c9b037] mb-8"></div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#c9b037] focus:border-transparent outline-none transition-all text-base"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#c9b037] focus:border-transparent outline-none transition-all text-base"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#c9b037] focus:border-transparent outline-none transition-all text-base"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#c9b037] focus:border-transparent outline-none transition-all text-base"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#c9b037] focus:border-transparent outline-none transition-all resize-none text-base"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#3c1053] to-[#5a1a7a] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 elite-btn glow-effect whitespace-nowrap"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </ScrollReveal>
            </div>

            {/* Map */}
            <ScrollReveal delay={200}>
              <div className="mt-20">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-[#3c1053] mb-4 gradient-text">Find Us</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#3c1053] to-[#c9b037] mx-auto"></div>
                </div>
                <div className="elite-card w-full h-[500px] bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.8234567890123!2d-79.7234567890123!3d43.7234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDQzJzI0LjQiTiA3OcKwNDMnMjQuNCJX!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="CAWAP Location"
                  ></iframe>
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
