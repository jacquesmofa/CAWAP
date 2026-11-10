import banner from '../../content/donation-banner.json';

// Text, photo and button: src/content/donation-banner.json (editable in the website editors).
const DonationCTA = () => {
  return (
    <section className="my-16 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${banner.backgroundImage}')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#3c1053]/80 via-[#3c1053]/70 to-[#c9b037]/80"></div>
          
          <div className="relative z-10 py-16 px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {banner.title}
            </h2>
            <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              {banner.text}
            </p>
            <a
              href={banner.buttonLink}
              className="inline-block bg-[#c9b037] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#b39f2f] transition-all duration-300 whitespace-nowrap cursor-pointer shadow-xl"
            >
              {banner.buttonLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationCTA;
