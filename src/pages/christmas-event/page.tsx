import ScrollReveal from '../../components/effects/ScrollReveal';
import ParallaxSection from '../../components/effects/ParallaxSection';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import DonationCTA from '../../components/feature/DonationCTA';

const ChristmasEventPage = () => {
  const eventHighlights = [
    {
      icon: "ri-gift-line",
      title: "Gift Distribution",
      description: "Toys and gifts for children from families in need, spreading joy and creating magical memories"
    },
    {
      icon: "ri-restaurant-line",
      title: "Community Feast",
      description: "Delicious holiday meal featuring traditional dishes from diverse cultures in our community"
    },
    {
      icon: "ri-music-line",
      title: "Live Entertainment",
      description: "Festive performances including carol singing, cultural dances, and live music"
    },
    {
      icon: "ri-cake-line",
      title: "Holiday Activities",
      description: "Face painting, crafts, games, and photos with Santa for the whole family"
    },
    {
      icon: "ri-hand-heart-line",
      title: "Community Support",
      description: "Food hampers and winter essentials for families facing hardship this season"
    },
    {
      icon: "ri-team-line",
      title: "Volunteer Opportunities",
      description: "Join our team of volunteers and help make this event special for everyone"
    }
  ];

  const schedule = [
    { time: "10:00 AM", activity: "Doors Open & Registration" },
    { time: "10:30 AM", activity: "Welcome Address & Opening Prayer" },
    { time: "11:00 AM", activity: "Children's Activities & Face Painting Begin" },
    { time: "12:00 PM", activity: "Community Feast Served" },
    { time: "1:00 PM", activity: "Cultural Performances & Carol Singing" },
    { time: "2:00 PM", activity: "Santa's Arrival & Gift Distribution" },
    { time: "3:00 PM", activity: "Photos with Santa" },
    { time: "4:00 PM", activity: "Closing Remarks & Prize Draws" },
    { time: "4:30 PM", activity: "Event Concludes" }
  ];

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
                src="https://readdy.ai/api/search-image?query=warm%20festive%20Christmas%20community%20celebration%20with%20diverse%20families%20gathering%20together%20in%20decorated%20hall%2C%20golden%20and%20purple%20holiday%20lights%20creating%20magical%20atmosphere%2C%20joyful%20people%20celebrating%20with%20gifts%20and%20decorations%2C%20professional%20event%20photography%20showing%20unity%20and%20holiday%20spirit&width=1920&height=800&seq=christmas-hero&orientation=landscape"
                alt="Christmas Event"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#3c1053]/80 to-[#5a1a7a]/80"></div>
            </div>

            <div className="relative z-10 text-center text-white px-4">
              <ScrollReveal direction="fade">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">CAWAP Christmas Celebration</h1>
                <p className="text-2xl md:text-3xl mb-8 font-light">Spreading Joy, Love & Community Spirit</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <div className="flex items-center text-xl">
                    <i className="ri-calendar-line text-[#c9b037] mr-3 text-2xl w-8 h-8 flex items-center justify-center"></i>
                    <span className="font-bold">December 20, 2024</span>
                  </div>
                  <div className="flex items-center text-xl">
                    <i className="ri-time-line text-[#c9b037] mr-3 text-2xl w-8 h-8 flex items-center justify-center"></i>
                    <span className="font-bold">10:00 AM - 4:30 PM</span>
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
              <h2 className="text-4xl md:text-5xl font-bold text-[#3c1053] mb-6">Join Us for a Magical Celebration</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                CAWAP invites you and your family to our annual Christmas celebration! This special event brings our community together to celebrate the season of giving, share in the joy of the holidays, and support families in need. Experience the warmth of community, enjoy delicious food, entertainment, and create lasting memories with your loved ones.
              </p>
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
              <h2 className="text-4xl font-bold text-[#3c1053] text-center mb-12">Event Schedule</h2>
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
                <h2 className="text-4xl font-bold text-[#3c1053] mb-6">Event Location</h2>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <i className="ri-map-pin-line text-[#c9b037] mr-4 text-2xl w-8 h-8 flex items-center justify-center mt-1"></i>
                    <div>
                      <p className="font-bold text-lg text-gray-800">CAWAP Community Center</p>
                      <p className="text-gray-600">101 West Dr Unit C2</p>
                      <p className="text-gray-600">Brampton, ON L6T 2J6</p>
                      <p className="text-gray-600">Canada</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-phone-line text-[#c9b037] mr-4 text-2xl w-8 h-8 flex items-center justify-center"></i>
                    <p className="text-gray-800 font-medium">647-581-5901</p>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-mail-line text-[#c9b037] mr-4 text-2xl w-8 h-8 flex items-center justify-center"></i>
                    <p className="text-gray-800 font-medium">info@cawap.ca</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-[#c9b037]/10 to-[#3c1053]/10 p-6 rounded-xl border-l-4 border-[#c9b037]">
                  <h3 className="font-bold text-lg text-[#3c1053] mb-2">Important Information</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-line text-[#c9b037] mr-2 mt-1 w-5 h-5 flex items-center justify-center"></i>
                      <span>Free admission for all community members</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-line text-[#c9b037] mr-2 mt-1 w-5 h-5 flex items-center justify-center"></i>
                      <span>Registration recommended but not required</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-line text-[#c9b037] mr-2 mt-1 w-5 h-5 flex items-center justify-center"></i>
                      <span>Bring your family and friends</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-checkbox-circle-line text-[#c9b037] mr-2 mt-1 w-5 h-5 flex items-center justify-center"></i>
                      <span>Parking available on-site</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-[#3c1053] mb-6">Register Your Family</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9b037] transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9b037] transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9b037] transition-all duration-300"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Number of Attendees *</label>
                    <input
                      type="number"
                      min="1"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9b037] transition-all duration-300"
                      placeholder="How many people will attend?"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Number of Children</label>
                    <input
                      type="number"
                      min="0"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9b037] transition-all duration-300"
                      placeholder="Number of children attending"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#3c1053] to-[#5a1a7a] text-white py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 elite-btn glow-effect whitespace-nowrap cursor-pointer"
                  >
                    Register Now
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
              src="https://readdy.ai/api/search-image?query=diverse%20volunteers%20working%20together%20preparing%20Christmas%20gifts%20and%20decorations%20for%20community%20event%2C%20warm%20collaborative%20atmosphere%20with%20golden%20lighting%2C%20people%20smiling%20and%20helping%20each%20other%2C%20spirit%20of%20giving%20and%20community%20service&width=1920&height=600&seq=volunteer-cta&orientation=landscape"
              alt="Volunteer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#3c1053]/80 to-[#5a1a7a]/80"></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <ScrollReveal direction="fade">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Volunteer with Us
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Help make this Christmas special for families in our community. We need volunteers for setup, serving food, activities coordination, and more. Join our team and spread the holiday cheer!
              </p>
              <button className="bg-[#c9b037] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#b39f2f] transition-all duration-300 elite-btn glow-effect whitespace-nowrap cursor-pointer">
                Sign Up to Volunteer
              </button>
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
