import { initialize as initLocalization } from './src/localization';
import { Navigation } from './src/navigation/Navigation';
import { useStore } from './src/store';

export default function App() {
  const language = useStore(state => state.appConfig.language);

  initLocalization(language);

  return <Navigation />;
}
