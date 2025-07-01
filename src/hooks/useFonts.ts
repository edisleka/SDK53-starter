import { useFonts as useExpoFonts } from 'expo-font'

export function useFonts() {
  const [fontsLoaded] = useExpoFonts({
    'Poppins-Regular': require('@assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('@assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Medium': require('@assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Light': require('@assets/fonts/Poppins-Light.ttf'),
    'Poppins-Thin': require('@assets/fonts/Poppins-Thin.ttf'),
    'Poppins-Italic': require('@assets/fonts/Poppins-Italic.ttf'),
  })
  return fontsLoaded
}
