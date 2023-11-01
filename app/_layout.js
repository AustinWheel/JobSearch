import { Stack } from 'expo-router';
import { useCallback } from 'react';
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
    const [fontsLoaded] = useFonts({
        "Arial": require('../assets/fonts/DMSans-Bold.ttf'),
        "Arial": require('../assets/fonts/DMSans-Medium.ttf'),
        "Arial": require('../assets/fonts/DMSans-Regular.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if(fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded])

    if (!fontsLoaded) return null;

    return <Stack onLayout={onLayoutRootView} />;
}