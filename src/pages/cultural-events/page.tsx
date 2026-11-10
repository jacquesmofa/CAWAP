import ProgramPage from '../../components/feature/ProgramPage';
import content from '../../content/programs/cultural-events.json';

// Text and images live in src/content/programs/cultural-events.json (editable in the website editors).
const CulturalEventsPage = () => <ProgramPage content={content} />;

export default CulturalEventsPage;
