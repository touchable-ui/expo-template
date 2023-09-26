import { initLocalization } from './src/localization';
import { Navigation } from './src/navigation/Navigation';
import { useStore } from './src/store';

export default function App() {
  const appConfig = useStore(state => state.appConfig);

  // Initialize localization
  initLocalization(appConfig.language);

  return <Navigation />;
}
