
import { useState, useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import DonationCTA from '../../components/feature/DonationCTA';
import ScrollReveal from '../../components/effects/ScrollReveal';

const HeartWiseSeniorsPage = () => {
  // Auto-scrolling carousel state
  const [currentSlide, setCurrentSlide] = useState(0);

  const seniorsDayImages = [
    {
      url: 'https://readdy.ai/api/search-image?query=elderly%20african%20seniors%20enjoying%20hot%20nutritious%20meal%20together%20at%20community%20center%2C%20warm%20inviting%20dining%20atmosphere%20with%20comfortable%20seating%2C%20diverse%20group%20of%20older%20adults%20sharing%20food%20and%20conversation%2C%20professional%20food%20service%20setting%20with%20dignity%20and%20respect%2C%20natural%20warm%20lighting%20creating%20welcoming%20mood&width=600&height=400&seq=seniors-meal-1&orientation=landscape',
      alt: 'Seniors enjoying hot meals together'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=volunteers%20serving%20hot%20food%20to%20happy%20elderly%20seniors%20at%20community%20food%20bank%2C%20warm%20caring%20atmosphere%20with%20smiling%20faces%2C%20diverse%20african%20caribbean%20seniors%20receiving%20meals%20with%20dignity%2C%20professional%20community%20kitchen%20setting%2C%20bright%20welcoming%20environment%20showing%20compassion%20and%20care&width=600&height=400&seq=seniors-meal-2&orientation=landscape',
      alt: 'Volunteers serving seniors'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=elderly%20seniors%20socializing%20and%20eating%20together%20at%20community%20center%20lunch%20program%2C%20diverse%20group%20of%20african%20caribbean%20older%20adults%20enjoying%20fellowship%2C%20warm%20comfortable%20dining%20space%20with%20natural%20lighting%2C%20seniors%20laughing%20and%20connecting%20over%20shared%20meal%2C%20dignified%20caring%20atmosphere&width=600&height=400&seq=seniors-meal-3&orientation=landscape',
      alt: 'Seniors socializing during meal time'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=food%20bank%20distribution%20for%20elderly%20seniors%20with%20fresh%20groceries%20and%20produce%2C%20caring%20volunteers%20helping%20older%20adults%20with%20food%20packages%2C%20organized%20community%20pantry%20setting%20with%20dignity%20and%20respect%2C%20diverse%20african%20caribbean%20seniors%20receiving%20nutritious%20food%20items%2C%20warm%20welcoming%20atmosphere&width=600&height=400&seq=seniors-meal-4&orientation=landscape',
      alt: 'Food bank distribution for seniors'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=happy%20elderly%20african%20seniors%20receiving%20care%20packages%20at%20community%20center%2C%20warm%20intergenerational%20moment%20with%20volunteers%20and%20older%20adults%2C%20dignified%20food%20assistance%20program%20with%20fresh%20healthy%20items%2C%20bright%20welcoming%20community%20space%2C%20seniors%20expressing%20gratitude%20and%20joy&width=600&height=400&seq=seniors-meal-5&orientation=landscape',
      alt: 'Seniors receiving care packages'
    }
  ];

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % seniorsDayImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [seniorsDayImages.length]);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://readdy.ai/api/search-image?query=happy%20elderly%20african%20and%20caribbean%20seniors%20enjoying%20community%20activities%20together%20with%20warm%20smiles%2C%20bright%20welcoming%20senior%20center%20with%20comfortable%20atmosphere%2C%20professional%20photography%20showing%20respect%20dignity%20and%20care%20for%20elders%2C%20diverse%20group%20of%20older%20adults%20engaged%20in%20social%20activities%2C%20natural%20warm%20lighting%20creating%20joyful%20uplifting%20mood%2C%20modern%20accessible%20facility%20representing%20community%20support%20and%20intergenerational%20connection&width=1920&height=500&seq=heart-wise-seniors-hero&orientation=landscape')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
      </section>

      <main>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                  <i className="far fa-gem text-secondary text-3xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Creating a Haven for Our Seniors</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our unwavering commitment is to create a secure and inclusive haven for seniors, where meaningful connections flourish, vibrant social activities abound, and knowledge on significant subjects expands.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The Heart-Wise Seniors program recognizes the invaluable wisdom and experience of our senior community members. We provide a welcoming space where seniors can engage in social activities, continue learning, and maintain active, fulfilling lives.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Through our program, seniors have access to health and wellness activities, educational workshops, social events, and opportunities to share their knowledge and experiences with younger generations.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Program Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Social activities and community gatherings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Health and wellness programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Educational workshops and seminars</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Intergenerational mentorship opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Cultural and recreational activities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Heart Wise Seniors Day Section */}
        <ScrollReveal>
          <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full mb-4">
                    <i className="fas fa-heart text-secondary"></i>
                    <span className="text-secondary font-medium text-sm">Special Weekly Program</span>
                  </div>
                  <h2 className="text-4xl font-bold text-gray-800 mb-4">Heart Wise Seniors Day</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    With the increase in life challenges, the Seniors of our community are seriously in need. 
                    So we are bringing up the Heart Wise Seniors Day.
                  </p>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left - Info Cards */}
                  <div className="space-y-6">
                    {/* Schedule Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <i className="fas fa-calendar-day text-secondary text-2xl"></i>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-2">Every Tuesday</h3>
                          <p className="text-gray-600">
                            Join us weekly for a special day dedicated entirely to our beloved seniors.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Time Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <i className="fas fa-clock text-secondary text-2xl"></i>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-2">12:00 Noon - 2:00 PM</h3>
                          <p className="text-gray-600">
                            Two hours of nourishment, fellowship, and community support.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Services Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <i className="fas fa-utensils text-secondary text-2xl"></i>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-2">Hot Meals & Food Bank</h3>
                          <p className="text-gray-600">
                            Enjoy freshly prepared hot meals and access our food bank services — exclusively for seniors.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Highlight Box */}
                    <div className="bg-secondary/10 rounded-2xl p-6 border-2 border-secondary/20">
                      <div className="flex items-center gap-3 mb-3">
                        <i className="fas fa-star text-secondary text-xl"></i>
                        <h4 className="font-bold text-gray-800">For Seniors Only</h4>
                      </div>
                      <p className="text-gray-600 text-sm">
                        This special program is exclusively designed for our senior community members. 
                        Come experience warmth, care, and the joy of community.
                      </p>
                    </div>
                  </div>

                  {/* Right - Auto-Scrolling Image Carousel */}
                  <div className="relative">
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                      {/* Main Image Display */}
                      <div className="relative h-[400px] w-full">
                        {seniorsDayImages.map((image, index) => (
                          <div
                            key={index}
                            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                              index === currentSlide 
                                ? 'opacity-100 translate-x-0' 
                                : index < currentSlide 
                                  ? 'opacity-0 -translate-x-full' 
                                  : 'opacity-0 translate-x-full'
                            }`}
                          >
                            <img
                              src={image.url}
                              alt={image.alt}
                              className="w-full h-full object-cover object-top"
                            />
                            {/* Image Overlay with Caption */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                              <p className="text-white text-sm font-medium">{image.alt}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Slide Indicators */}
                      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
                        {seniorsDayImages.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                              index === currentSlide 
                                ? 'bg-white w-6' 
                                : 'bg-white/50 hover:bg-white/70'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl"></div>
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-amber-300/30 rounded-full blur-2xl"></div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12">
                  <p className="text-gray-600 mb-6">
                    Know a senior who could benefit from this program? Spread the word!
                  </p>
                  <a
                    href="tel:+16475815901"
                    className="inline-flex items-center gap-2 bg-amber-500 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-amber-600 transition-all whitespace-nowrap cursor-pointer shadow-lg hover:shadow-xl"
                  >
                    <i className="fas fa-phone-alt"></i>
                    Call Us: +1 (647) 581-5901
                  </a>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Get Involved Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <a
                href="tel:+16475815901"
                className="inline-block bg-secondary text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-opacity-90 transition-all whitespace-nowrap cursor-pointer"
              >
                Get Involved
              </a>
            </div>
          </div>
        </section>
      </main>
      <DonationCTA />
      <Footer />
    </div>
  );
};

export default HeartWiseSeniorsPage;
