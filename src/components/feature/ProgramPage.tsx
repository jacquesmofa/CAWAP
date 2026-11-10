import Header from './Header';
import Footer from './Footer';
import DonationCTA from './DonationCTA';

/** Shape of a file in src/content/programs/*.json (edited in the website editors). */
export interface ProgramPageContent {
  heroImage: string;
  heroTitle?: string;
  icon: string;
  heading: string;
  paragraphs: string[];
  highlightsTitle: string;
  highlights: string[];
  ctaLabel: string;
  ctaLink: string;
}

/** Shared layout for the program pages (Youth Leadership, Capital G-Girls, ...). */
const ProgramPage = ({ content }: { content: ProgramPageContent }) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${content.heroImage}')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
        {content.heroTitle && (
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-white">{content.heroTitle}</h1>
          </div>
        )}
      </section>

      <main>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                  <i className={`${content.icon} text-secondary text-3xl`}></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">{content.heading}</h2>
                {content.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-gray-600 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              {content.highlights.length > 0 && (
                <div className="bg-gray-50 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{content.highlightsTitle}</h3>
                  <ul className="space-y-3">
                    {content.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <i className="fas fa-check-circle text-secondary mt-1"></i>
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {content.ctaLabel && (
                <div className="text-center">
                  <a
                    href={content.ctaLink}
                    className="inline-block bg-secondary text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-opacity-90 transition-all whitespace-nowrap cursor-pointer"
                  >
                    {content.ctaLabel}
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <DonationCTA />
      <Footer />
    </div>
  );
};

export default ProgramPage;
