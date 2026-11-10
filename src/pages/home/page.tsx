import { useState, useRef } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import DonationCTA from '../../components/feature/DonationCTA';
import HeroSlider from './components/HeroSlider';
import AboutSection from './components/AboutSection';
import ProgramsSection from './components/ProgramsSection';
import ImageCarousel from './components/ImageCarousel';
import FounderMessage from './components/FounderMessage';
import JavascriptSection from './components/JavascriptSection';
import TrainingsSection from './components/TrainingsSection';
import ImpactMap from '../../components/feature/ImpactMap';
import ScrollReveal from '../../components/effects/ScrollReveal';
import { getUpcomingFlyers, getPastFlyers } from '../../data/flyers';
import copy from '../../content/pages/home.json';
// Text, images and links: src/content/pages/home.json (editable in the website editors).

const HomePage = () => {
  const upcomingFlyers = getUpcomingFlyers();
  const pastFlyers = getPastFlyers();
  
  const [upcomingScrollPosition, setUpcomingScrollPosition] = useState(0);
  const [pastScrollPosition, setPastScrollPosition] = useState(0);

  // Touch swipe handling
  const upcomingTouchStartX = useRef(0);
  const pastTouchStartX = useRef(0);
  const upcomingTouchStartY = useRef(0);
  const pastTouchStartY = useRef(0);

  // Trackpad/touchpad wheel event handling
  const upcomingWheelTimeout = useRef<NodeJS.Timeout | null>(null);
  const pastWheelTimeout = useRef<NodeJS.Timeout | null>(null);
  const upcomingAccumulatedDeltaX = useRef(0);
  const pastAccumulatedDeltaX = useRef(0);

  const scrollFlyers = (direction: 'left' | 'right', type: 'upcoming' | 'past') => {
    const cardWidth = 380; // Card width + gap
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    
    if (type === 'upcoming') {
      const container = document.getElementById('upcoming-flyers-container');
      if (container) {
        const newPosition = upcomingScrollPosition + scrollAmount;
        const maxScroll = container.scrollWidth - container.clientWidth;
        const clampedPosition = Math.max(0, Math.min(newPosition, maxScroll));
        setUpcomingScrollPosition(clampedPosition);
        container.scrollTo({ left: clampedPosition, behavior: 'smooth' });
      }
    } else {
      const container = document.getElementById('past-flyers-container');
      if (container) {
        const newPosition = pastScrollPosition + scrollAmount;
        const maxScroll = container.scrollWidth - container.clientWidth;
        const clampedPosition = Math.max(0, Math.min(newPosition, maxScroll));
        setPastScrollPosition(clampedPosition);
        container.scrollTo({ left: clampedPosition, behavior: 'smooth' });
      }
    }
  };

  // Touch event handlers for upcoming flyers
  const handleUpcomingTouchStart = (e: React.TouchEvent) => {
    upcomingTouchStartX.current = e.touches[0].clientX;
    upcomingTouchStartY.current = e.touches[0].clientY;
  };

  const handleUpcomingTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    
    const deltaX = upcomingTouchStartX.current - touchEndX;
    const deltaY = upcomingTouchStartY.current - touchEndY;
    
    const absDeltaX = Math.abs(deltaX);
    const absDeltaY = Math.abs(deltaY);
    
    const minSwipeDistance = 50;

    // Only trigger horizontal scroll if horizontal movement is significantly greater than vertical
    // AND the horizontal movement exceeds minimum distance
    if (absDeltaX > absDeltaY * 1.5 && absDeltaX > minSwipeDistance) {
      e.preventDefault(); // Only prevent default for horizontal swipes
      if (deltaX > 0) {
        scrollFlyers('right', 'upcoming');
      } else {
        scrollFlyers('left', 'upcoming');
      }
    }
    // If vertical movement is greater or equal, do nothing - let browser handle vertical scroll
  };

  // Touch event handlers for past flyers
  const handlePastTouchStart = (e: React.TouchEvent) => {
    pastTouchStartX.current = e.touches[0].clientX;
    pastTouchStartY.current = e.touches[0].clientY;
  };

  const handlePastTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    
    const deltaX = pastTouchStartX.current - touchEndX;
    const deltaY = pastTouchStartY.current - touchEndY;
    
    const absDeltaX = Math.abs(deltaX);
    const absDeltaY = Math.abs(deltaY);
    
    const minSwipeDistance = 50;

    // Only trigger horizontal scroll if horizontal movement is significantly greater than vertical
    // AND the horizontal movement exceeds minimum distance
    if (absDeltaX > absDeltaY * 1.5 && absDeltaX > minSwipeDistance) {
      e.preventDefault(); // Only prevent default for horizontal swipes
      if (deltaX > 0) {
        scrollFlyers('right', 'past');
      } else {
        scrollFlyers('left', 'past');
      }
    }
    // If vertical movement is greater or equal, do nothing - let browser handle vertical scroll
  };

  // Wheel event handlers for trackpad/touchpad two-finger swipe (upcoming flyers)
  const handleUpcomingWheel = (e: React.WheelEvent) => {
    // Detect horizontal scrolling (two-finger swipe left/right on trackpad)
    const isHorizontalScroll = Math.abs(e.deltaX) > Math.abs(e.deltaY);
    
    if (isHorizontalScroll && Math.abs(e.deltaX) > 5) {
      e.preventDefault();
      
      // Accumulate deltaX for smoother detection
      upcomingAccumulatedDeltaX.current += e.deltaX;
      
      // Clear existing timeout
      if (upcomingWheelTimeout.current) {
        clearTimeout(upcomingWheelTimeout.current);
      }
      
      // Set new timeout to trigger scroll after accumulation
      upcomingWheelTimeout.current = setTimeout(() => {
        const threshold = 50; // Minimum accumulated delta to trigger scroll
        
        if (Math.abs(upcomingAccumulatedDeltaX.current) > threshold) {
          if (upcomingAccumulatedDeltaX.current > 0) {
            scrollFlyers('right', 'upcoming');
          } else {
            scrollFlyers('left', 'upcoming');
          }
        }
        
        // Reset accumulated delta
        upcomingAccumulatedDeltaX.current = 0;
      }, 100);
    }
  };

  // Wheel event handlers for trackpad/touchpad two-finger swipe (past flyers)
  const handlePastWheel = (e: React.WheelEvent) => {
    // Detect horizontal scrolling (two-finger swipe left/right on trackpad)
    const isHorizontalScroll = Math.abs(e.deltaX) > Math.abs(e.deltaY);
    
    if (isHorizontalScroll && Math.abs(e.deltaX) > 5) {
      e.preventDefault();
      
      // Accumulate deltaX for smoother detection
      pastAccumulatedDeltaX.current += e.deltaX;
      
      // Clear existing timeout
      if (pastWheelTimeout.current) {
        clearTimeout(pastWheelTimeout.current);
      }
      
      // Set new timeout to trigger scroll after accumulation
      pastWheelTimeout.current = setTimeout(() => {
        const threshold = 50; // Minimum accumulated delta to trigger scroll
        
        if (Math.abs(pastAccumulatedDeltaX.current) > threshold) {
          if (pastAccumulatedDeltaX.current > 0) {
            scrollFlyers('right', 'past');
          } else {
            scrollFlyers('left', 'past');
          }
        }
        
        // Reset accumulated delta
        pastAccumulatedDeltaX.current = 0;
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSlider />
      
      {/* Sankofa Royale Award Gala 2026 - Event Announcement Banner */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a0a2e 0%, #2d0b4e 30%, #4a1a00 70%, #1a0a2e 100%)' }}>
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-20" style={{ background: '#c9b037' }}></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-15" style={{ background: '#8e24aa' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-5" style={{ background: '#c9b037' }}></div>
          {/* Gold shimmer lines */}
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #c9b037, transparent)' }}></div>
          <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #c9b037, transparent)' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-10 md:py-12 relative z-10">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row items-center gap-8">

              {/* Left — Crown / Badge */}
              <div className="flex-shrink-0 text-center">
                <div className="relative inline-block">
                  <div className="absolute inset-0 rounded-full blur-2xl opacity-60" style={{ background: '#c9b037' }}></div>
                  <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center border-2" style={{ background: 'linear-gradient(135deg, #c9b037, #f0d060, #c9b037)', borderColor: '#f0d060' }}>
                    <i className="ri-vip-crown-fill text-5xl md:text-6xl" style={{ color: '#1a0a2e' }}></i>
                  </div>
                  <div className="mt-3 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase" style={{ background: 'rgba(201,176,55,0.2)', color: '#f0d060', border: '1px solid rgba(201,176,55,0.4)' }}>{copy.page.leftCrownBadge.text}</div>
                </div>
              </div>

              {/* Centre — Event Details */}
              <div className="flex-grow text-center lg:text-left">
                <div className="mb-2">
                  <span className="text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full" style={{ background: 'rgba(201,176,55,0.15)', color: '#c9b037', border: '1px solid rgba(201,176,55,0.3)' }}>{copy.page.centreEventDetails.label}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold leading-tight mt-3 mb-1" style={{ color: '#f0d060', fontFamily: 'Playfair Display, serif' }}>{copy.page.centreEventDetails.subheading}</h3>
                <p className="text-base md:text-lg font-semibold mb-1" style={{ color: 'rgba(255,255,255,0.9)' }}>{copy.page.centreEventDetails.text}</p>
                <p className="text-sm italic mb-4" style={{ color: 'rgba(255,255,255,0.65)' }}>{copy.page.centreEventDetails.text2}</p>

                {/* Event details row */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm">
                  <div className="flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.85)' }}>
                    <i className="ri-calendar-event-fill" style={{ color: '#c9b037' }}></i>
                    <span className="font-semibold">{copy.page.eventDetailsRow.label}</span>
                  </div>
                  <div className="hidden sm:block w-px h-4" style={{ background: 'rgba(201,176,55,0.4)' }}></div>
                  <div className="flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.85)' }}>
                    <i className="ri-time-fill" style={{ color: '#c9b037' }}></i>
                    <span>{copy.page.eventDetailsRow.label2}</span>
                  </div>
                  <div className="hidden sm:block w-px h-4" style={{ background: 'rgba(201,176,55,0.4)' }}></div>
                  <div className="flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.85)' }}>
                    <i className="ri-map-pin-fill" style={{ color: '#c9b037' }}></i>
                    <span>{copy.page.eventDetailsRow.label3}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-4">
                  {['Awards Gala &amp; Dinner', 'Red Carpet Experience', 'Entertainment &amp; Networking'].map((h) => (
                    <span key={h} className="text-xs px-3 py-1 rounded-full" style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.75)', border: '1px solid rgba(255,255,255,0.15)' }}
                      dangerouslySetInnerHTML={{ __html: h }}
                    />
                  ))}
                </div>
              </div>

              {/* Right — CTA */}
              <div className="flex-shrink-0 flex flex-col items-center gap-3">
                <a
                  href={copy.page.rightCta.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer"
                  style={{ background: 'linear-gradient(135deg, #c9b037, #f0d060)', color: '#1a0a2e' }}
                >
                  <i className="ri-ticket-2-fill text-xl"></i>{copy.page.rightCta.link}</a>
                <a
                  href="/sankofa-royale-awards"
                  className="text-xs font-medium transition-colors whitespace-nowrap cursor-pointer"
                  style={{ color: 'rgba(201,176,55,0.8)' }}
                >{copy.page.rightCta.link2}</a>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>

      <AboutSection />
      <ProgramsSection />
      
      {/* Upcoming Events Flyers Section - Horizontal Carousel */}
      {upcomingFlyers.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-[#8e24aa]/5 to-white">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-12">
                <div className="w-16 h-16 bg-[#8e24aa]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <i className="ri-calendar-event-line text-[#8e24aa] text-3xl"></i>
                </div>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">{copy.page.upcomingEventsFlyersSectionHorizontal.heading}</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">{copy.page.upcomingEventsFlyersSectionHorizontal.text}</p>
              </div>
            </ScrollReveal>

            {/* Horizontal Carousel Container */}
            <div className="relative max-w-7xl mx-auto">
              {/* Left Arrow */}
              {upcomingFlyers.length > 3 && (
                <button
                  onClick={() => scrollFlyers('left', 'upcoming')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/95 hover:bg-white text-[#8e24aa] p-4 rounded-full shadow-2xl hover:shadow-[#8e24aa]/30 transition-all duration-300 hover:scale-110 cursor-pointer -ml-6"
                  aria-label={copy.page.leftArrow.ariaLabel}
                >
                  <i className="ri-arrow-left-line text-2xl"></i>
                </button>
              )}

              {/* Scrollable Container */}
              <div
                id="upcoming-flyers-container"
                className="flex gap-6 overflow-x-hidden scroll-smooth px-2 py-4"
                onTouchStart={handleUpcomingTouchStart}
                onTouchEnd={handleUpcomingTouchEnd}
                onWheel={handleUpcomingWheel}
              >
                {upcomingFlyers.map((flyer, index) => (
                  <ScrollReveal key={flyer.id} delay={index * 0.1}>
                    <div className="flex-shrink-0 w-[350px] bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                      <div className="relative h-[400px] overflow-hidden">
                        <img
                          src={flyer.imageUrl}
                          alt={flyer.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 right-4 bg-[#8e24aa] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                          {new Date(flyer.date + 'T12:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">{flyer.title}</h3>
                        <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">{flyer.description}</p>
                        {/* 🔗 LINK TO UPCOMING EVENTS PAGE - Changed from flyer.eventLink to /upcoming-events */}
                        <a
                          href="/upcoming-events"
                          className="inline-flex items-center gap-2 text-[#8e24aa] font-semibold hover:text-[#26194f] transition-colors cursor-pointer"
                        >
                          <span>{copy.page.scrollableContainer.label}</span>
                          <i className="ri-arrow-right-line"></i>
                        </a>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Right Arrow */}
              {upcomingFlyers.length > 3 && (
                <button
                  onClick={() => scrollFlyers('right', 'upcoming')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/95 hover:bg-white text-[#8e24aa] p-4 rounded-full shadow-2xl hover:shadow-[#8e24aa]/30 transition-all duration-300 hover:scale-110 cursor-pointer -mr-6"
                  aria-label={copy.page.rightArrow.ariaLabel}
                >
                  <i className="ri-arrow-right-line text-2xl"></i>
                </button>
              )}
            </div>

            <div className="text-center mt-12">
              <a
                href="/upcoming-events"
                className="inline-block bg-gradient-to-r from-[#8e24aa] to-[#26194f] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer shadow-lg"
              >{copy.page.rightArrow.link}</a>
            </div>
          </div>
        </section>
      )}
      
      {/* Ongoing Programs & Trainings Section */}
      <TrainingsSection />
      
      {/* IMPACT STATS */}
      <section className="py-20 bg-gradient-to-br from-[#26194f] to-[#3c1053]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-white mb-4">{copy.page.impactStats.heading}</h2>
            <div className="w-24 h-1 bg-[#c9b037] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#c9b037] mb-3">{copy.page.impactStats.text}</div>
              <div className="text-lg text-white/90">{copy.page.impactStats.text2}</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#c9b037] mb-3">{copy.page.impactStats.text3}</div>
              <div className="text-lg text-white/90">{copy.page.impactStats.text4}</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#c9b037] mb-3">{copy.page.impactStats.text5}</div>
              <div className="text-lg text-white/90">{copy.page.impactStats.text6}</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#c9b037] mb-3">{copy.page.impactStats.text7}</div>
              <div className="text-lg text-white/90">{copy.page.impactStats.text8}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Food Bank Quick Link Section */}
      <section className="py-16 bg-gradient-to-br from-[#c9b037]/10 to-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-[400px]">
                  <img
                    src={copy.page.foodBankQuickLinkSection.image}
                    alt={copy.page.foodBankQuickLinkSection.imageAlt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
                </div>
                <div className="p-10 flex flex-col justify-center">
                  <div className="w-16 h-16 bg-[#c9b037]/10 rounded-full flex items-center justify-center mb-6">
                    <i className="fas fa-shopping-basket text-[#c9b037] text-3xl"></i>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">{copy.page.foodBankQuickLinkSection.heading}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{copy.page.foodBankQuickLinkSection.text}</p>
                  <div className="flex items-center gap-6 mb-6">
                    <div>
                      <div className="text-3xl font-bold text-[#c9b037]">{copy.page.foodBankQuickLinkSection.text2}</div>
                      <div className="text-sm text-gray-600">{copy.page.foodBankQuickLinkSection.text3}</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-[#c9b037]">{copy.page.foodBankQuickLinkSection.text4}</div>
                      <div className="text-sm text-gray-600">{copy.page.foodBankQuickLinkSection.text5}</div>
                    </div>
                  </div>
                  <a
                    href="/food-bank"
                    className="inline-block bg-[#c9b037] text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-[#b39f2f] transition-all whitespace-nowrap cursor-pointer w-fit"
                  >{copy.page.foodBankQuickLinkSection.link}</a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Disability Inclusion Program - Subtle Card */}
      <section className="py-16 bg-gradient-to-br from-[#3c1053]/5 to-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-[#c9b037]/20">
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 relative h-[300px] md:h-full">
                  <img
                    src={copy.page.disabilityInclusionProgramSubtleCard.image}
                    alt={copy.page.disabilityInclusionProgramSubtleCard.imageAlt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#3c1053]/30 to-transparent"></div>
                </div>
                <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
                  <div className="w-12 h-12 bg-[#c9b037]/10 rounded-full flex items-center justify-center mb-4">
                    <i className="ri-wheelchair-line text-[#c9b037] text-2xl"></i>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">{copy.page.disabilityInclusionProgramSubtleCard.heading}</h2>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">{copy.page.disabilityInclusionProgramSubtleCard.text}</p>
                  <a
                    href="/mental-health"
                    className="inline-flex items-center gap-2 text-[#c9b037] font-semibold hover:text-[#b39f2f] transition-colors cursor-pointer text-sm whitespace-nowrap w-fit"
                  >
                    <span>{copy.page.disabilityInclusionProgramSubtleCard.label}</span>
                    <i className="ri-arrow-right-line"></i>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <JavascriptSection />
      
      {/* Past Programs & Events Flyers Section - Horizontal Carousel */}
      {pastFlyers.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-12">
                <div className="w-16 h-16 bg-[#26194f]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <i className="ri-time-line text-[#26194f] text-3xl"></i>
                </div>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">{copy.page.pastProgramsAndEventsFlyers.heading}</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">{copy.page.pastProgramsAndEventsFlyers.text}</p>
              </div>
            </ScrollReveal>

            {/* Horizontal Carousel Container */}
            <div className="relative max-w-7xl mx-auto">
              {/* Left Arrow */}
              {pastFlyers.length > 3 && (
                <button
                  onClick={() => scrollFlyers('left', 'past')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/95 hover:bg-white text-[#26194f] p-4 rounded-full shadow-2xl hover:shadow-[#26194f]/30 transition-all duration-300 hover:scale-110 cursor-pointer -ml-6"
                  aria-label={copy.page.leftArrow.ariaLabel2}
                >
                  <i className="ri-arrow-left-line text-2xl"></i>
                </button>
              )}

              {/* Scrollable Container */}
              <div
                id="past-flyers-container"
                className="flex gap-6 overflow-x-hidden scroll-smooth px-2 py-4"
                onTouchStart={handlePastTouchStart}
                onTouchEnd={handlePastTouchEnd}
                onWheel={handlePastWheel}
              >
                {pastFlyers.map((flyer, index) => (
                  <ScrollReveal key={flyer.id} delay={index * 0.1}>
                    <div className="flex-shrink-0 w-[350px] bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                      <div className="relative h-[400px] overflow-hidden">
                        <img
                          src={flyer.imageUrl}
                          alt={flyer.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                          {new Date(flyer.date + 'T12:00:00').toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">{flyer.title}</h3>
                        <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">{flyer.description}</p>
                        {flyer.eventLink && (
                          <a
                            href={flyer.eventLink}
                            className="inline-flex items-center gap-2 text-[#26194f] font-semibold hover:text-[#8e24aa] transition-colors cursor-pointer"
                          >
                            <span>{copy.page.scrollableContainer.label2}</span>
                            <i className="ri-arrow-right-line"></i>
                          </a>
                        )}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Right Arrow */}
              {pastFlyers.length > 3 && (
                <button
                  onClick={() => scrollFlyers('right', 'past')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/95 hover:bg-white text-[#26194f] p-4 rounded-full shadow-2xl hover:shadow-[#26194f]/30 transition-all duration-300 hover:scale-110 cursor-pointer -mr-6"
                  aria-label={copy.page.rightArrow.ariaLabel2}
                >
                  <i className="ri-arrow-right-line text-2xl"></i>
                </button>
              )}
            </div>

            <div className="text-center mt-12">
              <a
                href="/events"
                className="inline-block bg-gradient-to-r from-[#26194f] to-[#8e24aa] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer shadow-lg"
              >{copy.page.rightArrow.link2}</a>
            </div>
          </div>
        </section>
      )}
      
      {/* Interactive Impact Map */}
      <ImpactMap />
      
      <FounderMessage />
      <ImageCarousel />
      <DonationCTA />
      <Footer />
    </div>
  );
};

export default HomePage;
