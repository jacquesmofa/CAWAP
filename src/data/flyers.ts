// Events / flyers. The data lives in src/content/events.json so it can be
// edited in the website editors (Pages CMS or Sveltia CMS at /admin).
// The site decides automatically: a future date shows under Upcoming Events,
// a past date under Past Events.
import eventsContent from '../content/events.json';

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

export const flyers: Flyer[] = eventsContent.items;

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
