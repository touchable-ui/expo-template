import { initialize as initLocalization } from '@localization';
import { Navigation } from '@navigation';
import { useStore } from '@hooks';

export default function App() {
  const language = useStore(state => state.appConfig.language);

  initLocalization(language);

  return <Navigation />;
}
