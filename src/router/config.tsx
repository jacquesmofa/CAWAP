import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const ProgramsPage = lazy(() => import('../pages/programs/page'));
const GalleryPage = lazy(() => import('../pages/gallery/page'));
const ContactPage = lazy(() => import('../pages/contact/page'));
const DonatePage = lazy(() => import('../pages/donate/page'));
const EventsPage = lazy(() => import('../pages/events/page'));
const UpcomingEventsPage = lazy(() => import('../pages/upcoming-events/page'));
const ChristmasEventPage = lazy(() => import('../pages/christmas-event/page'));

// Program Pages
const YouthLeadershipPage = lazy(() => import('../pages/youth-leadership/page'));
const CapitalGGirlsPage = lazy(() => import('../pages/capital-g-girls/page'));
const HeartWiseSeniorsPage = lazy(() => import('../pages/heart-wise-seniors/page'));
const WomenEmpowermentPage = lazy(() => import('../pages/women-empowerment/page'));
const SankofaRoyaleAwardsPage = lazy(() => import('../pages/sankofa-royale-awards/page'));
const FoodPantryPage = lazy(() => import('../pages/food-pantry/page'));
const FinancialLiteracyPage = lazy(() => import('../pages/financial-literacy/page'));
const JavaScriptProgramPage = lazy(() => import('../pages/javascript-program/page'));
const ChildrenSummerCampPage = lazy(() => import('../pages/children-summer-camp/page'));
const MentalHealthPage = lazy(() => import('../pages/mental-health/page'));
const NewBreedWomenPage = lazy(() => import('../pages/new-breed-women-of-substance/page'));
const ProjectEvaluationPage = lazy(() => import('../pages/project-and-evaluation/page'));
const NewcomersSettlementPage = lazy(() => import('../pages/newcomers-settlement-program/page'));
const CulturalEventsPage = lazy(() => import('../pages/cultural-events/page'));

const NotFoundPage = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/programs',
    element: <ProgramsPage />,
  },
  {
    path: '/gallery',
    element: <GalleryPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/donate',
    element: <DonatePage />,
  },
  {
    path: '/events',
    element: <EventsPage />,
  },
  {
    path: '/upcoming-events',
    element: <UpcomingEventsPage />,
  },
  {
    path: '/christmas-event',
    element: <ChristmasEventPage />,
  },
  // Program Routes
  {
    path: '/youth-leadership',
    element: <YouthLeadershipPage />,
  },
  {
    path: '/capital-g-girls',
    element: <CapitalGGirlsPage />,
  },
  {
    path: '/heart-wise-seniors',
    element: <HeartWiseSeniorsPage />,
  },
  {
    path: '/women-empowerment',
    element: <WomenEmpowermentPage />,
  },
  {
    path: '/sankofa-royale-awards',
    element: <SankofaRoyaleAwardsPage />,
  },
  {
    path: '/food-pantry',
    element: <FoodPantryPage />,
  },
  {
    path: '/financial-literacy',
    element: <FinancialLiteracyPage />,
  },
  {
    path: '/javascript-program',
    element: <JavaScriptProgramPage />,
  },
  {
    path: '/children-summer-camp',
    element: <ChildrenSummerCampPage />,
  },
  {
    path: '/mental-health',
    element: <MentalHealthPage />,
  },
  {
    path: '/new-breed-women-of-substance',
    element: <NewBreedWomenPage />,
  },
  {
    path: '/project-and-evaluation',
    element: <ProjectEvaluationPage />,
  },
  {
    path: '/newcomers-settlement-program',
    element: <NewcomersSettlementPage />,
  },
  {
    path: '/cultural-events',
    element: <CulturalEventsPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default routes;
