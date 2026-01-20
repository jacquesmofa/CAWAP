const DonationCTA = () => {
  return (
    <section className="my-16 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://readdy.ai/api/search-image?query=diverse%20hands%20reaching%20together%20in%20unity%20and%20support%20showing%20compassion%20and%20generosity%2C%20warm%20golden%20hour%20lighting%20creating%20hopeful%20inspiring%20atmosphere%2C%20professional%20photography%20with%20soft%20focus%20background%20representing%20community%20giving%20and%20charitable%20work%2C%20heartwarming%20scene%20of%20people%20helping%20each%20other%2C%20bright%20uplifting%20colors%20symbolizing%20hope%20transformation%20and%20empowerment&width=1400&height=500&seq=donation-cta-bg&orientation=landscape')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#3c1053]/80 via-[#3c1053]/70 to-[#c9b037]/80"></div>
          
          <div className="relative z-10 py-16 px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Empower Women, Transform Lives
            </h2>
            <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Join us in our transformative mission to unlock boundless opportunities for women. Your generosity holds the key to making dreams come true. Donate today and be the catalyst for empowering women to thrive and soar to new heights.
            </p>
            <a
              href="/donate"
              className="inline-block bg-[#c9b037] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#b39f2f] transition-all duration-300 whitespace-nowrap cursor-pointer shadow-xl"
            >
              DONATE TODAY
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationCTA;
