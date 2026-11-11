import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../../../components/effects/ScrollReveal';
import copy from '../../../content/pages/home.json';
import foodBank from '../../../content/pages/food-bank.json';
import site from '../../../content/site.json';
// Text, videos and links: src/content/pages/home.json → foodBankSpotlight (editable in the website editors).
// The figures come from the Food Bank page (src/content/pages/food-bank.json), so they stay in one place.

const fb = copy.foodBankSpotlight;
const stats = [
  { value: foodBank.whyWeExistSection.text3, label: foodBank.whyWeExistSection.text4 },
  { value: foodBank.whyWeExistSection.text5, label: foodBank.whyWeExistSection.text6 },
  { value: foodBank.whyWeExistSection.text7, label: foodBank.whyWeExistSection.text8 },
];

/** Cloudinary video: compressed, sized for a tile. Poster = a frame from the clip. */
const clip = (url: string) => url.replace('/video/upload/', '/video/upload/q_auto,w_720,c_limit/');
const poster = (url: string) => url.replace('/video/upload/', '/video/upload/so_2,q_auto,w_720,c_limit/').replace(/\.mp4$/, '.jpg');

/** Silent looping clip that only plays while on screen (saves data and battery). */
function LoopClip({ src, title, className = '' }: { src: string; title: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        v.play().catch(() => undefined);
      } else {
        v.pause();
      }
    }, { threshold: 0.25 });
    io.observe(v);
    return () => io.disconnect();
  }, []);
  return (
    <figure className={`relative overflow-hidden rounded-2xl bg-[#1a0a2e] m-0 ${className}`}>
      <video ref={ref} src={clip(src)} poster={poster(src)} muted loop playsInline preload="none" aria-label={title} className="w-full h-full object-cover" />
      <figcaption className="absolute left-0 right-0 bottom-0 p-3 text-xs font-semibold tracking-widest uppercase text-white bg-gradient-to-t from-black/70 to-transparent">{title}</figcaption>
    </figure>
  );
}

const FoodBankSpotlight = () => {
  const subject = encodeURIComponent(fb.packageSubject);
  const [v0, v1, v2, v3] = fb.videos;
  return (
    <section id="food-bank-spotlight" className="relative overflow-hidden py-20 md:py-28" style={{ background: 'linear-gradient(160deg, #1a0a2e 0%, #26194f 45%, #3c1053 100%)' }}>
      <div className="absolute -top-24 -right-24 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-20 bg-[#c9b037]" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <ScrollReveal direction="left" className="lg:col-span-6">
            <span className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full" style={{ background: 'rgba(201,176,55,0.15)', color: '#f0d060', border: '1px solid rgba(201,176,55,0.35)' }}>{fb.label}</span>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight" style={{ fontFamily: '"Playfair Display", serif' }}>{fb.heading}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#c9b037] to-transparent my-6" />
            <p className="text-lg text-white/85 leading-relaxed">{fb.intro}</p>
            <dl className="mt-8 grid grid-cols-3 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl p-4 text-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(201,176,55,0.3)' }}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="m-0">
                    <span className="block text-2xl md:text-3xl font-bold text-[#f0d060]" style={{ fontFamily: '"Playfair Display", serif' }}>{s.value}</span>
                    <span className="block mt-1 text-xs md:text-sm text-white/75 leading-snug">{s.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-xs text-white/50">{fb.statsNote}</p>
          </ScrollReveal>

          <ScrollReveal direction="right" className="lg:col-span-6">
            <p className="sr-only">{fb.videosHeading}</p>
            <div className="grid grid-cols-2 gap-3">
              <LoopClip src={v0.video} title={v0.title} className="col-span-2 aspect-video" />
              <LoopClip src={v1.video} title={v1.title} className="aspect-[4/5]" />
              <div className="grid gap-3">
                <LoopClip src={v2.video} title={v2.title} className="aspect-square" />
                <LoopClip src={v3.video} title={v3.title} className="aspect-square" />
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <h3 className="mt-20 text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: '"Playfair Display", serif' }}>{fb.howHeading}</h3>
          <ol className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 list-none p-0">
            {fb.how.map((step, i) => (
              <li key={step.title} className="relative rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)' }}>
                <span className="flex items-center justify-center w-10 h-10 rounded-full font-bold text-[#26194f] bg-[#c9b037]">{i + 1}</span>
                <h4 className="mt-4 text-lg font-bold text-white">{step.title}</h4>
                <p className="mt-2 text-sm text-white/75 leading-relaxed">{step.text}</p>
              </li>
            ))}
          </ol>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ScrollReveal direction="left">
            <div className="h-full rounded-3xl bg-white p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-[#3c1053]" style={{ fontFamily: '"Playfair Display", serif' }}>{fb.fundHeading}</h3>
              <ul className="mt-6 space-y-5 list-none p-0">
                {fb.fund.map((f) => (
                  <li key={f.title} className="flex gap-4">
                    <i className="ri-checkbox-circle-fill text-2xl text-[#8e24aa] shrink-0" aria-hidden="true" />
                    <span>
                      <strong className="block text-[#26194f]">{f.title}</strong>
                      <span className="text-gray-600 leading-relaxed">{f.text}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="h-full rounded-3xl p-8 flex flex-col" style={{ background: 'rgba(201,176,55,0.12)', border: '1px solid rgba(201,176,55,0.4)' }}>
              <h3 className="text-2xl font-bold text-white" style={{ fontFamily: '"Playfair Display", serif' }}>{fb.partnersHeading}</h3>
              <ul className="mt-6 space-y-3 list-none p-0">
                {fb.partners.map((p) => (
                  <li key={p} className="flex gap-3 text-white/90"><i className="ri-vip-crown-2-line text-[#f0d060]" aria-hidden="true" />{p}</li>
                ))}
              </ul>
              <p className="mt-8 text-xl text-white font-semibold">{fb.ctaLine}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/donate" className="px-6 py-3 rounded-full font-bold text-[#26194f] bg-[#c9b037] hover:bg-[#f0d060] transition-colors whitespace-nowrap">{fb.ctaDonate}</Link>
                <Link to="/food-bank" className="px-6 py-3 rounded-full font-bold text-white border border-white/40 hover:bg-white/10 transition-colors whitespace-nowrap">{fb.ctaVisit}</Link>
                <a href={`mailto:${site.contact.email}?subject=${subject}`} className="px-6 py-3 rounded-full font-bold text-[#f0d060] underline-offset-4 hover:underline whitespace-nowrap">{fb.ctaPackage}</a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default FoodBankSpotlight;
