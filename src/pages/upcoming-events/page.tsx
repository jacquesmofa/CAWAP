
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import ScrollReveal from '../../components/effects/ScrollReveal';

const UpcomingEventsPage = () => {
  // ========================================
  // UPCOMING EVENTS DATA
  // ========================================
  // Each event has a registration link (Google Form or internal page)
  // You can easily update these links when events change
  const upcomingEvents = [
    {
      id: 1,
      title: 'Christmas Celebration 2024',
      date: 'December 25, 2024',
      time: '2:00 PM - 6:00 PM',
      location: '101 West Dr Unit C2, Brampton, ON L6T 2J6',
      description: 'Join us for our annual Christmas celebration with food, music, and community fellowship.',
      image: 'https://readdy.ai/api/search-image?query=joyful%20christmas%20community%20celebration%20with%20diverse%20families%20enjoying%20festive%20decorations%20and%20holiday%20activities%2C%20warm%20indoor%20gathering%20with%20christmas%20tree%20and%20colorful%20lights%2C%20professional%20photography%20showing%20multicultural%20holiday%20celebration%2C%20african%20and%20caribbean%20families%20celebrating%20christmas%20together%20with%20food%20and%20music&width=600&height=400&seq=upcoming-christmas&orientation=landscape',
      category: 'Community',
      registrationLink: '/christmas-event', // Internal page
      registrationType: 'internal'
    },
    {
      id: 2,
      title: 'Youth Leadership Summit',
      date: 'January 15, 2025',
      time: '9:00 AM - 4:00 PM',
      location: 'Community Center, Brampton',
      description: 'Empowering young leaders with skills, mentorship, and networking opportunities.',
      image: 'https://readdy.ai/api/search-image?query=diverse%20youth%20leadership%20conference%20with%20teenagers%20engaged%20in%20workshop%20activities%2C%20inspiring%20young%20leaders%20learning%20skills%20in%20modern%20bright%20venue%2C%20professional%20photography%20showing%20youth%20empowerment%20and%20mentorship%2C%20african%20and%20caribbean%20youth%20participating%20in%20leadership%20training&width=600&height=400&seq=upcoming-youth-summit&orientation=landscape',
      category: 'Youth',
      registrationLink: 'https://docs.google.com/forms/d/e/YOUR_GOOGLE_FORM_ID/viewform', // Google Form
      registrationType: 'google-form'
    },
    {
      id: 3,
      title: 'Women Empowerment Workshop',
      date: 'February 8, 2025',
      time: '10:00 AM - 2:00 PM',
      location: 'CAWAP Office, Brampton',
      description: 'Professional development and networking for women entrepreneurs and professionals.',
      image: 'https://readdy.ai/api/search-image?query=professional%20women%20empowerment%20workshop%20with%20diverse%20women%20in%20business%20attire%20networking%20and%20learning%2C%20inspiring%20female%20leadership%20development%20seminar%2C%20professional%20photography%20showing%20women%20entrepreneurs%20and%20professionals%2C%20bright%20modern%20conference%20room%20with%20engaged%20participants&width=600&height=400&seq=upcoming-women-workshop&orientation=landscape',
      category: 'Women',
      registrationLink: 'https://docs.google.com/forms/d/e/YOUR_GOOGLE_FORM_ID/viewform', // Google Form
      registrationType: 'google-form'
    },
    {
      id: 4,
      title: 'Community Food Drive',
      date: 'March 20, 2025',
      time: '8:00 AM - 12:00 PM',
      location: 'Multiple Locations',
      description: 'Help us collect and distribute food to families in need. Volunteers welcome!',
      image: 'https://readdy.ai/api/search-image?query=community%20food%20drive%20volunteers%20collecting%20donations%20and%20organizing%20groceries%2C%20diverse%20volunteers%20working%20together%20at%20food%20bank%20collection%20event%2C%20professional%20photography%20showing%20charitable%20giving%20and%20community%20service%2C%20bright%20outdoor%20scene%20with%20donation%20boxes%20and%20fresh%20produce&width=600&height=400&seq=upcoming-food-drive&orientation=landscape',
      category: 'Community',
      registrationLink: 'https://docs.google.com/forms/d/e/YOUR_GOOGLE_FORM_ID/viewform', // Google Form
      registrationType: 'google-form'
    },
    {
      id: 5,
      title: 'Cultural Heritage Festival',
      date: 'April 12, 2025',
      time: '12:00 PM - 8:00 PM',
      location: 'Brampton City Park',
      description: 'Celebrate African and Caribbean culture with music, dance, food, and traditional performances.',
      image: 'https://readdy.ai/api/search-image?query=vibrant%20african%20caribbean%20cultural%20festival%20with%20traditional%20dancers%20in%20colorful%20costumes%2C%20outdoor%20celebration%20with%20music%20food%20and%20cultural%20performances%2C%20professional%20photography%20showing%20multicultural%20heritage%20celebration%2C%20energetic%20festival%20atmosphere%20with%20diverse%20community%20enjoying%20traditions&width=600&height=400&seq=upcoming-cultural-festival&orientation=landscape',
      category: 'Cultural',
      registrationLink: 'https://docs.google.com/forms/d/e/YOUR_GOOGLE_FORM_ID/viewform', // Google Form
      registrationType: 'google-form'
    },
    {
      id: 6,
      title: 'Financial Literacy Seminar',
      date: 'May 5, 2025',
      time: '6:00 PM - 8:30 PM',
      location: 'CAWAP Office, Brampton',
      description: 'Learn budgeting, saving, investing, and financial planning strategies.',
      image: 'https://readdy.ai/api/search-image?query=financial%20literacy%20seminar%20with%20diverse%20adults%20learning%20money%20management%20skills%2C%20professional%20instructor%20teaching%20budgeting%20and%20investing%20strategies%2C%20professional%20photography%20showing%20financial%20education%20workshop%2C%20bright%20modern%20classroom%20with%20engaged%20participants%20taking%20notes&width=600&height=400&seq=upcoming-financial-seminar&orientation=landscape',
      category: 'Education',
      registrationLink: 'https://docs.google.com/forms/d/e/YOUR_GOOGLE_FORM_ID/viewform', // Google Form
      registrationType: 'google-form'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=exciting%20upcoming%20community%20events%20calendar%20with%20diverse%20people%20planning%20activities%2C%20vibrant%20event%20planning%20atmosphere%20with%20colorful%20decorations%20and%20schedules%2C%20professional%20photography%20showing%20community%20engagement%20and%20anticipation%2C%20bright%20modern%20space%20with%20event%20posters%20and%20enthusiastic%20volunteers&width=1920&height=400&seq=upcoming-events-hero&orientation=landscape')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#26194f]/80 via-[#26194f]/60 to-[#26194f]/80" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Upcoming Events</h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Join us for exciting programs and community gatherings. Register today!
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <ScrollReveal key={event.id} delay={index * 0.1}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group">
                  {/* Event Image */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-[#26194f] text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {event.category}
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{event.title}</h3>
                    
                    {/* Date & Time */}
                    <div className="flex items-start gap-3 mb-3">
                      <i className="ri-calendar-line text-[#8e24aa] text-xl mt-1"></i>
                      <div>
                        <p className="text-gray-700 font-semibold">{event.date}</p>
                        <p className="text-gray-600 text-sm">{event.time}</p>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-3 mb-4">
                      <i className="ri-map-pin-line text-[#8e24aa] text-xl mt-1"></i>
                      <p className="text-gray-600 text-sm">{event.location}</p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {event.description}
                    </p>

                    {/* ========================================
                        REGISTRATION BUTTON
                        ========================================
                        This is the KEY part that makes registration obvious!
                        - Large, colorful button
                        - Clear "Register Now" text
                        - Icon for visual appeal
                        - Different styles for Google Forms vs internal pages
                        ======================================== */}
                    {event.registrationType === 'google-form' ? (
                      // Google Form Registration - Opens in new tab
                      <a
                        href={event.registrationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-[#26194f] to-[#8e24aa] text-white px-6 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
                      >
                        <i className="ri-external-link-line text-2xl"></i>
                        <span>Register Now (Google Form)</span>
                      </a>
                    ) : (
                      // Internal Page Registration
                      <a
                        href={event.registrationLink}
                        className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-[#26194f] to-[#8e24aa] text-white px-6 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
                      >
                        <i className="ri-arrow-right-circle-line text-2xl"></i>
                        <span>Register Now</span>
                      </a>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          HOW TO UPDATE EVENT REGISTRATION LINKS
          ========================================
          
          STEP 1: Get Your Google Form Link
          - Go to your Google Form
          - Click "Send" button
          - Copy the link (looks like: https://docs.google.com/forms/d/e/ABC123/viewform)
          
          STEP 2: Update the Event Above
          - Find the event in the upcomingEvents array
          - Replace the registrationLink with your Google Form URL
          - Make sure registrationType is set to 'google-form'
          
          EXAMPLE:
          {
            id: 2,
            title: 'Youth Leadership Summit',
            registrationLink: 'https://docs.google.com/forms/d/e/YOUR_ACTUAL_FORM_ID/viewform',
            registrationType: 'google-form'
          }
          
          That's it! The button will automatically show "Register Now (Google Form)"
          and open in a new tab when clicked.
          ======================================== */}

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-[#26194f] to-[#8e24aa]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <ScrollReveal>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
              <i className="ri-calendar-check-line text-6xl text-white mb-6 inline-block"></i>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Don't Miss Out!
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Register early to secure your spot. Spaces are limited for most events.
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-[#26194f] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 whitespace-nowrap cursor-pointer text-lg"
              >
                Contact Us for More Info
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UpcomingEventsPage;
