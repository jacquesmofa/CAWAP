import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import DonationCTA from '../../components/feature/DonationCTA';
import ScrollReveal from '../../components/effects/ScrollReveal';

const MentalHealthPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ==========================================
          DISABILITY INCLUSION PROGRAM - HERO
          ========================================== */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://readdy.ai/api/search-image?query=diverse%20group%20of%20people%20with%20disabilities%20actively%20participating%20in%20community%20activities%2C%20inclusive%20workspace%20and%20social%20environment%20showing%20empowerment%20accessibility%20and%20dignity%2C%20warm%20natural%20lighting%20with%20bright%20hopeful%20atmosphere%2C%20people%20of%20various%20ages%20and%20abilities%20engaged%20in%20skills%20training%20and%20social%20interaction%2C%20modern%20accessible%20community%20center%20with%20ramps%20and%20assistive%20technology%2C%20African%20and%20Caribbean%20individuals%20represented%20in%20inclusive%20community%20setting%2C%20professional%20photography%20capturing%20genuine%20moments%20of%20inclusion%20and%20independence&width=1920&height=500&seq=disability-inclusion-hero&orientation=landscape')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
        <div className="relative z-10 text-center px-4 w-full">
          <div className="inline-block bg-[#c9b037]/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-[#c9b037]/30">
            <span className="text-[#c9b037] font-semibold text-sm tracking-wider">INCLUSIVE COMMUNITY SUPPORT</span>
          </div>
          <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Disability Inclusion &amp; Mental Health
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Removing barriers, promoting dignity and independence, and ensuring equal opportunities for persons with disabilities to participate fully in community life.
          </p>
        </div>
      </section>

      <main>
        {/* ==========================================
            DISABILITY INCLUSION - MAIN CONTENT
            ========================================== */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="mb-10">
                  <div className="w-16 h-16 bg-[#c9b037]/10 rounded-full flex items-center justify-center mb-6">
                    <i className="ri-wheelchair-line text-[#c9b037] text-3xl"></i>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">CAWAP Disability Inclusion Program</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    The Canadian and African Women Aid Program (CAWAP) supports persons with disabilities through advocacy, accessibility awareness, skills development, employment readiness, community referrals, and inclusive programming.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Our goal is to remove barriers, promote dignity and independence, and ensure that persons with disabilities have equal opportunities to participate fully in community life.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    CAWAP is committed to building a society where every person is respected, empowered, included, and given the opportunity to thrive.
                  </p>
                </div>
              </ScrollReveal>

              {/* Services Grid */}
              <ScrollReveal>
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  <div className="bg-gradient-to-br from-[#c9b037]/5 to-[#c9b037]/10 p-6 rounded-xl border border-[#c9b037]/20">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-[#c9b037]/20 rounded-full flex items-center justify-center">
                        <i className="ri-megaphone-line text-[#c9b037] text-lg"></i>
                      </div>
                      <h3 className="font-bold text-gray-800">Advocacy</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">Championing the rights of persons with disabilities and raising awareness about accessibility and inclusion within the community.</p>
                  </div>
                  <div className="bg-gradient-to-br from-[#c9b037]/5 to-[#c9b037]/10 p-6 rounded-xl border border-[#c9b037]/20">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-[#c9b037]/20 rounded-full flex items-center justify-center">
                        <i className="ri-tools-line text-[#c9b037] text-lg"></i>
                      </div>
                      <h3 className="font-bold text-gray-800">Skills Development</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">Providing training and capacity-building opportunities tailored to individual abilities and career aspirations.</p>
                  </div>
                  <div className="bg-gradient-to-br from-[#c9b037]/5 to-[#c9b037]/10 p-6 rounded-xl border border-[#c9b037]/20">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-[#c9b037]/20 rounded-full flex items-center justify-center">
                        <i className="ri-briefcase-line text-[#c9b037] text-lg"></i>
                      </div>
                      <h3 className="font-bold text-gray-800">Employment Readiness</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">Equipping individuals with job search skills, resume building, interview preparation, and workplace accommodation guidance.</p>
                  </div>
                  <div className="bg-gradient-to-br from-[#c9b037]/5 to-[#c9b037]/10 p-6 rounded-xl border border-[#c9b037]/20">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-[#c9b037]/20 rounded-full flex items-center justify-center">
                        <i className="ri-share-forward-line text-[#c9b037] text-lg"></i>
                      </div>
                      <h3 className="font-bold text-gray-800">Community Referrals</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">Connecting individuals with specialized services, resources, and support networks within the broader community.</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="bg-gradient-to-r from-[#3c1053] to-[#5a1a7a] p-8 rounded-2xl text-white text-center">
                  <i className="ri-heart-line text-4xl text-[#c9b037] mb-4"></i>
                  <p className="text-lg leading-relaxed mb-2">
                    <strong className="text-[#c9b037]">Our commitment:</strong> Building a society where every person is respected, empowered, included, and given the opportunity to thrive.
                  </p>
                </div>
              </ScrollReveal>

              <div className="text-center mt-10">
                <a
                  href="tel:+16475815901"
                  className="inline-block bg-[#c9b037] text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-[#b39f2f] transition-all whitespace-nowrap cursor-pointer shadow-lg"
                >
                  <i className="ri-phone-line mr-2"></i>
                  Contact Us for Support
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            DIVIDER
            ========================================== */}
        <section className="py-12 bg-gradient-to-r from-[#3c1053] via-[#5a1a7a] to-[#3c1053]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-2">Also: Mental Health Support</h2>
            <p className="text-white/80">Breaking the stigma and promoting mental wellness in our community</p>
          </div>
        </section>

        {/* ==========================================
            MENTAL HEALTH SUPPORT - EXISTING CONTENT
            ========================================== */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <div className="w-16 h-16 bg-[#c9b037]/10 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-brain text-[#c9b037] text-3xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Breaking the Stigma</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We believe that mental health is a fundamental aspect of overall well-being, and we are dedicated to eradicating the stigma surrounding mental illnesses.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our Mental Health program provides support, education, and resources to individuals and families affected by mental health challenges. We create a safe, non-judgmental space where people can seek help, share their experiences, and access professional support.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Through awareness campaigns, support groups, counseling services, and educational workshops, we work to promote mental wellness and ensure that everyone has access to the mental health care they need.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Services</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-[#c9b037] mt-1"></i>
                    <span className="text-gray-600">Mental health awareness and education</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-[#c9b037] mt-1"></i>
                    <span className="text-gray-600">Support groups and peer counseling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-[#c9b037] mt-1"></i>
                    <span className="text-gray-600">Referrals to professional mental health services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-[#c9b037] mt-1"></i>
                    <span className="text-gray-600">Stress management and coping strategies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-[#c9b037] mt-1"></i>
                    <span className="text-gray-600">Crisis intervention and emergency support</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <a
                  href="tel:+16475815901"
                  className="inline-block bg-[#c9b037] text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-opacity-90 transition-all whitespace-nowrap cursor-pointer"
                >
                  Get Support
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <DonationCTA />
      <Footer />
    </div>
  );
};

export default MentalHealthPage;