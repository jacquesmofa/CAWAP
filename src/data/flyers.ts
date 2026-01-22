// Centralized Flyers Data - Update here and it automatically reflects everywhere
// Upload your flyers to Imgur and add them here
// The system automatically determines if an event is upcoming or past based on the date!

export interface Flyer {
  id: string;
  title: string;
  imageUrl: string;
  date: string; // YYYY-MM-DD format
  description: string;
  eventLink?: string; // Optional link to event details page
}

export const flyers: Flyer[] = [
  // ========================================
  // 📢 ALL FLYERS - Just add the date!
  // ========================================
  // The system automatically shows:
  // - Future dates → Upcoming Events
  // - Past dates → Past Events
  // ========================================
  
  // EXAMPLE FLYERS - These show how the system works!
  {
    id: 'summer-camp-2026',
    title: 'Children Summer Camp 2026',
    imageUrl: 'https://readdy.ai/api/search-image?query=vibrant%20colorful%20children%20summer%20camp%20poster%20design%20featuring%20diverse%20happy%20kids%20playing%20outdoor%20activities%20swimming%20arts%20and%20crafts%20sports%20games%20with%20bright%20sunshine%20colorful%20tents%20and%20summer%20elements%20professional%20flyer%20design%20with%20energetic%20playful%20atmosphere&width=800&height=1200&seq=summer-camp-2026-flyer&orientation=portrait',
    date: '2026-07-15',  // Future date - automatically shows in Upcoming Events
    description: 'Join us for an unforgettable summer filled with fun activities, new friendships, swimming, arts, crafts, sports, and exciting adventures! Open to children ages 6-14. Register now - limited spots available!',
    eventLink: '/children-summer-camp'
  },
  {
    id: 'summer-camp-2024',
    title: 'Children Summer Camp 2024',
    imageUrl: 'https://readdy.ai/api/search-image?query=nostalgic%20summer%20camp%20memories%20poster%20design%20showing%20diverse%20children%20enjoying%20outdoor%20activities%20group%20photo%20style%20with%20summer%20sunshine%20nature%20activities%20swimming%20arts%20crafts%20campfire%20warm%20friendly%20atmosphere%20professional%20event%20flyer%20design&width=800&height=1200&seq=summer-camp-2024-flyer&orientation=portrait',
    date: '2024-07-20',  // Past date - automatically shows in Past Events
    description: 'An amazing summer camp where children experienced outdoor adventures, made lasting friendships, enjoyed swimming, arts and crafts, sports, and created unforgettable memories. Thank you to all participants and volunteers!',
    eventLink: '/children-summer-camp'
  },
  {
    id: 'cawap-javascript-2021',
    title: 'CAWAP JavaScript For Black Women',
    imageUrl: 'https://i.imgur.com/4QoPyPs.jpeg',
    date: '2021-08-02',  // Past date - automatically shows in Past Events
    description: 'A groundbreaking program empowering Afro Black women with JavaScript programming skills and tech career opportunities. This intensive training program provided hands-on coding experience, mentorship, and pathways to success in the technology industry.',
    eventLink: '/javascript-program'
  },
  
  // ========================================
  // 🎉 NEW DEMO FLYERS - Showcasing The Carousel!
  // ========================================
  
  // UPCOMING EVENTS
  {
    id: 'women-leadership-summit-2025',
    title: 'Women Leadership Summit 2025',
    imageUrl: 'https://readdy.ai/api/search-image?query=professional%20women%20leadership%20summit%20poster%20design%20featuring%20confident%20diverse%20women%20leaders%20in%20business%20attire%2C%20empowerment%20theme%20with%20gold%20and%20teal%20colors%2C%20modern%20corporate%20event%20flyer%20with%20inspiring%20atmosphere%2C%20professional%20photography%20showing%20strength%20and%20unity&width=800&height=1200&seq=women-leadership-2025&orientation=portrait',
    date: '2025-03-08',
    description: 'Celebrate International Women\'s Day with our annual Women Leadership Summit! Join inspiring speakers, networking sessions, and workshops designed to empower women leaders. Connect with mentors, build skills, and celebrate achievements together!',
    eventLink: '/women-empowerment'
  },
  {
    id: 'youth-tech-bootcamp-2025',
    title: 'Youth Tech Innovation Bootcamp',
    imageUrl: 'https://readdy.ai/api/search-image?query=modern%20youth%20technology%20bootcamp%20poster%20design%20with%20diverse%20teenagers%20coding%20on%20laptops%2C%20vibrant%20tech%20theme%20with%20neon%20colors%20and%20digital%20elements%2C%20innovative%20programming%20workshop%20flyer%2C%20energetic%20atmosphere%20showing%20young%20people%20learning%20technology%20skills&width=800&height=1200&seq=youth-tech-2025&orientation=portrait',
    date: '2025-04-15',
    description: 'Calling all young innovators! Join our intensive 2-week Tech Bootcamp where youth ages 13-18 will learn coding, app development, and digital design. Build real projects, meet tech mentors, and launch your tech career!',
    eventLink: '/youth-leadership'
  },
  {
    id: 'community-health-fair-2025',
    title: 'Community Health & Wellness Fair',
    imageUrl: 'https://readdy.ai/api/search-image?query=welcoming%20community%20health%20fair%20poster%20design%20with%20diverse%20families%20receiving%20health%20screenings%2C%20bright%20medical%20theme%20with%20green%20and%20white%20colors%2C%20wellness%20event%20flyer%20showing%20doctors%20nurses%20and%20happy%20community%20members%2C%20professional%20healthcare%20atmosphere&width=800&height=1200&seq=health-fair-2025&orientation=portrait',
    date: '2025-05-20',
    description: 'Free health screenings, wellness workshops, and expert consultations for the whole family! Join us for blood pressure checks, nutrition counseling, mental health resources, and more. Your health matters - come get the care you deserve!',
    eventLink: '/mental-health'
  },
  {
    id: 'financial-empowerment-workshop-2025',
    title: 'Financial Empowerment Workshop Series',
    imageUrl: 'https://readdy.ai/api/search-image?query=professional%20financial%20literacy%20workshop%20poster%20design%20with%20diverse%20people%20learning%20about%20money%20management%20budgeting%20and%20investing%2C%20modern%20clean%20design%20with%20green%20and%20gold%20colors%2C%20educational%20seminar%20flyer%20showing%20financial%20charts%20graphs%20and%20confident%20participants%2C%20inspiring%20atmosphere&width=800&height=1200&seq=financial-workshop-2025&orientation=portrait',
    date: '2025-06-10',
    description: 'Take control of your financial future! Join our comprehensive 4-week workshop series covering budgeting, saving, investing, credit management, and wealth building. Expert financial advisors will guide you toward financial independence and security!',
    eventLink: '/financial-literacy'
  },
  {
    id: 'back-to-school-drive-2025',
    title: 'Back to School Community Drive',
    imageUrl: 'https://readdy.ai/api/search-image?query=cheerful%20back%20to%20school%20community%20event%20poster%20design%20with%20excited%20diverse%20children%20holding%20backpacks%20and%20school%20supplies%2C%20bright%20colorful%20theme%20with%20yellow%20orange%20and%20blue%20colors%2C%20educational%20charity%20event%20flyer%20showing%20books%20pencils%20and%20happy%20families%2C%20welcoming%20atmosphere&width=800&height=1200&seq=back-to-school-2025&orientation=portrait',
    date: '2025-08-05',
    description: 'Help students start the school year strong! Join our annual Back to School Drive providing free backpacks, school supplies, uniforms, and educational resources to children in need. Together we can ensure every child has the tools to succeed!',
    eventLink: '/youth-leadership'
  },
  {
    id: 'seniors-appreciation-gala-2025',
    title: 'Seniors Appreciation Gala',
    imageUrl: 'https://readdy.ai/api/search-image?query=elegant%20seniors%20appreciation%20gala%20poster%20design%20with%20joyful%20elderly%20people%20celebrating%20at%20formal%20event%2C%20warm%20sophisticated%20theme%20with%20burgundy%20and%20gold%20colors%2C%20classy%20celebration%20flyer%20showing%20dressed%20up%20seniors%20dancing%20and%20socializing%2C%20dignified%20festive%20atmosphere&width=800&height=1200&seq=seniors-gala-2025&orientation=portrait',
    date: '2025-09-15',
    description: 'Honoring our beloved seniors with an elegant evening of celebration! Join us for dinner, live entertainment, dancing, and heartfelt tributes to the wisdom and contributions of our elder community members. A night to remember and cherish!',
    eventLink: '/heart-wise-seniors'
  },
  {
    id: 'halloween-family-festival-2025',
    title: 'Halloween Family Festival',
    imageUrl: 'https://readdy.ai/api/search-image?query=fun%20halloween%20family%20festival%20poster%20design%20with%20diverse%20children%20and%20families%20in%20creative%20costumes%20trick%20or%20treating%2C%20festive%20orange%20purple%20and%20black%20colors%2C%20community%20celebration%20flyer%20showing%20pumpkins%20decorations%20games%20and%20happy%20families%2C%20playful%20spooky%20atmosphere&width=800&height=1200&seq=halloween-fest-2025&orientation=portrait',
    date: '2025-10-25',
    description: 'Spooktacular fun for the whole family! Join us for costume contests, trick-or-treating, carnival games, haunted house, face painting, and delicious treats. A safe, family-friendly Halloween celebration bringing our community together!',
    eventLink: '/cultural-events'
  },
  {
    id: 'thanksgiving-food-drive-2025',
    title: 'Thanksgiving Community Food Drive',
    imageUrl: 'https://readdy.ai/api/search-image?query=heartwarming%20thanksgiving%20food%20drive%20poster%20design%20with%20diverse%20volunteers%20distributing%20food%20baskets%20to%20grateful%20families%2C%20warm%20autumn%20theme%20with%20orange%20brown%20and%20gold%20colors%2C%20charity%20event%20flyer%20showing%20fresh%20produce%20turkey%20and%20community%20support%2C%20compassionate%20giving%20atmosphere&width=800&height=1200&seq=thanksgiving-drive-2025&orientation=portrait',
    date: '2025-11-20',
    description: 'Share the spirit of gratitude this Thanksgiving! Join our community food drive providing complete holiday meals to families in need. Volunteer opportunities available for meal preparation, packing, and distribution. Together we can make every table abundant!',
    eventLink: '/food-pantry'
  },
  
  // ========================================
  // 🎉 2026 UPCOMING EVENTS - New Additions!
  // ========================================
  
  {
    id: 'black-history-celebration-2026',
    title: 'Black History Month Celebration 2026',
    imageUrl: 'https://readdy.ai/api/search-image?query=powerful%20black%20history%20month%20celebration%20poster%20design%20with%20diverse%20african%20and%20caribbean%20people%20celebrating%20heritage%20and%20culture%2C%20vibrant%20red%20yellow%20green%20and%20black%20colors%2C%20inspiring%20community%20event%20flyer%20showing%20traditional%20african%20clothing%20art%20music%20and%20proud%20cultural%20expressions%2C%20uplifting%20empowering%20atmosphere&width=800&height=1200&seq=black-history-2026&orientation=portrait',
    date: '2026-02-15',
    description: 'Join us for a powerful celebration of Black History Month! Experience inspiring speakers, cultural performances, art exhibitions, traditional cuisine, and community storytelling. Honoring our past, celebrating our present, and building our future together!',
    eventLink: '/cultural-events'
  },
  {
    id: 'spring-wellness-retreat-2026',
    title: 'Spring Wellness & Mindfulness Retreat',
    imageUrl: 'https://readdy.ai/api/search-image?query=peaceful%20spring%20wellness%20retreat%20poster%20design%20with%20diverse%20people%20practicing%20yoga%20and%20meditation%20in%20beautiful%20natural%20outdoor%20setting%2C%20calming%20theme%20with%20soft%20green%20blue%20and%20lavender%20colors%2C%20holistic%20health%20event%20flyer%20showing%20mindfulness%20activities%20nature%20and%20serene%20atmosphere%2C%20tranquil%20rejuvenating%20mood&width=800&height=1200&seq=wellness-retreat-2026&orientation=portrait',
    date: '2026-04-10',
    description: 'Refresh your mind, body, and spirit at our Spring Wellness Retreat! Join us for yoga sessions, meditation workshops, nutrition seminars, nature walks, and holistic health consultations. Take time for self-care and connect with a supportive wellness community!',
    eventLink: '/mental-health'
  },
  {
    id: 'entrepreneurship-summit-2026',
    title: 'Community Entrepreneurship Summit',
    imageUrl: 'https://readdy.ai/api/search-image?query=dynamic%20entrepreneurship%20summit%20poster%20design%20with%20diverse%20business%20owners%20and%20entrepreneurs%20networking%20and%20presenting%20ideas%2C%20professional%20theme%20with%20navy%20blue%20gold%20and%20white%20colors%2C%20business%20conference%20flyer%20showing%20innovation%20startup%20culture%20and%20successful%20entrepreneurs%2C%20motivating%20ambitious%20atmosphere&width=800&height=1200&seq=entrepreneur-summit-2026&orientation=portrait',
    date: '2026-05-22',
    description: 'Launch your business dreams into reality! Join successful entrepreneurs, investors, and business mentors for workshops on business planning, funding strategies, marketing, and scaling your venture. Network with fellow entrepreneurs and access resources to turn your vision into success!',
    eventLink: '/financial-literacy'
  },
  {
    id: 'family-fun-day-2026',
    title: 'Annual Family Fun Day Festival',
    imageUrl: 'https://readdy.ai/api/search-image?query=joyful%20family%20fun%20day%20festival%20poster%20design%20with%20diverse%20families%20enjoying%20outdoor%20activities%20games%20and%20entertainment%20together%2C%20bright%20cheerful%20theme%20with%20rainbow%20colors%20and%20sunshine%2C%20community%20celebration%20flyer%20showing%20children%20playing%20face%20painting%20bouncy%20castles%20food%20vendors%20and%20happy%20families%2C%20festive%20energetic%20atmosphere&width=800&height=1200&seq=family-fun-2026&orientation=portrait',
    date: '2026-08-20',
    description: 'The biggest family celebration of the year! Join us for carnival games, live entertainment, food trucks, bouncy castles, face painting, talent shows, and community performances. Free admission with activities for all ages. Bring the whole family for a day of unforgettable fun!',
    eventLink: '/cultural-events'
  },
  {
    id: 'holiday-gift-drive-2026',
    title: 'Holiday Gift Drive & Toy Distribution',
    imageUrl: 'https://readdy.ai/api/search-image?query=heartwarming%20holiday%20gift%20drive%20poster%20design%20with%20diverse%20children%20receiving%20wrapped%20presents%20and%20toys%20from%20volunteers%2C%20festive%20theme%20with%20red%20green%20gold%20and%20white%20colors%2C%20christmas%20charity%20event%20flyer%20showing%20gift%20boxes%20decorated%20trees%20and%20joyful%20families%2C%20warm%20generous%20holiday%20spirit%20atmosphere&width=800&height=1200&seq=holiday-gifts-2026&orientation=portrait',
    date: '2026-12-15',
    description: 'Spread holiday joy to children and families in need! Join our annual Holiday Gift Drive providing toys, clothing, and essential items to ensure every child experiences the magic of the season. Volunteer opportunities available for gift wrapping, sorting, and distribution. Together we can make the holidays brighter!',
    eventLink: '/youth-leadership'
  },
  
  // PAST EVENTS
  {
    id: 'sankofa-awards-gala-2024',
    title: 'Sankofa Royale Awards Gala 2024',
    imageUrl: 'https://readdy.ai/api/search-image?query=elegant%20awards%20gala%20poster%20design%20with%20gold%20and%20black%20theme%2C%20sophisticated%20formal%20event%20flyer%20featuring%20trophy%20and%20celebration%20elements%2C%20luxury%20ballroom%20atmosphere%20with%20dressed%20up%20attendees%2C%20professional%20photography%20showing%20prestige%20and%20achievement&width=800&height=1200&seq=sankofa-awards-2024&orientation=portrait',
    date: '2024-11-15',
    description: 'A spectacular evening celebrating excellence and achievement in our community! The 2024 Sankofa Royale Awards honored outstanding leaders, volunteers, and change-makers. Thank you to all honorees and attendees for making this night unforgettable!',
    eventLink: '/sankofa-royale-awards'
  },
  {
    id: 'cultural-festival-2024',
    title: 'African Heritage Cultural Festival',
    imageUrl: 'https://readdy.ai/api/search-image?query=vibrant%20african%20cultural%20festival%20poster%20design%20with%20traditional%20dancers%20in%20colorful%20costumes%2C%20energetic%20celebration%20with%20drums%20and%20cultural%20elements%2C%20bright%20festive%20colors%20red%20yellow%20green%2C%20professional%20event%20flyer%20showing%20african%20heritage%20and%20traditions&width=800&height=1200&seq=cultural-fest-2024&orientation=portrait',
    date: '2024-09-28',
    description: 'A magnificent celebration of African culture, heritage, and traditions! Our community came together for traditional dance performances, authentic cuisine, cultural exhibitions, and live music. Thank you for celebrating our rich heritage with us!',
    eventLink: '/cultural-events'
  },
  
  // ========================================
  // 📝 ADD YOUR FLYERS BELOW
  // ========================================
  // Uncomment and modify the templates below
  // Just set the date - the system does the rest!
  // ========================================
  
  // UPCOMING EVENT EXAMPLE:
  // {
  //   id: 'event-1',
  //   title: 'Community Health Fair 2025',
  //   imageUrl: 'https://i.imgur.com/YOUR_IMGUR_URL_HERE.jpg',
  //   date: '2025-03-15',  // Just set the date - system handles the rest!
  //   description: 'Join us for free health screenings, wellness workshops, and community resources.',
  //   eventLink: '/contact'
  // },
  
  // {
  //   id: 'event-2',
  //   title: 'Youth Leadership Summit 2025',
  //   imageUrl: 'https://i.imgur.com/YOUR_IMGUR_URL_HERE.jpg',
  //   date: '2025-04-20',
  //   description: 'Empowering young leaders with skills and connections for success.',
  //   eventLink: '/youth-leadership'
  // },
  
  // {
  //   id: 'event-3',
  //   title: 'Women Empowerment Workshop 2025',
  //   imageUrl: 'https://i.imgur.com/YOUR_IMGUR_URL_HERE.jpg',
  //   date: '2025-05-10',
  //   description: 'Empowering women through skills training and networking opportunities.',
  //   eventLink: '/women-empowerment'
  // },
  
  // {
  //   id: 'event-4',
  //   title: 'Financial Literacy Workshop 2025',
  //   imageUrl: 'https://i.imgur.com/YOUR_IMGUR_URL_HERE.jpg',
  //   date: '2025-06-05',
  //   description: 'Learn essential financial planning and management skills for your future.',
  //   eventLink: '/financial-literacy'
  // },
  
  // {
  //   id: 'event-5',
  //   title: 'Community Cultural Festival 2025',
  //   imageUrl: 'https://i.imgur.com/YOUR_IMGUR_URL_HERE.jpg',
  //   date: '2025-08-20',
  //   description: 'Celebrating diversity with music, dance, food, and cultural performances.',
  //   eventLink: '/cultural-events'
  // },
  
  // PAST EVENT EXAMPLE:
  // {
  //   id: 'event-6',
  //   title: 'Sankofa Royale Awards 2024',
  //   imageUrl: 'https://i.imgur.com/YOUR_IMGUR_URL_HERE.jpg',
  //   date: '2024-11-15',  // Past date - automatically shows in Past Events
  //   description: 'Celebrating excellence and achievement in our community.',
  //   eventLink: '/sankofa-royale-awards'
  // },
  
  // {
  //   id: 'event-7',
  //   title: 'Christmas Event 2024',
  //   imageUrl: 'https://i.imgur.com/YOUR_IMGUR_URL_HERE.jpg',
  //   date: '2024-12-20',
  //   description: 'A joyful celebration bringing our community together for the holidays.',
  //   eventLink: '/christmas-event'
  // },
  
  // {
  //   id: 'event-8',
  //   title: 'Women Empowerment Workshop 2024',
  //   imageUrl: 'https://i.imgur.com/YOUR_IMGUR_URL_HERE.jpg',
  //   date: '2024-10-10',
  //   description: 'Empowering women through skills training and networking.',
  //   eventLink: '/women-empowerment'
  // },
  
  // {
  //   id: 'event-9',
  //   title: 'Cultural Festival 2024',
  //   imageUrl: 'https://i.imgur.com/YOUR_IMGUR_URL_HERE.jpg',
  //   date: '2024-09-25',
  //   description: 'Celebrating diversity with music, dance, and traditional cuisine.',
  //   eventLink: '/cultural-events'
  // },
  
  // {
  //   id: 'event-10',
  //   title: 'Food Bank Drive 2024',
  //   imageUrl: 'https://i.imgur.com/YOUR_IMGUR_URL_HERE.jpg',
  //   date: '2024-08-15',
  //   description: 'Community food drive supporting families in need.',
  //   eventLink: '/food-pantry'
  // },
  
  // {
  //   id: 'event-11',
  //   title: 'Mental Health Awareness Week 2024',
  //   imageUrl: 'https://i.imgur.com/YOUR_IMGUR_URL_HERE.jpg',
  //   date: '2024-07-10',
  //   description: 'Promoting mental health awareness and support services.',
  //   eventLink: '/mental-health'
  // },
  
  // {
  //   id: 'event-12',
  //   title: 'Youth Leadership Workshop 2024',
  //   imageUrl: 'https://i.imgur.com/YOUR_IMGUR_URL_HERE.jpg',
  //   date: '2024-06-15',
  //   description: 'Building leadership skills for the next generation.',
  //   eventLink: '/youth-leadership'
  // },
  
  // ADD MORE FLYERS HERE - Just uncomment and fill in!
  // Copy the template above and modify as needed
  // The date automatically determines if it's upcoming or past!
];

// Helper functions - automatically filter by date
export const getUpcomingFlyers = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset to start of day for accurate comparison
  
  return flyers
    .filter(f => new Date(f.date) >= today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()); // Sort by date (earliest first)
};

export const getPastFlyers = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset to start of day for accurate comparison
  
  return flyers
    .filter(f => new Date(f.date) < today)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Sort by date (most recent first)
};

export const getAllFlyers = () => flyers;
