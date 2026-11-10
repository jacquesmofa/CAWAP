/**
 * Which content files appear in the website editors, under which heading,
 * and friendly labels/help text for fields. Field TYPES are worked out
 * automatically by scripts/cms-config.mjs from the JSON itself.
 *
 * Adding a page: create src/content/<...>.json, add an entry below,
 * run "npm run cms:config", commit both generated configs.
 */

/** Sections in Sveltia CMS (Pages CMS shows one flat list in the same order). */
export const GROUPS = [
  { name: 'settings', label: 'Site settings' },
  { name: 'events', label: 'Events & trainings' },
  { name: 'pages', label: 'Pages' },
  { name: 'programs', label: 'Program pages' },
];

const program = (name, label) => ({
  group: 'programs',
  name: `program-${name}`,
  label: `Program: ${label}`,
  file: `src/content/programs/${name}.json`,
});

export const ENTRIES = [
  // ---- Events & trainings ----
  {
    group: 'events',
    name: 'events',
    label: 'Events & flyers',
    file: 'src/content/events.json',
    description: 'Future dates appear under Upcoming Events automatically; past dates move to Past Events.',
    fields: { items: { label: 'Events' } },
  },
  {
    group: 'events',
    name: 'trainings',
    label: 'Trainings',
    file: 'src/content/trainings.json',
    fields: { items: { label: 'Trainings' } },
  },

  // ---- Program pages (shared layout: src/components/feature/ProgramPage.tsx) ----
  program('youth-leadership', 'Youth Leadership'),
  program('capital-g-girls', 'Capital G-Girls'),
  program('women-empowerment', 'Women Empowerment'),
  program('sankofa-royale-awards', 'Sankofa Royale Awards'),
  program('financial-literacy', 'Financial Literacy'),
  program('children-summer-camp', 'Children Summer Camp'),
  program('new-breed-women-of-substance', 'New Breed Women of Substance'),
  program('project-and-evaluation', 'Project & Evaluation'),
  program('newcomers-settlement-program', 'Newcomers Settlement'),
  program('cultural-events', 'Cultural Events'),
];

/** Labels and help text by field name, used wherever that field name appears. */
export const FIELD_HINTS = {
  id: { label: 'Short ID', description: 'Lowercase words joined by dashes, unique, e.g. summer-camp-2027. Never change it after publishing.' },
  title: { label: 'Title' },
  imageUrl: { label: 'Flyer image', description: 'Portrait flyer (JPG or PNG), under 2 MB.' },
  image: { label: 'Image', description: 'JPG or PNG, under 2 MB.' },
  bannerImage: { label: 'Banner image (optional)' },
  heroImage: { label: 'Top banner photo', description: 'Wide landscape photo, under 2 MB.' },
  heroTitle: { label: 'Title on the banner (optional)' },
  date: { label: 'Date' },
  time: { label: 'Time', description: 'e.g. 11:00 AM - 2:00 PM' },
  cost: { label: 'Cost', description: 'e.g. FREE (Registration Required)' },
  registrationLink: { label: 'Registration link', description: 'A Google Form or other full https:// link, or a page like /contact. Leave empty if none.' },
  eventLink: { label: 'Related page on this site', description: 'Optional, e.g. /contact or /cultural-events' },
  hosts: { label: 'Hosts / speakers' },
  whoShouldAttend: { label: 'Who should attend' },
  whatYouWillLearn: { label: 'What you will learn' },
  bonuses: { label: 'Bonuses for attendees' },
  shortDescription: { label: 'Short description (cards)' },
  icon: { label: 'Icon', description: 'Icon name, e.g. fas fa-users (fontawesome.com) or ri-heart-pulse-line (remixicon.com).' },
  heading: { label: 'Heading' },
  paragraphs: { label: 'Paragraphs', itemName: 'paragraph' },
  paragraph: { label: 'Paragraph', type: 'text' },
  highlightsTitle: { label: 'Highlights heading' },
  highlights: { label: 'Highlights (bullet points)' },
  ctaLabel: { label: 'Button text' },
  ctaLink: { label: 'Button link', description: 'A page like /contact, a full https:// link, or tel:+16475815901' },
};
