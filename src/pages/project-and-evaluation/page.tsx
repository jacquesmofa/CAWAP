import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import DonationCTA from '../../components/feature/DonationCTA';
import ScrollReveal from '../../components/effects/ScrollReveal';

const ProjectEvaluationPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://readdy.ai/api/search-image?query=professional%20team%20analyzing%20data%20and%20evaluating%20community%20program%20results%20with%20charts%20and%20reports%2C%20modern%20office%20setting%20with%20collaborative%20work%20environment%2C%20professional%20photography%20showing%20assessment%20planning%20and%20strategic%20development%2C%20diverse%20staff%20members%20reviewing%20project%20outcomes%20and%20metrics%2C%20bright%20natural%20lighting%20creating%20productive%20atmosphere%2C%20contemporary%20workspace%20representing%20accountability%20transparency%20and%20continuous%20improvement&width=1920&height=500&seq=project-evaluation-hero&orientation=landscape')",
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
                  <i className="far fa-chart-bar text-secondary text-3xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Bringing Impactful Projects to Life</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  At CAWAP, we understand the critical role that funding plays in bringing impactful projects to life.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our Project and Evaluation services help organizations and community groups develop, implement, and assess their programs effectively. We provide expertise in project planning, grant writing, program evaluation, and impact assessment.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Whether you're seeking funding for a new initiative or need to evaluate the effectiveness of an existing program, our team provides the guidance and support needed to ensure success.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Services</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Project planning and development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Grant writing and funding applications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Program evaluation and impact assessment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Data collection and analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-secondary mt-1"></i>
                    <span className="text-gray-600">Reporting and documentation</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <a
                  href="tel:+16475815901"
                  className="inline-block bg-secondary text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-opacity-90 transition-all whitespace-nowrap cursor-pointer"
                >
                  Request Consultation
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

export default ProjectEvaluationPage;