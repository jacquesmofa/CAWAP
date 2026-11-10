import ProgramPage from '../../components/feature/ProgramPage';
import content from '../../content/programs/project-and-evaluation.json';

// Text and images live in src/content/programs/project-and-evaluation.json (editable in the website editors).
const ProjectEvaluationPage = () => <ProgramPage content={content} />;

export default ProjectEvaluationPage;
