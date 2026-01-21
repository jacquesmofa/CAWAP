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
