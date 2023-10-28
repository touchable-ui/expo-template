import { useStore } from '@hooks';
import { initialize as initLocalization } from '@localization';
import { Navigation } from '@navigation';
import ProvidersTree from './src/ProvidersTree';

export default function App() {
  const language = useStore(state => state.appConfig.language);

  initLocalization(language);

  return (
    <ProvidersTree>
      <Navigation />
    </ProvidersTree>
  );
}
