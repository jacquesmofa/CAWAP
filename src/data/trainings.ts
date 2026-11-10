// Trainings. The data lives in src/content/trainings.json so it can be
// edited in the website editors (Pages CMS or Sveltia CMS at /admin).
import trainingsContent from '../content/trainings.json';

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

export const trainings: Training[] = trainingsContent.items;


export const getTrainings = (): Training[] => {
  return trainings;
};

export const getTrainingById = (id: string): Training | undefined => {
  return trainings.find(training => training.id === id);
};

export const getTrainingsByCategory = (category: string): Training[] => {
  return trainings.filter(training => training.category === category);
};
