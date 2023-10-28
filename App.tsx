import { useStore } from '@hooks';
import { initialize as initLocalization } from '@localization';
import { Navigation } from '@navigation';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { Stack, TamaguiProvider } from 'tamagui';
import tamaguiConfig from './tamagui.config';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  const { theme, language } = useStore(state => state.appConfig);

  initLocalization(language);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme={theme}>
      <Stack onLayout={onLayoutRootView} flex={1}>
        <Navigation />
      </Stack>
    </TamaguiProvider>
  );
}
