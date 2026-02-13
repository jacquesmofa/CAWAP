export interface Training {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: string;
  image: string;
  bannerImage?: string;
  category: string;
  duration?: string;
  schedule?: string;
  instructor?: string;
  level?: string;
  benefits?: string[];
  requirements?: string[];
  contactInfo?: string;
  registrationLink?: string;
}

export const trainings: Training[] = [
  {
    id: 'cpr-first-aid',
    title: 'CPR & First Aid Training',
    description: 'Learn life-saving skills with our comprehensive CPR and First Aid certification program. This hands-on training equips you with the knowledge and confidence to respond effectively in emergency situations. Our certified instructors provide practical experience in cardiopulmonary resuscitation, automated external defibrillator (AED) use, choking relief, wound care, and emergency response protocols.',
    shortDescription: 'Learn life-saving CPR and First Aid skills with certified instructors',
    icon: 'ri-heart-pulse-line',
    image: 'https://i.imgur.com/wss9y2I.jpeg',
    bannerImage: 'https://i.imgur.com/FBuNAFy.jpeg',
    category: 'Health & Safety',
    duration: '8 hours (1 day)',
    schedule: 'Weekends available',
    instructor: 'Certified Healthcare Professionals',
    level: 'Beginner to Advanced',
    benefits: [
      'Nationally recognized certification',
      'Hands-on practice with professional equipment',
      'Learn to respond to cardiac emergencies',
      'Master choking relief techniques',
      'Understand wound care and bleeding control',
      'Gain confidence in emergency situations'
    ],
    requirements: [
      'No prior experience needed',
      'Minimum age: 16 years',
      'Comfortable with hands-on practice'
    ],
    contactInfo: 'For registration and inquiries, please contact us',
    registrationLink: '/contact'
  },
  {
    id: 'music-lessons',
    title: 'Music Lessons',
    description: 'Discover your musical talent with our comprehensive music education program. Whether you\'re a complete beginner or looking to refine your skills, our experienced instructors offer personalized lessons in various instruments and vocal training. Learn music theory, technique, and performance skills in a supportive and inspiring environment.',
    shortDescription: 'Personalized music instruction for all ages and skill levels',
    icon: 'ri-music-line',
    image: 'https://i.imgur.com/Yfd5io4.jpeg',
    bannerImage: 'https://i.imgur.com/fUViL8c.jpeg',
    category: 'Arts & Culture',
    duration: 'Flexible scheduling',
    schedule: 'Weekly sessions available',
    instructor: 'Professional Musicians',
    level: 'All levels welcome',
    benefits: [
      'One-on-one personalized instruction',
      'Learn multiple instruments (piano, guitar, drums, vocals)',
      'Music theory and sight-reading',
      'Performance opportunities',
      'Flexible scheduling options',
      'Build confidence and creativity'
    ],
    requirements: [
      'All ages welcome (children and adults)',
      'No prior experience necessary',
      'Instrument rental options available'
    ],
    contactInfo: 'Contact us to schedule your first lesson',
    registrationLink: '/contact'
  },
  {
    id: 'ai-training',
    title: 'Artificial Intelligence (AI) Training',
    description: 'Step into the future with our cutting-edge Artificial Intelligence training program. Learn the fundamentals of AI, machine learning, and practical applications that are transforming industries worldwide. This comprehensive course covers AI concepts, tools, and real-world implementations, preparing you for the digital economy.',
    shortDescription: 'Master AI fundamentals and practical applications for the digital age',
    icon: 'ri-robot-line',
    image: 'https://i.imgur.com/mIChYbq.jpeg',
    bannerImage: 'https://i.imgur.com/fUViL8c.jpeg',
    category: 'Technology',
    duration: '6-8 weeks',
    schedule: 'Evening and weekend classes',
    instructor: 'Tech Industry Professionals',
    level: 'Beginner to Intermediate',
    benefits: [
      'Understand AI and machine learning basics',
      'Hands-on experience with AI tools',
      'Learn practical AI applications',
      'Career advancement opportunities',
      'Industry-relevant skills',
      'Certificate of completion'
    ],
    requirements: [
      'Basic computer literacy',
      'Interest in technology',
      'Laptop required for hands-on sessions'
    ],
    contactInfo: 'Enroll now to secure your spot',
    registrationLink: '/contact'
  },
  {
    id: 'cooking-classes',
    title: 'Cooking Classes',
    description: 'Unleash your culinary creativity with our diverse cooking classes. From traditional African cuisine to international dishes, learn essential cooking techniques, meal planning, and nutrition. Our experienced chefs guide you through hands-on sessions where you\'ll prepare delicious meals while learning kitchen safety, food preparation, and presentation skills.',
    shortDescription: 'Learn culinary skills from traditional to contemporary cuisine',
    icon: 'ri-restaurant-line',
    image: 'https://i.imgur.com/Ic7CRqu.jpeg',
    bannerImage: 'https://i.imgur.com/FBuNAFy.jpeg',
    category: 'Life Skills',
    duration: '4-6 weeks',
    schedule: 'Weekly sessions',
    instructor: 'Professional Chefs',
    level: 'All skill levels',
    benefits: [
      'Learn diverse cooking techniques',
      'Traditional and contemporary recipes',
      'Nutrition and meal planning',
      'Kitchen safety and hygiene',
      'Hands-on cooking experience',
      'Take home your creations'
    ],
    requirements: [
      'All ages welcome',
      'No cooking experience needed',
      'Apron and ingredients provided'
    ],
    contactInfo: 'Join our next cooking class session',
    registrationLink: '/contact'
  }
];

export const getTrainings = (): Training[] => {
  return trainings;
};

export const getTrainingById = (id: string): Training | undefined => {
  return trainings.find(training => training.id === id);
};

export const getTrainingsByCategory = (category: string): Training[] => {
  return trainings.filter(training => training.category === category);
};
