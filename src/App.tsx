import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './router';
import { MediaProvider } from './context/MediaContext';
import CustomCursor from './components/effects/CustomCursor';
import InteractiveBackground from './components/effects/InteractiveBackground';
import ScrollProgressBar from './components/effects/ScrollProgressBar';

function App() {
  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <MediaProvider>
        <ScrollProgressBar />
        <CustomCursor />
        <InteractiveBackground />
        <div className="relative z-10">
          <AppRoutes />
        </div>
      </MediaProvider>
    </BrowserRouter>
  );
}

export default App;
