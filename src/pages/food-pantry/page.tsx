import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import DonationCTA from '../../components/feature/DonationCTA';
import ScrollReveal from '../../components/effects/ScrollReveal';

const FoodPantryPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://readdy.ai/api/search-image?query=welcoming%20community%20food%20bank%20interior%20with%20organized%20shelves%20full%20of%20fresh%20produce%20vegetables%20fruits%20and%20nutritious%20groceries%2C%20bright%20clean%20modern%20space%20with%20volunteers%20helping%20diverse%20families%2C%20professional%20photography%20showing%20compassion%20dignity%20and%20hope%2C%20warm%20natural%20lighting%20creating%20caring%20supportive%20atmosphere%2C%20high%20quality%20image%20representing%20food%20security%20and%20community%20support%20programs&width=1920&height=600&seq=food-bank-hero-main&orientation=landscape')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 mx-auto">
            <i className="fas fa-shopping-basket text-5xl"></i>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">CAWAP Food Bank</h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Nourishing Our Community with Dignity, Compassion, and Hope
          </p>
          <a
            href="tel:+16475815901"
            className="inline-block bg-[#c9b037] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#b39f2f] transition-all whitespace-nowrap cursor-pointer shadow-2xl"
          >
            Get Food Assistance Today
          </a>
        </div>
      </section>

      <main>
        {/* Mission Statement */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <div className="w-16 h-16 bg-[#c9b037]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <i className="fas fa-heart text-[#c9b037] text-3xl"></i>
                  </div>
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission: No One Goes Hungry</h2>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                    At the Canadian and African Women Aid Program (CAWAP), we believe that access to nutritious food is a fundamental human right. Our Food Bank serves as a lifeline for families and individuals facing food insecurity, providing not just sustenance, but dignity, hope, and a pathway to stability.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <ScrollReveal>
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="https://readdy.ai/api/search-image?query=diverse%20volunteers%20organizing%20fresh%20vegetables%20fruits%20and%20healthy%20food%20donations%20in%20bright%20community%20food%20bank%2C%20people%20working%20together%20sorting%20nutritious%20groceries%2C%20professional%20photography%20showing%20teamwork%20compassion%20and%20community%20spirit%2C%20warm%20lighting%20creating%20welcoming%20supportive%20atmosphere&width=600&height=400&seq=food-bank-volunteers-1&orientation=landscape"
                      alt="Food Bank Volunteers"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </ScrollReveal>
                <ScrollReveal>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-800 mb-6">Why We Exist</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Food insecurity affects thousands of families in our community. Rising costs of living, unexpected job loss, medical emergencies, and systemic barriers can push anyone into a situation where they struggle to put food on the table.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      CAWAP Food Bank was established to bridge this gap, ensuring that every person in our community has access to fresh, nutritious food regardless of their circumstances. We serve with compassion, respect, and cultural sensitivity.
                    </p>
                    <div className="flex items-center gap-4 mt-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-[#c9b037]">500+</div>
                        <div className="text-sm text-gray-600">Families Served Monthly</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-[#c9b037]">15,000+</div>
                        <div className="text-sm text-gray-600">Meals Distributed</div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* What We Provide */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">What We Provide</h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Our Food Bank offers a comprehensive range of nutritious food options and support services to meet the diverse needs of our community members.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <ScrollReveal>
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="w-16 h-16 bg-[#c9b037]/10 rounded-full flex items-center justify-center mb-6">
                      <i className="fas fa-apple-alt text-[#c9b037] text-3xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Fresh Produce</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Weekly deliveries of fresh fruits, vegetables, and seasonal produce from local farms and partners.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <i className="fas fa-check-circle text-[#c9b037] mt-1"></i>
                        <span>Organic vegetables</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <i className="fas fa-check-circle text-[#c9b037] mt-1"></i>
                        <span>Fresh fruits</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <i className="fas fa-check-circle text-[#c9b037] mt-1"></i>
                        <span>Seasonal produce</span>
                      </li>
                    </ul>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="w-16 h-16 bg-[#c9b037]/10 rounded-full flex items-center justify-center mb-6">
                      <i className="fas fa-bread-slice text-[#c9b037] text-3xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Staple Foods</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Essential non-perishable items including grains, proteins, and pantry staples for balanced nutrition.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <i className="fas fa-check-circle text-[#c9b037] mt-1"></i>
                        <span>Rice, pasta, and grains</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <i className="fas fa-check-circle text-[#c9b037] mt-1"></i>
                        <span>Canned proteins</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <i className="fas fa-check-circle text-[#c9b037] mt-1"></i>
                        <span>Cooking oils and spices</span>
                      </li>
                    </ul>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="w-16 h-16 bg-[#c9b037]/10 rounded-full flex items-center justify-center mb-6">
                      <i className="fas fa-utensils text-[#c9b037] text-3xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Prepared Meals</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Hot, nutritious meals prepared with care and cultural sensitivity for immediate consumption.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <i className="fas fa-check-circle text-[#c9b037] mt-1"></i>
                        <span>Daily hot meals</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <i className="fas fa-check-circle text-[#c9b037] mt-1"></i>
                        <span>Culturally diverse options</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <i className="fas fa-check-circle text-[#c9b037] mt-1"></i>
                        <span>Dietary accommodations</span>
                      </li>
                    </ul>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="w-16 h-16 bg-[#c9b037]/10 rounded-full flex items-center justify-center mb-6">
                      <i className="fas fa-baby text-[#c9b037] text-3xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Baby & Child Nutrition</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Specialized nutrition support for infants, toddlers, and children to ensure healthy development.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <i className="fas fa-check-circle text-[#c9b037] mt-1"></i>
                        <span>Baby formula and food</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <i className="fas fa-check-circle text-[#c9b037] mt-1"></i>
                        <span>Diapers and wipes</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <i className="fas fa-check-circle text-[#c9b037] mt-1"></i>
                        <span>Children's snacks</span>
                      </li>
                    </ul>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="w-16 h-16 bg-[#c9b037]/10 rounded-full flex items-center justify-center mb-6">
                      <i className="fas fa-book-open text-[#c9b037] text-3xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Nutrition Education</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Workshops and resources to help families make the most of their food and develop healthy habits.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <i className="fas fa-check-circle text-[#c9b037] mt-1"></i>
                        <span>Cooking classes</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <i className="fas fa-check-circle text-[#c9b037] mt-1"></i>
                        <span>Meal planning tips</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <i className="fas fa-check-circle text-[#c9b037] mt-1"></i>
                        <span>Budget-friendly recipes</span>
                      </li>
                    </ul>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="w-16 h-16 bg-[#c9b037]/10 rounded-full flex items-center justify-center mb-6">
                      <i className="fas fa-hands-helping text-[#c9b037] text-3xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Emergency Support</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Immediate assistance for families facing urgent food crises with same-day service available.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <i className="fas fa-check-circle text-[#c9b037] mt-1"></i>
                        <span>Same-day assistance</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <i className="fas fa-check-circle text-[#c9b037] mt-1"></i>
                        <span>Crisis intervention</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <i className="fas fa-check-circle text-[#c9b037] mt-1"></i>
                        <span>Referral services</span>
                      </li>
                    </ul>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">See Our Food Bank in Action</h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Watch how we serve our community with dignity and compassion every day.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl mx-auto" style={{ maxWidth: '600px' }}>
                  <video
                    className="w-full h-auto"
                    controls
                    preload="metadata"
                  >
                    <source src="https://i.imgur.com/yOjIsCg.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-gradient-to-br from-[#3c1053]/5 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">How to Access Our Food Bank</h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Getting food assistance is simple, confidential, and respectful. Here's how it works:
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-4 gap-8">
                <ScrollReveal>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-[#c9b037] text-white rounded-full flex items-center justify-center mb-6 mx-auto text-3xl font-bold">
                      1
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Us</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Call us at <a href="tel:+16475815901" className="text-[#c9b037] font-semibold hover:underline">+1 (647) 581-5901</a> or visit our center during operating hours.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-[#c9b037] text-white rounded-full flex items-center justify-center mb-6 mx-auto text-3xl font-bold">
                      2
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Simple Registration</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Complete a brief, confidential registration form. No extensive documentation required.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-[#c9b037] text-white rounded-full flex items-center justify-center mb-6 mx-auto text-3xl font-bold">
                      3
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Choose Your Food</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Select items that meet your family's needs and dietary preferences with guidance from our staff.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-[#c9b037] text-white rounded-full flex items-center justify-center mb-6 mx-auto text-3xl font-bold">
                      4
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Take Home</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Leave with nutritious food and information about additional support services available.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Operating Hours & Location */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <ScrollReveal>
                  <div className="bg-gradient-to-br from-[#3c1053] to-[#5a1a7a] p-10 rounded-2xl text-white shadow-2xl">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                      <i className="fas fa-clock text-3xl"></i>
                    </div>
                    <h3 className="text-3xl font-bold mb-8">Operating Hours</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-4 border-b border-white/20">
                        <span className="font-semibold">Monday - Friday</span>
                        <span>9:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center pb-4 border-b border-white/20">
                        <span className="font-semibold">Saturday</span>
                        <span>10:00 AM - 3:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center pb-4 border-b border-white/20">
                        <span className="font-semibold">Sunday</span>
                        <span>Closed</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Emergency Line</span>
                        <span>24/7 Available</span>
                      </div>
                    </div>
                    <div className="mt-8 p-4 bg-white/10 rounded-lg">
                      <p className="text-sm">
                        <i className="fas fa-info-circle mr-2"></i>
                        Special holiday hours may apply. Please call ahead to confirm.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div>
                    <div className="w-16 h-16 bg-[#c9b037]/10 rounded-full flex items-center justify-center mb-6">
                      <i className="fas fa-map-marker-alt text-[#c9b037] text-3xl"></i>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-6">Visit Us</h3>
                    <div className="space-y-6 mb-8">
                      <div className="flex items-start gap-4">
                        <i className="fas fa-building text-[#c9b037] text-xl mt-1"></i>
                        <div>
                          <div className="font-semibold text-gray-800 mb-1">Address</div>
                          <div className="text-gray-600">
                            101 West Drive, Unit 7<br />
                            Brampton, ON L6T 5E9<br />
                            Canada
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <i className="fas fa-phone text-[#c9b037] text-xl mt-1"></i>
                        <div>
                          <div className="font-semibold text-gray-800 mb-1">Phone</div>
                          <a href="tel:+16475815901" className="text-gray-600 hover:text-[#c9b037]">
                            +1 (647) 581-5901
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <i className="fas fa-envelope text-[#c9b037] text-xl mt-1"></i>
                        <div>
                          <div className="font-semibold text-gray-800 mb-1">Email</div>
                          <a href="mailto:cawap2025@gmail.com" className="text-gray-600 hover:text-[#c9b037]">
                            cawap2025@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.8234567890123!2d-79.7234567890123!3d43.7234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDQzJzI0LjQiTiA3OcKwNDMnMjQuNCJX!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="CAWAP Food Bank Location"
                      ></iframe>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stories */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">Stories of Hope & Transformation</h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Real stories from community members whose lives have been touched by the CAWAP Food Bank.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-3 gap-8">
                <ScrollReveal>
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="relative w-24 h-24 mx-auto mb-6">
                      <img
                        src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20smiling%20African%20Canadian%20woman%20in%20her%2030s%20with%20warm%20expression%20showing%20gratitude%20and%20hope%2C%20bright%20natural%20lighting%2C%20high%20quality%20headshot%20representing%20community%20member%20success%20story&width=200&height=200&seq=food-bank-testimonial-1&orientation=squarish"
                        alt="Sarah M."
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="text-center mb-4">
                      <div className="text-[#c9b037] mb-2">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <p className="text-gray-600 italic leading-relaxed mb-4">
                        "When I lost my job, I didn't know how I would feed my children. CAWAP Food Bank not only provided us with nutritious food but treated us with such dignity and respect. They helped me get back on my feet."
                      </p>
                      <div className="font-semibold text-gray-800">Sarah M.</div>
                      <div className="text-sm text-gray-500">Single Mother of Three</div>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="relative w-24 h-24 mx-auto mb-6">
                      <img
                        src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20elderly%20African%20Canadian%20man%20in%20his%2060s%20with%20kind%20smile%20showing%20appreciation%20and%20dignity%2C%20warm%20natural%20lighting%2C%20high%20quality%20headshot%20representing%20senior%20community%20member&width=200&height=200&seq=food-bank-testimonial-2&orientation=squarish"
                        alt="James K."
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="text-center mb-4">
                      <div className="text-[#c9b037] mb-2">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <p className="text-gray-600 italic leading-relaxed mb-4">
                        "As a senior on a fixed income, the rising cost of food was overwhelming. The volunteers here are like family. They remember my dietary needs and always have a kind word."
                      </p>
                      <div className="font-semibold text-gray-800">James K.</div>
                      <div className="text-sm text-gray-500">Retired Senior</div>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="relative w-24 h-24 mx-auto mb-6">
                      <img
                        src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20young%20African%20Canadian%20woman%20in%20her%2020s%20with%20hopeful%20smile%20showing%20resilience%20and%20determination%2C%20bright%20natural%20lighting%2C%20high%20quality%20headshot%20representing%20newcomer%20success%20story&width=200&height=200&seq=food-bank-testimonial-3&orientation=squarish"
                        alt="Amina T."
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="text-center mb-4">
                      <div className="text-[#c9b037] mb-2">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <p className="text-gray-600 italic leading-relaxed mb-4">
                        "As a newcomer to Canada, finding culturally appropriate food was challenging. CAWAP understands our needs and provides food that feels like home. They've been a blessing to our family."
                      </p>
                      <div className="font-semibold text-gray-800">Amina T.</div>
                      <div className="text-sm text-gray-500">Newcomer Family</div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-20 bg-gradient-to-br from-[#3c1053] to-[#5a1a7a] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold mb-6">Our Impact by the Numbers</h2>
                  <p className="text-lg text-white/90 max-w-3xl mx-auto">
                    Every number represents a family fed, a child nourished, and hope restored.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-4 gap-8">
                <ScrollReveal>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-[#c9b037] mb-3">500+</div>
                    <div className="text-lg">Families Served Monthly</div>
                  </div>
                </ScrollReveal>
                <ScrollReveal>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-[#c9b037] mb-3">15,000+</div>
                    <div className="text-lg">Meals Distributed</div>
                  </div>
                </ScrollReveal>
                <ScrollReveal>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-[#c9b037] mb-3">50+</div>
                    <div className="text-lg">Volunteers</div>
                  </div>
                </ScrollReveal>
                <ScrollReveal>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-[#c9b037] mb-3">100%</div>
                    <div className="text-lg">Dignity & Respect</div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* How to Help */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">How You Can Help</h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Your support makes it possible for us to serve our community. Here are ways you can make a difference:
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-3 gap-8">
                <ScrollReveal>
                  <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-300">
                    <div className="w-20 h-20 bg-[#c9b037]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                      <i className="fas fa-hand-holding-heart text-[#c9b037] text-4xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Donate Food</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Drop off non-perishable food items at our center. We especially need rice, pasta, canned proteins, and baby food.
                    </p>
                    <a
                      href="/contact"
                      className="inline-block bg-[#c9b037] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#b39f2f] transition-all whitespace-nowrap cursor-pointer"
                    >
                      Learn More
                    </a>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-300">
                    <div className="w-20 h-20 bg-[#c9b037]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                      <i className="fas fa-dollar-sign text-[#c9b037] text-4xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Make a Donation</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Financial contributions help us purchase fresh produce and maintain our operations. Every dollar counts.
                    </p>
                    <a
                      href="/donate"
                      className="inline-block bg-[#c9b037] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#b39f2f] transition-all whitespace-nowrap cursor-pointer"
                    >
                      Donate Now
                    </a>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-300">
                    <div className="w-20 h-20 bg-[#c9b037]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                      <i className="fas fa-users text-[#c9b037] text-4xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Volunteer</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Join our team of dedicated volunteers. Help sort food, serve clients, or assist with special events.
                    </p>
                    <a
                      href="/contact"
                      className="inline-block bg-[#c9b037] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#b39f2f] transition-all whitespace-nowrap cursor-pointer"
                    >
                      Get Involved
                    </a>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">Food Bank in Pictures</h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    A glimpse into our daily operations and the community we serve.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-3 gap-6">
                <ScrollReveal>
                  <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                    <img
                      src="https://readdy.ai/api/search-image?query=volunteers%20organizing%20fresh%20produce%20and%20vegetables%20on%20shelves%20in%20bright%20community%20food%20bank%2C%20diverse%20team%20working%20together%20sorting%20nutritious%20food%20donations%2C%20professional%20photography%20showing%20teamwork%20and%20community%20service&width=600&height=400&seq=food-bank-gallery-1&orientation=landscape"
                      alt="Volunteers organizing food"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                      <span className="text-white font-semibold">Volunteers at Work</span>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                    <img
                      src="https://readdy.ai/api/search-image?query=diverse%20families%20receiving%20fresh%20groceries%20and%20food%20assistance%20from%20caring%20volunteers%20in%20welcoming%20food%20bank%2C%20people%20smiling%20with%20gratitude%2C%20professional%20photography%20showing%20community%20support%20and%20dignity&width=600&height=400&seq=food-bank-gallery-2&orientation=landscape"
                      alt="Families receiving assistance"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                      <span className="text-white font-semibold">Serving Families</span>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                    <img
                      src="https://readdy.ai/api/search-image?query=shelves%20stocked%20with%20colorful%20fresh%20fruits%20vegetables%20and%20nutritious%20groceries%20in%20organized%20community%20food%20bank%2C%20abundance%20of%20healthy%20food%20options%2C%20professional%20photography%20showing%20food%20security%20and%20nutrition&width=600&height=400&seq=food-bank-gallery-3&orientation=landscape"
                      alt="Fresh produce available"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                      <span className="text-white font-semibold">Fresh Produce</span>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                    <img
                      src="https://readdy.ai/api/search-image?query=community%20cooking%20class%20with%20diverse%20participants%20learning%20healthy%20meal%20preparation%20in%20bright%20kitchen%2C%20instructor%20teaching%20nutrition%20and%20budget-friendly%20recipes%2C%20professional%20photography%20showing%20education%20and%20empowerment&width=600&height=400&seq=food-bank-gallery-4&orientation=landscape"
                      alt="Nutrition education workshop"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                      <span className="text-white font-semibold">Cooking Workshops</span>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                    <img
                      src="https://readdy.ai/api/search-image?query=volunteers%20packing%20food%20hampers%20and%20grocery%20bags%20for%20families%20in%20community%20food%20bank%2C%20organized%20distribution%20of%20nutritious%20food%20items%2C%20professional%20photography%20showing%20care%20and%20preparation&width=600&height=400&seq=food-bank-gallery-5&orientation=landscape"
                      alt="Packing food hampers"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                      <span className="text-white font-semibold">Food Distribution</span>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                    <img
                      src="https://readdy.ai/api/search-image?query=happy%20children%20and%20families%20at%20community%20food%20bank%20event%2C%20diverse%20people%20celebrating%20together%20with%20food%20and%20activities%2C%20professional%20photography%20showing%20joy%20community%20connection%20and%20hope&width=600&height=400&seq=food-bank-gallery-6&orientation=landscape"
                      alt="Community event"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                      <span className="text-white font-semibold">Community Events</span>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              <div className="text-center mt-12">
                <a
                  href="/gallery"
                  className="inline-block bg-[#c9b037] text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-[#b39f2f] transition-all whitespace-nowrap cursor-pointer"
                >
                  View Full Gallery
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
                  <p className="text-lg text-gray-600">
                    Common questions about accessing our Food Bank services.
                  </p>
                </div>
              </ScrollReveal>

              <div className="space-y-6">
                <ScrollReveal>
                  <div className="bg-gray-50 p-8 rounded-2xl">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-start gap-3">
                      <i className="fas fa-question-circle text-[#c9b037] mt-1"></i>
                      Who can access the Food Bank?
                    </h3>
                    <p className="text-gray-600 leading-relaxed ml-8">
                      Anyone in our community facing food insecurity can access our services. There are no strict eligibility requirements. We serve individuals, families, seniors, newcomers, and anyone in need with dignity and respect.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="bg-gray-50 p-8 rounded-2xl">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-start gap-3">
                      <i className="fas fa-question-circle text-[#c9b037] mt-1"></i>
                      How often can I visit the Food Bank?
                    </h3>
                    <p className="text-gray-600 leading-relaxed ml-8">
                      You can visit our Food Bank once per week. However, if you're facing an emergency situation, please contact us immediately and we'll do our best to provide additional support.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="bg-gray-50 p-8 rounded-2xl">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-start gap-3">
                      <i className="fas fa-question-circle text-[#c9b037] mt-1"></i>
                      What documents do I need to bring?
                    </h3>
                    <p className="text-gray-600 leading-relaxed ml-8">
                      For your first visit, please bring a piece of identification and proof of address (utility bill, lease agreement, etc.). We keep the process simple and confidential. If you don't have these documents, please still come in and speak with our staff.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="bg-gray-50 p-8 rounded-2xl">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-start gap-3">
                      <i className="fas fa-question-circle text-[#c9b037] mt-1"></i>
                      Do you accommodate dietary restrictions?
                    </h3>
                    <p className="text-gray-600 leading-relaxed ml-8">
                      Yes! We strive to accommodate various dietary needs including vegetarian, halal, kosher, gluten-free, and other restrictions. Please inform our staff about your dietary requirements and we'll do our best to provide suitable options.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="bg-gray-50 p-8 rounded-2xl">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-start gap-3">
                      <i className="fas fa-question-circle text-[#c9b037] mt-1"></i>
                      Is the service confidential?
                    </h3>
                    <p className="text-gray-600 leading-relaxed ml-8">
                      Absolutely. All information you share with us is kept strictly confidential. We respect your privacy and dignity. Your personal information is used only to serve you better and is never shared without your consent.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="bg-gray-50 p-8 rounded-2xl">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-start gap-3">
                      <i className="fas fa-question-circle text-[#c9b037] mt-1"></i>
                      Can I volunteer at the Food Bank?
                    </h3>
                    <p className="text-gray-600 leading-relaxed ml-8">
                      Yes! We welcome volunteers of all ages and backgrounds. Whether you can help for a few hours a week or month, your contribution makes a difference. Contact us to learn about volunteer opportunities.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-[#3c1053] to-[#5a1a7a] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollReveal>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Need Food Assistance?</h2>
                <p className="text-xl mb-10 leading-relaxed">
                  Don't hesitate to reach out. We're here to help you and your family with dignity, compassion, and respect. No one should go hungry.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="tel:+16475815901"
                    className="inline-block bg-[#c9b037] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#b39f2f] transition-all whitespace-nowrap cursor-pointer shadow-2xl"
                  >
                    <i className="fas fa-phone mr-2"></i>
                    Call Us Now
                  </a>
                  <a
                    href="/contact"
                    className="inline-block bg-white text-[#3c1053] px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all whitespace-nowrap cursor-pointer shadow-2xl"
                  >
                    <i className="fas fa-envelope mr-2"></i>
                    Contact Us
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      <DonationCTA />
      <Footer />
    </div>
  );
};

export default FoodPantryPage;