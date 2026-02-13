import ScrollReveal from '../../../components/effects/ScrollReveal';

const FounderMessage = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#3c1053] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#c9b037] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="fade">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3c1053] mb-4 gradient-text">
              Founder's Message
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#3c1053] to-[#c9b037] mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">
              Rev. Irine Ashu, PhD - Founder of CAWAP
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <ScrollReveal direction="left">
            <div className="relative flex flex-col items-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#3c1053] to-[#c9b037] rounded-2xl opacity-20 blur-xl"></div>
                <div className="relative rounded-2xl shadow-2xl w-full overflow-hidden elite-card bg-gradient-to-br from-[#f5f5f5] to-[#e8e8e8]">
                  <img
                    src="https://i.imgur.com/Vk7k4LU.png"
                    alt="Rev. Irine Ashu, PhD"
                    className="w-full object-contain"
                  />
                </div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-[#3c1053] mb-2">Rev Irine Ashu PhD</h3>
                <p className="text-lg text-[#c9b037] font-semibold">Founder & CEO, CAWAP</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="elite-card bg-white p-8 rounded-2xl shadow-xl h-full flex flex-col justify-center">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Rev. Irine Ashu, PhD, is the founder and CEO of Canadian and African Women Aid Program (CAWAP). She is the pastor of Jesus Revival for All Nations. Her journey into philanthropism started in her native country, Cameroun where she formed the Community Aid Center. This was informed by her personal experiences and challenges growing up.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Rev. Ashu, is also an entrepreneur. She is the founder of Heavenly Breeze Cosmetics and Gospel Lane Media Inc. Gospel lane media is a dedicated platform for sharing information, messages, news and education. She leverages her worldwide travels and experiences as a life coach, a mentor, an advocate, a community and social service worker.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Her dynamism has been described as infectious by people around her. Her uncanny leadership abilities are evident in the many organisations she leads at the same time. Rev. Ashu is also a doting mother of four boys.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;
