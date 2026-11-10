// ========================================
// IMPORTS - Bringing in tools we need
// ========================================
import { useState, FormEvent } from 'react'; // React hooks for managing form state
import ScrollReveal from '../../components/effects/ScrollReveal';
import ParallaxSection from '../../components/effects/ParallaxSection';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import DonationCTA from '../../components/feature/DonationCTA';
import { useSupabaseSubmit } from '../../hooks/useSupabaseSubmit';
import copy from '../../content/pages/christmas-event.json';
// Text, images and links: src/content/pages/christmas-event.json (editable in the website editors). // Our custom hook for saving to Supabase

const ChristmasEventPage = () => {
  // ========================================
  // FORM STATE MANAGEMENT
  // ========================================
  // These variables store what the user types in each field
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [attendees, setAttendees] = useState('');
  const [children, setChildren] = useState('');

  // Get the Supabase submission function from our custom hook
  // This handles all the database saving logic for us
  const { submitToSupabase, submitting, success, error } = useSupabaseSubmit();

  // ========================================
  // FORM SUBMISSION HANDLER
  // ========================================
  /**
   * This function runs when user clicks "Register Now"
   * It collects all form data and sends it to Supabase
   */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    // STEP 1: Stop the form from refreshing the page (default browser behavior)
    e.preventDefault();

    // STEP 2: Prepare the data object
    // This matches the columns in your "event_registrations" table
    const registrationData = {
      event_name: 'Christmas Celebration 2024', // Which event they're registering for
      full_name: fullName,                      // Their name
      email: email,                             // Their email
      phone: phone,                             // Their phone number
      number_of_attendees: parseInt(attendees) || 1, // Convert text to number
      number_of_children: parseInt(children) || 0,   // Convert text to number
      registration_date: new Date().toISOString()    // Current date/time
    };

    // STEP 3: Send to Supabase
    // The hook handles success/error messages automatically
    const result = await submitToSupabase('event_registrations', registrationData);

    // STEP 4: Clear the form if successful
    if (result) {
      setFullName('');
      setEmail('');
      setPhone('');
      setAttendees('');
      setChildren('');
    }
  };

  const eventHighlights = copy.eventHighlights;

  const schedule = copy.schedule;

  return (
    <div className="min-h-screen page-transition">
      <Header />
      <main>
        {/* Hero Section */}
        <ParallaxSection speed={0.5}>
          <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={copy.backgroundImage.image}
                alt={copy.backgroundImage.imageAlt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#3c1053]/80 to-[#5a1a7a]/80"></div>
            </div>

            <div className="relative z-10 text-center text-white px-4">
              <ScrollReveal direction="fade">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">{copy.backgroundImage.title}</h1>
                <p className="text-2xl md:text-3xl mb-8 font-light">{copy.backgroundImage.text}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <div className="flex items-center text-xl">
                    <i className="ri-calendar-line text-[#c9b037] mr-3 text-2xl w-8 h-8 flex items-center justify-center"></i>
                    <span className="font-bold">{copy.backgroundImage.label}</span>
                  </div>
                  <div className="flex items-center text-xl">
                    <i className="ri-time-line text-[#c9b037] mr-3 text-2xl w-8 h-8 flex items-center justify-center"></i>
                    <span className="font-bold">{copy.backgroundImage.label2}</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>
        </ParallaxSection>

        {/* Event Overview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <ScrollReveal direction="fade">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#3c1053] mb-6">{copy.eventOverview.heading}</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">{copy.eventOverview.text}</p>
            </div>
          </ScrollReveal>

          {/* Event Highlights */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {eventHighlights.map((highlight, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 elite-card group text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#3c1053] to-[#5a1a7a] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className={`${highlight.icon} text-4xl text-[#c9b037]`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-[#3c1053] mb-3">{highlight.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Event Schedule */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="fade">
              <h2 className="text-4xl font-bold text-[#3c1053] text-center mb-12">{copy.eventSchedule.heading}</h2>
            </ScrollReveal>

            <div className="space-y-4">
              {schedule.map((item, index) => (
                <ScrollReveal key={index} direction="right" delay={index * 0.05}>
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-6 elite-card">
                    <div className="bg-gradient-to-br from-[#3c1053] to-[#5a1a7a] text-white px-6 py-3 rounded-lg font-bold text-lg whitespace-nowrap">
                      {item.time}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-800 font-medium text-lg">{item.activity}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Location & Registration */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-4xl font-bold text-[#3c1053] mb-6">{copy.locationAndRegistration.heading}</h2>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <i className="ri-map-pin-line text-[#c9b037] mr-4 text-2xl w-8 h-8 flex items-center justify-center mt-1"></i>
                    <div>
                      <p className="font-bold text-lg text-gray-800">{copy.locationAndRegistration.text}</p>
                      <p className="text-gray-600">{copy.locationAndRegistration.text2}</p>
                      <p className="text-gray-600">{copy.locationAndRegistration.text3}</p>
                      <p className="text-gray-600">{copy.locationAndRegistration.text4}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-phone-line text-[#c9b037] mr-4 text-2xl w-8 h-8 flex items-center justify-center"></i>
                    <p className="text-gray-800 font-medium">{copy.locationAndRegistration.text5}</p>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-mail-line text-[#c9b037] mr-4 text-2xl w-8 h-8 flex items-center justify-center"></i>
                    <p className="text-gray-800 font-medium">{copy.locationAndRegistration.text6}</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-[#c9b037]/10 to-[#3c1053]/10 p-6 rounded-xl border-l-4 border-[#c9b037]">
                  <h3 className="font-bold text-lg text-[#3c1053] mb-2">{copy.locationAndRegistration.subheading}</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-line text-[#c9b037] mr-2 mt-1 w-5 h-5 flex items-center justify-center"></i>
                      <span>{copy.locationAndRegistration.label}</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-line text-[#c9b037] mr-2 mt-1 w-5 h-5 flex items-center justify-center"></i>
                      <span>{copy.locationAndRegistration.label2}</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-line text-[#c9b037] mr-2 mt-1 w-5 h-5 flex items-center justify-center"></i>
                      <span>{copy.locationAndRegistration.label3}</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-line text-[#c9b037] mr-2 mt-1 w-5 h-5 flex items-center justify-center"></i>
                      <span>{copy.locationAndRegistration.label4}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-[#3c1053] mb-6">{copy.locationAndRegistration.subheading2}</h3>
                
                {/* SUCCESS MESSAGE - Shows when registration is saved */}
                {success && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-medium">{copy.successMessageShowsWhenRegistration.text}</p>
                  </div>
                )}

                {/* ERROR MESSAGE - Shows if something goes wrong */}
                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 font-medium">❌ {error}</p>
                  </div>
                )}

                {/* THE REGISTRATION FORM */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">{copy.theRegistrationForm.fieldLabel}</label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9b037] transition-all duration-300"
                      placeholder={copy.theRegistrationForm.placeholder}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">{copy.theRegistrationForm.fieldLabel2}</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9b037] transition-all duration-300"
                      placeholder={copy.theRegistrationForm.placeholder2}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">{copy.theRegistrationForm.fieldLabel3}</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9b037] transition-all duration-300"
                      placeholder={copy.theRegistrationForm.placeholder3}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">{copy.theRegistrationForm.fieldLabel4}</label>
                    <input
                      type="number"
                      min="1"
                      value={attendees}
                      onChange={(e) => setAttendees(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9b037] transition-all duration-300"
                      placeholder={copy.theRegistrationForm.placeholder4}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">{copy.theRegistrationForm.fieldLabel5}</label>
                    <input
                      type="number"
                      min="0"
                      value={children}
                      onChange={(e) => setChildren(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9b037] transition-all duration-300"
                      placeholder={copy.theRegistrationForm.placeholder5}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-gradient-to-r from-[#3c1053] to-[#5a1a7a] text-white py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 elite-btn glow-effect whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? 'Registering...' : 'Register Now'}
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Volunteer CTA */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={copy.volunteerCta.image}
              alt={copy.volunteerCta.imageAlt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#3c1053]/80 to-[#5a1a7a]/80"></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <ScrollReveal direction="fade">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{copy.volunteerCta.heading}</h2>
              <p className="text-lg text-white/90 mb-8">{copy.volunteerCta.text}</p>
              <button className="bg-[#c9b037] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#b39f2f] transition-all duration-300 elite-btn glow-effect whitespace-nowrap cursor-pointer">{copy.volunteerCta.button}</button>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <DonationCTA />
      <Footer />
    </div>
  );
};

export default ChristmasEventPage;
