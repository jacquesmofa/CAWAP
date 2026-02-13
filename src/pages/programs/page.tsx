import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import DonationCTA from '../../components/feature/DonationCTA';
import { Link } from 'react-router-dom';
import ScrollReveal from '../../components/effects/ScrollReveal';
import InteractiveProgramsHub from '../../components/effects/InteractiveProgramsHub';

const ProgramsPage = () => {
  const programs = [
    {
      title: 'Youth Leadership Program',
      description: 'Empowering young minds to become tomorrow\'s leaders through mentorship and skill development.',
      icon: 'ri-team-line',
      link: '/youth-leadership',
      image: 'https://www.cawap.ca/wp-content/uploads/2024/12/youth-leadership.jpg',
    },
    {
      title: 'Capital G-Girls',
      description: 'Building confidence and leadership skills in young women through comprehensive programs.',
      icon: 'ri-women-line',
      link: '/capital-g-girls',
      image: 'https://www.cawap.ca/wp-content/uploads/2024/12/capital-g-girls.jpg',
    },
    {
      title: 'Heart-Wise Seniors',
      description: 'Supporting our seniors with health programs and community engagement activities.',
      icon: 'ri-heart-pulse-line',
      link: '/heart-wise-seniors',
      image: 'https://www.cawap.ca/wp-content/uploads/2024/12/heart-wise-seniors.jpg',
    },
    {
      title: 'Children Summer Camp',
      description: 'Fun and educational summer programs designed to inspire and engage children.',
      icon: 'ri-sun-line',
      link: '/children-summer-camp',
      image: 'https://www.cawap.ca/wp-content/uploads/2024/12/summer-camp.jpg',
    },
    {
      title: 'Sankofa Royale Awards',
      description: 'Celebrating excellence and achievement within our community.',
      icon: 'ri-award-line',
      link: '/sankofa-royale-awards',
      image: 'https://www.cawap.ca/wp-content/uploads/2024/12/sankofa-awards.jpg',
    },
    {
      title: 'Food Pantry',
      description: 'Providing essential food support to families and individuals in need.',
      icon: 'ri-restaurant-line',
      link: '/food-pantry',
      image: 'https://www.cawap.ca/wp-content/uploads/2024/12/food-pantry.jpg',
    },
    {
      title: 'Women Empowerment',
      description: 'Empowering women through education, skills training, and community support.',
      icon: 'ri-user-star-line',
      link: '/women-empowerment',
      image: 'https://www.cawap.ca/wp-content/uploads/2024/12/women-empowerment.jpg',
    },
    {
      title: 'JavaScript Program',
      description: 'Equipping participants with essential coding skills for technology careers.',
      icon: 'ri-code-line',
      link: '/javascript-program',
      image: 'https://www.cawap.ca/wp-content/uploads/2024/12/javascript-program.jpg',
    },
    {
      title: 'Financial Literacy',
      description: 'Building financial knowledge and skills for economic empowerment.',
      icon: 'ri-money-dollar-circle-line',
      link: '/financial-literacy',
      image: 'https://www.cawap.ca/wp-content/uploads/2024/12/financial-literacy.jpg',
    },
    {
      title: 'Cultural Events',
      description: 'Celebrating African heritage and culture through community events.',
      icon: 'ri-calendar-event-line',
      link: '/cultural-events',
      image: 'https://www.cawap.ca/wp-content/uploads/2024/12/cultural-events.jpg',
    },
    {
      title: 'Mental Health Support',
      description: 'Providing mental health resources and support services.',
      icon: 'ri-mental-health-line',
      link: '/mental-health',
      image: 'https://www.cawap.ca/wp-content/uploads/2024/12/mental-health.jpg',
    },
    {
      title: 'New Breed Women of Substance',
      description: 'Developing leadership and professional skills in women.',
      icon: 'ri-user-heart-line',
      link: '/new-breed-women-of-substance',
      image: 'https://www.cawap.ca/wp-content/uploads/2024/12/new-breed.jpg',
    },
    {
      title: 'Project and Evaluation',
      description: 'Assessing and improving program effectiveness and impact.',
      icon: 'ri-file-chart-line',
      link: '/project-and-evaluation',
      image: 'https://www.cawap.ca/wp-content/uploads/2024/12/evaluation.jpg',
    },
    {
      title: 'Newcomer\'s Settlement Program',
      description: 'Supporting newcomers in their integration and settlement journey.',
      icon: 'ri-global-line',
      link: '/newcomers-settlement-program',
      image: 'https://www.cawap.ca/wp-content/uploads/2024/12/newcomers.jpg',
    },
    {
      title: 'Christmas Event',
      description: 'Annual community celebration bringing joy and togetherness.',
      icon: 'ri-gift-line',
      link: '/christmas-event',
      image: 'https://www.cawap.ca/wp-content/uploads/2024/12/christmas.jpg',
    },
  ];

  return (
    <div className="page-transition">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[400px] bg-gradient-to-r from-[#3c1053] to-[#5a1a7a] overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#c9b037] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="relative h-full flex items-center justify-center text-center px-4">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Programs</h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Comprehensive programs designed to empower and support our community
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Programs Hub */}
        <ScrollReveal direction="fade">
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
              <h2 className="text-4xl font-bold text-[#3c1053] mb-4 gradient-text">
                Explore Our Programs
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#3c1053] to-[#c9b037] mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Interact with our programs hub to discover how we're making a difference
              </p>
            </div>
            <InteractiveProgramsHub />
          </section>
        </ScrollReveal>

        {/* Programs Grid */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <ScrollReveal key={index} delay={index * 50} direction="up">
                  <Link to={program.link}>
                    <div className="elite-card bg-white rounded-2xl shadow-lg overflow-hidden h-full group">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={program.image}
                          alt={program.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#3c1053]/80 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <i className={`${program.icon} text-4xl text-white mb-2`}></i>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-[#3c1053] mb-3">{program.title}</h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">{program.description}</p>
                        <div className="flex items-center text-[#c9b037] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                          Learn More
                          <i className="ri-arrow-right-line ml-2"></i>
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <DonationCTA />
      <Footer />
    </div>
  );
};

export default ProgramsPage;
