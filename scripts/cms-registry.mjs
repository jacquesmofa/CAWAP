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
  // ---- Site settings (every page) ----
  { group: 'settings', name: 'site', label: 'Contact details & social links', file: 'src/content/site.json' },
  { group: 'settings', name: 'navigation', label: 'Main menu', file: 'src/content/navigation.json' },
  { group: 'settings', name: 'footer', label: 'Footer', file: 'src/content/footer.json' },
  { group: 'settings', name: 'donation-banner', label: 'Donation banner (bottom of pages)', file: 'src/content/donation-banner.json' },

  {
    group: 'settings',
    name: 'media',
    label: 'Photo gallery & media folders',
    file: 'public/media/site-assets.json',
    description: 'Gallery categories. Upload new photos under "Added photos"; older photos are numbered files on the server.',
  },
  {
    group: 'settings',
    name: 'seo',
    label: 'Google: page titles & descriptions',
    file: 'src/content/seo.json',
    description: 'What Google and social media show for each page. Titles under 65 characters, descriptions under 160.',
  },
  { group: 'settings', name: 'shared', label: 'Shared sections (search, impact map, gallery viewer)', file: 'src/content/shared.json' },

  // ---- Pages ----
  { group: 'pages', name: 'page-home', label: 'Home page', file: 'src/content/pages/home.json' },
  { group: 'pages', name: 'page-about', label: 'About', file: 'src/content/pages/about.json' },
  { group: 'pages', name: 'page-programs', label: 'Programs (overview page)', file: 'src/content/pages/programs.json' },
  { group: 'pages', name: 'page-food-bank', label: 'Food Bank', file: 'src/content/pages/food-bank.json' },
  { group: 'programs', name: 'page-heart-wise-seniors', label: 'Program: Heart Wise Seniors', file: 'src/content/pages/heart-wise-seniors.json' },
  { group: 'programs', name: 'page-mental-health', label: 'Program: Disability Inclusion - Mental Health', file: 'src/content/pages/mental-health.json' },
  { group: 'programs', name: 'page-javascript-program', label: 'Program: Javascript for Afro Black Women', file: 'src/content/pages/javascript-program.json' },
  { group: 'pages', name: 'page-trainings', label: 'Trainings page (headings and text)', file: 'src/content/pages/trainings.json' },
  { group: 'pages', name: 'page-upcoming-events', label: 'Upcoming Events page (headings and text)', file: 'src/content/pages/upcoming-events.json' },
  { group: 'pages', name: 'page-past-events', label: 'Past Events page (headings and text)', file: 'src/content/pages/past-events.json' },
  { group: 'pages', name: 'page-christmas-event', label: 'Christmas Event', file: 'src/content/pages/christmas-event.json' },
  { group: 'pages', name: 'page-gallery', label: 'Gallery page', file: 'src/content/pages/gallery.json' },
  { group: 'pages', name: 'page-contact', label: 'Contact page', file: 'src/content/pages/contact.json' },
  { group: 'pages', name: 'page-donate', label: 'Donate page', file: 'src/content/pages/donate.json' },
  { group: 'pages', name: 'page-not-found', label: 'Page not found (404)', file: 'src/content/pages/not-found.json' },

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
  serviceAreas: { label: 'Service areas (impact map)' },
  impact: { label: 'People helped' },
  color: { label: 'Colour', description: 'Hex colour, e.g. #3c1053' },
  lat: { label: 'Latitude' },
  lng: { label: 'Longitude' },
  siteUrl: { label: 'Website address', description: 'Do not change unless the domain changes.' },
  pages: { label: 'Pages' },
  addedPhotos: { label: 'Added photos (upload here)', description: 'Photos uploaded here appear first in this category. Keep each under 2 MB.', itemName: 'photo' },
  photo: { label: 'Photo', type: 'image' },
  count: { label: 'How many numbered files are on the server', description: 'Files named 1.png, 2.png ... in the folder below (uploaded by FTP).' },
  path: { label: 'Server folder (inside /media)' },
  ext: { label: 'File type of the numbered files', description: 'e.g. png, jpg, mp4, pdf' },
  baseUrl: { label: 'Media address', description: 'Do not change unless the website address changes.' },
  slides: { label: 'Slides' },
  brandName: { label: 'Organization name' },
  tagline: { label: 'Tagline (under the name)' },
  phoneDisplay: { label: 'Phone (as shown)', description: 'e.g. 647-581-5901' },
  phoneLink: { label: 'Phone (for tap-to-call)', description: 'International format without spaces, e.g. +16475815901' },
  addressLine1: { label: 'Address line 1' },
  addressLine2: { label: 'Address line 2' },
  socials: { label: 'Social media links' },
  url: { label: 'Link (full https:// address)' },
  label: { label: 'Text' },
  link: { label: 'Link', description: 'A page like /about or a full https:// address.' },
  links: { label: 'Menu links' },
  programLinks: { label: 'Program links' },
  eventLinks: { label: 'Event links' },
  linksAfterPrograms: { label: 'Links after Programs' },
  quickLinks: { label: 'Quick links' },
  donateButton: { label: 'Donate button' },
  buttonLabel: { label: 'Button text' },
  buttonLink: { label: 'Button link' },
  backgroundImage: { label: 'Background photo', description: 'Wide landscape photo, under 2 MB.' },
  copyright: { label: 'Copyright line', description: 'The year is added automatically in front.' },
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
  name: { label: 'Name' },
  icon: { label: 'Icon', description: 'Icon name, e.g. fas fa-users (fontawesome.com) or ri-heart-pulse-line (remixicon.com).' },
  heading: { label: 'Heading' },
  paragraphs: { label: 'Paragraphs', itemName: 'paragraph' },
  paragraph: { label: 'Paragraph', type: 'text' },
  highlightsTitle: { label: 'Highlights heading' },
  highlights: { label: 'Highlights (bullet points)' },
  ctaLabel: { label: 'Button text' },
  ctaLink: { label: 'Button link', description: 'A page like /contact, a full https:// link, or tel:+16475815901' },
};
