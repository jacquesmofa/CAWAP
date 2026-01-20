import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import DonationCTA from '../../components/feature/DonationCTA';
import ScrollReveal from '../../components/effects/ScrollReveal';
import ParallaxSection from '../../components/effects/ParallaxSection';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const programs = [
    {
      title: 'Youth Leadership Program',
      description: 'The heart and soul of our program lies in its unwavering dedication to nurturing the boundless potential of our youth, propelling them towards a future brimming with endless possibilities and holistic well-being.',
      link: '/youth-leadership',
      icon: 'ri-team-line'
    },
    {
      title: 'New Breed Women of Substance',
      description: 'Women of Substance, a groundbreaking program dedicated to empowering women to become strong, self-driven individuals who shape their own destinies.',
      link: '/new-breed-women-of-substance',
      icon: 'ri-user-star-line'
    },
    {
      title: 'Capital G-Girls',
      description: 'A transformative mentorship and training program meticulously crafted to uplift and empower young girls who dare to dream and aspire to achieve remarkable life goals.',
      link: '/capital-g-girls',
      icon: 'ri-women-line'
    },
    {
      title: 'Heart-Wise Seniors',
      description: 'Our unwavering commitment is to create a secure and inclusive haven for seniors, where meaningful connections flourish, vibrant social activities abound, and knowledge on significant subjects expands.',
      link: '/heart-wise-seniors',
      icon: 'ri-heart-pulse-line'
    },
    {
      title: 'Children Summer Camp',
      description: 'CAWAP, with a deep commitment to inclusivity and the belief that every child deserves the chance to immerse themselves in the joy and wonder of summer camp, proudly presents our affordable and enchanting children\'s summer camp.',
      link: '/children-summer-camp',
      icon: 'ri-sun-line'
    },
    {
      title: 'Sankofa Royale Awards',
      description: 'The Canadian and African Women Aid Program has recognized a concerning lack of celebration and representation of the black community across various sectors.',
      link: '/sankofa-royale-awards',
      icon: 'ri-award-line'
    },
    {
      title: 'Food Pantry',
      description: 'At CAWAP, we recognize that access to nutritious food is a fundamental right that should be available to every individual in our community.',
      link: '/food-pantry',
      icon: 'ri-restaurant-line'
    },
    {
      title: 'Women Empowerment',
      description: 'Our Women Empowerment Program is a beacon of support and opportunity designed to equip women with the skills, confidence, and resources needed to excel in the competitive job market.',
      link: '/women-empowerment',
      icon: 'ri-empathize-line'
    },
    {
      title: 'JavaScript Program',
      description: 'We are committed to bridging the diversity gap in the tech sector and providing equitable opportunities for underrepresented communities.',
      link: '/javascript-program',
      icon: 'ri-code-line'
    },
    {
      title: 'Financial Literacy',
      description: 'We understand that financial literacy is the cornerstone of a secure and prosperous future. Our program serves as a guiding light, illuminating the path to financial well-being for individuals from all walks of life.',
      link: '/financial-literacy',
      icon: 'ri-money-dollar-circle-line'
    },
    {
      title: 'Cultural Events',
      description: 'At CAWAP, we firmly believe that culture is not only an integral part of a person\'s identity but also a precious thread that weaves our communities together.',
      link: '/cultural-events',
      icon: 'ri-global-line'
    },
    {
      title: 'Mental Health',
      description: 'We believe that mental health is a fundamental aspect of overall well-being, and we are dedicated to eradicating the stigma surrounding mental illnesses.',
      link: '/mental-health',
      icon: 'ri-mental-health-line'
    },
    {
      title: 'Homelessness Support Program',
      description: 'At CAWAP, we believe that every person deserves warmth, comfort, and a sense of belonging, regardless of their circumstances.',
      link: '/newcomers-settlement-program',
      icon: 'ri-home-heart-line'
    },
    {
      title: 'Newcomer\'s Settlement Program',
      description: 'At CAWAP, we understand that starting a new life in a foreign land can be both exciting and challenging.',
      link: '/newcomers-settlement-program',
      icon: 'ri-flight-takeoff-line'
    },
    {
      title: 'Project and Evaluation',
      description: 'At CAWAP, we understand the critical role that funding plays in bringing impactful projects to life.',
      link: '/project-and-evaluation',
      icon: 'ri-file-list-3-line'
    }
  ];

  return (
    <div className="min-h-screen page-transition">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://readdy.ai/api/search-image?query=diverse%20group%20of%20empowered%20african%20and%20caribbean%20women%20standing%20together%20in%20solidarity%20with%20confident%20smiles%2C%20professional%20community%20center%20setting%20with%20warm%20welcoming%20atmosphere%2C%20natural%20lighting%20creating%20inspiring%20uplifting%20mood%2C%20modern%20facility%20showing%20unity%20sisterhood%20and%20cultural%20diversity%2C%20women%20of%20various%20ages%20representing%20community%20strength%20and%20empowerment%2C%20bright%20colors%20symbolizing%20hope%20and%20transformation&width=1920&height=400&seq=about-hero&orientation=landscape')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">About CAWAP</h1>
            <p className="text-xl text-white/90">Empowering Communities, Transforming Lives</p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <ScrollReveal direction="left">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-[#3c1053] mb-6 gradient-text">
                    Who We Are
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#3c1053] to-[#c9b037] mb-6"></div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Canadian and African Women Aid Program (CAWAP) is a non-profit organization dedicated to empowering Afro-Caribbean and Canadian women by fostering skill development, promoting economic growth, advocating for gender equality, celebrating cultural diversity, overcoming poverty, and enhancing community accessibility through a range of programs and services.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    At CAWAP, we firmly believe in the development and capacity building of all individuals, with a particular focus on young girls, women, and youths. Therefore, a significant portion of our programs is dedicated to youth development, leadership initiatives, girls' advocacy and educational projects, entrepreneurship and vocational skills training, as well as education and financial management programs for women. We also recognize the valuable contributions of our senior citizens and have specific initiatives catered to their welfare. Our ultimate goal at CAWAP is to create a global society that offers equal opportunities for a better life for everyone.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To achieve our mission, CAWAP actively engages and collaborates with local communities, like-minded non-profit organizations, and government agencies. We firmly believe in the collective effort to build an inclusive world where no one is left behind.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <ParallaxSection speed={0.2}>
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#3c1053] to-[#c9b037] rounded-2xl opacity-20 blur-xl"></div>
                    <img
                      src="https://www.cawap.ca/wp-content/uploads/elementor/thumbs/7cd552c1-702a-4fa9-b28a-70f5452fa71e-oqb2d37mwqq5fpht61935igx5t5ncophr3lndfm0kw.jpg"
                      alt="About CAWAP"
                      className="relative w-full h-[500px] object-cover rounded-2xl shadow-2xl elite-card"
                    />
                  </div>
                </ParallaxSection>
              </ScrollReveal>
            </div>

            {/* Additional Content */}
            <ScrollReveal direction="fade">
              <div className="mb-20">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Over the years, we have successfully organized and facilitated annual entrepreneurial training programs, empowering individuals with the necessary tools and knowledge to thrive in their business ventures. Additionally, we conduct regular youth leadership and empowerment sessions on a quarterly basis. As part of our financial support initiatives, we have provided capital assistance to women and youths, helping them realize their entrepreneurial aspirations. Furthermore, we prioritize the social, health, and general well-being of our senior citizens by engaging them in various activities that address their specific needs and challenges.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  At CAWAP, we remain committed to our vision of empowering individuals and fostering positive change within our communities.
                </p>
              </div>
            </ScrollReveal>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              <ScrollReveal delay={0}>
                <div className="elite-card bg-gradient-to-br from-[#3c1053] to-[#5a1a7a] p-10 rounded-2xl text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <i className="ri-target-line text-6xl mb-6 text-[#c9b037]"></i>
                  <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                  <p className="text-white/90 leading-relaxed text-lg">
                    To empower Afro-Caribbean and Canadian women through comprehensive programs that promote economic development, cultural diversity, gender equality, and community accessibility, enabling them to overcome poverty and achieve their full potential.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="elite-card bg-gradient-to-br from-[#c9b037] to-[#d4c050] p-10 rounded-2xl text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <i className="ri-eye-line text-6xl mb-6 text-[#3c1053]"></i>
                  <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                  <p className="text-white/90 leading-relaxed text-lg">
                    A world where every woman has equal opportunities to thrive, where cultural diversity is celebrated, and where communities are strengthened through the empowerment of women and youth.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Values */}
            <ScrollReveal direction="fade">
              <div className="mb-20">
                <h2 className="text-4xl md:text-5xl font-bold text-[#3c1053] text-center mb-4 gradient-text">Our Core Values</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#3c1053] to-[#c9b037] mx-auto mb-12"></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="elite-card text-center bg-white p-8 rounded-2xl shadow-lg">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#3c1053] to-[#5a1a7a] rounded-full flex items-center justify-center mx-auto mb-6">
                      <i className="ri-heart-line text-white text-4xl"></i>
                    </div>
                    <h4 className="text-2xl font-bold text-[#3c1053] mb-4">Empowerment</h4>
                    <p className="text-gray-600 leading-relaxed">
                      We believe in empowering individuals to take control of their lives and achieve their goals.
                    </p>
                  </div>
                  <div className="elite-card text-center bg-white p-8 rounded-2xl shadow-lg">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#c9b037] to-[#d4c050] rounded-full flex items-center justify-center mx-auto mb-6">
                      <i className="ri-team-line text-white text-4xl"></i>
                    </div>
                    <h4 className="text-2xl font-bold text-[#3c1053] mb-4">Community</h4>
                    <p className="text-gray-600 leading-relaxed">
                      We foster strong, supportive communities where everyone can thrive together.
                    </p>
                  </div>
                  <div className="elite-card text-center bg-white p-8 rounded-2xl shadow-lg">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#3c1053] to-[#5a1a7a] rounded-full flex items-center justify-center mx-auto mb-6">
                      <i className="ri-scales-line text-white text-4xl"></i>
                    </div>
                    <h4 className="text-2xl font-bold text-[#3c1053] mb-4">Equality</h4>
                    <p className="text-gray-600 leading-relaxed">
                      We promote gender equality and equal opportunities for all members of our community.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Programs Section */}
            <ScrollReveal direction="fade">
              <div className="mb-20">
                <h2 className="text-4xl md:text-5xl font-bold text-[#3c1053] text-center mb-4 gradient-text">Our Programs</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#3c1053] to-[#c9b037] mx-auto mb-6"></div>
                <p className="text-center text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
                  CAWAP programs focuses on human development and capacity building for the youths, women and seniors of our communities.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {programs.map((program, index) => (
                    <ScrollReveal key={index} delay={index * 50}>
                      <Link to={program.link}>
                        <div className="elite-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full cursor-pointer group">
                          <div className="w-16 h-16 bg-gradient-to-br from-[#3c1053] to-[#5a1a7a] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <i className={`${program.icon} text-white text-3xl`}></i>
                          </div>
                          <h4 className="text-xl font-bold text-[#3c1053] mb-4 group-hover:text-[#c9b037] transition-colors duration-300">
                            {program.title}
                          </h4>
                          <p className="text-gray-600 leading-relaxed text-sm">
                            {program.description}
                          </p>
                        </div>
                      </Link>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Founder Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <ScrollReveal direction="left">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#c9b037] to-[#3c1053] rounded-2xl opacity-20 blur-xl"></div>
                  <div className="relative rounded-2xl shadow-2xl overflow-hidden elite-card bg-gradient-to-br from-[#f5f5f5] to-[#e8e8e8]">
                    <img
                      src="https://static.readdy.ai/image/2e117e8c7ffa34e61699363cecaf86d3/09ff259e537d55e1e2f8dc14ff039c70.png"
                      alt="Rev. Irine Ashu PhD"
                      className="w-full object-contain"
                    />
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <div className="elite-card bg-white p-8 rounded-2xl shadow-lg">
                  <h2 className="text-4xl md:text-5xl font-bold text-[#3c1053] mb-6 gradient-text">
                    Meet Our Founder
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#3c1053] to-[#c9b037] mb-6"></div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Rev. Irine Ashu, PhD, is the founder and CEO of Canadian and African Women Aid Program (CAWAP). She is the pastor of Jesus Revival for All Nations. Her journey into philanthropism started in her native country, Cameroun where she formed the Community Aid Center. This was informed by her personal experiences and challenges growing up.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Rev. Ashu, is also an entrepreneur. She is the founder of Heavenly Breeze Cosmetics and Gospel Lane Media Inc. Gospel lane media is a dedicated platform for sharing information, messages, news and education. She leverages her worldwide travels and experiences as a life coach, a mentor, an advocate, a community and social service worker.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Her dynamism has been described as infectious by people around her. Her uncanny leadership abilities are evident in the many organisations she leads at the same time. Rev. Ashu is also a doting mother of four boys.
                  </p>
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="text-2xl font-bold text-[#3c1053]">Rev Irine Ashu PhD</h3>
                    <p className="text-[#c9b037] font-semibold text-lg">Founder & CEO, CAWAP</p>
                  </div>
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

export default AboutPage;
