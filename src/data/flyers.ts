
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
  // ========================================
  // 📋 DETAILED EVENT INFO (Optional)
  // ========================================
  // Add these fields for popup modal details
  registrationLink?: string; // External registration form URL
  time?: string; // Event time
  location?: string; // Event location
  cost?: string; // Event cost
  hosts?: { name: string; title: string }[]; // Event hosts
  whoShouldAttend?: string[]; // Target audience
  whatYouWillLearn?: string[]; // Learning outcomes
  bonuses?: string[]; // Bonus items for attendees
  contactEmail?: string;
  contactPhone?: string;
}

export const flyers: Flyer[] = [
  // ========================================
  // 📢 ALL FLYERS - Just add the date!
  // ========================================
  // The system automatically shows:
  // - Future dates → Upcoming Events
  // - Past dates → Past Events
  // ========================================
  
  // ========================================
  // 🆕 BLACK BUSINESS START-UP SEMINAR - February 28, 2026
  // ========================================
  {
    id: 'black-business-startup-seminar-2026',
    title: 'Black Business Start-Up Seminar - Celebrating Black History Month',
    imageUrl: 'https://i.imgur.com/k5avwfF.jpeg',
    date: '2026-02-28',  // Saturday Feb 28, 2026
    description: 'From Idea to Impact: Launching Your Business the Right Way. A FREE empowerment seminar for aspiring Black entrepreneurs.',
    eventLink: '/contact',
    // 📋 FULL EVENT DETAILS FOR POPUP
    registrationLink: 'https://forms.gle/hGmz97f4wcfKcVPU9',
    time: '11:00 AM - 2:00 PM',
    location: '101 West Drive, Unit 7',
    cost: 'FREE (Registration Required)',
    hosts: [
      { name: 'Rev. Dr. Irine Ashu', title: 'Founder, CAWAP | Trinity International Consulting Services - Community Development Consultant & Business Coach' },
      { name: 'Dr. Jamila Aman', title: 'Capacity Wise Consulting / Premier Canadian Business Solutions Inc.' }
    ],
    whoShouldAttend: [
      'Individuals who want to start a business but don\'t know where to begin',
      'People with business ideas but no clear plan',
      'Newcomers & youth seeking financial independence',
      'Side-hustlers ready to go legit',
      'Community members tired of trial-and-error'
    ],
    whatYouWillLearn: [
      'How to identify a profitable business idea',
      'Choosing the right business name & brand identity',
      'Business registration in Ontario (step-by-step)',
      'Understanding your ideal customer & market fit',
      'Location strategies: online vs physical business',
      'Startup costs, budgeting & funding options',
      'Legal basics: permits, licenses & compliance',
      'Launch planning: how to go live with confidence',
      'Marketing your first clients without wasting money'
    ],
    bonuses: [
      'Free Business Startup Checklist',
      'Business Name Brainstorm Worksheet',
      'One-on-One Consultation Raffle',
      'Access to Ongoing Mentorship Program'
    ],
    contactEmail: 'cawap2025@gmail.com',
    contactPhone: '+1 (647) 581-5901'
  },
  
  // ========================================
  // OTHER UPCOMING EVENTS WITH DETAILS
  // ========================================
  {
    id: 'summer-camp-2026',
    title: 'Children Summer Camp 2026',
    imageUrl: 'https://readdy.ai/api/search-image?query=vibrant%20colorful%20children%20summer%20camp%20poster%20design%20featuring%20diverse%20happy%20kids%20playing%20outdoor%20activities%20swimming%20arts%20and%20crafts%20sports%20games%20with%20bright%20sunshine%20colorful%20tents%20and%20summer%20elements%20professional%20flyer%20design%20with%20energetic%20playful%20atmosphere&width=800&height=1200&seq=summer-camp-2026-flyer&orientation=portrait',
    date: '2026-07-15',
    description: 'Join us for an unforgettable summer filled with fun activities, new friendships, swimming, arts, crafts, sports, and exciting adventures!',
    eventLink: '/children-summer-camp',
    registrationLink: '/contact',
    time: '9:00 AM - 4:00 PM (Daily)',
    location: 'CAWAP Community Center',
    cost: 'Contact for pricing',
    whoShouldAttend: [
      'Children ages 6-14',
      'Kids looking for summer fun and learning',
      'Families seeking quality summer programs'
    ],
    whatYouWillLearn: [
      'Swimming and water safety',
      'Arts and crafts projects',
      'Team sports and games',
      'Leadership and social skills',
      'Cultural awareness activities'
    ],
    contactEmail: 'cawap2025@gmail.com',
    contactPhone: '+1 (647) 581-5901'
  },
  {
    id: 'women-leadership-summit-2025',
    title: 'Women Leadership Summit 2025',
    imageUrl: 'https://readdy.ai/api/search-image?query=professional%20women%20leadership%20summit%20poster%20design%20featuring%20confident%20diverse%20women%20leaders%20in%20business%20attire%2C%20empowerment%20theme%20with%20gold%20and%20teal%20colors%2C%20modern%20corporate%20event%20flyer%20with%20inspiring%20atmosphere%2C%20professional%20photography%20showing%20strength%20and%20unity&width=800&height=1200&seq=women-leadership-2025&orientation=portrait',
    date: '2025-03-08',
    description: 'Celebrate International Women\'s Day with our annual Women Leadership Summit! Join inspiring speakers, networking sessions, and workshops.',
    eventLink: '/women-empowerment',
    registrationLink: '/contact',
    time: '10:00 AM - 5:00 PM',
    location: 'CAWAP Community Center',
    cost: 'FREE',
    whoShouldAttend: [
      'Women seeking leadership development',
      'Aspiring entrepreneurs and professionals',
      'Community leaders and advocates',
      'Anyone passionate about women empowerment'
    ],
    whatYouWillLearn: [
      'Leadership strategies and skills',
      'Networking and relationship building',
      'Career advancement techniques',
      'Work-life balance strategies',
      'Building confidence and presence'
    ],
    contactEmail: 'cawap2025@gmail.com',
    contactPhone: '+1 (647) 581-5901'
  },
  {
    id: 'youth-tech-bootcamp-2025',
    title: 'Youth Tech Innovation Bootcamp',
    imageUrl: 'https://readdy.ai/api/search-image?query=modern%20youth%20technology%20bootcamp%20poster%20design%20with%20diverse%20teenagers%20coding%20on%20laptops%2C%20vibrant%20tech%20theme%20with%20neon%20colors%20and%20digital%20elements%2C%20innovative%20programming%20workshop%20flyer%2C%20energetic%20atmosphere%20showing%20young%20people%20learning%20technology%20skills&width=800&height=1200&seq=youth-tech-2025&orientation=portrait',
    date: '2025-04-15',
    description: 'Calling all young innovators! Join our intensive 2-week Tech Bootcamp where youth ages 13-18 will learn coding, app development, and digital design.',
    eventLink: '/youth-leadership',
    registrationLink: '/contact',
    time: '10:00 AM - 3:00 PM (2 weeks)',
    location: 'CAWAP Tech Lab',
    cost: 'FREE - Limited Spots',
    whoShouldAttend: [
      'Youth ages 13-18',
      'Aspiring programmers and developers',
      'Students interested in technology careers',
      'Creative minds wanting to build apps'
    ],
    whatYouWillLearn: [
      'Introduction to coding and programming',
      'Web development basics',
      'App design and development',
      'Digital design and graphics',
      'Project management and teamwork'
    ],
    bonuses: [
      'Certificate of completion',
      'Portfolio of projects',
      'Mentorship connections',
      'Career guidance sessions'
    ],
    contactEmail: 'cawap2025@gmail.com',
    contactPhone: '+1 (647) 581-5901'
  },
  {
    id: 'community-health-fair-2025',
    title: 'Community Health & Wellness Fair',
    imageUrl: 'https://readdy.ai/api/search-image?query=welcoming%20community%20health%20fair%20poster%20design%20with%20diverse%20families%20receiving%20health%20screenings%2C%20bright%20medical%20theme%20with%20green%20and%20white%20colors%2C%20wellness%20event%20flyer%20showing%20doctors%20nurses%20and%20happy%20community%20members%2C%20professional%20healthcare%20atmosphere&width=800&height=1200&seq=health-fair-2025&orientation=portrait',
    date: '2025-05-20',
    description: 'Free health screenings, wellness workshops, and expert consultations for the whole family!',
    eventLink: '/mental-health',
    registrationLink: '/contact',
    time: '9:00 AM - 4:00 PM',
    location: 'CAWAP Community Center',
    cost: 'FREE',
    whoShouldAttend: [
      'Families seeking health resources',
      'Individuals needing health screenings',
      'Community members interested in wellness',
      'Anyone wanting to learn about healthy living'
    ],
    whatYouWillLearn: [
      'Blood pressure and health screenings',
      'Nutrition and healthy eating',
      'Mental health awareness',
      'Exercise and fitness tips',
      'Access to healthcare resources'
    ],
    contactEmail: 'cawap2025@gmail.com',
    contactPhone: '+1 (647) 581-5901'
  },
  {
    id: 'financial-empowerment-workshop-2025',
    title: 'Financial Empowerment Workshop Series',
    imageUrl: 'https://readdy.ai/api/search-image?query=professional%20financial%20literacy%20workshop%20poster%20design%20with%20diverse%20people%20learning%20about%20money%20management%20budgeting%20and%20investing%2C%20modern%20clean%20design%20with%20green%20and%20gold%20colors%2C%20educational%20seminar%20flyer%20showing%20financial%20charts%20graphs%20and%20confident%20participants%2C%20inspiring%20atmosphere&width=800&height=1200&seq=financial-workshop-2025&orientation=portrait',
    date: '2025-06-10',
    description: 'Take control of your financial future! Join our comprehensive 4-week workshop series covering budgeting, saving, investing, and wealth building.',
    eventLink: '/financial-literacy',
    registrationLink: '/contact',
    time: '6:00 PM - 8:00 PM (4 weeks)',
    location: 'CAWAP Community Center',
    cost: 'FREE',
    whoShouldAttend: [
      'Anyone wanting to improve financial literacy',
      'Newcomers learning Canadian financial systems',
      'Families seeking budgeting help',
      'Individuals planning for retirement'
    ],
    whatYouWillLearn: [
      'Budgeting and expense tracking',
      'Saving strategies and emergency funds',
      'Introduction to investing',
      'Credit management and improvement',
      'Wealth building fundamentals'
    ],
    contactEmail: 'cawap2025@gmail.com',
    contactPhone: '+1 (647) 581-5901'
  },
  {
    id: 'back-to-school-drive-2025',
    title: 'Back to School Community Drive',
    imageUrl: 'https://readdy.ai/api/search-image?query=cheerful%20back%20to%20school%20community%20event%20poster%20design%20with%20excited%20diverse%20children%20holding%20backpacks%20and%20school%20supplies%2C%20bright%20colorful%20theme%20with%20yellow%20orange%20and%20blue%20colors%2C%20educational%20charity%20event%20flyer%20showing%20books%20pencils%20and%20happy%20families%2C%20welcoming%20atmosphere&width=800&height=1200&seq=back-to-school-2025&orientation=portrait',
    date: '2025-08-05',
    description: 'Help students start the school year strong! Free backpacks, school supplies, uniforms, and educational resources.',
    eventLink: '/youth-leadership',
    registrationLink: '/contact',
    time: '10:00 AM - 3:00 PM',
    location: 'CAWAP Community Center',
    cost: 'FREE',
    whoShouldAttend: [
      'Families with school-age children',
      'Students needing school supplies',
      'Volunteers wanting to help',
      'Community members supporting education'
    ],
    contactEmail: 'cawap2025@gmail.com',
    contactPhone: '+1 (647) 581-5901'
  },
  {
    id: 'seniors-appreciation-gala-2025',
    title: 'Seniors Appreciation Gala',
    imageUrl: 'https://readdy.ai/api/search-image?query=elegant%20seniors%20appreciation%20gala%20poster%20design%20with%20joyful%20elderly%20people%20celebrating%20at%20formal%20event%2C%20warm%20sophisticated%20theme%20with%20burgundy%20and%20gold%20colors%2C%20classy%20celebration%20flyer%20showing%20dressed%20up%20seniors%20dancing%20and%20socializing%2C%20dignified%20festive%20atmosphere&width=800&height=1200&seq=seniors-gala-2025&orientation=portrait',
    date: '2025-09-15',
    description: 'Honoring our beloved seniors with an elegant evening of celebration! Dinner, live entertainment, dancing, and heartfelt tributes.',
    eventLink: '/heart-wise-seniors',
    registrationLink: '/contact',
    time: '5:00 PM - 10:00 PM',
    location: 'CAWAP Banquet Hall',
    cost: 'FREE for Seniors',
    whoShouldAttend: [
      'Seniors in our community',
      'Family members of seniors',
      'Caregivers and supporters',
      'Community members honoring elders'
    ],
    contactEmail: 'cawap2025@gmail.com',
    contactPhone: '+1 (647) 581-5901'
  },
  {
    id: 'halloween-family-festival-2025',
    title: 'Halloween Family Festival',
    imageUrl: 'https://readdy.ai/api/search-image?query=fun%20halloween%20family%20festival%20poster%20design%20with%20diverse%20children%20and%20families%20in%20creative%20costumes%20trick%20or%20treating%2C%20festive%20orange%20purple%20and%20black%20colors%2C%20community%20celebration%20flyer%20showing%20pumpkins%20decorations%20games%20and%20happy%20families%2C%20playful%20spooky%20atmosphere&width=800&height=1200&seq=halloween-fest-2025&orientation=portrait',
    date: '2025-10-25',
    description: 'Spooktacular fun for the whole family! Costume contests, trick-or-treating, carnival games, haunted house, and face painting.',
    eventLink: '/cultural-events',
    registrationLink: '/contact',
    time: '4:00 PM - 9:00 PM',
    location: 'CAWAP Community Center',
    cost: 'FREE',
    whoShouldAttend: [
      'Families with children',
      'Kids who love Halloween',
      'Community members seeking safe celebration',
      'Anyone wanting festive fun'
    ],
    contactEmail: 'cawap2025@gmail.com',
    contactPhone: '+1 (647) 581-5901'
  },
  {
    id: 'thanksgiving-food-drive-2025',
    title: 'Thanksgiving Community Food Drive',
    imageUrl: 'https://readdy.ai/api/search-image?query=heartwarming%20thanksgiving%20food%20drive%20poster%20design%20with%20diverse%20volunteers%20distributing%20food%20baskets%20to%20grateful%20families%2C%20warm%20autumn%20theme%20with%20orange%20brown%20and%20gold%20colors%2C%20charity%20event%20flyer%20showing%20fresh%20produce%20turkey%20and%20community%20support%2C%20compassionate%20giving%20atmosphere&width=800&height=1200&seq=thanksgiving-drive-2025&orientation=portrait',
    date: '2025-11-20',
    description: 'Share the spirit of gratitude this Thanksgiving! Complete holiday meals for families in need.',
    eventLink: '/food-bank',
    registrationLink: '/contact',
    time: '10:00 AM - 4:00 PM',
    location: 'CAWAP Food Bank',
    cost: 'FREE',
    whoShouldAttend: [
      'Families needing food assistance',
      'Volunteers wanting to help',
      'Donors contributing to the cause',
      'Community members spreading gratitude'
    ],
    contactEmail: 'cawap2025@gmail.com',
    contactPhone: '+1 (647) 581-5901'
  },
  {
    id: 'black-history-celebration-2026',
    title: 'Black History Month Celebration 2026',
    imageUrl: 'https://readdy.ai/api/search-image?query=powerful%20black%20history%20month%20celebration%20poster%20design%20with%20diverse%20african%20and%20caribbean%20people%20celebrating%20heritage%20and%20culture%2C%20vibrant%20red%20yellow%20green%20and%20black%20colors%2C%20inspiring%20community%20event%20flyer%20showing%20traditional%20african%20clothing%20art%20music%20and%20proud%20cultural%20expressions%2C%20uplifting%20empowering%20atmosphere&width=800&height=1200&seq=black-history-2026&orientation=portrait',
    date: '2026-02-15',
    description: 'A powerful celebration of Black History Month! Inspiring speakers, cultural performances, art exhibitions, and traditional cuisine.',
    eventLink: '/cultural-events',
    registrationLink: '/contact',
    time: '12:00 PM - 6:00 PM',
    location: 'CAWAP Community Center',
    cost: 'FREE',
    whoShouldAttend: [
      'Everyone celebrating Black history',
      'Families and community members',
      'Cultural enthusiasts',
      'Students and educators'
    ],
    whatYouWillLearn: [
      'Black history and heritage',
      'Cultural traditions and customs',
      'Stories of achievement and resilience',
      'Community building and unity'
    ],
    contactEmail: 'cawap2025@gmail.com',
    contactPhone: '+1 (647) 581-5901'
  },
  {
    id: 'spring-wellness-retreat-2026',
    title: 'Spring Wellness & Mindfulness Retreat',
    imageUrl: 'https://readdy.ai/api/search-image?query=peaceful%20spring%20wellness%20retreat%20poster%20design%20with%20diverse%20people%20practicing%20yoga%20and%20meditation%20in%20beautiful%20natural%20outdoor%20setting%2C%20calming%20theme%20with%20soft%20green%20blue%20and%20lavender%20colors%2C%20holistic%20health%20event%20flyer%20showing%20mindfulness%20activities%20nature%20and%20serene%20atmosphere%2C%20tranquil%20rejuvenating%20mood&width=800&height=1200&seq=wellness-retreat-2026&orientation=portrait',
    date: '2026-04-10',
    description: 'Refresh your mind, body, and spirit! Yoga sessions, meditation workshops, nutrition seminars, and nature walks.',
    eventLink: '/mental-health',
    registrationLink: '/contact',
    time: '8:00 AM - 5:00 PM',
    location: 'Outdoor Retreat Center',
    cost: 'Contact for pricing',
    whoShouldAttend: [
      'Anyone seeking wellness and relaxation',
      'Individuals interested in mindfulness',
      'People wanting stress relief',
      'Health-conscious community members'
    ],
    whatYouWillLearn: [
      'Yoga and stretching techniques',
      'Meditation and mindfulness practices',
      'Healthy nutrition habits',
      'Stress management strategies',
      'Self-care routines'
    ],
    contactEmail: 'cawap2025@gmail.com',
    contactPhone: '+1 (647) 581-5901'
  },
  {
    id: 'entrepreneurship-summit-2026',
    title: 'Community Entrepreneurship Summit',
    imageUrl: 'https://readdy.ai/api/search-image?query=dynamic%20entrepreneurship%20summit%20poster%20design%20with%20diverse%20business%20owners%20and%20entrepreneurs%20networking%20and%20presenting%20ideas%2C%20professional%20theme%20with%20navy%20blue%20gold%20and%20white%20colors%2C%20business%20conference%20flyer%20showing%20innovation%20startup%20culture%20and%20successful%20entrepreneurs%2C%20motivating%20ambitious%20atmosphere&width=800&height=1200&seq=entrepreneur-summit-2026&orientation=portrait',
    date: '2026-05-22',
    description: 'Launch your business dreams into reality! Workshops on business planning, funding strategies, marketing, and scaling.',
    eventLink: '/financial-literacy',
    registrationLink: '/contact',
    time: '9:00 AM - 5:00 PM',
    location: 'CAWAP Business Center',
    cost: 'FREE',
    whoShouldAttend: [
      'Aspiring entrepreneurs',
      'Small business owners',
      'Startup founders',
      'Anyone with business ideas'
    ],
    whatYouWillLearn: [
      'Business planning fundamentals',
      'Funding and investment strategies',
      'Marketing and branding',
      'Scaling your business',
      'Networking and partnerships'
    ],
    contactEmail: 'cawap2025@gmail.com',
    contactPhone: '+1 (647) 581-5901'
  },
  {
    id: 'family-fun-day-2026',
    title: 'Annual Family Fun Day Festival',
    imageUrl: 'https://readdy.ai/api/search-image?query=joyful%20family%20fun%20day%20festival%20poster%20design%20with%20diverse%20families%20enjoying%20outdoor%20activities%20games%20and%20entertainment%20together%2C%20bright%20cheerful%20theme%20with%20rainbow%20colors%20and%20sunshine%2C%20community%20celebration%20flyer%20showing%20children%20playing%20face%20painting%20bouncy%20castles%20food%20vendors%20and%20happy%20families%2C%20festive%20energetic%20atmosphere&width=800&height=1200&seq=family-fun-2026&orientation=portrait',
    date: '2026-08-20',
    description: 'The biggest family celebration of the year! Carnival games, live entertainment, food trucks, bouncy castles, and more.',
    eventLink: '/cultural-events',
    registrationLink: '/contact',
    time: '11:00 AM - 7:00 PM',
    location: 'CAWAP Community Park',
    cost: 'FREE Admission',
    whoShouldAttend: [
      'Families with children of all ages',
      'Community members seeking fun',
      'Anyone wanting to connect with neighbors',
      'Kids and adults alike'
    ],
    contactEmail: 'cawap2025@gmail.com',
    contactPhone: '+1 (647) 581-5901'
  },
  {
    id: 'holiday-gift-drive-2026',
    title: 'Holiday Gift Drive & Toy Distribution',
    imageUrl: 'https://readdy.ai/api/search-image?query=heartwarming%20holiday%20gift%20drive%20poster%20design%20with%20diverse%20children%20receiving%20wrapped%20presents%20and%20toys%20from%20volunteers%2C%20festive%20theme%20with%20red%20green%20gold%20and%20white%20colors%2C%20christmas%20charity%20event%20flyer%20showing%20gift%20boxes%20decorated%20trees%20and%20joyful%20families%2C%20warm%20generous%20holiday%20spirit%20atmosphere&width=800&height=1200&seq=holiday-gifts-2026&orientation=portrait',
    date: '2026-12-15',
    description: 'Spread holiday joy! Toys, clothing, and essential items for children and families in need.',
    eventLink: '/youth-leadership',
    registrationLink: '/contact',
    time: '10:00 AM - 4:00 PM',
    location: 'CAWAP Community Center',
    cost: 'FREE',
    whoShouldAttend: [
      'Families needing holiday assistance',
      'Children wanting holiday gifts',
      'Volunteers spreading joy',
      'Donors contributing gifts'
    ],
    contactEmail: 'cawap2025@gmail.com',
    contactPhone: '+1 (647) 581-5901'
  },
  
  // ========================================
  // PAST EVENTS
  // ========================================
  {
    id: 'summer-camp-2024',
    title: 'Children Summer Camp 2024',
    imageUrl: 'https://readdy.ai/api/search-image?query=nostalgic%20summer%20camp%20memories%20poster%20design%20showing%20diverse%20children%20enjoying%20outdoor%20activities%20group%20photo%20style%20with%20summer%20sunshine%20nature%20activities%20swimming%20arts%20crafts%20campfire%20warm%20friendly%20atmosphere%20professional%20event%20flyer%20design&width=800&height=1200&seq=summer-camp-2024-flyer&orientation=portrait',
    date: '2024-07-20',
    description: 'An amazing summer camp where children experienced outdoor adventures, made lasting friendships, and created unforgettable memories.',
    eventLink: '/children-summer-camp'
  },
  {
    id: 'cawap-javascript-2021',
    title: 'CAWAP JavaScript For Black Women',
    imageUrl: 'https://i.imgur.com/4QoPyPs.jpeg',
    date: '2021-08-02',
    description: 'A groundbreaking program empowering Afro Black women with JavaScript programming skills and tech career opportunities.',
    eventLink: '/javascript-program'
  },
  {
    id: 'sankofa-awards-gala-2024',
    title: 'Sankofa Royale Awards Gala 2024',
    imageUrl: 'https://readdy.ai/api/search-image?query=elegant%20awards%20gala%20poster%20design%20with%20gold%20and%20black%20theme%2C%20sophisticated%20formal%20event%20flyer%20featuring%20trophy%20and%20celebration%20elements%2C%20luxury%20ballroom%20atmosphere%20with%20dressed%20up%20attendees%2C%20professional%20photography%20showing%20prestige%20and%20achievement&width=800&height=1200&seq=sankofa-awards-2024&orientation=portrait',
    date: '2024-11-15',
    description: 'A spectacular evening celebrating excellence and achievement in our community!',
    eventLink: '/sankofa-royale-awards'
  },
  {
    id: 'cultural-festival-2024',
    title: 'African Heritage Cultural Festival',
    imageUrl: 'https://readdy.ai/api/search-image?query=vibrant%20african%20cultural%20festival%20poster%20design%20with%20traditional%20dancers%20in%20colorful%20costumes%2C%20energetic%20celebration%20with%20drums%20and%20cultural%20elements%2C%20bright%20festive%20colors%20red%20yellow%20green%2C%20professional%20event%20flyer%20showing%20african%20heritage%20and%20traditions&width=800&height=1200&seq=cultural-fest-2024&orientation=portrait',
    date: '2024-09-28',
    description: 'A magnificent celebration of African culture, heritage, and traditions!',
    eventLink: '/cultural-events'
  },
];

// Helper functions - automatically filter by date
export const getUpcomingFlyers = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  return flyers
    .filter(f => new Date(f.date) >= today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
};

export const getPastFlyers = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  return flyers
    .filter(f => new Date(f.date) < today)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getAllFlyers = () => flyers;
