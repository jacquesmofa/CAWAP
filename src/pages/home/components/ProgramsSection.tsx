import ScrollReveal from '../../../components/effects/ScrollReveal';

const ProgramsSection = () => {
  const programs = [
    {
      title: 'Youth Leadership Program',
      description: 'The heart and soul of our program lies in its unwavering dedication to nurturing the boundless potential of our youth, propelling them towards a future brimming with endless possibilities and holistic well-being.',
      icon: 'ri-team-line',
      link: '/youth-leadership',
      gradient: 'from-[#3c1053] to-[#5a1a7a]'
    },
    {
      title: 'New Breed Women of Substance',
      description: 'Women of Substance, a groundbreaking program dedicated to empowering women to become strong, self-driven individuals who shape their own destinies.',
      icon: 'ri-user-star-line',
      link: '/new-breed-women-of-substance',
      gradient: 'from-[#c9b037] to-[#d4c050]'
    },
    {
      title: 'Capital G-Girls',
      description: 'A transformative mentorship and training program meticulously crafted to uplift and empower young girls who dare to dream and aspire to achieve remarkable life goals.',
      icon: 'ri-women-line',
      link: '/capital-g-girls',
      gradient: 'from-[#3c1053] to-[#5a1a7a]'
    },
    {
      title: 'Heart-Wise Seniors',
      description: 'Our unwavering commitment is to create a secure and inclusive haven for seniors, where meaningful connections flourish, vibrant social activities abound, and knowledge on significant subjects expands.',
      icon: 'ri-heart-line',
      link: '/heart-wise-seniors',
      gradient: 'from-[#c9b037] to-[#d4c050]'
    },
    {
      title: 'Children Summer Camp',
      description: 'CAWAP, with a deep commitment to inclusivity and the belief that every child deserves the chance to immerse themselves in the joy and wonder of summer camp, proudly presents our affordable and enchanting children\'s summer camp.',
      icon: 'ri-sun-line',
      link: '/children-summer-camp',
      gradient: 'from-[#3c1053] to-[#5a1a7a]'
    },
    {
      title: 'Sankofa Royale Awards',
      description: 'The Canadian and African Women Aid Program has recognized a concerning lack of celebration and representation of the black community across various sectors.',
      icon: 'ri-award-line',
      link: '/sankofa-royale-awards',
      gradient: 'from-[#c9b037] to-[#d4c050]'
    },
    {
      title: 'Food Pantry',
      description: 'At CAWAP, we recognize that access to nutritious food is a fundamental right that should be available to every individual in our community.',
      icon: 'ri-restaurant-line',
      link: '/food-pantry',
      gradient: 'from-[#3c1053] to-[#5a1a7a]'
    },
    {
      title: 'Women Empowerment',
      description: 'Our Women Empowerment Program is a beacon of support and opportunity designed to equip women with the skills, confidence, and resources needed to excel in the competitive job market.',
      icon: 'ri-empathize-line',
      link: '/women-empowerment',
      gradient: 'from-[#c9b037] to-[#d4c050]'
    },
    {
      title: 'JavaScript Program',
      description: 'We are committed to bridging the diversity gap in the tech sector and providing equitable opportunities for underrepresented communities.',
      icon: 'ri-code-line',
      link: '/javascript-program',
      gradient: 'from-[#3c1053] to-[#5a1a7a]'
    },
    {
      title: 'Financial Literacy',
      description: 'We understand that financial literacy is the cornerstone of a secure and prosperous future. Our program serves as a guiding light, illuminating the path to financial well-being for individuals from all walks of life.',
      icon: 'ri-money-dollar-circle-line',
      link: '/financial-literacy',
      gradient: 'from-[#c9b037] to-[#d4c050]'
    },
    {
      title: 'Cultural Events',
      description: 'At CAWAP, we firmly believe that culture is not only an integral part of a person\'s identity but also a precious thread that weaves our communities together.',
      icon: 'ri-global-line',
      link: '/cultural-events',
      gradient: 'from-[#3c1053] to-[#5a1a7a]'
    },
    {
      title: 'Mental Health',
      description: 'We believe that mental health is a fundamental aspect of overall well-being, and we are dedicated to eradicating the stigma surrounding mental illnesses.',
      icon: 'ri-mental-health-line',
      link: '/mental-health',
      gradient: 'from-[#c9b037] to-[#d4c050]'
    },
    {
      title: 'Homelessness Support Program',
      description: 'At CAWAP, we believe that every person deserves warmth, comfort, and a sense of belonging, regardless of their circumstances.',
      icon: 'ri-home-heart-line',
      link: '/programs',
      gradient: 'from-[#3c1053] to-[#5a1a7a]'
    },
    {
      title: 'Newcomer\'s Settlement Program',
      description: 'At CAWAP, we understand that starting a new life in a foreign land can be both exciting and challenging.',
      icon: 'ri-map-pin-user-line',
      link: '/newcomers-settlement-program',
      gradient: 'from-[#c9b037] to-[#d4c050]'
    },
    {
      title: 'Project and Evaluation',
      description: 'At CAWAP, we understand the critical role that funding plays in bringing impactful projects to life.',
      icon: 'ri-file-list-3-line',
      link: '/project-and-evaluation',
      gradient: 'from-[#3c1053] to-[#5a1a7a]'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#3c1053] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-[#c9b037] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="fade">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3c1053] mb-4 gradient-text">
              Our Programs
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#3c1053] to-[#c9b037] mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              CAWAP focus on human development and capacity building for the youth, women, seniors for the development of our communities.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ScrollReveal key={index} direction="fade" delay={index * 0.1}>
              <a
                href={program.link}
                className="elite-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer block h-full"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${program.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${program.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-[#3c1053] mb-4 group-hover:text-[#c9b037] transition-colors duration-300">
                  {program.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {program.description}
                </p>
                <div className="flex items-center text-[#c9b037] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Learn More
                  <i className="ri-arrow-right-line ml-2"></i>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
