import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet, Text, useColorScheme, View, } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <View style={[
        styles.test
      ]}>
        <Text style={[
          styles.bonjour
        ]}>
          Hello
        </Text>
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  bonjour: {
    fontSize: 20,
    color: "blue"
  },
  test : {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100%"
  }
})